module.exports = (schema, property) => {
  return (req, res, next) => {
    const { error } = schema.validate(req[property], { abortEarly: false });
    const valid = error === null || error === undefined;
    if(valid){
      next();
    }
    else{
      const { details } = error;
      const message = details.map(info => info.message).join(', ');
      console.log('error', message);
      res.status(422).send({ codigo: 422, motivo: message });
    }
  }
}