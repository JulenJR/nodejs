import { EventEmitter } from "events";

export class User {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public receiveMessage(topicName: string, message: string): void {
    console.log(`${this.name} received message on topic '${topicName}': ${message}`);
  }

  public getName(){
    return this.name;
  }
}