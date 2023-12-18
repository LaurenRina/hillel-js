function reverseArray(arr) {
  return arr.reverse();
}

const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(originalArray);

console.log(reversedArray);

function uniqueValues(arr1, arr2) {
  let arr3 = arr1.concat(arr2);
  let arr = [...new Set(arr3)];

  return arr;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const uniqueValuesArray = uniqueValues(array1, array2);

console.log(uniqueValuesArray);

function calculateAverageGrade(persons) {
  let averageGrade =
    persons.reduce((prev, person) => prev + person.grade, 0) / persons.length;

  return averageGrade.toFixed(1);
}

const students = [
  { name: "Alice", age: 20, grade: 4.5 },
  { name: "Bob", age: 21, grade: 3.9 },
  { name: "Charlie", age: 19, grade: 4.8 },
];

console.log(calculateAverageGrade(students));
