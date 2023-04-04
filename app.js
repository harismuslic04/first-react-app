// var Person = function (pName) {
//   var name = pName;
//   this.getName = function () {
//     return name;
//   };
// };
// var person = new Person("Neelesh");
// console.log(person.getName());

// function randomFunc() {
//   var obj1 = { name: "Vivian", age: 45 };
//   return function () {
//     console.log(obj1.name + " is " + "awesome"); // Has access to obj1 even when the ran
//   };
// }
// var initialiseClosure = randomFunc(); // Returns a function
// initialiseClosure();

// function memoizedAddTo256() {
//   var cache = {};
//   return function (num) {
//     if (num in cache) {
//       console.log("cached value");
//       return cache[num];
//     } else {
//       cache[num] = num + 256;
//       return cache[num];
//     }
//   };
// }
// var memoizedFunc = memoizedAddTo256();
// memoizedFunc(20); // Normal return
// memoizedFunc(20); // Cached return
// memoizedFunc(30);

// function add(number) {
//   if (number <= 0) {
//     return 0;
//   } else {
//     return number + add(number - 1);
//   }
// }

// console.log(add(5));

// function Person(name, age, gender) {
//   this.name = name;
//   this.age = age;
//   this.gender = gender;
// }
// var person1 = new Person("Vivek", 76, "male");
// console.log(person1);
// var person2 = new Person("Courtney", 34, "female");
// console.log(person2);

// let string = "haris je najjaci";
// console.log(string.charAt(3));
// var obj1 = {
//   valueOfThis: function () {
//     return this;
//   },
// };
// var obj2 = {
//   valueOfThis: () => {
//     return this;
//   },
// };
// console.log(obj1.valueOfThis()); // Will return the object obj1
// console.log(obj2.valueOfThis());

// var variable1 = 23;
// let variable2 = 89;
// function catchValues() {
//   console.log(variable1);
//   console.log(variable2);
//   // Both the variables can be accessed anywhere since they are declared in the global sc
// }
// console.log(window.variable1); // Returns the value 23
// // window.variable2;

// function addFourNumbers(num1, num2, num3, num4) {
//   return num1 + num2 + num3 + num4;
// }
// let fourNumbers = [5, 6, 7, 8];
// console.log(addFourNumbers(...fourNumbers));

// function extractingArgs(...args) {
//   return args[1];
// }     da smo stavili samo args kao argument izbacio bi undefined
// console.log(extractingArgs(8, 9, 1)); // Returns 9

// function haris(a, b) {
//   return a + b;
// }
// neko = haris;
// console.log(haris(3, 5));

// function* genFunc() {
//   yield 3;
//   yield 4;
// }
// console.log(genFunc());
// console.log(genFunc().next());
// console.log(genFunc().next());
// console.log(genFunc().next());

function* iteratorFunc() {
  let count = 0;
  for (let i = 0; i < 2; i++) {
    count++;
    yield i;
  }
  return count;
}
let iterator = iteratorFunc();
console.log(iterator.next()); // {value:0,done:false}
console.log(iterator.next()); // {value:1,done:false}
console.log(iterator.next());
console.log(iterator.next());
