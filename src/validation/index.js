const makeValidation = require('./makeValidation');

const auth = require('./auth');

const validation = {
  auth: {
    auth: makeValidation(auth.schemaAuth, 'body')
  }
}

module.exports = validation;