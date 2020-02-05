const mysql = require('mysql2');
const config = require('../config');

class RepositorioCliente{

  constructor(){
    this.pool = mysql.createPool({
      host: config.MySQL.HOST,
      user: config.MySQL.USER,
      password: config.MySQL.PASSWORD,
      database: config.MySQL.DATABASE,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    });
  }

  async listar({ page = 1, pageSize = 10 }){

    try{

      return await new Promise((resolve, reject) => {
        this.pool.query(`SELECT cpf, rg, nome, nascimento, fone, email, observacao, genero, tipo FROM clientes LIMIT ${(page - 1) * pageSize}, ${pageSize}`, function(err, rows, fields){
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