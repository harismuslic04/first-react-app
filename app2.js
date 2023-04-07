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
//   for (var j = 4; j < 7; j++) {
//     setTimeout(() => console.log(j), 1000);
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

// const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // for (let i = 0; i < 10; i++) {
// //   setTimeout(() => console.log(b[i]), 1000);
// // }
// for (var i = 0; i < 10; i++) {
//   setTimeout(() => console.log(b[i]), 1000);
// }

// var symbol1 = Symbol("symbol");
// console.log(symbol1);

// {
//   let x = 1;
// }
// function ispis() {
//   return console.log(x);
// }
// ispis();

// (function () {
//   console.log(3);
// })();

// let text = "The best things in life are free";
// let pattern = /e/;
// let result = pattern.test(text);
// console.log(result);

// digit number codewars
// function solveExpression(exp) {
//   for (let i = 0; i <= 9; i++) {
//     const ex = exp.replace(/\?/g, i).split("=");
//     if (/--/.test(ex[0])) {
//       ex[0] = ex[0].replace(/(-([0-9]+))/g, "($1)");
//     }
//     if (/\b00|00\b/g.test(ex.join("="))) continue;
//     if (exp.includes(i)) continue;
//     if (eval(ex[0]) == ex[1]) return i;
//   }
//   return -1;
// }
// console.log(solveExpression("123?45*?=100"));

// Multiples of 3 or 5 codeward
// function solution(number) {
//   let suma = 0;
//   let niz = [];
//   if (number > 0) {
//     for (i = 1; i < number; i++) {
//       if (i % 3 == 0 && i % 5 == 0) {
//         suma += i;
//         niz.push[i];
//       } else if (i % 3 == 0 && niz.includes(i) === false) {
//         suma += i;
//       } else if (i % 5 == 0 && niz.includes(i) === false) {
//         suma += i;
//       }
//     }
//   }
//   return suma;
// }
// console.log(solution(20));

//codewar
// function arrayDiff(a, b) {
//   let i;
//   let j;
//   let novi = [];
//   if (a.length == 0) {
//     return [];
//   } else if (b.length == 0) {
//     return a;
//   } else {
//     for (i = 0; i < a.length; i++) {
//       if (b.includes(a[i]) == false) {
//         novi.push(a[i]);
//       }
//     }
//   }
//   return novi;
// }
// console.log(arrayDiff([1, 2, 3], [1, 2]));

//codewar
// var countBits = function (n) {
//   let brojac = 0;
//   let binar = n.toString(2);
//   for (let i = 0; i < binar.length; i++) {
//     if (binar[i] == 1) {
//       brojac++;
//     }
//   }
//   return brojac;
// };
// console.log(countBits(5));

//Disemvowel Trolls codewars
// function disemvowel(str) {
//   str;
//   let novi = "";
//   let i;
//   for (i = 0; i < str.length; i++) {
//     if (
//       str[i].toLowerCase() != "a" &&
//       str[i].toLowerCase() != "e" &&
//       str[i].toLowerCase() != "i" &&
//       str[i].toLowerCase() != "o" &&
//       str[i].toLowerCase() != "u"
//     )
//       novi += str[i];
//   }
//   return novi;
// }
// console.log(disemvowel("Haris je kralj"));

//ako rec ima preko 5 slova obrni je u toj recenici
// function spinWords(string) {
//   let novi = "";

//   let recenica = string.split(" ");
//   for (let i = 0; i < recenica.length; i++) {
//     if (recenica[i].length > 4) {
//       novi = novi + " " + recenica[i].split("").reverse().join("");
//     } else {
//       novi = novi + " " + recenica[i];
//     }
//   }

//   return novi.trim();
// }
// console.log(spinWords("Welcome hari sta ima liverpool najjaci"));
