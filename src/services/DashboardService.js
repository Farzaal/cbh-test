const boom = require('@hapi/boom');
const _ = require('lodash');

function DashboardService({ shiftModel }) {

  this.dashboardData = async function dashboardData() {
    
    const openShifts = shiftModel.count({ agentId : { $exists: false } })
    const allAssignedShifts = shiftModel.count({ agentId : { $exists: true } })
    const shiftRevenue = shiftModel.aggregate([{ $group: { _id : null, sum : { $sum: "$pay" } } }])
    const amountBePaid = shiftModel.aggregate([{ $group: { _id : null, sum : { $sum: "$hcpPay" } } }])
    
    const [open, assigned, revenue, amount] = await Promise.all([openShifts, allAssignedShifts, shiftRevenue, amountBePaid])
    return {
        openShifts: open, 
        allAssignedShifts: assigned, 
        revenue: revenue[0].sum,
        amountBePaid: amount[0].sum
    }
  }
}

module.exports = DashboardService;