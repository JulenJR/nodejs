import { Topic } from "../app/topic";
import { User } from "../app/user";
import { EventEmitter } from "events";

describe("Topic", () => {
  let topic: Topic;

  beforeEach(() => {
    topic = new Topic("Test Topic");
  });

  //testing if a new user is added to subscribers
  test("should subscribe a user", () => {
    const user = new User("Test User");
    topic.subscribe(user);
    expect(topic["subscribers"]).toContain(user);
  });

  //be sure of a new message is emited by a user
  test("should add a message and emit event", () => {
    const user = new User("Test User");
    const message = "Test Message";
    const mockEmit = jest.spyOn(EventEmitter.prototype, "emit");
    topic.addMessage(user, message);
    expect(mockEmit).toHaveBeenCalledWith("message", topic["name"], user.getName(), message);
  });
});
