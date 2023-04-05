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

// function* iteratorFunc() {
//   let count = 0;
//   for (let i = 0; i < 2; i++) {
//     count++;
//     yield i;
//   }
//   return count;
// }
// let iterator = iteratorFunc();
// console.log(iterator.next()); // {value:0,done:false}
// console.log(iterator.next()); // {value:1,done:false}
// console.log(iterator.next());
// console.log(iterator.next());

// const classDetails = {
//   strength: 78,
//   benches: 39,
//   blackBoard: 1,
// };
// const {
//   strength: classStrength,
//   benches: classBenches,
//   blackBoard: classBlackBoard,
// } = classDetails;
// console.log(classStrength); // Outputs 78
// console.log(classBenches); // Outputs 39
// console.log(classBlackBoard);

// var scope = "global scope";
// function check() {
//   var scope = "local scope";
//   function f() {
//     return scope;
//   }
//   return f;
// }

// let x = {},
//   y = { name: "Ronny" },
//   z = { name: "John" };
// x[y] = { name: "Vivek" };
// x[z] = { name: "Akki" };
// console.log(x[y]);

// (function (a) {
//   return (function () {
//     console.log(a);
//     a = 23;
//   })();
// })(45);

// function bigFunc(element) {
//   let newArray = new Array(700).fill("♥");
//   // console.log(newArray);
//   return newArray[element];
// }
// console.log(bigFunc(599)); // Array is created
// console.log(bigFunc(670));
// console.log(bigFunc(750));

// function randomFunc() {
//   for (let i = 0; i < 2; i++) {
//     setTimeout(() => console.log(i), 1000);
//   }
//   for (let j = 4; j < 7; j++) {
//     console.log(j);
//   }
// }
// randomFunc();

// function makeFunc() {
//   const name = "Mozilla";
//   function displayName() {
//     console.log(name);
//   }
//   return displayName;
// }

// const myFunc = makeFunc();
// myFunc();

// function randomFunc() {
//   var obj1 = { name: "Vivian", age: 45 };
//   return function () {
//     console.log(obj1.name + " is " + "awesome"); // Has access to obj1 even when the ran
//   };
// }
// var initialiseClosure = randomFunc(); // Returns a function
// initialiseClosure();

// function randomFunc() {
//   for (var i = 0; i < 2; i++) {
//     (function (i) {
//       setTimeout(() => console.log(i), 1000);
//     })(i);
//   }
// }
// randomFunc();

// const str = "The quick brown fox jumps over the lazy dog.";

// const words = str.split(" ");
// console.log(words);

// const array1 = [1, 7, 3, , 100000];
// array1.sort();
// console.log(array1);

// var firstWord = "Deepak";
// var secondWord = "Aman";
// // isAnagram(wordOne, wordTwo); // true
// function isAnagram(one, two) {
//   //Change both words to lowercase for case insensitivity..
//   var a = one.toLowerCase();
//   var b = two.toLowerCase();
//   // Sort the strings, then combine the array to a string. Examine the outcomes.
//   a = a.split("").sort().join("");
//   b = b.split("").sort().join("");
//   return a === b;
// }
// console.log(isAnagram(firstWord, secondWord));
