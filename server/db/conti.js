const { connect } = require('./connect');

// Conto ha queste colonne: ID, nome, saldo, valuta, inclusione_statistiche, id_utente

const get_conti = async (user_id) => {
    let pool = await connect();

    let result = await pool.request()
        .input('user_id', user_id)
        .query('SELECT * FROM conti WHERE id_utente = @user_id');

    pool.close();
    return result.recordset;
}

const get_conto = async (conto_id) => {
    let pool = await connect();

    let result = await pool.request()
        .input('conto_id', conto_id)
        .query('SELECT * FROM conti WHERE ID = @conto_id');

    pool.close();
    return result.recordset[0];
}

const create_conto = async (user_id, nome, saldo, valuta, inclusione_statistiche) => {
    let pool = await connect();

    let result = await pool.request()
        .input('user_id', user_id)
        .input('nome', nome)
        .input('saldo', saldo)
        .input('valuta', valuta)
        .input('inclusione_statistiche', inclusione_statistiche)
        .query(`
            INSERT INTO conti (id_utente, nome, saldo, valuta, inclusione_statistiche)
            VALUES (@user_id, @nome, @saldo, @valuta, @inclusione_statistiche)
        `);

    pool.close();
    return result;
}

const edit_conto = async (conto_id, data_to_update) => {
    const conto = await get_conto(conto_id);
    if (!conto) {
        throw new Error('Conto not found');
    }

    const { nome, saldo, valuta, inclusione_statistiche } = data_to_update;

    let pool = await connect();

    let result = await pool.request()
        .input('conto_id', conto_id)
        .input('nome', nome ? nome : conto.nome)
        .input('saldo', saldo!=null ? saldo : conto.saldo)
        .input('valuta', valuta ? valuta : conto.valuta)
        .input('inclusione_statistiche', inclusione_statistiche!=null ? inclusione_statistiche : conto.inclusione_statistiche)
        .query(`
            UPDATE conti
            SET nome = @nome, saldo = @saldo, valuta = @valuta, inclusione_statistiche = @inclusione_statistiche
            WHERE ID = @conto_id
        `);

    pool.close();
    return result;
}

const delete_conto = async (conto_id) => {
    let conto = await get_conto(conto_id);
    if (!conto) {
        throw new Error('Conto not found');
    }

    let trans_pool = await connect();
    let trans_result = await trans_pool.request()
        .input('conto_id', conto_id)
        .query('DELETE FROM transazioni WHERE id_conto_1 = @conto_id OR id_conto_2 = @conto_id');
    
    trans_pool.close();

    let pool = await connect();

    let result = await pool.request()
        .input('conto_id', conto_id)
        .query('DELETE FROM conti WHERE ID = @conto_id');

    pool.close();
    return result;
}

const get_saldo = async (conto_id) => {
    let pool = await connect();

    let result = await pool.request()
        .input('conto_id', conto_id)
        .query('SELECT saldo FROM conti WHERE ID = @conto_id');

    pool.close();
    return result.recordset[0].saldo;
}

const get_saldo_totale = async (user_id) => {
    let pool = await connect();

    let result = await pool.request()
        .input('user_id', user_id)
        .query(`
            SELECT SUM(saldo) as saldo_totale
            FROM conti
            WHERE id_utente = @user_id
        `);
    
    pool.close();
    return result.recordset[0].saldo_totale;
}

const get_saldo_totale_passato = async (user_id, data) => {
    let pool = await connect();
    
    let somma_entrate = await pool.request()
    .input('user_id', user_id)
    .input('data', data)
    .query(`
        SELECT SUM(importo) as saldo_totale
        FROM transazioni
        WHERE id_utente = @user_id
        AND data <= @data
        AND tipo_movimento = 1
        `);
    
    pool.close();
    
    let pool2 = await connect();
    let somma_uscite = await pool2.request()
    .input('user_id', user_id)
    .input('data', data)
    .query(`
        SELECT SUM(importo) as saldo_totale
        FROM transazioni
        WHERE id_utente = @user_id
        AND data <= @data
        AND tipo_movimento = 2
        `);
    pool2.close();  
            
    let result = (somma_entrate.recordset[0].saldo_totale || 0) - (somma_uscite.recordset[0].saldo_totale || 0);
    
    return result;
}

const get_saldo_at_date = async (conto_id, data) => {
    let pool = await connect();

    // Somma di tutti i movimenti fino a quella data (1 = entrata, 2 = uscita, 3 = trasferimento)
    let somma_entrate = await pool.request()
        .input('conto_id', conto_id)
        .input('data', data)
        .query(`
            SELECT SUM(importo) as somma_entrate
            FROM transazioni
            WHERE id_conto_1 = @conto_id AND tipo_movimento = 1 AND data <= @data
        `);

    let somma_uscite = await pool.request()
        .input('conto_id', conto_id)
        .input('data', data)
        .query(`
            SELECT SUM(importo) as somma_uscite
            FROM transazioni
            WHERE id_conto_1 = @conto_id AND tipo_movimento = 2 AND data <= @data
        `);

    pool.close();
    return somma_entrate.recordset[0].somma_entrate - somma_uscite.recordset[0].somma_uscite;
}

module.exports = {
    get_conti,
    get_conto,
    create_conto,
    edit_conto,
    delete_conto,
    get_saldo,
    get_saldo_totale,
    get_saldo_at_date,
    get_saldo_totale_passato
}