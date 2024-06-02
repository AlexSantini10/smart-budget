const fs = require('fs');
const path = require('path');
const sql = require('mssql');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

// Configurazione del database
const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_HOST,
    database: '',
    options: {
        encrypt: true, // Utilizza SSL/TLS
        trustServerCertificate: true // Necessario se utilizzi un certificato autofirmato
    }
};

const sql_order_files = [
    "create_db_sb.sql",
    "smart_budget.sql",
    "init_tipo_movimenti.sql",
    "init_users.sql",
    "init_conti.sql",
    "init_categorie.sql",
    "init_transazioni.sql",
];

// Funzione per eseguire i file SQL
async function executeSQLFiles() {
    try {
        // Connessione al database
        let pool = await sql.connect(dbConfig);
        console.log('Connected to the database.');

        // Leggi i file nella cartella "sql"
        const sqlDir = path.resolve(__dirname, 'sql');

        for (const file of sql_order_files) {
            const filePath = path.join(sqlDir, file);
            const sqlQueries = fs.readFileSync(filePath, 'utf16le').split('GO');
            console.log(`Executing file: ${file}`);

            // Esegui ogni query SQL separatamente
            for (const query of sqlQueries) {
                const trimmedQuery = query.trim();
                if (trimmedQuery !== '') {
                    await pool.request().query(trimmedQuery);
                }
            }
            console.log(`File executed: ${file}`);
        }

        // Chiudi la connessione al database
        await pool.close();
        console.log('Connection to the database closed.');
    } catch (err) {
        console.error('Error executing SQL files:', err);
    }
}

// Esegui la funzione
executeSQLFiles();
