const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)

module.exports = () => {
  return Joi.object().keys({
    facilityId: Joi.objectId().required(),
    agentId: Joi.objectId().required(),
    start: Joi.date().required(),
    end: Joi.date().required(),
    charge: Joi.number(),
    pay: Joi.number(),
    type: Joi.string().valid('LVN','CNA','RN'),
    description: Joi.string().required(),
  })
};
