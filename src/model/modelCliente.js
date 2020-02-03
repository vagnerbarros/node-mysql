const repositorio = require('../repositorio/repositorioCliente');
const Exception = require('../exception/Exception');

class ModelCliente{

  async listar(){

    try{

      return await repositorio.listar();
    }
    catch(erro){
      throw new Exception(500, erro.message);
    }
  }
}

const cliente = new ModelCliente();

module.exports = cliente;