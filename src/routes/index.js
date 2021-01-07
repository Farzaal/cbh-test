const express = require('express');
const devRouter = require('./hcpRouter');

const router = express.Router();
router.use('/hcp', devRouter);

module.exports = router;
