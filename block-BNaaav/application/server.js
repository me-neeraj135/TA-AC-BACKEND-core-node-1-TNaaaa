let http = require(`http`);
let fs = require(`fs`);
let url = require(`url`);
let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log(req.url);
  if (req.method === `GET` && req.url === `/`) {
    res.writeHead(200, { ContentType: `text/html` });
    fs.createReadStream(`./index.html`).pipe(res);
  }

  if (req.method === `GET` && req.url === `/about`) {
    res.writeHead(200, { ContentType: `text/html` });
    fs.createReadStream(`./about.html`).pipe(res);
  }

  if (req.method === `GET` && req.url === `/reviews`) {
    res.writeHead(200, { ContentType: `text/html` });
    fs.createReadStream(`./reviews.html`).pipe(res);
  }

  if (req.url.split(`.`).pop() === `css`) {
    res.writeHead(200, { ContentType: `text/css` });
    fs.createReadStream(`.${req.url}`).pipe(res);
  }

  if (req.method === `GET` && req.url === `/images`) {
    res.setHeader(`Content-Type`, `image/jpg`);
    fs.readFile(`./assets/images`, (err, con) => {
      if (err) console.log(err);
      res.end(con);
    });
  }
}

server.listen(4000, () => {
  console.log(`server listening on port:4000`);
});
