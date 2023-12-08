function checkAge(age) {
  if (age > 18) {
    return true;
  }
  return false;
}

// let a = 12;
// let b = "4,645";

// function sum(a = 1, b = 5) {
//   // a = 15;
//   //   console.log(parseFloat(a) + parseFloat(b));
//   return parseFloat(a) + parseFloat(b);
// }

// // function sum(firstData, lastData) {
// //   return parseFloat(firstData) + parseFloat(lastData);
// // }

// const c = sum(5, 10);

// console.log(c);

// function step(a, b, ...args) {
//   let sum = 0;
//   sum = a + b;
//   for (let num of args) {
//     sum += num;
//   }
//   return sum;
// }

// console.log(step(1, 2, 3, 4, 5, 6, 7));

// function step() {
//   let sum = 0;

//   for (let num of arguments) {
//     sum += num;
//   }
//   return sum;
// }

// console.log(step(1, 2, 3, 4, 5, 6, 7));

// const sum = function sum(a = 1, b = 5) {
//   return parseFloat(a) + parseFloat(b);
// };

// const sum1 = (a = 1, b = 5) => parseFloat(a) + parseFloat(b);

// const c = sum;
// console.log(c(12, 4));

// const person = {
//   name: "Kate",
//   age: 26,
//   greet: function () {
//     return `Hello, my name is ${this.name}, I am ${this.age} years old`;
//   },
// };

// console.log(person.greet());

// function counter() {
//   let count = 0;

//   return function () {
//     count++;
//     return count;
//   };
// }

// const increment = counter();

// console.log(increment());
// console.log(increment());

// console.log(Number.isFinite(1));
// console.log(Number.isInteger(1, 2));
// console.log(Number.isNaN(NaN));
// console.log(Number.isSafeInteger(1));
// console.log(Number.parseFloat(1.456));
// console.log(Number.parseInt(1.456));

// const a = 12123.56789;
// console.log(a.toFixed(2));
// console.log(a.toPrecision(4));


