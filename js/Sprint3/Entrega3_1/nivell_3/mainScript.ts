import { User } from "./user";
import { Topic } from "./topic";

// Create some users
const user1 = new User("useraa1");
const user2 = new User("userbb2");
const user3 = new User("usercc3");

// Create some topics
const topic1 = new Topic("Topic 1");
const topic2 = new Topic("Topic 2");

// Subscribe users to topics
topic1.subscribe(user1);
topic1.subscribe(user2);
topic2.subscribe(user3);
topic2.subscribe(user2);

// Add messages to topics
topic1.addMessage(user1, `msn sent by user1 -- named ${user1.getName()}`);
topic2.addMessage(user3, `this message was send by ${user3.getName()}`);