//play.js = move the connect function from play to here
const net = require('net');
const { IP, PORT } = require('./constants');

/**
 * Establishes connection with the game server
 */

const connect = function() {
  const conn = net.createConnection({  //conn object
    host: IP, //Server IP Address
    port: PORT
  });

  // INTERPRET INCOMING DATA AS TEXT
  conn.setEncoding('utf8');

// Add an event handler for incoming data.
  conn.on('data', message => {
    console.log(message);
  });
//Add another "connect" event handles for establishing a connection - send a message that connection is establish and write name of player
  conn.on('connect', () => {
    console.log("Succesfully connected to game server");
    conn.write("Name: GMR");
    // function write(){ // create a function with a setInterval to move the snake up - test
    //   return conn.write("Move: up")
    });

  //   setInterval(write, 1000)
  // });

return conn;
}
console.log('Connecting ...');


module.exports = { connect }
