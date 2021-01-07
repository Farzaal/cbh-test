const awilix = require('awilix');
const adapters = require('./adapters/index');

const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY,
});

const initAdapters = async (config) => await adapters(config);

async function configureDI(config) {

  const dbAdapters = await initAdapters(config);

  container.register({
    db: awilix.asFunction(() => dbAdapters.db).singleton(),
    config: awilix.asValue(config)
  });

  container.loadModules(
    [
      './controllers/*.js', 
      './services/*.js', 
      './models/**/*.js',
      './validators/**/*.js'
    ], 
    { 
      cwd: __dirname,
      formatName: 'camelCase',
      resolverOptions: {
        lifetime: awilix.Lifetime.SINGLETON,
        // register: awilix.asClass,
      },
    }
  )
}

  module.exports = {
    container,
    configureDI,
  };
