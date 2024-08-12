class SimpleMembership {
  constructor(name) {
    this.name = name;
    this.cost = 50;
  }
}

class StandardMembership {
  constructor(name) {
    this.name = name;
    this.cost = 150;
  }
}

class PremiumMembership {
  constructor(name) {
    this.name = name;
    this.cost = 400;
  }
}

class MemberFactory {
  static list = {
    simple: SimpleMembership,
    standard: StandardMembership,
    premium: PremiumMembership,
  };

  create(name, type = "simple") {
    const Membership = MemberFactory.list[type] || MemberFactory.list.simple;
    const member = new Membership(name);

    // Дополнительные методы
    member.type = type;
    member.define = function () {
      console.log(`${this.name} (${this.type}): ${this.cost}`);
    };

    return member;
  }
}

const factory = new MemberFactory();
const members = [
  factory.create("John", "simple"),
  factory.create("Jane", "premium"),
  factory.create("Bob", "standard"),
  factory.create("Mary", "simple"),
  factory.create("Fred"),
];

members.forEach((member) => member.define());

console.log(members[3].type);
