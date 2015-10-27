'use strict';

//var socket = new SockJS('locahost');
var stompClient = Stomp.overWS('ws://localhost:61614');

stompClient.connect({}, function() {
  stompClient.subscribe('/queue/someQueueName', function(message) {
    console.log('is there a nodeTest publisher?');
  });
});