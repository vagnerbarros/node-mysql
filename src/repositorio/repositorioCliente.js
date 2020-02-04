const mysql = require('mysql2');
const constantes = require('../util/constants');

class RepositorioCliente{

  constructor(){
    this.pool = mysql.createPool({
      host: constantes.HOST,
      user: constantes.USER,
      password: constantes.PASSWORD,
      database: constantes.DATA_BASE,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    });
  }

  async listar({ page = 1, pageSize = 10 }){

    try{

      return await new Promise((resolve, reject) => {
        this.pool.query(`SELECT * FROM CLIENTES LIMIT ${(page - 1) * pageSize}, ${pageSize}`, function(err, rows, fields){
          if(err){
            reject(err);
          }
          resolve(rows);
        });
      });
    }
    catch(erro){
      throw erro;
    }
  }
}

const cliente = new RepositorioCliente();

module.exports = cliente;