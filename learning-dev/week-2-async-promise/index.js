// // // function firstSum(n) {
// // //   return (n * (n + 1)) / 2;
// // // }
// // // const num = process.env.number;
// // // console.log(firstSum(parseInt(num)));

// // // let fs = require("fs");

// // // fs.readFileSync("a.txt", "utf-8");
// // //  fs.readFileSync("b.txt", "utf-8");
// // // console.log(contents);
// // // console.log(contents2);

// // //Functional Arguements

// // function sum(a, b) {
// //   return a + b;
// // }
// // function sub(a, b) {
// //   return a - b;
// // }
// // function mul(a, b) {
// //   return a * b;
// // }
// // function div(a, b) {
// //   return a / b;
// // }

// // function operation(a, b, func) {
// //   return func(a, b);
// // }

// // console.log(operation(9, 5, div));

// //readFile -> but Async
// //

// const fs = require("fs");
// function print(err, data) {
//   if (err) console.log("File not found!" + err + " <- This is the error");
//   console.log(data);
// }
// fs.readFile("aa.txt", "utf-8", print);
// fs.readFile("ba.txt", "utf-8", print);

// console.log("Done!");

// // readFile(path, options, callback);

function timeout() {
  console.log("Click the button");
}

console.log("Hi");

// setTimeout(timeout, 1 * 1000);
// Promisified vesrion of setTimeout
function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
wait(1 * 1000).then(timeout);
console.log("bye");

let c = 0;
for (let i = 0; i < 10000000000; ++i) {
  c += 1;
}
console.log("Counted to " + c);
