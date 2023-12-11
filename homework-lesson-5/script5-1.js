function reverseString(str) {
  return str.split("").reverse().join("");
}

function isPalindrome(str) {
  let isPalindrome = false;
  let strReversed = str.split("").reverse().join("");
  let strChars = str.split(" ").join("");
  let strReversedChars = strReversed.split(" ").join("");

  if (strChars == strReversedChars) {
    isPalindrome = true;
  }

  return isPalindrome;
}

function findGCD(a, b) {
  if (a == 0) return b;

  while (b != 0) {
    if (a > b) a = a - b;
    else b = b - a;
  }

  return a;
}
