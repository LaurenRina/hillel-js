// function* generateSequence() {
//   yield 1;
//   yield 2;
//   yield 3;
//   return 57;
//   yield 4;
// };

// const generator = generateSequence();
// const values = [...generator];
// console.log(values);

// for (const value of generator) {
//   console.log(value);
// }

// console.log(generator.next());
// console.log(generator.return());
// console.log(generator.next());
// console.log(generator.next());

// function* culc(startValue = 2) {
//   let acc = startValue;
//   while (true) {
//     const input = yield acc;
//     if (input) {
//       return (acc += input);
//     } else {
//       return acc;
//     }
//   }
// }

// const calculator = calc();

// console.log(calculator());
// console.log(calculator(2));
// console.log(calculator(40));

// function* generateNames() {
//   try {
//     yield "K";
//     yield "L";
//     yield "R";
//   } catch (error) {
//     console.error(error);
//   }
// }

// const personGen = generateNames();

// console.log(personGen.next());
// personGen.throw(new Error("Smth went wrong"));
// console.log(personGen.next());

// Symbol.asyncIterator

// let range = {
//   from: 1,
//   to: 5,

//   [Symbol.asyncIterator]() {
//     return {
//       current: this.from,
//       last: this.to,

//       async next() {
//         await new Promise((resolve) => setTimeout(resolve, 2000));
//         if (this.current <= this.last) {
//           return {
//             done: false,
//             value: this.current++,
//           };
//         } else {
//           return {
//             done: true,
//           };
//         }
//       },
//     };
//   },
// };

// let range = {
//   from: 1,
//   to: 5,

//   [Symbol.asyncIterator]() {
//     return {
//       current: this.from,
//       last: this.to,

//       next() {
//         if (this.current <= this.last) {
//           return Promise.resolve({
//             done: false,
//             value: this.current++,
//           });
//         } else {
//           return Promise.resolve({
//             done: true,
//           });
//         }
//       },
//     };
//   },
// };

// async function printNumbers() {
//   for await (let value of range) {
//     console.log(value);
//   }
// }

// printNumbers();

// async function* generateSequence(start, end) {
//   for (let i = start; i <= end; i++) {
//     await new Promise((resolve) => setTimeout(resolve, 2000));

//     yield i;
//   }
// }

// async function printNumbers(start, end) {
//   let generator = generateSequence(start, end);
//   for await (const value of generator) {
//     console.log(value);
//   }
// }

// printNumbers(1, 10);

let range = {
  from: 1,
  to: 5,

  async *[Symbol.asyncIterator]() {
    for (let value = this.from; value <= this.to; value++) {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      yield value;
    }
  },
};

async function printNumbers() {
  for await (const value of range) {
    console.log(value);
  }
}

printNumbers(1, 10);
