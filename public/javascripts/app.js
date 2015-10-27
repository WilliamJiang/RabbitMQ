'use strict';

var ws;
if (location.search == '?ws') {
  ws = new WebSocket('ws://' + window.location.hostname + ':15674/ws');
} else {
  ws = new SockJS('http://' + window.location.hostname + ':15674/stomp');
}
var client = Stomp.over(ws);


// var stompClient = Stomp.over(ws);

// stompClient.connect({}, function() {
//   stompClient.subscribe('/queue/someQueueName', function(message) {
//     console.log('is there a nodeTest publisher?');
//   });
// });

var client = Stomp.over(ws);

// SockJS does not support heart-beat: disable heart-beats
if (location.search != '?ws') {
  client.heartbeat.incoming = 0;
  client.heartbeat.outgoing = 0;
}


var on_connect = function(x) {
  client.subscribe("/queue/someQueueName", function(m) {
  	console.log('bingo, target.', m);
  });
};

var on_error =  function() {
	console.log('error');
};

client.connect('guest', 'guest', on_connect, on_error, '/');