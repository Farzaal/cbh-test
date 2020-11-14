const pgsql = require('./pgsql');
const mongo = require('./mongo');
const rabbitmq = require('./rabbitmq');

module.exports = async (config) => ({
    db: {
        primary: await pgsql(config),
        secondary: await mongo(config) 
    },
    queue: {
        queue: await rabbitmq(config)
    }
})