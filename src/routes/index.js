const express = require('express');
const devRouter = require('./dev');
const studentRouter = require('./student');

const router = express.Router();
router.use('/dev', devRouter);
router.use('/student', studentRouter);

module.exports = router;
