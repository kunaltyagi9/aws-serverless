


module.exports.sqsLambdaHandler = async (event, context) => {
    console.log('Inside SQS Handler ', JSON.stringify(event));
    try {
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: event?.Records,
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }
    // We are returning the response to the client
    return response
};