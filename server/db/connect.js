const sql = require('mssql');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_HOST,
    database: process.env.DB_NAME,
    options: {
        encrypt: true, // Utilizza SSL/TLS
        trustServerCertificate: true // Necessario se utilizzi un certificato autofirmato
    }
};

async function connect() {
    try {
        return await sql.connect(dbConfig);
    } catch (err) {
        console.error(err);
    }
}

module.exports = {connect};