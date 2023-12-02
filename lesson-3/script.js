var name;

var obj = {
  name: "Kate",
  age: 26,
  female: true,
  test: {
    a: 1,
    b: false,
  },
};

var obj1 = {};

var obj2 = new Object();
obj2.name = "Anna";

obj.ihor = {
  name: "Ihor",
  age: 18,
};

//console.log(obj);

var arr = [1, 2, 3, "string", { name: "Kate", age: 26 }, true];

var arr2 = new Array(1, 2, 3);

//console.log(arr.length);

var a = 1;
a *= 2;
//console.log(a);

var condition = (true && false) || (true && true);
//condition ? console.log("Condition is true") : console.log("Condition is false");

//const name = "Kate";

let a;
let a = 2;

function getName() {
  var name = "Taras";
  console.log(name);
}

console.log(name);
if (a > 2) {
  var name = "Andriy";
  console.log(name);
}
