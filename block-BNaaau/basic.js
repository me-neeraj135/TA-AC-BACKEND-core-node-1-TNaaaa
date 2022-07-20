const { rmSync } = require("fs");
let http = require(`http`);

// let server = http.createServer(handleRequest);

// function handleRequest(req, res) {
//   console.log(req, res);
// }

// server.listen(5000, () => {
//   console.log(`listening on 5k`);
// });

// ----------------

let nodeServer = http.createServer(handleRequest);

// function handleRequest(req, res) {
//   res.writeHead(200, { ContentType: `application/node` });

//   res.end(`{ message: My first server in NodeJS }`);
// }

// nodeServer.listen(5100, () => {
//   console.log(`listening on 5100`);
// });

// -------------------

// function handleRequest(req, res) {
//   console.log(req.headers);
// }
// nodeServer.listen(5555, () => {
//   console.log(`server listening on 5555`);
// });

// ------------

let url = require(`url`);
const { runInNewContext } = require("vm");

// function handleRequest(req, res) {
//   let parseUrl = url.parse(req.url);

//   console.log(req.url, req.method);

//   res.end(`${req.url},${req.method}`);
// }
// nodeServer.listen(5566, () => {
//   console.log(`server listening on 5566`);
// });

// function handleRequest(req, res) {
//   let parseUrl = url.parse(req.url);

//   res.end(`${req.headers}`);
// }
// nodeServer.listen(7000, () => {
//   console.log(`server listening on 7000`);
// });

// --------------------------

// function handleRequest(req, res) {
//   res.statusCode = 202;

//   //   console.log();
//   res.end(`${res.statusCode}`);
// }
// nodeServer.listen(3333, () => {
//   console.log(`server listening on 3333`);
// });

// ---------------------------

// function handleRequest(req, res) {
//   //   res.setHeader(`content-type`, `text/html`);

//   res.writeHead(202, { ContentType: `application/node` });
//   res.end(`<h3>Welcome to altcampus</h3>`);
// }

// nodeServer.listen(8000, () => {
//   console.log(`server listening on 8000`);
// });

// --------------------------

// function handleRequest(req, res) {
//   res.writeHead(202, { ContentType: `application/json` });
//   res.end(`{ success: true, message: "Welcome to Nodejs" }`);
// }

// nodeServer.listen(8888, () => {
//   console.log(`server listening on 8888`);
// });

// ---------------------------

// function handleRequest(req, res) {
//   console.log(req.url);
//   res.writeHead(202, { ContentType: `application/json` });
//   res.end(`<h2>posted for first time</h2>`);
// }

// nodeServer.listen(5050, () => {
//   console.log(`server listening on 5050`);
// });

// -------------------------

// function handleRequest(req, res) {
//   let parseUrl = url.parse(req.url);
//   let pathname = parseUrl.pathname;

//   if (req.method === `GET` && pathname === `/`) {
//     res.setHeader(`content-type`, `text/plain`);
//     res.end(`<h2>Hello Suraj !</h2>`);
//   } else if (req.method === `GET` && pathname === `/about`) {
//     res.setHeader(`content-type`, `text/html`);
//     res.end(`<h2>Hello about, !</h2>`);
//   } else {
//     res.writeHeader(404, { ContentType: `application/json` });
//     res.end(`<h3>status-${res.statusCode} not found</h3>`);
//   }
// }

// nodeServer.listen(2345, () => {
//   console.log(`server listening on 2345`);
// });

// -------------------------------

let fs = require(`fs`);

// function handleRequest(req, res) {
//   let parseUrl = url.parse(req.url);
//   let pathname = parseUrl.pathname;

//   if (req.method === `GET` && pathname === `/user`) {
//     res.setHeader(`content-type`, `text/html`);

//     fs.createReadStream(`./user.html`).pipe(res);
//   } else if (req.method === `POST` && pathname === `/user`) {
//     res.writeHeader(202, { ContentType: `application/jason` });
//     res.end(`<h2>Posted for the second time !</h2>`);
//   } else {
//     res.writeHeader(404, { ContentType: `application/json` });
//     res.end(`<h3>status-${res.statusCode} not found</h3>`);
//   }
// }

// nodeServer.listen(2345, () => {
//   console.log(`server listening on 2345`);
// });

function handleRequest(req, res) {
  let parseUrl = url.parse(req.url);
  let pathname = parseUrl.pathname;

  let email = parseUrl.query;
  console.log(email);

  res.end(email);
}

nodeServer.listen(2345, () => {
  console.log(`server listening on 2345`);
});
