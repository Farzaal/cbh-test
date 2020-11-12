const ApiError = require('../error/api-error');

function DevController({ devService }) {

  this.createDev = async function createDev(req, res) {
    try {
      const result = await devService.createDev(req.body);
      res.status(201).json({ message: 'Develper created Successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json('error');
    }
  }

  this.getDev = async function getDev(req, res, next) {
    try {
      const developerId = req.params.id;
      const developer = await devService.getDev(req.params.id);
      if (developer == null) {
        next(ApiError.notFound(`developer with id ${developerId} not found`));
        return;
      }
      res.json(developer);
    } catch (err) {
      next(err);
    }
  }  

}

module.exports = DevController;
