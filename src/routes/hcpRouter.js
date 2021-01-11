const express = require('express');
const { container } = require('../di-setup');
const validate = require('../middleware/validate');

const { hcpController, hcpValidator, editHcpValidator, viewHcpValidator, deleteHcp } = container.cradle;

const router = express.Router();
router.post('/create', validate(hcpValidator), hcpController.createHcp);
router.put('/edit', validate(editHcpValidator), hcpController.editHcp);
router.get('/list', validate(viewHcpValidator), hcpController.fetchSystemHcps);
router.delete('/delete/:hcp_id', validate(deleteHcp),hcpController.deleteHcp);

module.exports = router;
