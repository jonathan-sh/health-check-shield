const checkHealth = require('./index');

const handler = async (event) => 
{
    let app = { name: undefined, url: undefined };
    let response = getAwsLambdaResponseObject();

    try 
    {
        app.name = event['queryStringParameters']['app'];
        app.url = event['queryStringParameters']['url'];
        response.body = await checkHealth(app.name, app.url);
    } 
    catch (error) 
    {
        response.body = await checkHealth(app.name, app.url);
    }

    return response;
};

const getAwsLambdaResponseObject = () =>
{
    const response =
    {
        statusCode: 200,
        headers: 
        { 
            'Content-Type': 'image/svg+xml;charset=utf-8',
            'Cache-Control': 'max-age=0, no-cache',
            'Pragma': 'no-cache',
            'Connection': 'keep-alive',
            'Expires':new Date().toGMTString(),
            'Last-Modified':new Date().toGMTString()
        }
    };

    return response;
};

exports.handler = handler;
