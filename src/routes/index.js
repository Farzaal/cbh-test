const express = require('express');
const hcpRouter = require('./hcpRouter');
const facilityRouter = require('./facilityRouter');

const router = express.Router();
router.use('/hcp', hcpRouter);
router.use('/facility', facilityRouter);


module.exports = router;
