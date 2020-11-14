const express = require('express');
const { container } = require('../di-setup');
const validate = require('../middleware/validate');

const { studentController, studentValidator } = container.cradle;

const router = express.Router();

router.post('/', validate(studentValidator), studentController.createStudent);

module.exports = router;
