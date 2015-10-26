var Stomp = require('stompjs');

var client = Stomp.overTCP('localhost', 61613);

//var client2 = Stomp.overWS('ws://localhost:61614');
