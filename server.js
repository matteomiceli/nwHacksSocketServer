const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});
const port = process.env.PORT || 8080;

const socket = require('./src/controllers/socket');


app.get("/", (req, res) => {
  res.send('Socket Server API: connection on /user/:id');
});

app.get("/user/:id", (req, res) => {
  const id = req.params.id
  res.send('test ' + id);
});

// socket logic
socket(io)

server.listen(port, () => {
  console.log("listening on localhost:port")
});
