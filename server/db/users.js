const { connect } = require('./connect');

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

const create_user = async (name, lastName, email, password) => {
    let pool = await connect();

    let result = await pool.request()
        .input('name', name)
        .input('lastName', lastName)
        .input('email', email)
        .input('password', password)
        .query(`
            INSERT INTO utenti (nome, cognome, email, password) 
            VALUES (@name, @lastName, @email, CONVERT(NVARCHAR(100), HASHBYTES('SHA2_256', @password), 2))
        `);
    
    pool.close();
    return result;
}

module.exports = { 
    user_exists,
    get_user_by_email,
    create_user
};