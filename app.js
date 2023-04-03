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
