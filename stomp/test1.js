#! node

var Stomp = require('stompjs');

var client = Stomp.overTCP('localhost', 61613);

console.log(client);