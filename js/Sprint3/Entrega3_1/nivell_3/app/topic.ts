import { EventEmitter } from "events";
import { User } from "./user";

export class Topic {
  private name: string;
  private subscribers: User[];
  private eventEmitter: EventEmitter;

  constructor(name: string) {
    this.name = name;
    this.subscribers = [];
    this.eventEmitter = new EventEmitter();
  }

  public subscribe(user: User): void {
    this.subscribers.push(user);
    this.onUserSubscribed(user);
  }

  public addMessage(user: User, message: string): void {
    console.log(`${user.getName()} posted message on topic '${this.name}': ${message}`);
    this.eventEmitter.emit("message", this.name, user.getName(), message);
  }

  // This method is called when a user is subscribed to this topic
  private onUserSubscribed(user: User): void {
    console.log(`User ${user.getName()} subscribed to topic ${this.name}`);
  }
}
module.exports = { Topic };