const AWS = require('aws-sdk');

exports.lambdaHandler = async (event, context) => {
    AWS.config.update({
        region: process.env.REGION
    })
    
    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const params = {
        TableName: process.env.TABLE_NAME,
        Item: {
            id: Date.now().toString(),
            info: {
                name: 'Code for Interview',
                email: 'codeforinterview01@gmail.com',
                age: '16',
                address: 'Delhi'
            }
        }
    }
    
    try {
        await dynamodb.put(params).promise();
        console.log('Data inserted successfully');
    } catch (error) {
        console.err('Error while inserting the data ', error.message);
    }
};
