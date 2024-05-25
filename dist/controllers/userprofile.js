"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerProfileRouter = void 0;
const express_1 = require("express");
exports.customerProfileRouter = (0, express_1.Router)();
const mockData = [
    {
        id: "1231232",
        username: "Duong van giang",
        phonenumber: "092137128371928"
    },
    {
        id: "1231233",
        username: "Duong van giang",
        phonenumber: "092137128371928"
    },
    {
        id: "1231234",
        username: "Duong van giang",
        phonenumber: "092137128371928"
    },
    {
        id: "1231235",
        username: "Duong van giang",
        phonenumber: "092137128371928"
    },
    {
        id: "1231236",
        username: "Duong van giang",
        phonenumber: "092137128371928"
    },
];
const mockData2 = {
    id: "3213123",
    username: "Dương Văn Giang",
    phonenumber: "Phone number"
};
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
        console.log(req.params);
        return res.status(200).send(mockData2);
    }
    catch (err) {
        return res.status(500).send({ message: "Unknown err" });
    }
});
//# sourceMappingURL=userprofile.js.map