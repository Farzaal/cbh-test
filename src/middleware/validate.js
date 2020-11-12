const boom = require('@hapi/boom');

function validate(schema) {
  return (req, res, next) => {
    try {
    
      const { error, value } = schema.validate(req.body);
      
      if (error)
          throw boom.badData(error);

      req.body = value;
      next();
    
    } catch(error) {
      return res.status(error.output.statusCode).json(error);
    }
  };
}

module.exports = validate;
