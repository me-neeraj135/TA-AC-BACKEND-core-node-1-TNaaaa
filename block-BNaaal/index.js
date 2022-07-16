var http = require(`http`);

// http
//   .createServer((request, response) => {
//     console.log(request, response);
//     response.end(`welcome`);
//   })
//   .listen(4000, `localhost`);

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  res.end(`welcome to server`);
}

server.listen(4000, () => {
  console.log(`server listing on port 4000`);
});
