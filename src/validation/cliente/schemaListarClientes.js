const Joi = require('@hapi/joi');

const schema = Joi.object().keys({
  page: Joi.number().min(1).required(),
  pageSize: Joi.number().min(1).required()
});

module.exports = schema;
