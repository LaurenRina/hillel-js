// const arr = [5, 2, 4, 1, 3];
// let arrSorted = arr.sort((a, b) => a - b);

// console.log(arr.find((number) => number > 3));

// const me = {
//   name: "Kate",
// };

// const you = {
//   name: "Andriy",
// };

// function identify(context) {
//   return context.name.toUpperCase();
// }

// function speak(context) {
//   return `Hello, I'm ${identify(context)}`;
// }

// console.log(identify(you));
// console.log(speak(me));

// // - оголошення baz
// function baz() {
//   //call stack 'baz', call point - global scope
//   console.log("baz");
//   bar(); //- точка виклику bar
// }

// // - оголошення bar
// function bar() {
//   //call stack 'baz' > 'bar', call point - baz
//   console.log("bar");
//   foo(); //- точка виклику foo
// }

// // - оголошення foo
// function foo() {
//   //call stack 'bar' > 'bar' > 'foo', call point - baz
//   console.log("foo");
// }

// bar(); //- точка виклику baz

// function foo(a) {
//   this.a = a;
// }

// const baz = new foo(42);

// console.log(baz.a);

const strArray = ["JavaScript", "Python", "PHP", "Java", "C"];

const checkLength = (item) => item?.length;

const mapStrs = (arr, fn) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i]));
  }
  return newArr;
};

const newArr = mapStrs(strArray, checkLength);

console.log(newArr);


