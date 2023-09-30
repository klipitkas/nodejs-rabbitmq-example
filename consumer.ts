import client, { Channel, Connection } from 'amqplib';
import { log } from './helpers';

(async function () {
  try {
    log('Connecting to RabbitMQ.');
    const connection: Connection = await client.connect(
      'amqp://user:pass@localhost:5672'
    );

    const queueName: string = 'main-queue';

    const channel: Channel = await connection.createChannel();
    log('Created channel.');

    await channel.assertQueue(queueName);

    log('Starting to consume messages.');
    while (true) {
      await channel.consume(queueName, (msg) => {
        if (msg) {
          log('Consumed message ' + msg.content.toString());
          channel.ack(msg);
        }
      });
    }
  } catch (error) {
    console.error(error);
  }
})();
