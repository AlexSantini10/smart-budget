const { connect } = require('./connect');
const { generate_password_sha2_256 } = require('./utils');

const user_exists = async (email) => {
    let pool = await connect();

    let result = await pool.request()
        .input('email', email)
        .query('SELECT * FROM utenti WHERE email = @email');
    
    pool.close();
    return result.recordset.length > 0;
}


const get_user_by_email = async (email) => {
    let pool = await connect();

    let result = await pool.request()
        .input('email', email)
        .query('SELECT ID, nome, cognome, email FROM utenti WHERE email = @email');
    
    pool.close();
    return result.recordset[0];
}

const create_user = async (nome, cognome, email, password) => {
    let pool = await connect();

    let result = await pool.request()
        .input('nome', nome)
        .input('cognome', cognome)
        .input('email', email)
        .input('password', password)
        .query(`
            INSERT INTO utenti (nome, cognome, email, password) 
            VALUES (@nome, @cognome, @email, CONVERT(NVARCHAR(100), HASHBYTES('SHA2_256', @password), 2))
        `);
    
    pool.close();
    return result;
}


const edit_user = async (email, data_to_update) => {
    
    const user = await get_user_by_email(email);
    if (!user) {
        throw new Error('User not found');
    }

    console.log('user', user);
    console.log('data_to_update', data_to_update);
    
    const {nome, cognome} = data_to_update;
    
    let pool = await connect();

    let result = await pool.request()
        .input('email', email)
        .input('nome', nome ? nome : user.nome)
        .input('cognome', cognome ? cognome : user.cognome)
        .query(`
            UPDATE utenti
            SET 
                ${nome ? 'nome = @nome' : ''}
                ${cognome ? 'cognome = @cognome' : ''}
            WHERE email = @email
        `);
    
    await pool.close();
    return result;
}


const authenticate_user = async (email, password) => {
    let pool = await connect();

    let hashed_password = await generate_password_sha2_256(password);

    let result = await pool.request()
        .input('email', email)
        .input('password', hashed_password)
        .query(`
            SELECT ID, nome, cognome, email 
            FROM utenti 
            WHERE email = @email
            AND password = @password
        `);
    
    pool.close();
    return result.recordset.length > 0;
}

module.exports = { 
    user_exists,
    get_user_by_email,
    create_user,
    authenticate_user,
    edit_user
};