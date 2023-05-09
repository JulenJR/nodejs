import { User } from "./user";
import { EventEmitter } from "events";

export class Topic extends EventEmitter {
  private name: string;
  private users: User[];

  constructor(name: string, users: User[]) {
    super();
    this.name = name;
    this.users = users;
  }

  public addMessage(message: string, user: User) {

    console.log(`[${this.name}] ${user.name} sent: ${message}`);
    this.emit("message", message, user);
  }

  public subscribe(user: User) {

    this.users.push(user);
    console.log(`[${this.name}] ${user.name} subscribed`);

    this.on("message", (message, author) => {
      if (this.users.includes(author) && user != author) {
        console.log(`[${this.name}] ${user.name} received: ${message}`);
      }
    });
  }
}