import { Publisher, Subscriber } from './rabbitmq';

async function main() {
  const queue = 'ThisIsATestingQueue';
  const url = 'amqp://localhost';

  const publisher = new Publisher(queue, url);
  const subscriber = new Subscriber(queue, url);

  await subscriber.subscribe();

  setInterval(async () => {
    const message = `test message sent every 5 seconds at (${new Date().toISOString()})`;
    await publisher.publish(message);
  }, 3000);
}

main();