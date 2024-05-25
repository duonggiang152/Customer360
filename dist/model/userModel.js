"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const uuid_1 = require("uuid");
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_1 = require("./config");
(0, config_1.configAWS)();
class UserModel {
}
exports.UserModel = UserModel;
_a = UserModel;
UserModel.saltRounds = 10;
UserModel.salt = bcrypt_1.default.genSaltSync(UserModel.saltRounds);
UserModel.TABLE_NAME = "Customer360-account";
UserModel.dynamoClient = new aws_sdk_1.default.DynamoDB.DocumentClient();
UserModel.getUser = async (query) => {
    const params = {
        TableName: UserModel.TABLE_NAME,
        ExpressionAttributeValues: {
            ":n": query.name ? query.name : "-1",
            ":id": query.accountID ? query.accountID : "-1"
        },
        ExpressionAttributeNames: {
            '#name': 'name',
            "#id": "accountID"
        },
        FilterExpression: "#name = :n OR #id = :id ",
        Select: "ALL_ATTRIBUTES"
    };
    const users = await UserModel.dynamoClient.scan(params).promise();
    return users.Items;
};
UserModel.verifyUser = (plainPassword, hash) => {
    return bcrypt_1.default.compareSync(plainPassword, hash);
};
UserModel.addUser = async (user) => {
    const userData = {
        "accountID": (0, uuid_1.v4)(),
        "name": user.name,
        "hashedPassword": bcrypt_1.default.hashSync(user.password, UserModel.salt),
        "role": "Marketing member - 84"
    };
    const params = {
        TableName: UserModel.TABLE_NAME,
        Item: userData
    };
    return await UserModel.dynamoClient.put(params).promise();
};
//# sourceMappingURL=userModel.js.map