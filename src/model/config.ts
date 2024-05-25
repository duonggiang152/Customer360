import AWS from 'aws-sdk'
require('dotenv').config();

export const configAWS = () => {
    AWS.config.update({ 
        region: "ap-southeast-1" ,
        accessKeyId: process.env.AWS_ACCESSKEY,
        secretAccessKey: process.env.AWS_SECRET_ACCESSKEY
    });
}




