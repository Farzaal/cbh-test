const boom = require('@hapi/boom');
const _ = require('lodash');

function HcpController({ hcpService }) {

  this.createHcp = async function createHcp(req, res, next) {
    try {
      const newHcp = hcpService.createHcp(req.data);
      
      res.status(201).json({ message: 'Hcp created Successfully' });
    
    } catch (err) {
      
      console.error(err);

      next(err)
    }
  }

  this.fetchSystemHcps = async function fetchSystemHcps(req, res, next) {
      try {
        const hcpList = await hcpService.fetchHcpByFilter(req.data) 

        return res.send({ success: true, ...hcpList })

      } catch(err) {

        next(err)
      }
  }

  this.editHcp = async function editHcp(req, res, next) {
      try {
        const updHcp = await hcpService.editHcp(req.data)

        if(_.isNil(updHcp)) throw boom.notFound('HCP Not Found')

        return res.send({ success: true, message: 'Edited Successfully' })

      } catch(err) {

        next(err)
      }
  }

  this.deleteHcp = async function(req, res, next) {
    try {
      const delHcp = await hcpService.editHcp({ ...req.data, active: false })
      
      if(_.isNil(delHcp)) throw boom.notFound('HCP Not Found')

      return res.send({ success: true, message: 'Deleted Successfully' })

    } catch(err) {

      next(err)
    }
  }
}

module.exports = HcpController;
