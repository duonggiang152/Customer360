"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.configAWS = void 0;
const aws_sdk_1 = __importDefault(require("aws-sdk"));
require('dotenv').config();
const configAWS = () => {
    aws_sdk_1.default.config.update({
        region: "ap-southeast-1",
        accessKeyId: process.env.AWS_ACCESSKEY,
        secretAccessKey: process.env.AWS_SECRET_ACCESSKEY
    });
};
exports.configAWS = configAWS;
//# sourceMappingURL=config.js.map