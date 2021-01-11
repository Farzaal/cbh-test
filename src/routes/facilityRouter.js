const express = require('express');
const { container } = require('../di-setup');
const validate = require('../middleware/validate');

const { facilityController, addFacility, editFacility, viewFacility, deleteFacility } = container.cradle;

const router = express.Router();
router.post('/create', validate(addFacility), facilityController.createFacility);
router.put('/edit', validate(editFacility), facilityController.editFacility);
router.get('/list', validate(viewFacility), facilityController.fetchSystemFacility);
router.delete('/delete/:facility_id', validate(deleteFacility),facilityController.deleteFacility);

module.exports = router;
