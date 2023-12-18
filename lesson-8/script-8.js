// function first () {
//   console.log('inside first func');
//   second();
//   console.log('again inside first func');
// }

// function second() {
//   console.log('inside second func');
// }

// first();

// console.log('inside global execution context');

// ExecutionContext = {
//   LexicalEnviroment = <ref. to LexicalEnviroment in memory></ref. to>
//   VariableEnviroment = <ref. to VariableEnviromentEnviroment in memory></ref. to>
// }

// var e = 10;

// const a = 20;
// const b = 10;

// function foo() {
//   console.log(a);
// }

// lexicalEnviroment = {
//   a: undefined,
//   b: undefined,
//   foo: <func>
// }

// lexicalEnviroment = {
//   a: 20,
//   b: 10,
//   foo: <ref. to function>
// }

// variableEnviroment = {
//   e: 10,
// }

// let a = 20;
// const b = 30;
// var c;

// function multiply(e, f) {
//   var g = 2;
//   return e * f * g;
// }

// c = multiply(a, b);

function createCounter() {
  let counter = 0;

  return function () {
    return counter++;
  };
}

const counter = createCounter();

console.log(counter());
