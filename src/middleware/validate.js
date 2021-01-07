const boom = require('@hapi/boom');

function validate(schema) {
  return (req, res, next) => {
    try {
      console.log({ ...req.query, ...req.params })
      const reqData = req.method == 'GET' || req.method == 'DELETE' ? { ...req.query, ...req.params } : req.body;
    
      const { error, value } = schema.validate(reqData);
      
      if (error) throw boom.badData(error);

      req.data = value;

      next();
    
    } catch(error) {

      const { details } = error; 
      
      return res.status(error.output.statusCode).json(details);
    
    }
  };
}

module.exports = validate;
