const { ObjectId } = require('mongoose').Types
const _ = require('lodash')
const moment = require('moment')
const boom = require('@hapi/boom');

function ShiftService({ shiftModel, facilityProfileModel, hcpProfileModel }) {

    this.createShift = async function createShift(shift) {
        let time = moment(shift.end).diff(shift.start, 'minutes') / 60 
        time = time.toFixed(2)
      
        let facilityDetail = await facilityProfileModel.findById({ _id: ObjectId(shift.facilityId) })
        if(!facilityDetail) throw boom.notFound('Facility Not Found')
        let charges = facilityDetail.charge_rate.find( q => q.qualification === shift.type )
        let pay = charges.rate * time
        pay = pay.toFixed(2)
        
        shift = {
          ...shift,
          charge: charges.rate,
          pay,
          time
        }
      
        let result = await shiftModel.create(shift)
      
        if (!result) {
          return {
            error: ServerError
          }
        }
        return result
    }

    this.editShift = async function editShift(shift) {
        const existedShift = await shiftModel.findById(shift.id)
  
        if (!existedShift) throw boom.notFound('Shift Not Found')
      
        let facilityDetail = await facilityProfileModel.findById({ _id: ObjectId(existedShift.facilityId) })
        if(!facilityDetail) return { error: ServerError }
      
        let charges = facilityDetail.charge_rate.find( q => q.qualification === shift.type )
        let pay = charges.rate * existedShift.time
        pay = pay.toFixed(2)
      
        if(shift.agentId){
          let agentDetail = await hcpProfileModel.findById({_id: ObjectId(shift.agentId)})
          let agentPay = agentDetail.rate * existedShift.time
      
          shift = { ...shift, agentPay: agentPay.toFixed(2) }
        }
      
        shift = { ...shift, charge: charges.rate, pay }
      
        const result = await shiftModel.findOneAndUpdate({ _id: shift.id }, { $set: shift }, { new: true })
        
        if (!result) throw boom.notFound('Somthing Went Wrong. Unable to modify shift')
        
        return result
    }

    this.fetchShiftByFilter = async function fetchShiftByFilter(filter) {
        const { page, limit } = filter;
        const offset = (page - 1) * limit;
        const totalDocs = await shiftModel.countDocuments({ deleted: false });
        const totalPages = Math.ceil(totalDocs/limit);
        const shifts = await shiftModel.find({ deleted: false }, { active: 0 }, { skip: offset, limit }).exec();

        return { totalPages, shifts }
    }

    this.deleteShift = async function deleteShift(shift_id) {
        let status = { deleted: true }
        const result = await shiftModel.findOneAndUpdate({ _id: shift_id }, { $set: status }, { new: false })
        if (!result) throw boom.internal('Something went wrong. Unable to delete shifts')
        return result
    }
}

module.exports = ShiftService;