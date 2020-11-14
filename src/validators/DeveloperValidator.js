const Joi = require('joi');

module.exports = () => {
  return Joi.object({
    email: Joi.string().email().required(),
    firstName: Joi.string().min(1).required(),
    middleName: Joi.string().allow(null).empty('').default(null),
    lastName: Joi.string().min(1).required(),
  })
};
