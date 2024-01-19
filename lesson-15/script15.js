// //Callback
// asyncFunc(a, b, (result) => {
//   console.log(result);
// });

// //Promise
// asyncFunc(a, b)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {});

// //pending - waiting
// //fulfilled - done
// //rejected - error

// resolve(value); // - request success
// reject(error); // - request error

// new Promise(function (resolve, reject) {
//   if (resolve.success) {
//     resolve(result.value);
//   } else {
//     reject("reason");
//   }
// });

// asyncFunc(a, b)
//   .then((result) => {
//     console.log(result);
//   })
//   .then((res) => new Promise().then((str) => str + res));

// async function hello() {
//   return "hello";
// }

// const a = hello();
// a.then(console.log);

// async function fetchData(num) {
//   const response = await fetch(`https://swapi.dev/api/people/${num}/`);
//   const data = await response.json();
//   return data;
// }

// console.log(fetchData(5));

async function fetchData(num) {
  try {
    const response = await fetch(`https://swapi.dev/api/people/${num}/`);
    if (!response.success) {
      throw new Error("Request s failed");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}
