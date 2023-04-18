import { Subscriber } from './rabbitmq';

const queueName = 'queueTest Entrega_2 nivell_3';
const url = 'amqp://localhost';

const subscriber = new Subscriber(queueName, url);

// Consume messages from the queue
subscriber.subscribe();
