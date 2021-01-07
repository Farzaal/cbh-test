const boom = require('@hapi/boom');
const _ = require('lodash');

function HcpController({ hcpService }) {

  this.createHcp = async function createHcp(req, res) {
    try {
      const newHcp = hcpService.createHcp(req.body);
      
      res.status(201).json({ message: 'Hcp created Successfully' });
    
    } catch (err) {
      
      console.error(err);
      
      res.status(500).json({ message: 'Something went wrong. Unable to save HCP' });
    }
  }

  this.fetchSystemHcps = async function fetchSystemHcps(req, res) {
      try {
        const hcpList = await hcpService.fetchHcpByFilter() 

        return res.send({ success: true, data: hcpList })

      } catch(err) {

        console.error(err);

        res.status(500).json({ message: 'Something went wrong. Unable to Fetch HCP List' });
      }
  }

  this.editHcp = async function editHcp(req, res) {
      try {
        const updHcp = await hcpService.editHcp(req.body)

        if(_.isNil(updHcp)) throw new boom.notFound('HCP Not Found')

        return res.send({ success: true, message: 'Edited Successfully' })

      } catch(err) {

        console.log(err)
      
        res.status(500).json({ message: 'Something went wrong. Unable to Edit HCP' });
      }
  }
}

module.exports = HcpController;
