const person = {
  name: "John",
  lastName: "Doe",
  age: 32,
  license: {},
  // get fullName() {
  //   return `${this.name} ${this.lastName}`;
  // },
  // set fullName(newFullName) {
  //   const parts = newFullName.split(" ");
  //   this.firstName = parts[0];
  //   this.lastName = parts[1];
  // },
  hello: () => console.log("123"),
};

// Object.defineProperty(person, "name", {
//   value: "John",
//   writable: false,
//   enumerable: true,
//   configurable: false,
// });

// Object.defineProperties(person, {
//   name: {
//     value: "John",
//     writable: false,
//     enumerable: true,
//     configurable: false,
//   },
//   age: {
//     value: 32,
//     writable: true,
//     enumerable: true,
//     configurable: false,
//   },
// });

// // Object.preventExtensions(person);
// // Object.seal(person);
// Object.freeze(person);

// person.city = "Kharkiv";
// person.firstName = "Ivan";

// delete person.age;
// console.log(Object.isFrozen(person));

//value
//writable - boolean
//enumerable - boolean
//configurable - boolean

// person.fullName = "Jane Smith";
const person2 = { ...person, license: { ...person.license }, arr: "123" };
const person3 = Object.assign({}, person, person2);
person.license = {
  name: "123",
};
console.log(person2.license);
console.log(person3);
