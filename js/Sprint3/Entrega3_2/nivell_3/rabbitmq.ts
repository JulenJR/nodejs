import amqp from "amqplib";

export class Publisher {
  private readonly queue: string;
  private readonly url: string;

  constructor(queue: string, url: string) {
    this.queue = queue;
    this.url = url;
  }

  async publish(message: string): Promise<void> {
    const connection = await amqp.connect(this.url);
    const channel = await connection.createChannel();
    await channel.assertQueue(this.queue);
    channel.sendToQueue(this.queue, Buffer.from(message));
    console.log(`Sent message "${message}" to queue "${this.queue}"`);
    await channel.close();
    await connection.close();
  }
}

export class Subscriber {
  private readonly queue: string;
  private readonly url: string;

  constructor(queue: string, url: string) {
    this.queue = queue;
    this.url = url;
  }

  async subscribe(): Promise<void> {
    const connection = await amqp.connect(this.url);
    const channel = await connection.createChannel();
    await channel.assertQueue(this.queue);
    console.log(`Waiting for messages in queue "${this.queue}" ...`);
    channel.consume(this.queue, (message) => {
      if (message === null) {
        console.log("no message detected.");
      } else {
        console.log(
          `Received message "${message.content.toString()}" from queue "${this.queue}"`);
        channel.ack(message);
      }
    });
  }
}

module.exports = { Publisher, Subscriber };