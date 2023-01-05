let response;

// event has all the headers, payload whatever is sent from the client in api request
// we can use callback instead of using async
// exports.lambdaHandler = (event, context, callback) => {
exports.lambdaHandler = async (event, context) => {
    console.log('Inside Handler');
    try {
        // const ret = await axios(url);
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'hello world',
                // location: ret.data.trim()
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }
    // We are returning the response to the client
    return response
};
// Through AWS SAM whatever we deploy it goes to cloud formation
