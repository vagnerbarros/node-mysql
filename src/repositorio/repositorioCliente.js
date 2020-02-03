const mysql = require('mysql');
const constantes = require('../util/constants');

class RepositorioCliente{

  constructor(){
    this.connection = mysql.createConnection({
      host: constantes.HOST,
      user: constantes.USER,
      password: constantes.PASSWORD,
      database: constantes.DATA_BASE
    });
  }

  listar(){

    return new Promise((resolve, reject) => {
      this.connection.connect();
      this.connection.query('SELECT * FROM PACIENTES', function(error, results, fields){
        if(error){
          reject(error);
        }
        this.connection.end();
        resolve(results);
      });
    });
  }
}

const cliente = new RepositorioCliente();

module.exports = cliente;