const boom = require('@hapi/boom');
const _ = require('lodash');

function HcpController({ facilityService }) {

  this.createFacility = async function createFacility(req, res, next) {
    try {
      const newFacility = facilityService.createFacility(req.data);
      
      res.status(201).json({ message: 'Facility created Successfully' });
    
    } catch (err) {
      
      console.error(err);

      next(err)
    }
  }

  this.fetchSystemFacility = async function fetchSystemFacility(req, res, next) {
      try {
        const facilityList = await facilityService.fetchFacilityByFilter(req.data) 

        return res.send({ success: true, data: facilityList })

      } catch(err) {

        next(err)
      }
  }

  this.editFacility = async function editFacility(req, res, next) {
      try {
        const updHcp = await facilityService.editFacility(req.data)

        if(_.isNil(updHcp)) throw boom.notFound('Facility Not Found')

        return res.send({ success: true, message: 'Facility Edited Successfully' })

      } catch(err) {

        next(err)
      }
  }

  this.deleteFacility = async function(req, res, next) {
    try {
      const delHcp = await facilityService.editFacility({ ...req.data, active: false })
      
      if(_.isNil(delHcp)) throw boom.notFound('Facility Not Found')

      return res.send({ success: true, message: 'Facility Deleted Successfully' })

    } catch(err) {

      next(err)
    }
  }
}

module.exports = HcpController;
