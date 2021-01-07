function HcpService({ hcpProfile }) {

    this.createHcp = async function createHcp({ firstName, lastName, email, qualification, rate }) {
        return await hcpProfile.create({ firstName, lastName, email, qualification, rate }); 
    }

    this.fetchHcpByFilter = async function fetchHcpByFilter() {
        return await hcpProfile.find().exec();
    }
}

module.exports = HcpService;