import { User } from "./user";
import { EventEmitter } from "events";

export class Topic extends EventEmitter {
  private _name: string;
  private _users: User[];

  constructor(name: string, users: User[]) {
    super();
    this._name = name;
    this._users = users;
  }

  public addMessage(message: string, user: User) {
    console.log(`[${this._name}] ${user.name}: ${message}`);
    this.emit("message", message, user);
  }

  public subscribe(user: User) {
    this._users.push(user);
    console.log(`[${this._name}] ${user.name} subscribed`);
    this.on("message", (message, author) => {
      if (this._users.includes(author)) {
        console.log(`[${this._name}] ${user.name} received: ${message}`);
      }
    });
  }
}
