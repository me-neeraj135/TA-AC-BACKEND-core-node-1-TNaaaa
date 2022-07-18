let http = require(`http`);

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log(req.method);
  //   res.statusCode = 201;
  //   res.setHeader(`content-type`, `Text/html`);

  res.writeHead(200, { ContentType: `Text/html` });
  res.write(`<h1>welcome to hello world</h1>`);
  res.end();
}
server.listen(4444, () => {
  console.log(`server listening on port: 4444`);
});
