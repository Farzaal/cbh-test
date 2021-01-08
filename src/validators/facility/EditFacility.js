const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)

module.exports = () => {
  return Joi.object({
    facility_id: Joi.objectId().required(),
    name: Joi.string().optional(),
    email: Joi.string().optional(),
    charge_rate: Joi.array().items(Joi.object().keys({
      qualification: Joi.string().valid('LVN','CNA','RN').required(),
      rate: Joi.number().required()
  })).optional(),
  })
};
