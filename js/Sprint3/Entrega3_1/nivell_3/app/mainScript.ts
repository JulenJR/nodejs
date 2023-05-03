import { User } from "./user";
import { Topic } from "./topic";

const users = [
  new User("user1"),
  new User("user2"),
  new User("user3"),
];
const topic1 = new Topic("Topic 1", [users[0]]);
const topic2 = new Topic("Topic 2", [users[1], users[2]]);

topic1.subscribe(users[0]);
topic2.subscribe(users[1]);
topic2.subscribe(users[2]);

topic1.addMessage("will send a mss ", users[0]);
topic2.addMessage("not another msss", users[1]);
topic2.addMessage("Deffinetly not another mss", users[2]);