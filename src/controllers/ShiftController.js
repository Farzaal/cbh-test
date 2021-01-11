const boom = require('@hapi/boom');
const _ = require('lodash');

function ShiftController({ shiftService }) {

  this.createShift = async function createShift(req, res, next) {
    try {
      const newShift = await shiftService.createShift(req.data);
      
      res.status(201).json({ message: 'Shift created Successfully' });
    
    } catch (err) {
      
      console.error(err);

      next(err)
    }
  }

  this.fetchSystemShifts = async function fetchSystemShifts(req, res, next) {
      try {
        const shiftList = await shiftService.fetchShiftByFilter(req.data) 

        return res.send({ success: true, ...shiftList })

      } catch(err) {

        next(err)
      }
  }

  this.editShifts = async function editShifts(req, res, next) {
      try {
        const updShift = await shiftService.editShift(req.data)

        return res.send({ success: true, message: 'Shift Edited Successfully' })

      } catch(err) {

        next(err)
      }
  }

  this.deleteShift = async function deleteShift(req, res, next) {
    try {
      const delShift = await shiftService.deleteShift(req.data.shift_id)
      
      return res.send({ success: true, message: 'Shift Deleted Successfully' })

    } catch(err) {

      next(err)
    }
  }
}

module.exports = ShiftController;
