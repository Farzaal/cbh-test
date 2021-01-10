const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)

module.exports = () => {
  return Joi.object().keys({
    id: Joi.objectId().required(),
    facilityId: Joi.objectId().required(),
    agentId: Joi.objectId().required(),
    charge: Joi.number(),
    pay: Joi.number(),
    type: Joi.string().valid('LVN','CNA','RN'),
    description: Joi.string().required(),
  })
};