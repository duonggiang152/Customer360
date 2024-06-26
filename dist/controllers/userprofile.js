"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerProfileRouter = void 0;
const express_1 = require("express");
const profileCustomer_1 = require("../model/profileCustomer");
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
        const value = req.query.value;
        const matchCustomer = await profileCustomer_1.ProfileCustomer.queryBriefUser({ phonenumber: value, username: value });
        const data = [];
        for (let i = 0; i < matchCustomer.length; i++) {
            data.push({
                id: matchCustomer[i].customerid,
                username: matchCustomer[i].username,
                phonenumber: matchCustomer[i].phonenumber
            });
        }
        return res.send(data);
    }
    catch (err) {
        return res.status(500).send({ message: "Unknown err" });
    }
});
exports.customerProfileRouter.get("/:id", async (req, res) => {
    try {
        console.log(req.params);
        const id = req.params.id;
        return res.status(200).send(await profileCustomer_1.ProfileCustomer.getUser(id));
    }
    catch (err) {
        return res.status(500).send({ message: "Unknown err" });
    }
});
//# sourceMappingURL=userprofile.js.map