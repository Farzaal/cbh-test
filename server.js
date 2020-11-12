const express = require('express');
const { configureDI } = require('./di-setup');
const apiErrorHandler = require('./error/api-error-handler');
configureDI();
const router = require('./routes');

function Server() {
    
    let app = express();

    this.setup = function setup() {
        app.use(express.json());
        app.use('/', router);
        app.use(apiErrorHandler);
    }
    
    this.run = function run(port) {
        server = app.listen(port, () => {
          console.log(`server running on port ${port}`);
        });
      }
    
    this.stop = function() {
        server.close(done);
      }
      
    this.setup();
} 

module.exports = Server;
