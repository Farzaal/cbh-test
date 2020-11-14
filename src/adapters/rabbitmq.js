const amqp = require('amqplib');

module.exports = async (config) => {
    try {
        const conn_obj = config.get("queue:rabbitmq");
 
        const connection = await amqp.connect(`amqp://${conn_obj.host}:${conn_obj.port}`);
 
        let channel = await connection.createChannel();

        console.info('[\u2713] RabbitMq [ready]');

    } catch (error) {
 
        console.info('[\u2a2f] RabbitMq is not running ', err);
 
    }
}