const Joi = require('@hapi/joi');

const schema = Joi.object().keys({
  page: Joi.number().required(),
  pageSize: Joi.number().required()
});

module.exports = schema;
