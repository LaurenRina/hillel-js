//Array
//Object
//String
//Number
//Boolean
//Date

const arr = [1, 2, 3];
const arr1 = new Array(1, 2, 3);

console.log(arr);
console.log(arr.filter((item) => item > 1));

const user1 = {
  name: "Kate",
  age: null,
};

const user2 = {
  name: "Kate",
  age: 25,
  hello() {
    console.log("Hello");
  },
};

const user = {
  toString() {
    return `object User`;
  },
};
// console.log(user.toString());
console.log(user1.hasOwnProperty("age"));
console.log(Object.hasOwn(user1, "age"));
console.log(Object.getOwnPropertyNames(user2));
console.log(Object.getPrototypeOf(user2));

user.isPrototypeOf(user2);

console.log(Object.getPrototypeOf(user));

Object.setPrototypeOf(user2, user);

console.log(user.isPrototypeOf(user2));

const pers = Object.create(user2, {
  name: { value: "Sam" },
  age: { value: 23 },
});

console.log(pers);
pers.hello();

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHi = function () {
  return `My name is ${this.name}`;
};

const person = new Person("Mickiy", 27);
console.log(person.sayHi());
