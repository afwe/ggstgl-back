var http=require('http');
var express=require('express');
var serveIndex=require('serve-index');
var exapp=express();
console.log('server-index on');
exapp.use(serveIndex('./img'));
exapp.use(express.static('./img'));
var server=http.createServer(exapp);
server.listen(8880,'0.0.0.0');
