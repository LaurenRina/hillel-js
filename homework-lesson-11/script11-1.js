function findFibonacci(n) {
  if (n <= 1) return n;
  return findFibonacci(n - 1) + findFibonacci(n - 2);
}

console.log(findFibonacci(7));

function checkPalindrome(n, step = 1) {
  let s = n + +n.toString().split("").reverse().join("");
  let r = +s.toString().split("").reverse().join("");

  if (r == s) {
    return (obj = {
      result: s,
      steps: step,
    });
  }

  return checkPalindrome(s, step + 1);
}

console.log(checkPalindrome(171));

function generateArray(arr) {
  if (arr.length === 1) return arr;
  return arr.reduce((acc, n, i) => {
    generateArray([...arr.slice(0, i), ...arr.slice(i + 1)]).map((v) =>
      acc.push([].concat(n, v))
    );
    return acc;
  }, []);
}

console.log(generateArray([1, 2, 3]));
