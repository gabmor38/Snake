let connection;
const { MOVE_UP_KEY } = require('./constants');

/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', key => handlerUserInput(key));
  return stdin;
};


const handlerUserInput = function(key) {
  if (key === "\u0003") {
    process.exit();
  }
  if (key === MOVE_UP_KEY) {
    connection.write("Move: up");
  }
  if (key === "a") {
    connection.write("Move: down");
  }
  if (key === "\u0073") { //s
    connection.write("Move: left");
  }
  if (key === "d") {
    connection.write("Move: right");
  }
  if (key === "x") {
    connection.write("Say: Hello");
  }
};

module.exports = { setupInput };
