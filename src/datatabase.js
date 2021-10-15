const mysql = require('promise-mysql');

const conexion =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database: 'electron_db'

});

function getConexion() {
    return conexion;
}

module.exports= { getConexion }