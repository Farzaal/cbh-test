const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)

module.exports = () => {
  return Joi.object({
    hcp_id: Joi.objectId().required(),
  })
};
