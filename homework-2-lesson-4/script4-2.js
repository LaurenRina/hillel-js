let N = prompt("Enter a number");
let isPrime = true;

if (N == 1) {
  console.log(`${N} is not a prime number`);
} else {
  for (let i = 2; i < N; i++) {
    if (N % i == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(`${N} is a prime number`);
  } else {
    console.log(`${N} is not a prime number`);
  }
}

let N1 = prompt("Enter a number");
let isPerfect = false;

for (let i = 1; i <= N1; i++) {
  let sum = 0;

  for (let j = 1; j < i; j++) {
    if (i % j === 0) {
      sum += j;
    }
  }
  if (sum == N1) {
    isPerfect = true;
  }
}

if (isPerfect) {
  console.log(`${N1} is a perfect number`);
} else {
  console.log(`${N1} is not a perfect number`);
}

let Nh = prompt("Enter a number");
let starNumber = 1;
let gapNumber = Nh - 1;

for (let i = 0; i < Nh; i++) {
  console.log(
    `${" ".repeat(gapNumber)}${"*".repeat(starNumber)}${" ".repeat(gapNumber)}`
  );
  starNumber += 2;
  gapNumber -= 1;
}
