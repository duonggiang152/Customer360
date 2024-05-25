import { v4 as uuidv4 } from 'uuid';
import AWS from 'aws-sdk'
import bcrypt from 'bcrypt'
import { configAWS } from './config';
import { bool } from 'aws-sdk/clients/signer';


configAWS()

export interface UserInterface {
    accountID: string,
    name: string,
    hashedPassword: string,
    role: string
}

export interface AddUserInput {
    name: string,
    password: string
}

export interface QueryUser {
    name?: string
    accountID?: string
}


export class UserModel {
    static readonly saltRounds = 10
    static readonly salt = bcrypt.genSaltSync(UserModel.saltRounds)
    static readonly TABLE_NAME = "Customer360-account"
    static readonly dynamoClient = new AWS.DynamoDB.DocumentClient();
    static getUser = async(query: QueryUser): Promise<UserInterface[]> => {
        const params: AWS.DynamoDB.DocumentClient.ScanInput = {
            TableName: UserModel.TABLE_NAME,
            ExpressionAttributeValues: {
                ":n": query.name ? query.name : "-1" ,
                ":id": query.accountID ? query.accountID: "-1"
            },
            ExpressionAttributeNames: {
                '#name': 'name',
                "#id": "accountID"
            },
            FilterExpression: "#name = :n OR #id = :id ",
            Select: "ALL_ATTRIBUTES"
         
        }
        const users = await UserModel.dynamoClient.scan(params).promise();

        return users.Items as UserInterface[]
    }
    
    static verifyUser =  (plainPassword: string, hash:string): boolean => {
        return bcrypt.compareSync(plainPassword, hash)
    }

    static addUser = async(user: AddUserInput) => {
        
        const userData = {
            "accountID": uuidv4(),
            "name": user.name,
            "hashedPassword":bcrypt.hashSync(user.password, UserModel.salt),
            "role": "Marketing member - 84"
        }
        const params = {
            TableName: UserModel.TABLE_NAME,
            Item: userData
        }
        return await UserModel.dynamoClient.put(params).promise();
    }
}








