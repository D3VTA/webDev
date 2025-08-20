function setTimeoutPromisified(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms * 1000);
  });
}

setTimeoutPromisified(1)
  .then(() => console.log(`Hi`))
  .then(() => setTimeoutPromisified(3))
  .then(() => console.log(`hello`))
  .then(() => setTimeoutPromisified(5))
  .then(() => console.log("hello there"));
