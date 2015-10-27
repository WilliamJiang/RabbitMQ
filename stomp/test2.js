'use strict';

var Stomp = require('stomp-client');

var destination = '/queue/someQueueName';
var client = new Stomp('127.0.0.1', 61613, 'guest', 'guest');

client.connect(function(sessionId) {

	console.log(sessionId);

    client.subscribe(destination, function(body, headers) {
      console.log(body);
    });

});