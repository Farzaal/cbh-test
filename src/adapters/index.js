const pgsql = require('./pgsql');

module.exports = async (config) => ({
    db: {
        primary: await pgsql(config),
    }
})