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
  function change() {
    return (startValue += step);
  }
  return {
    increment: () => change(),
    decrement: () => (startValue -= step),
    reset: () => startValue,
  };
}

const count = counter(3, 7);

console.log(count.increment());
console.log(count.reset());
console.log(count.decrement());

function sequence(fn1, fn2, ...fn) {
  let a = 1;

  function fn1() {
    console.log(a);
  }
  function fn2() {
    fn1();
    a = a + 1;
    console.log(a);
  }
  function fn() {
    fn2();
    a = a + 2;
    console.log(a);
  }
  function newFunc() {
    fn();
  }

  return newFunc;
}

const func = sequence();

func();
