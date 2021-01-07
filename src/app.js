const nconf = require('nconf');
const path = require('path');
const os = require('os');
const Bootstrap = require('./bootstrap');

module.exports.bootstrap = async (process) => {
    try {
      nconf.env().argv();
  
      const env = nconf.get('ptenv');
  
      nconf.file({ file: path.join(__dirname, 'env', `${env}.json`) });

      await Bootstrap(nconf, process);

    } catch (err) {
      
        console.log(err);
      
        process.exit(1);
    
    }
};