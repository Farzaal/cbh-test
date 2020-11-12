const joi = require('@hapi/joi');

module.exports = joi.object({
  email: joi.string().email().required(),
  firstName: joi.string().min(1).required(),
  middleName: joi.string().allow(null).empty('').default(null),
  lastName: joi.string().min(1).required(),
});
