class User {
  constructor(name) {
    this.name = name;
    this.room = null;
  }

  send(message, to) {
    this.room.send(message, this, to);
  }

  receive(message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
}

class ChatRoom {
  constructor() {
    this.users = [];
  }

  register(user) {
    this.users[user.name] = user;
    user.room = this;
  }

  send(message, from, to) {
    if (to) {
      to.receive(message, from);
    } else {
      Object.keys(this.users).forEach((key) => {
        if (this.users[key] !== from) {
          this.users[key].receive(message, from);
        }
      });
    }
  }
}

const andrei = new User("Andrei");
const maria = new User("Maria");
const john = new User("John");
const vasya = new User("Vasya");
const petya = new User("Petya");

const chatRoom = new ChatRoom();

chatRoom.register(andrei);
chatRoom.register(maria);
chatRoom.register(john);
chatRoom.register(vasya);
chatRoom.register(petya);

andrei.send("Hello, everyone!");
maria.send("Hello, Andrei!", andrei);
john.send("Privet Masha", maria);
