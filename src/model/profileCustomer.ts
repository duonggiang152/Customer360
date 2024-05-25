import { v4 as uuidv4 } from 'uuid';
import AWS from 'aws-sdk'
import bcrypt from 'bcrypt'
import { configAWS } from './config';

configAWS()

export interface QueryProfileUserInterface {
    username?: string,
    phonenumber?: string
}

export interface Customer {
    customerid?:string,
    address?:string,
    biggest_ticket_mean?:string,
    birthday?:string,
    cccd?:string,
    gender?:string,
    hobby?:string, 
    hometown?: string,
    largest_amt_sum?:string,
    phonenumber?:string, 
    taxi_favorite_brand?:string, 
    taxi_mtd_expense?:string, 
    taxi_mtd_expense_favorite_brand?:string, 
    taxi_per_month?:string,
    trans_type_biggest_ticket?:string, 
    trans_type_largest_amt?:string,
    username?:string
}

export class ProfileCustomer {
    static readonly dynamoClient = new AWS.DynamoDB.DocumentClient();
    static readonly TABLE_NAME = "customer360_profile_show"
    static queryBriefUser = async(query: QueryProfileUserInterface) => {
        const params: AWS.DynamoDB.DocumentClient.ScanInput = {
            TableName: ProfileCustomer.TABLE_NAME,
            ExpressionAttributeValues: {
                ":n": query.username ? query.username : "-1" ,
                ":phone": query.phonenumber ? query.phonenumber: "-1"
            },
            ExpressionAttributeNames: {
                '#name': 'username',
                "#phonenumber": "phonenumber"
            },
            FilterExpression: "contains (#name, :n) OR contains (#phonenumber, :phone) ",
            Select: "ALL_ATTRIBUTES",
            Limit: 6
            
        }
        const customers = await ProfileCustomer.dynamoClient.scan(params).promise();
       
        return customers.Items as Customer[]
    }
    static getUser = async(userid: string) => {
        const params: AWS.DynamoDB.DocumentClient.ScanInput = {
            TableName: ProfileCustomer.TABLE_NAME,
            ExpressionAttributeValues: {
                ":id": userid 
            },
            ExpressionAttributeNames: {
                '#id': 'customerid'
            },
            FilterExpression: "#id = :id",
            Select: "ALL_ATTRIBUTES"
            
        }
        const customers = await ProfileCustomer.dynamoClient.scan(params).promise();
        console.log(customers)
        return customers.Items[0] as Customer
    }
}