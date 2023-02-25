
let http = require('http');
let config = require('../config');

/**
 * Create HTTP server.
 */

let app = require('../private/app.js');
let server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

console.log(server);
console.log(`config.get('PORT')`);
console.log(config.get('PORT'));

server.listen(config.get('PORT'));
server.on('error', onError);
server.on('listening', onListening);

/**
 * Event listener for HTTP server "error" event.
 */

console.log(123);

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    let addr = server.address();
    let bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    let addr = server.address();
    let bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    console.info('Listening on ' + bind);
}
