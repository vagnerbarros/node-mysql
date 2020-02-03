const Joi = require('@hapi/joi');

const schema = Joi.object().keys({
  login: Joi.string().required(),
  senha: Joi.string().required()
});

module.exports = schema;
