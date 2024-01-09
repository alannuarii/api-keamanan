const amqp = require('amqplib')
require("dotenv").config();

const message = async (exchange, routing, payload) => {
    const rabbitmqUrl = `amqp://${process.env.USER}:${process.env.PASSWORD}@${process.env.URL}/${process.env.VIRTUAL_HOST}`

    try {
        const connection = await amqp.connect(rabbitmqUrl)
        const channel = await connection.createChannel()

        channel.publish(exchange, routing, Buffer.from(JSON.stringify(payload)));

    } catch (error) {
        console.error('Error:', error)
    }
}


module.exports = { message }