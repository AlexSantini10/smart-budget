const { connect } = require('./connect');

// Categorie ha queste colonne: ID, nome, id_utente

const get_categorie = async (user_id) => {
    let pool = await connect();

    let result = await pool.request()
        .input('user_id', user_id)
        .query('SELECT * FROM categorie WHERE id_utente = @user_id');

    pool.close();
    return result.recordset;
}

const get_categoria = async (categoria_id) => {
    let pool = await connect();

    let result = await pool.request()
        .input('categoria_id', categoria_id)
        .query('SELECT * FROM categorie WHERE ID = @categoria_id');

    pool.close();
    return result.recordset[0];
}

const create_categoria = async (user_id, nome) => {
    let pool = await connect();

    let result = await pool.request()
        .input('user_id', user_id)
        .input('nome', nome)
        .query(`
            INSERT INTO categorie (id_utente, nome)
            VALUES (@user_id, @nome)
        `);

    pool.close();
    return result;
}

const edit_categoria = async (categoria_id, data_to_update) => {
    const categoria = await get_categoria(categoria_id);
    if (!categoria) {
        throw new Error('Categoria not found');
    }

    const { nome } = data_to_update;

    let pool = await connect();

    let result = await pool.request()
        .input('categoria_id', categoria_id)
        .input('nome', nome ? nome : categoria.nome)
        .query(`
            UPDATE categorie
            SET nome = @nome
            WHERE ID = @categoria_id
        `);

    pool.close();
    return result;
}

const delete_categoria = async (categoria_id) => {
    const categoria = await get_categoria(categoria_id);

    if (!categoria) {
        throw new Error('Categoria not found');
    }

    let pool = await connect();
    let result = await pool.request()
        .input('categoria_id', categoria_id)
        .query('DELETE FROM categorie WHERE ID = @categoria_id');

    await pool.close();
    return result;
}

module.exports = {
    get_categorie,
    get_categoria,
    create_categoria,
    edit_categoria,
    delete_categoria
}