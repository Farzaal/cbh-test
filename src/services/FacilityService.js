const { ObjectId } = require('mongoose').Types
const _ = require('lodash')

function FacilityService({ facilityProfileModel }) {

    this.createFacility = async function createFacility({ name, email, charge_rate }) {
        return await facilityProfileModel.create({ name, email, charge_rate }); 
    }

    this.fetchFacilityByFilter = async function fetchFacilityByFilter(filter) {
        let filterBy = _.omitBy({
            name: filter.name ? { $regex: `.*${filter.name}.*` } : undefined,
            email: filter.email,  
            active: true 
        }, _.isNil);
        
        const { page, limit } = filter;
        const offset = (page - 1) * limit;
        const totalDocs = await facilityProfileModel.countDocuments(filterBy);
        const totalPages = Math.ceil(totalDocs/limit);
        const facility_profiles = await facilityProfileModel.find(filterBy, { active: 0 }, { skip: offset, limit }).exec();

        return { totalPages, facility_profiles }
    }

    this.editFacility = async function editFacility(data) {
        return await facilityProfileModel.findOneAndUpdate({ _id: ObjectId(data.facility_id)}, data);
    }
}

module.exports = FacilityService;