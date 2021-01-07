const express = require('express');
const { container } = require('../di-setup');
const validate = require('../middleware/validate');

const { hcpController, hcpValidator, editHcpValidator } = container.cradle;

const router = express.Router();
router.post('/create', validate(hcpValidator), hcpController.createHcp);
router.put('/edit', validate(editHcpValidator), hcpController.editHcp);
router.get('/list', hcpController.fetchSystemHcps);

module.exports = router;
