var os = require(`os`);
var url = require(`url`);
var cpuS = os.cpus().length;
var freeM = os.freemem();
var upTime = os.uptime();
var version = os.version;

console.log(cpuS, freeM, freeM, upTime, version);

var { readFile, readFileSync, unlink } = require(`fs`);
const { syncBuiltinESMExports } = require("module");

var sync = readFileSync(`./area.js`);
readFile(`./app.js`, `utf8`, (err, content) => {
  console.log(err, content);
});

// blocking

// console.log(`call me first`);
// console.time();
// for (let index = 0; index < 1000; index++) {
//   //   console.log(index);
// }
// console.timeEnd();

// console.log(`call me at last`);

// non-blocking

// function sum(base, increment) {
//   return base + increment;
// }

// async function increment(base, increment) {
//   let total = await sum(base, increment);
//   console.log(total);
// }
// increment(5000, 1000);


