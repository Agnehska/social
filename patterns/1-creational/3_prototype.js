const car = {
  wheels: 4,

  init() {
    console.log(
      `У меня есть ${this.wheels} колеса, мой владелец ${this.owner}`
    );
  },
};

// console.log(car);
// car.init();

const carWithOwner = Object.create(car, {
  owner: {
    value: "John Doe",
  },
});

carWithOwner.init();

console.log(carWithOwner.__proto__ === car);
