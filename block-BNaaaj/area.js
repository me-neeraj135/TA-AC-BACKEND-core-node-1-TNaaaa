function squareArea(a) {
  return a * a;
}

function rectangleArea(length, width) {
  return length * width;
}
function circleArea(radius) {
  return Math.PI * radius ** 2;
}

module.exports = {
  squareArea: squareArea,
  rectangleArea: rectangleArea,
  circleArea: circleArea,
};
