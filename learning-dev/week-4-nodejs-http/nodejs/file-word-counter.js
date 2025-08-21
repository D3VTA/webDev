const fs = require("fs");

const { Command } = require("commander");
const program = new Command();

program
  .name("file_stats")
  .description("CLI to count no. of words your file")
  .version("0.1.0");

program
  .command("count_words")
  .description("count no. of words in a file")
  .argument("<filepath>", "file to count")
  .action((filename, command) => {
    fs.readFile(filename, "utf-8", (err, data) => {
      if (err) console.log(err);
      count = data.split(" ").length;
      console.log(`You have ${count} words in the "${filename}" file.`);
    });
  });
program
  .command("count_lines")
  .description("count no. of words in a file")
  .argument("<filepath>", "file to count")
  .action((filename, command) => {
    fs.readFile(filename, "utf-8", (err, data) => {
      if (err) console.log(err);
      count = data.split("\n").length;
      console.log(`You have ${count} lines in the "${filename}" file.`);
    });
  });
// program.argument("<filepath>").action((filename, command) => {
//   const fs = require("fs");
//   fs.readFile(filename, "utf-8", (err, data) => {
//     if (err) console.log(err);
//     data = data.split(" ");
//     let count = 0;
//     data.forEach((ele) => ++count);
//     console.log(`You have ${count} words in the "${filename}" file.`);
//   });
// });

program.parse();
