const express = require('express');
const { container } = require('../di-setup');
const validate = require('../middleware/validate');

const { devController, developerValidator } = container.cradle;

const router = express.Router();
router.post('/', validate(developerValidator), devController.createDev);
router.get('/:id', devController.getDev);

module.exports = router;
