var areas = require(`./area`);
console.log(areas.squareArea(5));
console.log(areas.rectangleArea(10, 15));
console.log(areas.circleArea(7));

var buff1 = Buffer.alloc(12);
var buff2 = Buffer.allocUnsafe(12);

buff1.write(`welcome to node.js`);
console.log(buff1.toString());
