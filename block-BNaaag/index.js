function sum(a, b) {
  return a + b;
}

function square(num) {
  return num * num;
}

var constants = {
  PI: 3.14,
  sin0: 0,
  cos0: 1,
};

console.log(`call me first`);

setTimeout(() => {
  console.log(`wait for 3s`);
}, 3000);

console.log(`call me at last`);

let fileSystem = require(`fs`);

// fileSystem.readFile(`./index.md`, (err, file) => {
//   console.log(err, file.toString());
// });

let buff1 = Buffer.alloc(10);
buff1.write(`welcome to buffer`);
console.log(buff1.toString());

// module.exports = {
//   sum: sum,
//   square: square,
//   constants: constants,
//   first: console.log(`call me first`),
//   wait: setTimeout(() => {
//     console.log(`wait for 3s`);
//   }, 3000),
//   last: console.log(`call me at last`),
// };
