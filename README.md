# health-check-shield

It is a simple project to verify the integrity of the application through a `get request` and using [shields.io][shields.io] to generate a shield with the status: `IS UP` or `IS DOWN`.

### requirements:

✓ have a public get endpoint <br/>
✓ this endpoint needs to use https <br/>
✓ this endpoint needs to respond to [status code 200][dog] to represent a good case (if all is well), all the other status will be considered as a bad case (if something is wrong).

#
### getting start:
#### base url:
```txt
https://c1ncr9o0gj.execute-api.sa-east-1.amazonaws.com/default/health-api?kill_cache=1&app=<app_name>&url=<app_url>
```
For this demo I will use: <br/>
`app_name` = google <br/>
`url` = https://www.google.com

#### step 1 - replace the parameters
```js
`https://c1ncr9o0gj.execute-api.sa-east-1.amazonaws.com/default/health-api?kill_cache=1&app=google&https://www.google.com`
```

#### step 2 - add into your readme
```md
![[health-check][health-check-svg]

<!-- alias -->
[health-check-svg]: https://c1ncr9o0gj.execute-api.sa-east-1.amazonaws.com/default/health-api?kill_cache=1&app=google&url=https://www.google.com
```

# 
### results examples
#### good case:
![good-case][good-case]

#### bad case:
![bad-case][bad-case]

<!-- alias -->
[shields.io]: [https://shields.io]
[dog]: [https://httpstatusdogs.com/200-ok]
[good-case]: https://c1ncr9o0gj.execute-api.sa-east-1.amazonaws.com/default/health-api?kill_cache=1&app=google&url=https://www.google.com
[bad-case]: https://c1ncr9o0gj.execute-api.sa-east-1.amazonaws.com/default/health-api?kill_cache=1&app=google&url=https://