"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
require('dotenv').config();
const fs_1 = __importDefault(require("fs"));
const http_1 = __importDefault(require("http"));
const port = app_1.app.get("port");
const privateKey = fs_1.default.readFileSync('sslcert/server.key', 'utf8');
const certificate = fs_1.default.readFileSync('sslcert/server.cert', 'utf8');
const credentials = { key: privateKey, cert: certificate };
const server = http_1.default.createServer(app_1.app);
server.listen(port, onListening);
server.on("error", onError);
function onError(error) {
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
    const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
    console.log(`Listening on ${bind}`);
}
exports.default = server;
//# sourceMappingURL=server.js.map