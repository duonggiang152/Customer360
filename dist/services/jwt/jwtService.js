"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWTService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class JWTService {
    static sign(object) {
        return jsonwebtoken_1.default.sign(Object.assign(Object.assign({}, object), { exp: Math.floor(Date.now() / 1000) + (60 * 60) }), JWTService.privateKey);
    }
    static verify(token) {
        try {
            jsonwebtoken_1.default.verify(token, JWTService.privateKey);
            return true;
        }
        catch (err) {
            return false;
        }
    }
}
exports.JWTService = JWTService;
JWTService.privateKey = "Customer360-84";
//# sourceMappingURL=jwtService.js.map