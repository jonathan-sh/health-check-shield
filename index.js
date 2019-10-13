const https = require('https');
const shield_io = 'https://img.shields.io/static';

const checkHealth = async (name, url) => 
{
    let response;

    if(!name && !response)
    {
        response = getShield('heath check', 'app name not informed', 'blue');
    }

    if(!url && !response)
    {
        response = getShield('heath check', 'app url not informed', 'blue');
    }

    if(!!name && !!url)
    {
        const isUp = await checkAppUrl(url);
        response = isUp ? getShield(name, 'is up', 'green') : getShield(name, 'is down', 'red');
    }

    return response;
};

const checkAppUrl = (url) =>
{
    return new Promise( resolve => 
    {
        try 
        {
            https.get(url, (res) => resolve(res.statusCode===200))
                 .on('error', () => resolve(false));    
        } 
        catch (error) 
        {
            resolve(false);
        }
    })
};

const getShield = (app, status, color) =>
{
    const url = `${shield_io}/v1?label=${app}&message=${status}&color=${color}&style=for-the-badge`;

    return new Promise( resolve => 
    {
        try 
        {
            https.get(url, (res) => 
            {
                let chunks = [];
                res.on('data',(it) => chunks.push(it));
                res.on('end',() => 
                {
                    const response = Buffer.concat(chunks);
                    resolve(response.toString());
                });
            })
            .on('error', () => resolve(false));    
        } 
        catch (error) 
        {
            resolve(false);
        }
    });
};

module.exports = checkHealth;
