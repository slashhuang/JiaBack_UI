var express = require('express');
var app = express();
var path = require('path');

var port=process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, '/app')));

app.use(function (req,res) {
  res.sendFile(path.join(_dirname,"./app/index.html"))
});

var server = app.listen(port, function () {
  console.log("jiaxin is on port"+port+"!")
});

var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
  socket.emit("connected");
});
