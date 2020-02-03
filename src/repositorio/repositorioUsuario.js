const Exception = require('../exception/Exception');

class RepositorioUsuario{

  constructor(){
    this.usuarios = [{ _id: '12323232323', login: 'vagner', senha: 'v4gn3r' }]
  }

  async consultarLoginUsuario(login){
    
    try{
      let usuario = this.usuarios.find(usuario => usuario.login === login);
      return usuario;
    }
    catch(erro){
      new Exception(500, erro.message);
    }
  }
}

const repUsuario = new RepositorioUsuario();

module.exports = repUsuario;