const boom = require('@hapi/boom');
const _ = require('lodash');

function DevController({ devService }) {

  this.createDev = async function createDev(req, res) {
    try {
      const result = await devService.createDev(req.body);
      res.status(201).json({ message: 'Develper created Successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Something went wrong' });
    }
  }

  this.getDev = async function getDev(req, res) {
    try {
      const developer = await devService.getDev(req.params.id);
      if (_.isEmpty(developer))
          throw boom.notFound('Developer Not Found');

      res.status(201).json(developer);
    } catch (err) {
      const { payload } = err.output;
      res.status(payload.statusCode).json(payload);
    }
  }  

}

module.exports = DevController;
