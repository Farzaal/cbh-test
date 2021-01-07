const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)

module.exports = () => {
  return Joi.object({
    hcp_id: Joi.objectId().required(),
    firstName: Joi.string().optional(),
    lastName: Joi.string().optional(),
    email: Joi.string().optional(),
    qualification: Joi.string().valid('LVN','CNA','RN').optional(),
    rate: Joi.string().optional(),  
  })
};
