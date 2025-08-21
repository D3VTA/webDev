// ECMASCRIPT -> it is the parent or main script/rule for all the js language development, sits on top of nodejs, bun etc.
// to start any nodeJS project -> npm init -y
// -> it will create package.json
// -> for rust it creates cargo.toml
// -> for java pom.xml
//

// const chalk = require("chalk");
// import chalk from "chalk";

function sum(a, b) {
  return a + b;
}
console.log(sum(2, 3));

const path = require("path");

console.log(__dirname);
console.log(path.join(__dirname, "1-index.js"));

const fs = require("fs");
fs.readFile("file.txt", "utf-8", (err, data) => {
  data = data.split(" ").length;
  // let count = 0;
  // data.forEach((ele) => ++count);
  console.log(data);
});
// console.log(chalk);
// console.log(chalk.blue("Hello world"));
