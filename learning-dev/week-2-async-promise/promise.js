const PromiseOne = new Promise(function (resolve, reject) {
  //Do async task
  // do database calls, fileReads, cryptography, network calls
  console.log("Hi 3 sec timeout is set");
  setTimeout(function () {
    console.log("Hi 3 sec timeout is Completed");
    resolve("3Sec rule");
  }, 3000);
});

function threeSecondWalaTimeout(data) {
  console.log(`Kaisa lga - ${data} - wala timeout function`);
}
PromiseOne.then(threeSecondWalaTimeout);

// -----------------------------------------  //

async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(await response.json());
  } catch (error) {
    console.log("E: ", error);
  }
}

getAllUsers();

// ---------------------------------------------------------- //
input = "https://jsonplaceholder.typicode.com/users";
fetch(input)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
