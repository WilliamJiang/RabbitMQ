var Stomp = require('stompjs');

//var client = Stomp.overTCP('localhost', 61613);

var client = Stomp.overWS('ws://localhost:61614');

console.log(client);

 var connect_callback = function() {
    // called back after the client is connected and authenticated to the STOMP server
  };


client.connect({
      login: 'guest',
      passcode: 'guest'
    }, function() {
	
	console.log(client);

  client.subscribe('/queue/someQueueName', function(message) {
    console.log('is there a nodeTest publisher?');
  });
});


