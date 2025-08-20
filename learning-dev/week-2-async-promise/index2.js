// // // // // Classes & Objects
// // // // // Object-Oriented Programming (OOP) in JavaScript

// // // // class Rectangle {
// // // //   constructor(length, width, color) {
// // // //     this.length = length;
// // // //     this.width = width;
// // // //     this.color = color;
// // // //   }
// // // //   area() {
// // // //     const area = this.length * this.width;
// // // //     console.log(this);
// // // //     return area;
// // // //   }
// // // //   paint() {
// // // //     console.log(`Painthig with ${this.color} color`);
// // // //   }
// // // //   destroy() {}
// // // // }

// // // // const rect = new Rectangle(5, 2, "Red");
// // // // const area = rect.area();
// // // // rect.paint();
// // // // console.log(area);
// // // // rect.destroy();

// // // // Date Class
// // // const now = new Date();
// // // console.log(now.toLocaleTimeString());
// // // // Map Class
// // // const map = new Map();
// // // map.set("firstName", "Manu");
// // // map.set("age", 22);

// // // console.log(`${map.get("firstName")} age is: ${map.get("age")}`);

// // // Promise Class
// // // // defining a promise is hard whhereas using it is easy.
// // // setTimeout(callback, 2 * 1000); //callback approach

// // function printName() {
// //   console.log("My name is Manu");
// // }

// // function setTimeoutPromisified(duration) {
// //   return new Promise((resolve) => {
// //     setTimeout(resolve, duration);
// //   });
// // }

// // setTimeoutPromisified(1 * 1000).then(printName); // promisifed approach
// // ____________________________________________________________________________________;
// // function main() {
// //   console.log("Hi There!");
// // }
// // let p = new Promise(main);
// // console.log(p);

// // Output
// // mrigankmanu@MacBookPro week-2-async-promise % node index2.js
// // Hi There!
// // Promise { <pending> }
// // ____________________________________________________________________________________;
// // function main(resolve) {
// //   console.log("Hi There!");
// //   setTimeout(resolve, 4000);
// // }
// // let p = new Promise(main);
// // console.log(p);
// // function callback() {
// //   console.log("Promise succeeded");
// // }
// // p.then(callback);

// const fs = require("fs");

// function readTheFile(fileName) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(fileName, "utf-8", (err, data) => {
//       if (err) {
//         reject(err);
//         return;
//       }
//       resolve(data);
//     });
//   });
// }

// const p = readTheFile("aa.txt");

// function callback(contents) {
//   console.log(contents);
// }

// p.then(callback).catch((err) => {
//   console.error("Failed to read file:", err);
// });

// function readTheFile(fileName) {
//   fs.readFile("a.txt", "ut", callback);
// }

// function promisifedReadFile(fileName) {
//   return (p = new Promise((resolve) => {}));
// }
// p.then(callback);

// // Barebone Promise class/interface

// class Promise {
//   constructor(fn) {
//     this.fn = fn;
//     this.fn(() => {
//       this.resolve();
//     });
//   }
//   then(callback) {
//     this.resolve = callback;
//   }
// }

// const promisifiedSetTimeOut = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("resolve ka data/ op-data hai");
//   }, 3000);
// });

// promisifiedSetTimeOut.then((data) => {
//   console.log(data);
// });
// function promiseFn(resolve) {
//   let c = 0;
//   for (let i = 0; i < 1000000000; ++i) {
//     ++c;
//   }
//   resolve("done");
// }

// const p = new Promise(promiseFn);

// p.then(callback);

function setTimeoutPromisified(ms, data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, ms * 1000);
  });
}
// setTimeoutPromisified(3).then(() => console.log("Hi There"));
let amt = 0;
for (let i = 1; i <= 365; ++i) {
  amt += i;
  console.log(amt);
}

const data = await setTimeoutPromisified(3, "rData");
console.log("Hi there " + data + " " + amt);
