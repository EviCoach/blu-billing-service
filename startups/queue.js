"use strict";
const amqp = require("amqplib");
const { QUEUE } = require("../config/Constants");
let connection;
const init = async () => {
    try {
        connection = await amqp.connect(process.env.RABBITMQ_URL);
        console.info(`Queue connected ${connection}`);
        receiveMessage(connection);
    } catch (err) {
        console.log("Error connection to RabbitMQ", err);
        process.exit(1);
    }
    return connection;
}

const receiveMessage = async (connection) => {
    if (!connection) {
        connection = init();
    }
    const channel = await connection.createChannel();
    await channel.assertQueue(QUEUE.TRANSACTION_SUCCESS, { durable: true });
    channel.consume(QUEUE.TRANSACTION_SUCCESS, message => {
        console.log(`[X] Received ${message.content.toString()}`);
    }, { noAck: true });
}

exports.sendMessage = async (queueName, message) => {
    if (!connection) {
        connection = init();
    }
    const channel = await connection.createChannel();
    channel.assertQueue(queueName);
    channel.sendToQueue(queueName, Buffer.from(message))
}

init();