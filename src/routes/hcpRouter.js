const express = require('express');
const { container } = require('../di-setup');
const validate = require('../middleware/validate');

const { hcpController } = container.cradle;

const router = express.Router();
router.post('/create', hcpController.createHcp);

module.exports = router;
