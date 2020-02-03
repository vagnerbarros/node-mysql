const repositorio = require("../repositorio/repositorioUsuario");
const jwt = require("jsonwebtoken");
const constants = require("../util/constants");
const Exception = require('../exception/Exception');

class CadastroUsuario {
  
  async autenticar({ login, senha }) {
      
    try {
    
      let usuario = await repositorio.consultarLoginUsuario(login);
      if(usuario){
        let senhaCorreta = senha === usuario.senha;
        if(senhaCorreta) {
        
          let token = jwt.sign({ id: usuario._id }, constants.JWT_SECRET);
          
          let retornoUsuario = { 
            login: usuario.login, 
            token: token 
          };

          return retornoUsuario;
        } 
        else{
          throw new Exception(401, 'Login/Senha incorretos');
        }
      }
      else{
        throw new Exception(401, 'Login/Senha incorretos');
      }
    } 
    catch (erro) {
      throw erro;
    }
  }
}

const modelAuth = new CadastroUsuario();

module.exports = modelAuth;