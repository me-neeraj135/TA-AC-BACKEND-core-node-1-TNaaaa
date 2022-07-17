let http = require(`http`);

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log(req.headers);
  console.log(req.method);
  console.log(req.url);

  res.end(`welcome`);
}

server.listen(4000, () => {
  console.log(`server listening on port 4000:`);
});
