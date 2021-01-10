const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)

module.exports = () => {
  return Joi.object({
    shift_id: Joi.objectId().required(),
  })
};
