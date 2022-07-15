var os = require(`os`);
var url = require(`url`);
var cpuS = os.cpus().length;
var freeM = os.freemem();
var upTime = os.uptime();
var version = os.version;

console.log(cpuS, freeM, freeM, upTime, version);

var { readFile } = require(`fs`);
const { syncBuiltinESMExports } = require("module");

var buff1 = Buffer.alloc(12);
var buff2 = Buffer.allocUnsafe(12);

// blocking

console.log(`call me first`);
console.time();
for (let index = 0; index < 1000; index++) {
  //   console.log(index);
}
console.timeEnd();

console.log(`call me at last`);

// non-blocking

function sum(base, increment) {
  return base + increment;
}

async function increment(base, increment) {
  let total = await sum(base, increment);
  console.log(total);
}
increment(5000, 1000);

var urlObj = url.parse(
  `https://airindia.com/fares/calculate?from=delhi&to=detroit`,
  true
);

console.log(urlObj.query);
console.log(urlObj.pathname);
console.log(urlObj.protocol);
