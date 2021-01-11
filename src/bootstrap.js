const express = require('express');
const bodyParser = require('body-parser');
const { configureDI } = require('./di-setup');
const cors = require('cors')
const apiErrorHandler = require('./error/api-error-handler');

async function Bootstrap(config, process) {

  let app = express();

  this.setup = async function setup() {
    await configureDI(config);
    app.use(express.json());
    app.use(cors())
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use('/api/v1', require('./routes'));
    app.use(apiErrorHandler);
    app.listen(config.get("port"), () => {
      console.log(`server running on port ${config.get("port")}`);
    });
  }


  this.stop = function () {
    server.close(done);
  }

  await this.setup();
}

module.exports = Bootstrap;
