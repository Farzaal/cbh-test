const monitor = require('pg-monitor');
const pgp = require('pg-promise');
const bluebird = require('bluebird');

module.exports = async (config) => {
    console.info('Initializing PGSQL Adapter >');

    const dbConfig = config.get('pgsql');

    const initOptions = {
        promiseLib: bluebird
    };

    const pgsql = pgp(initOptions);

    if (!monitor.isAttached()) {
        monitor.attach(initOptions, ['query', 'error', 'connect', 'disconnect']);
    }

    const db = pgsql(dbConfig);
    
    try {
        const test = await db.query('SELECT 1');
        console.info('[\u2713] Postgres [ready]');
    } catch (err) {
        console.info('[\u2a2f] Postgres is not running ', err);
    }

    return db;
};
