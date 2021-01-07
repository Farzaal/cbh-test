const boom = require('@hapi/boom');
const _ = require('lodash');

function HcpController() {

  this.createHcp = async function createHcp(req, res) {
    try {
      // const result = await devService.createDev(req.body);
      res.status(201).json({ message: 'Develper created Successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Something went wrong' });
    }
  }
}

module.exports = HcpController;
