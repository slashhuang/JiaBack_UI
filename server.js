/**
 * Created by aesop on 2015/9/12.
 */
var http = require('http');

var processFunc = function(req, res){
  res.end('hello，这是佳信!');
}

var server = http.createServer(processFunc);

server.listen(3000);