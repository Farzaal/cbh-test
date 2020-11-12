const awilix = require('awilix');
const DevDao = require('./dao/dev');
const db = require('./db');

const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY,
});

function configureDI(config) {

  container.register({
    devDao: awilix.asClass(DevDao),
    db: awilix.asValue(db),
    config: awilix.asValue(config)
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
    configureDI,
  };
