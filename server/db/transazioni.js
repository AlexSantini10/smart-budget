const { connect } = require('./connect');

// Transazione ha queste colonne: ID, importo, nome, data, ora, id_utente, tipo_movimento, id_categoria, id_conto_1, id_conto_2
// id_conto_2 è null se il movimento è entrata o uscita (tipo_movimento = 1 o 2)
// id_conto_2 è non-null se il movimento è di trasferimento (tipo_movimento = 3)

const get_transazioni = async (user_id) => {
    let pool = await connect();

    let result = await pool.request()
        .input('user_id', user_id)
        .query('SELECT * FROM transazioni WHERE id_utente = @user_id');

    pool.close();
    return result.recordset;
}

const get_transazione = async (transazione_id) => {
    let pool = await connect();

    let result = await pool.request()
        .input('transazione_id', transazione_id)
        .query('SELECT * FROM transazioni WHERE ID = @transazione_id');

    pool.close();
    return result.recordset[0];
}

const create_transazione = async (user_id, importo, nome, data, ora, tipo_movimento, id_categoria, id_conto_1, id_conto_2) => {
    let pool = await connect();

    let result = await pool.request()
        .input('user_id', user_id)
        .input('importo', importo)
        .input('nome', nome)
        .input('data', data)
        .input('ora', ora)
        .input('tipo_movimento', tipo_movimento)
        .input('id_categoria', id_categoria)
        .input('id_conto_1', id_conto_1)
        .input('id_conto_2', id_conto_2)
        .query(`
            INSERT INTO transazioni (id_utente, importo, nome, data, ora, tipo_movimento, id_categoria, id_conto_1, id_conto_2)
            VALUES (@user_id, @importo, @nome, @data, @ora, @tipo_movimento, @id_categoria, @id_conto_1, @id_conto_2)
        `);

    pool.close();
    return result
}

const edit_transazione = async (transazione_id, data_to_update) => {
    const transazione = await get_transazione(transazione_id);
    if (!transazione) {
        throw new Error('Transazione not found');
    }

    const { importo, nome, data, ora, tipo_movimento, id_categoria, id_conto_1, id_conto_2 } = data_to_update;

    let pool = await connect();

    let result = await pool.request()
        .input('transazione_id', transazione_id)
        .input('importo', importo ? importo : transazione.importo)
        .input('nome', nome ? nome : transazione.nome)
        .input('data', data ? data : transazione.data)
        .input('ora', ora ? ora : transazione.ora)
        .input('tipo_movimento', tipo_movimento ? tipo_movimento : transazione.tipo_movimento)
        .input('id_categoria', id_categoria)
        .input('id_conto_1', id_conto_1)
        .input('id_conto_2', id_conto_2)
        .query(`
            UPDATE transazioni
            SET importo = @importo, nome = @nome, data = @data, ora = @ora, tipo_movimento = @tipo_movimento, id_categoria = @id_categoria, id_conto_1 = @id_conto_1, id_conto_2 = @id_conto_2
            WHERE ID = @transazione_id
        `);

    pool.close();
    
    return result;
}

const delete_transazione = async (transazione_id) => {
    let pool = await connect();

    let result = await pool.request()
        .input('transazione_id', transazione_id)
        .query('DELETE FROM transazioni WHERE ID = @transazione_id');

    pool.close();
    return result;
}

module.exports = {
    get_transazioni,
    get_transazione,
    create_transazione,
    edit_transazione,
    delete_transazione
}