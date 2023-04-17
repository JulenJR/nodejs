import { Publisher, Subscriber } from './rabbitmq';

async function main() {
  const queue = 'ThisIsATestingQueue';
  const url = 'amqp://localhost';

  const publisher = new Publisher(queue, url);
  const subscriber = new Subscriber(queue, url);

  await subscriber.subscribe();

  setInterval(async () => {
    const message = `Hello World! (${new Date().toISOString()})`;
    await publisher.publish(message);
  }, 1000);
}

main();
