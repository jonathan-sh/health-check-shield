const checkHealth = require('../src/index');
const svg_base = require('../src/svg-base');
const valid_url = 'https://www.google.com';

test('check app url not informed', async () =>
{
    const result = await checkHealth(undefined, valid_url);
    expect(result).toBe(svg_base['app_name_not_specified']);

});

test('check app name not informed', async () =>
{
    const result = await checkHealth('app name', undefined);
    expect(result).toBe(svg_base['app_url_not_specified']);
});

test('check status IS UP', async () =>
{
    const result = await checkHealth('app name', valid_url);
    expect(true).toBe(result.includes('IS UP'));
});

test('check status IS DOWN', async () =>
{
    const result = await checkHealth('app name', 'https://');
    expect(true).toBe(result.includes('IS DOWN'));
});