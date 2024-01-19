function randomDelayPrint(message) {
  for (let i = 0; i < message.length; i++) {
    setTimeout(() => {
      console.log(`${message.charAt(i)}`);
    }, Math.random() * 1000);
  }
}

randomDelayPrint("Hello");

function debounce(fun, t) {
  let timeoutId;
  return () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(fun, t);
  };
}

const expensiveOperation = () => console.log("Виконую складну операцію...");
const debouncedExpensiveOperation = debounce(expensiveOperation, 1000);
debouncedExpensiveOperation();
debouncedExpensiveOperation();
debouncedExpensiveOperation();

function intervalRace(arr, t) {
  const results = [];

  let int = setInterval(() => {
    for (let i = 0; i < arr.length; i++) {
      arr[i]();
      let func = arr[i];
      results.push(func());
    }
    if ((i = arr.length)) {
      clearInterval(int);
    }
  }, t);

  console.log(results);
}

let array = [
  () => {
    return 1;
  },
  () => {
    return 1 + 1;
  },
  () => {
    return 1 + 2;
  },
];

intervalRace(array, 1000);
