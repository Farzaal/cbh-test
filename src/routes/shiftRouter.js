const express = require('express');
const { container } = require('../di-setup');
const validate = require('../middleware/validate');

const { shiftController, createShift, editShift, viewShift, deleteShift } = container.cradle;

const router = express.Router();
router.post('/create', validate(createShift), shiftController.createShift);
router.put('/edit', validate(editShift), shiftController.editShifts);
router.get('/list', validate(viewShift), shiftController.fetchSystemShifts);
router.delete('/delete/:shift_id', validate(deleteShift),shiftController.deleteShift);

module.exports = router;
