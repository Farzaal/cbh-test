const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)

module.exports = () => {
  return Joi.object({
    page: Joi.number().optional().default(1),
    limit: Joi.number().optional().default(10),
    email: Joi.string().optional(),
    name: Joi.string().optional(),  
  })
};
