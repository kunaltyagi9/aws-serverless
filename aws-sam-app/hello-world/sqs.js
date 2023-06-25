

exports.lambdaHandler = async (event, context) => {
    console.log("SQS ", JSON.stringify(event));
    try {
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: event,
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};