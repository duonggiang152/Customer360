"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userModel_1 = require("../model/userModel");
const createUser = async () => {
    if ((await userModel_1.UserModel.getUser({ name: process.argv[2] })).length === 0) {
        await userModel_1.UserModel.addUser({ name: process.argv[2], password: process.argv[3] });
        console.log(`------- CREATE USER ${process.argv[2]} Sucessed  --------`);
        return;
    }
    console.log(`---------  CREATE USER ${process.argv[2]} failed ---------`);
};
createUser();
//# sourceMappingURL=createUser.js.map