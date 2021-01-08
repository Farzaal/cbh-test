const { ObjectId } = require('mongoose').Types
const _ = require('lodash')

function HcpService({ hcpProfileModel }) {

    this.createHcp = async function createHcp({ firstName, lastName, email, qualification, rate }) {
        return await hcpProfileModel.create({ firstName, lastName, email, qualification, rate }); 
    }

    this.fetchHcpByFilter = async function fetchHcpByFilter(filter) {
        
        let filterBy = _.omitBy({
            firstName: filter.name ?  { $regex: `.*${filter.name}.*` } : undefined,
            qualification: filter.qualification,
            email: filter.email,  
            active: true 
        }, _.isNil);
        
        const { page, limit } = filter;
        const offset = (page - 1) * limit;
        const totalDocs = await hcpProfileModel.countDocuments(filterBy);
        const totalPages = Math.ceil(totalDocs/limit);
        const hcp_profiles = await hcpProfileModel.find(filterBy, { active: 0 }, { skip: offset, limit }).exec();

        return { totalPages, hcp_profiles }
    }

    this.editHcp = async function editHcp(data) {
        return await hcpProfileModel.findOneAndUpdate({ _id: ObjectId(data.hcp_id)}, data);
    }
}

module.exports = HcpService;