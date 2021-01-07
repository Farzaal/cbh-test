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
        console.log("hcpList ", hcpList.length)
        return res.send({ success: true, data: hcpList })

      } catch(err) {

        console.error(err);

        res.status(500).json({ message: 'Something went wrong. Unable to Fetch HCP List' });
      }
  }
}

module.exports = HcpController;
