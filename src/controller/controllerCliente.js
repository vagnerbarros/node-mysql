const cadCliente = require('../model/modelCliente');

class ControllerCliente{

  listar(request, response){

    cadCliente.listar()
    .then(clientes => {
      response.status(200).send(clientes);
    })
    .catch(erro => {
      response.status(erro.codigo).send(erro);
    });
  }
}

const cliente = new ControllerCliente();

module.exports = cliente;