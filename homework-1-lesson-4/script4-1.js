let number = prompt("Enter a number");

if (number % 3 == 0 && number % 5 == 0) {
  console.log("FizzBuzz");
} else if (number % 3 == 0) {
  console.log("Fizz");
} else if (number % 5 == 0) {
  console.log("Buzz");
} else {
  console.log("");
}

let year = prompt("Year?");

(year % 4 == 0 && year % 100 != 0) || (year % 100 == 0 && year % 400 == 0)
  ? console.log("Leap year")
  : console.log("Ordinary year");

let age = prompt("How old are you?");

if (age >= 10 && age <= 20) {
  console.log(`Вам ${age} років`);
} else if (age == 1 || age % 10 == 1) {
  console.log(`Вам ${age} рік`);
} else if ((age >= 2 && age <= 4) || (age % 10 >= 2 && age % 10 <= 4)) {
  console.log(`Вам ${age} роки`);
} else {
  console.log(`Вам ${age} років`);
}
