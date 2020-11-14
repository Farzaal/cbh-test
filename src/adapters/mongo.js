const mongoose = require('mongoose');

module.exports = async (config) => {

    try {
        const conn = config.get("database:mongo");

        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }

        await mongoose.connect(`mongodb://${conn.user}:${conn.password}@${conn.host}:${conn.port}/${conn.database}`, options);
        mongoose.set('bufferCommands', false);
        mongoose.set('debug', true);

        console.info('[\u2713] Mongo [ready]');

        return mongoose;

    } catch (error) {
        console.info('[\u2a2f] Mongo is not running ', error);
    }
}