const https = require('https');
const svg_base = require('./svg-base.json');
const shield_io = 'https://img.shields.io/static';


const checkHealth = async (name, url) => 
{
    let response;

    if(!name && !response)
    {
        response = svg_base['app_name_not_specified'];
    }

    if(!url && !response)
    {
        response = svg_base['app_url_not_specified'];
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
                 .on('error', (e) => resolve(false));
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
