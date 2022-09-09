import client, { Channel, Connection } from 'amqplib';
import crypto from 'crypto';
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

    log('Starting to produce messages.');
    while (true) {
      const uuid: string = crypto.randomUUID();
      const message: string = `${uuid} - ${new Date()}`;
      const sent: boolean = channel.sendToQueue(
        queueName,
        Buffer.from(message)
      );
      if (sent) {
        log('Sent message: ' + message);
      } else {
        console.error('Failed to send a message');
      }
    }
  } catch (error) {
    console.error(error);
  }
})();
