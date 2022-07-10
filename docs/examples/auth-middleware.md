# 未经授权的请求重试中间件

如果我们想在未通过身份验证的情况下重试请求，我们可以在 `onResponseError` 方法中返回一个承诺。

```javascript
export default class AuthMiddleware {
  constructor(auth, http) {
    this.auth = auth;
    this.http = http;
  }

  onResponseError(err) {
    if (err.response.status === 401 && err.config && !err.config.hasRetriedRequest) {
      return this.auth()
        // Retrying the request now that we're authenticated.
        .then((token) => this.http({
          ...err.config,
          hasRetriedRequest: true,
          headers: {
            ...err.config.headers,
            Authorization: `Bearer ${token}`
          }
        }))
        .catch((error) => {
          console.log('Refresh login error: ', error);
          throw error;
        });
    }
    throw err;
  }
}
```
