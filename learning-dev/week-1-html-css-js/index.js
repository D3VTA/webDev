// const { use } = require("react");

// let firstName = "Manu";
// let age = 12;
// const isStudent = true;

// console.log(firstName);
// console.log(age);
// console.log(isStudent);

// function greet(name) {
//   return "Hello, " + name + "!";
// }

// console.log(greet(firstName));

// function add(a, b) {
//   return a + b;
// }

// console.log("The sum is: " + add(5, 10) + "\n");

// function canVote(age) {
//   if (age >= 18) return true;
//   return false;
// }

// console.log("The age is " + age + ",\ncan vote? : " + canVote(age));

// console.log("\n");

function namaste(user) {
  return user.filter((x) => x.age >= 18 && x.gender === "Male");
}

let user = [
  {
    fName: "Mrigank",
    age: 22,
    gender: "Male",
  },
  {
    fName: "Manu",
    age: 21,
    gender: "Female",
  },
  {
    fName: "Misnu",
    age: 13,
    gender: "Other",
  },
  {
    fName: "einsm",
    age: 31,
    gender: "Male",
  },
  {
    fName: "ionlm",
    age: 21,
    gender: "Other",
  },
];

let arr = namaste(user);
for (const x of arr) {
  console.log(`Hi ${x.fName}, Your age is: ${x.age}`);
}
