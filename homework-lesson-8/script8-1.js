function summarize(num) {
  return (arg) => {
    if (arg == null) {
      return num + 1;
    }
    return num + arg;
  };
}

console.log(summarize(5)(12));

function counter(startValue, step) {
  let firstValue = startValue;

  function change() {
    return (firstValue += step);
  }

  function update(newValue) {
    firstValue = newValue;
    return firstValue;
  }

  return {
    increment: () => change(),
    decrement: () => (firstValue -= step),
    reset: () => update(startValue),
  };
}

const count = counter(7, 5);

console.log(count.increment());
console.log(count.reset());
console.log(count.decrement());
console.log(count.decrement());
console.log(count.reset());
console.log(count.decrement());
console.log(count.increment());

function sequence(fn1, fn2, ...fn) {
  let a = "mango";

  function fn1() {
    console.log(a);
  }
  function fn2() {
    fn1();
    a = a + " " + "apple";
    console.log(a);
  }
  function fn() {
    fn2();
    a = a + " " + "orange";
    console.log(a);
  }

  return () => {
    fn();
  };
}

const func = sequence();

func();
