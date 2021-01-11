const express = require('express');
const hcpRouter = require('./hcpRouter');
const facilityRouter = require('./facilityRouter');
const shiftRouter = require('./shiftRouter');
const dashboardRouter = require('./dashboardRouter');

const router = express.Router();
router.use('/hcp', hcpRouter);
router.use('/facility', facilityRouter);
router.use('/shift', shiftRouter);
router.use('/dashboard', dashboardRouter);


module.exports = router;
