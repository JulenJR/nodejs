import { Publisher } from './rabbitmq';

const queueName = 'queueTest Entrega_2 nivell_3';
const url = 'amqp://localhost';

const publisher = new Publisher(queueName, url);

// Send messages to the queue
const messages = ['end of Publisher', 'sending msg 1 by Publisher', 'msg 2'];
messages.forEach(async (message) => {
  await publisher.publish(message);
});

console.log(`Sent messages to queue "${queueName}"`);