function* fibonacci(n) {
  let a = 0,
    b = 1;
  while (a <= n) {
    let current = a;

    yield current;

    a = b + a;
    b = current;
  }
}

const fibGen = fibonacci(10);
console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);

function* flatten(arr) {
  if (Array.isArray(arr)) for (const a of arr) yield* flatten(a);
  else yield arr;
}

const nestedArr = [1, [2, 3], [4, 5, [6, 7]]];
const flattenGen = flatten(nestedArr);

console.log([...flattenGen]);

async function* asyncGenerator(promises) {
  for (const promise of promises) {
    try {
      const result = await promise;

      yield result;
    } catch (error) {
      console.error(error);
    }
  }
}

const arr = [
  new Promise((resolve) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
  new Promise((resolve, reject) =>
    setTimeout(() => reject("Error in Promise 3"), 1500)
  ),
  new Promise((resolve) => setTimeout(() => resolve(4), 500)),
];

(async () => {
  for await (const result of asyncGenerator(arr)) {
    console.log("Result:", result);
  }
})();
