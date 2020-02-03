const cadAuth = require("../model/modelAuth");

class ControllerAuth {
  
  login(request, response) {
    
    let dadosLogin = request.body;
    cadAuth.autenticar(dadosLogin)
    .then(usuarioLogado => {
      response.status(200).send(usuarioLogado);
    })
    .catch(erro => {
      response.status(erro.codigo).send(erro);
    });
  }
}

const auth = new ControllerAuth();

module.exports = auth;