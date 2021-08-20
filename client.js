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
  });

  return conn;
};

console.log('Connecting ...');

module.exports = { connect };
