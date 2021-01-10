const boom = require('@hapi/boom');
const _ = require('lodash');

function DashboardController({ dashboardService }) {

  this.dashboardData = async function dashboardData(req, res, next) {
    try {
      const data = await dashboardService.dashboardData();
      
      res.status(201).json({ success: true, data });
    
    } catch (err) {
      
      console.error(err);

      next(err)
    }
  }
}

module.exports = DashboardController;
