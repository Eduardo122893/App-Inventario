// db.js
const sql = require('mssql');
require('dotenv').config();


const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER, 
    database: process.env.DB_DATABASE,
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
    
};


const connectDB = async () => {

    try {
       sql.connect(dbConfig);
//        console.log('Conexión a la base de datos SQL Server exitosa.');
    } catch (err) {
        console.error('Error al conectar a la base de datos:', err);
        console.log('error 1')
        throw err;

    }
};

module.exports = {
    sql,
    connectDB
};

