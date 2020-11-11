const awilix = require('awilix');
const DevController = require('./controller/DevController');
const DevService = require('./service/DevService');
const DevDao = require('./dao/dev');
const db = require('./db');

const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY,
});

function setup() {

  container.register({
    // devController: awilix.asClass(DevController),

    // services
    // devService: awilix.asClass(DevService),

    // DAOs
    devDao: awilix.asClass(DevDao),

    // inject knexjs object with database connection pooling
    // support
    db: awilix.asValue(db),
  });

  container.loadModules(
    ['./controller/*.js', './service/*.js'], 
    { 
      cwd: __dirname,
      formatName: 'camelCase',
      resolverOptions: {
        lifetime: awilix.Lifetime.SINGLETON,
        register: awilix.asClass,
      },
    }
  )
}

  module.exports = {
    container,
    setup,
  };
