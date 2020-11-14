const joi = require('@hapi/joi');

module.exports = () => {
  return joi.object({
    name: joi.string().required(),
    email: joi.string().required(),
    roll_no: joi.string().required(),
    comments: joi.string().required(),
  })
};
