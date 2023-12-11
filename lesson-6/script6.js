// const dynamicKey = "age";

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   [dynamicKey]: 30,
//   isStudent: false,
//   greet() {
//     return `Hello, my name is ${this.firstName}`;
//   },
//   license: {
//     number: "1234",
//     seria: "US",
//     org: {
//       country: "UA",
//       region: "Kyiv",
//     },
//   },
// };

// const person2 = new Object();

// person2.firstName = "John";
// person2.lastName = "Doe";
// person2[dynamicKey] = 32;
// person2.greet = function () {
//   return `Hello, my name is ${this.firstName}`;
// };
// person2.lastName = "Does";
// delete person2.lastName;

// // Object.create();
// // Object.assign();

// class User {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
// }

// const user = new User("John", "Doe");

// const {
//   greet,
//   license: {
//     seria: string = 0,
//     org: { country = 0 },
//   },
// } = person;

// const person3 = {
//   ...person,
//   firstName: "Andriy",
//   gender: "male",
// };

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(country);
// console.log(person3);

// const arr = [1, 2];
// const arr2 = new Array(1, 2, 3);

// // delete arr[2];

// const [a, ...rest] = arr;

// const arr3 = [...arr2, 4, 5];

// const A = arr3.map((item) => item + 1);
// const B = arr3.forEach((item) => console.log(item + 1));
// const C = arr3.filter((item) => item >= 3);
// const D = arr3.some((item) => item >= 5);
// const E = arr3.every((item) => item >= 2);

// console.log(D);
// console.log(E);
