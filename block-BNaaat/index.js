let fs = require(`fs`);
let http = require(`http`);
let url = require(`url`);
let server = http.createServer(handleRequest);
function handleRequest(req, res) {
  let parseUrl = url.parse(req.url);
  let pathname = parseUrl.pathname;
  if (req.method === `GET` && pathname === `/`) {
    res.write(`Welcome to Index page!`);
    res.end();
  } else if (req.method === `GET` && pathname === `/file`) {
    res.setHeader(`content-type`, `text/html`);
    fs.readFile(`./index.html`, (err, content) => {
      if (err) console.log(err);
      res.end(content);
    });
  } else if (req.method === `GET` && pathname === `/stream`) {
    res.writeHead(200, { ContentType: `text / html` });

    fs.createReadStream(`./index.html`).pipe(res);
  }
}

server.listen(5555, () => {
  console.log(`server listening on port:5555`);
});
