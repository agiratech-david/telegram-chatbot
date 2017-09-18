var express = require('express');
var app = express();
const request = require('request');
var http = require('http');
// connect node lib for the telegram
var TelegramBot = require('node-telegram-bot-api');
var bot = new TelegramBot('428231486:AAFMaaaB3fls5VczjVHkgPy5AIBAiwViKRs', {
    polling: true
});

app.use(express.static(__dirname + '/public'));

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(8080, 'APP_PRIVATE_IP_ADDRESS');
console.log('Server running at http://APP_PRIVATE_IP_ADDRESS:8080/');