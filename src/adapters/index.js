const mongo = require('./mongo');

module.exports = async (config) => ({
    db: {
        primary: await mongo(config) 
    }
})