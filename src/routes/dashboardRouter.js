const express = require('express');
const { container } = require('../di-setup');
const validate = require('../middleware/validate');

const { dashboardController } = container.cradle;

const router = express.Router();
router.get('/list', dashboardController.dashboardData);

module.exports = router;
