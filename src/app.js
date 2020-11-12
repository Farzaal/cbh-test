const nconf = require('nconf');
const path = require('path');
const os = require('os');
const Bootstrap = require('./bootstrap');

module.exports.bootstrap = (process) => {
    try {
      nconf.env().argv();
  
      const env = nconf.get('ptenv');
  
      nconf.file({ file: path.join(__dirname, 'env', `${env}.json`) });
  
      Bootstrap(nconf, process);

    } catch (err) {
      
        console.log(err);
      
        process.exit(1);
    
    }
};