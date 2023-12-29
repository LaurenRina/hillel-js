// const box = {
//   type: "box",
//   items: [
//     {
//       type: "box",
//       items: [],
//     },
//     {
//       type: "box",
//       items: [
//         {
//           type: "box",
//           items: [{ type: "key" }],
//         },
//         {
//           type: "box",
//           items: [],
//         },
//       ],
//     },
//     {
//       type: "box",
//       items: [
//         {
//           type: "box",
//           items: [],
//         },
//       ],
//     },
//   ],
// };

// // iteration

// function lookForKey(box) {
//   const queue = [box];

//   while (gueue.lenght) {
//     const item = queue.shift();
//     if (item.type === "key") return item;

//     for (const innerItem of item.items) {
//       if (innerItem.type === "key") return innerItem;
//       queue.push(innerItem);
//     }
//   }
//   return null;
// }

// //recursion

// function lookForKey(item) {
//   if (item.type === "key") return item;

//   for (const subItem of item.items) {
//     const key = lookForKey(subItem);
//     if (key) return key;
//   }

//   return null;
// }

// function countdown(i) {
//   console.log(i);
//   countdown(i - 1);
// }

// const factorial = (x) => (x === 1 ? 1 : x * factorial(x - 1));

// const factorial = (x, acc = 1) => (x === 1 ? acc : factorial(x - 1, x * acc));

const multiply = (a, b, c) => a * b * c;
console.log(multiply(1, 2, 3));

const multiply1 = (a) => (b) => (c) => a * b * c;
console.log(multiply1(1)(2)(3));

function volume(l) {
  return (w, h) => {
    return l * w * h;
  };
}

const hV = volume(70);
hV(203, 142);
hV(220, 122);
