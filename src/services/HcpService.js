const { ObjectId } = require('mongoose').Types

function HcpService({ hcpProfileModel }) {

    this.createHcp = async function createHcp({ firstName, lastName, email, qualification, rate }) {
        return await hcpProfileModel.create({ firstName, lastName, email, qualification, rate }); 
    }

    this.fetchHcpByFilter = async function fetchHcpByFilter() {
        return await hcpProfileModel.find().exec();
    }

    this.editHcp = async function editHcp(data) {
        return await hcpProfileModel.findOneAndUpdate({ _id: ObjectId(data._id)}, data);
    }
}

module.exports = HcpService;