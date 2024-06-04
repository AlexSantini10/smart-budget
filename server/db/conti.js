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
    let pool = await connect();

    let result = await pool.request()
        .input('conto_id', conto_id)
        .query('DELETE FROM conti WHERE ID = @conto_id');

    pool.close();
    return result;
}


module.exports = {
    get_conti,
    get_conto,
    create_conto,
    edit_conto,
    delete_conto
}