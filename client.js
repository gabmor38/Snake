//play.js = move the connect function from play to here
const net = require('net');

/**
 * Establishes connection with the game server
 */

const connect = function() {
  const conn = net.createConnection({
    host: "192.168.0.10",
    port: 50541
  });

  // INTERPRET INCOMING DATA AS TEXT
  conn.setEncoding('utf8');

// Add an even handler for incoming data.

conn.on('data', message => {
  console.log(message);

})

return conn;

}
console.log('Connecting ...');


connect();
