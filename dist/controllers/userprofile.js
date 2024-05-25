"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerProfileRouter = void 0;
const express_1 = require("express");
exports.customerProfileRouter = (0, express_1.Router)();
const mockData = [
    {
        id: "1231231",
        username: "Duong van giang",
        phonenumber: "092137128371928"
    },
    {
        id: "1231231",
        username: "Duong van giang",
        phonenumber: "092137128371928"
    },
    {
        id: "1231231",
        username: "Duong van giang",
        phonenumber: "092137128371928"
    },
    {
        id: "1231231",
        username: "Duong van giang",
        phonenumber: "092137128371928"
    },
    {
        id: "1231231",
        username: "Duong van giang",
        phonenumber: "092137128371928"
    },
];
exports.customerProfileRouter.get("/search", async (req, res) => {
    try {
        console.log(req.query);
        return res.send(mockData);
    }
    catch (err) {
        return res.status(500).send({ message: "Unknown err" });
    }
});
exports.customerProfileRouter.get("/:id", async (req, res) => {
    try {
    }
    catch (err) {
        return res.status(500).send({ message: "Unknown err" });
    }
});
//# sourceMappingURL=userprofile.js.map