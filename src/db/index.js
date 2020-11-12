const knexjs = require('knex');
const config = require('../config');

const db = knexjs({
  client: 'pg',
  connection: {
    host: '192.168.1.11',
    user: 'postgres',
    port: 5432,
    password: 'abc123',
    database: 'devdb',
  },
  pool: { min: 0, max: 10 },
});

module.exports = db;
