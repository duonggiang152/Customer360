"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRouter = void 0;
const express_1 = require("express");
const userModel_1 = require("../model/userModel");
const jwtService_1 = require("../services/jwt/jwtService");
exports.loginRouter = (0, express_1.Router)();
exports.loginRouter.post("", async (req, res) => {
    try {
        if (!req.body.username)
            return res.status(400).send({ message: "missing username" });
        if (!req.body.password)
            return res.status(400).send({ message: "missing password" });
        const user = await userModel_1.UserModel.getUser({ name: req.body.username });
        if (user.length === 0)
            return res.status(400).send({ message: "user name or password not exist" });
        if (userModel_1.UserModel.verifyUser(req.body.password, user[0].hashedPassword)) {
            const jwt = jwtService_1.JWTService.sign({ name: user[0].name, role: user[0].role, accoundID: user[0].accountID });
            return res.status(200).send({ "accessToken": jwt });
        }
        return res.status(400).send({ message: "User name or password not exist" });
    }
    catch (err) {
        return res.status(500).send({ message: "Unknown err" });
    }
});
//# sourceMappingURL=login.js.map