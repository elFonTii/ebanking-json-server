require("dotenv").config();
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);
//? Body parser for PUT, POST, PATCH requests
server.use(jsonServer.bodyParser);

// Testing Endpoint
server.get("/test", (req, res) => {
  res.json({
    status: 200,
    device: req.headers["user-agent"],
    address: req.headers["x-forwarded-for"] || req.connection.remoteAddress,
    path: req.path,
    headers: req.headers,
  });
});

// Use default router
server.use(router);
server.listen(port, () => {
  console.log("Server has been started at port " + port);
  console.log("Press Ctrl+C to exit");
});
