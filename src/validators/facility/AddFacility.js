const Joi = require('joi');

module.exports = () => {
  return Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    charge_rate: Joi.array().items(Joi.object().keys({
        qualification: Joi.string().valid('LVN','CNA','RN').required(),
        rate: Joi.number().required()
    })).required(),  
  })
};
