import { Publisher, Subscriber } from '../app/rabbitmq';
import amqp from 'amqplib';

jest.mock('amqplib');

// ----     PUBLISHER tests     ---- //

describe('Publisher', () => {
  const queue = 'test-queue';
  const url = 'amqp://localhost';

  test('publish should send message to queue and close connection', async () => {
    const mockConnection = { createChannel: jest.fn(), close: jest.fn() };
    const mockChannel = { assertQueue: jest.fn(), sendToQueue: jest.fn(), close: jest.fn() };
    (amqp.connect as jest.Mock).mockResolvedValue(mockConnection);
    mockConnection.createChannel.mockResolvedValue(mockChannel);

    const publisher = new Publisher(queue, url);
    await publisher.publish('test message');

    expect(amqp.connect).toHaveBeenCalledWith(url);
    expect(mockConnection.createChannel).toHaveBeenCalled();
    expect(mockChannel.assertQueue).toHaveBeenCalledWith(queue);
    expect(mockChannel.sendToQueue).toHaveBeenCalledWith(queue, Buffer.from('test message'));
    expect(mockChannel.close).toHaveBeenCalled();
    expect(mockConnection.close).toHaveBeenCalled();
  });
});


// ----     SUBSBRIBER tests    ---- //

describe('Subscriber', () => {
  const queue = 'test-queue';
  const url = 'amqp://localhost';

  test('subscribe should consume messages and acknowledge them', async () => {
    const mockConnection = { createChannel: jest.fn(), close: jest.fn() };
    const mockChannel = { assertQueue: jest.fn(), consume: jest.fn(), ack: jest.fn() };
    (amqp.connect as jest.Mock).mockResolvedValue(mockConnection);
    mockConnection.createChannel.mockResolvedValue(mockChannel);

    const subscriber = new Subscriber(queue, url);
    await subscriber.subscribe();

    expect(amqp.connect).toHaveBeenCalledWith(url);
    expect(mockConnection.createChannel).toHaveBeenCalled();
    expect(mockChannel.assertQueue).toHaveBeenCalledWith(queue);
    expect(mockChannel.consume).toHaveBeenCalledWith(queue, expect.any(Function));
    // Call the message callback with a null message to test "no message detected" case
    mockChannel.consume.mock.calls[0][1](null);
    expect(mockChannel.ack).not.toHaveBeenCalled();
    // Call the message callback with a non-null message to test receiving and acknowledging a message
    const testMessage = { content: { toString: () => 'test message' } };
    mockChannel.consume.mock.calls[0][1](testMessage);
    expect(mockChannel.ack).toHaveBeenCalledWith(testMessage);
    expect(mockConnection.close).not.toHaveBeenCalled();
  });
});
