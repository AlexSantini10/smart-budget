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

module.exports = { 
    user_exists,
    get_user_by_email
};