// const sayHi = (phrase, name) => console.log(`${phrase} ${name}`);

// let timer;
// let timer2;
// timer = setTimeout(sayHi, 2500, "Hello", "Kate1");
// timer2 = setTimeout(sayHi, 5000, "Hello", "Kate2");

// setTimeout(clearTimeout, 3000, timer2);

const sayHi = (phrase, name, timer) => {
  console.log(`${phrase} ${name}`);
};

let timer;
timer = setInterval(sayHi, 1000, "Hello", "Kate2", timer);

clearInterval(timer);

let timer2 = setTimeout(function tick() {
  timer2 = setTimeout(tick, 2000);
}, 2000);
