"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileCustomer = void 0;
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const config_1 = require("./config");
(0, config_1.configAWS)();
class ProfileCustomer {
}
exports.ProfileCustomer = ProfileCustomer;
_a = ProfileCustomer;
ProfileCustomer.dynamoClient = new aws_sdk_1.default.DynamoDB.DocumentClient();
ProfileCustomer.TABLE_NAME = "customer360_profile_show";
ProfileCustomer.queryBriefUser = async (query) => {
    const params = {
        TableName: ProfileCustomer.TABLE_NAME,
        ExpressionAttributeValues: {
            ":n": query.username ? query.username : "-1",
            ":phone": query.phonenumber ? query.phonenumber : "-1"
        },
        ExpressionAttributeNames: {
            '#name': 'username',
            "#phonenumber": "phonenumber"
        },
        FilterExpression: "contains (#name, :n) OR contains (#phonenumber, :phone) ",
        Select: "ALL_ATTRIBUTES",
        Limit: 6
    };
    const customers = await ProfileCustomer.dynamoClient.scan(params).promise();
    return customers.Items;
};
ProfileCustomer.getUser = async (userid) => {
    const params = {
        TableName: ProfileCustomer.TABLE_NAME,
        ExpressionAttributeValues: {
            ":id": userid
        },
        ExpressionAttributeNames: {
            '#id': 'customerid'
        },
        FilterExpression: "#id = :id",
        Select: "ALL_ATTRIBUTES"
    };
    const customers = await ProfileCustomer.dynamoClient.scan(params).promise();
    console.log(customers);
    return customers.Items[0];
};
//# sourceMappingURL=profileCustomer.js.map