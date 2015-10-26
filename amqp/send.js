#! node
var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(err, conn) {
  conn.createChannel(function(err, ch) {
    var q = 'hello';

    ch.assertQueue(q, {durable: false});
    ch.sendToQueue(q, new Buffer('Hello World from William Jiang!'));
    console.log(" [x] Sent 'Hello World'");

    ch.sendToQueue(q, new Buffer('Send More......'));

    var obj = {
    	a: {
    		b: 'this is a letter B for Buffer.'
    	},
    	c: [1,2,3,4,5,6]
    };

    ch.sendToQueue(q, new Buffer(JSON.stringify(obj)));

    // ch.purgeQueue(q);
    try {
    	ch.close();
		//ch.deleteQueue(q);
		//console.log(q);
    }
    catch (alreadyClosed) {
    	console.log(alreadyClosed.stackAtStateChange);

    } 
   
  });
});