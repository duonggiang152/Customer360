import { app } from "./app";
require('dotenv').config();
import fs from "fs"
import https from "https";
import http from "http"
const port = app.get("port");

const privateKey  = fs.readFileSync('sslcert/server.key', 'utf8');
const certificate = fs.readFileSync('sslcert/server.cert', 'utf8');

const credentials = {key: privateKey, cert: certificate};

const server = http.createServer(app);
server.listen(port, onListening)
server.on("error", onError);
function onError(error: NodeJS.ErrnoException) {
    if (error.syscall !== "listen") {
        throw error;
    }

    const bind = typeof port === "string" ? `Pipe ${port}` : `Port ${port}`;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case "EACCES":
            console.error(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(`${bind} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {
    const addr = server.address();
    const bind =
        typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
    console.log(`Listening on ${bind}`);
}

export default server;
