const Joi = require('joi');

module.exports = () => {
  return Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    roll_no: Joi.string().required(),
    comments: Joi.string().required(),
    institute: Joi.string().required(),  
  })
};
