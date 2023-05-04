import { beforeEach } from 'node:test';
import { Publisher, Subscriber } from '../app/rabbitmq';
import amqp from 'amqplib';


// ----     PUBLISHER tests     ---- //

describe('Publisher', () => {

  test('publish should send message to queue', async () => {

    const publisher = new Publisher("test_queue", "amqp://localhost");
        await expect(publisher.publish("Test message 1")).resolves.toBeUndefined();
        await expect(publisher.publish("Test message 2")).resolves.toBeUndefined();
  });
});


// ----     SUBSBRIBER tests    ---- //

describe('Subscriber', () => {

  test('subscribe should consume messages and acknowledge them', async () => {
    
    const subscriber = new Subscriber("test_queue", "amqp://localhost");
    const mockChannel = { assertQueue: jest.fn(), consume: jest.fn(),  ack: jest.fn() };
    const mockConnection = { createChannel: jest.fn().mockResolvedValue(mockChannel) };

    jest.spyOn(amqp, "connect").mockResolvedValue(mockConnection as any);

    await subscriber.subscribe();

    expect(amqp.connect).toHaveBeenCalledWith("amqp://localhost");
    expect(mockConnection.createChannel).toHaveBeenCalled();
    expect(mockChannel.assertQueue).toHaveBeenCalledWith("test_queue");
    expect(mockChannel.consume).toHaveBeenCalledWith("test_queue", expect.any(Function));
  });
});