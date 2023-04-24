import { Publisher } from './rabbitmq';

const queueName = 'queueTest Entrega_2 nivell_3';
const url = 'amqp://localhost';

const publisher = new Publisher(queueName, url);

// Send messages to the queue
const messages = ['1', '2', '3'];
messages.forEach(async (message) => {
  await publisher.publish(message);
});

console.log(`Sending messages to queue "${queueName}" ...`);