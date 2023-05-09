import { Topic } from "../app/topic";
import { User } from "../app/user";
import { EventEmitter } from "events";

describe("Topic", () => {
  let topic: Topic;
  let users : User[];

  beforeEach(() => {
    topic = new Topic("Test Topic", users);
  });

  //testing if a new user is added to subscribers
  test("should subscribe a user", () => {
    const user = new User("Test User");
    topic.subscribe(user);
    expect(topic).toContain(user);
  });

  //be sure of a new message is emited by a user
  test("should add a message and emit event", () => {
    const user = new User("Test User");
    const message = "Test Message";
    const mockEmit = jest.spyOn(EventEmitter.prototype, "emit");
    topic.addMessage(message, user);
    expect(mockEmit).toHaveBeenCalledWith("message", topic["name"], user.name, message);
  });
});
