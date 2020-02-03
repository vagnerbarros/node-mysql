const makeValidation = require('./makeValidation');

const auth = require('./auth');
const cliente = require('./cliente');

const validation = {
  auth: {
    auth: makeValidation(auth.schemaAuth, 'body')
  },
  cliente: {
    listar: makeValidation(cliente.schemaListarClientes, 'query')
  }
}

module.exports = validation;