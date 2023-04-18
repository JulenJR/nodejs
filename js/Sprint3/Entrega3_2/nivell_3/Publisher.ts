import { Publisher } from './rabbitmq';

const queueName = 'queueTest Entrega_2 nivell_3';
const url = 'amqp://localhost';

const publisher = new Publisher(queueName, url);

// Send messages to the queue
const messages = ['sending msg 1 by Publisher', 'msg 2', 'end of Publisher'];
messages.forEach(async (message) => {
  await publisher.publish(message);
});

console.log(`Sent messages to queue "${queueName}"`);
