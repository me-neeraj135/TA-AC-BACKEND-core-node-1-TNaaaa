var urlObj = url.parse(
  `https://airindia.com/fares/calculate?from=delhi&to=detroit`,
  true
);

console.log(urlObj.query);
console.log(urlObj.pathname);
console.log(urlObj.protocol);
