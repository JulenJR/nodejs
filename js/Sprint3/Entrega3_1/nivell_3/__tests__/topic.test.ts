import { User } from "../app/user";
import { Topic } from "../app/topic";

describe("Topic", () => {
  let topic: Topic;
  let user1: User;
  let user2: User;

  beforeEach(() => {
    user1 = new User("user1");
    user2 = new User("user2");
    topic = new Topic("Test", [user1, user2]);
  });

  describe("addMessage", () => {

    test("should emit a message event with the message and user", () => {
      const message = "this is a test message";
      const spy = jest.spyOn(topic, "emit");

      topic.addMessage(message, user1);

      expect(spy).toHaveBeenCalledWith("message", message, user1);
    });
  });

  describe("subscriber", () => {

    test("should add the user to the list of subscribers", () => {
      const user3 = new User("Charlie");

      topic.subscribe(user3);

      expect(topic["users"]).toContain(user3);
    });

    test("should receive messages sent by other subscribers", () => {
      const message = "this is a test message";
      const spy = jest.spyOn(console, "log");

      topic.subscribe(user1);
      topic.addMessage(message, user2);

      expect(spy).toHaveBeenCalledWith(`[Test] user1 received: ${message}`);
      expect(spy).not.toHaveBeenCalledWith(`[Test] user1 sent: ${message}`);
    });
  });
});