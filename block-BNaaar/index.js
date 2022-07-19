let http = require(`http`);
let url = require(`url`);

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  let parseUrl = url.parse(req.url);
  let pathname = parseUrl.pathname;

  if (req.method === `GET` && pathname === `/`) {
    res.end(`Welcome to homepage`);
  } else if (req.method === `GET` && pathname === `/about`) {
    res.writeHead(200, { ContentType: `text/html` });
    res.end(`<h2>this is all about Nodejs</h2>`);
  } else if (req.method === `POST` && pathname === `/about`) {
    res.writeHead(200, { ContentType: `application / json ` });
    res.end(`{message: this is a post request}`);
  } else {
    res.writeHead(404, { ContentType: `text/html` });
    res.end(`page not found`);
  }
}
server.listen(5000, () => {
  console.log(`server listening on port : 5000`);
});
