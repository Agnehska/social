const person = {
    name: 'John',
    age: 30,
    city: 'New York',
    greet: function () {
        console.log('Greet!');
    },
};

const person1 = new Object({
    name: 'John',
    age: 30,
    city: 'New York',
    greet: function () {
        console.log('Greet!');
    },
});

Object.prototype.sayHello = function () {
    console.log('Hello!');
};
