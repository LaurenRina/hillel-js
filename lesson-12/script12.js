// const methodName = "getAge";

// class User {
//   static TYPE = "User";
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   role = "admin";
//   #status = "active";

//   sayHi() {
//     console.log(this.name);
//   }

//   [methodName]() {
//     console.log(this.age);
//   }
// }

// class User2 {}

// const user = new User("Vasyl", 23);
// const user2 = new User("Misha", 26);
// const user3 = new User2();
// console.log(user[methodName]());
// console.log(User.TYPE);

// user.sayHi();

class Animal {
  constructor(nickname) {
    this.nickname = nickname;
  }
  makeSounds() {
    console.log("The animal's sounds");
  }
  run() {
    console.log("The animals running");
  }

  jump() {
    console.log("The animals jumping");
  }
}

class Cat extends Animal {
  constructor(nickname, breed) {
    super(nickname);
    this.breed = breed;
  }
  makeSounds() {
    console.log(`${this.nickname} say meow`);
  }
  voice() {
    console.log(`${this.nickname} say meow`);
  }

  fetch() {
    console.log(`${this.breed} fetch a ball`);
  }
}

const bird = new Animal();
const cat = new Cat("Sam", "dvor");

console.log(bird);
console.log(cat instanceof Animal);
