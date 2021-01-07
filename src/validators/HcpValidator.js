const Joi = require('joi');

module.exports = () => {
  return Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required(),
    qualification: Joi.string().valid('LVN','CNA','RN').required(),
    rate: Joi.string().required(),  
  })
};
