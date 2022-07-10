# 返回 promises

我们中间件的每个方法都是 promise 回调函数，这意味着它们可以返回一个值、一个新的 promise 或抛出一个错误，中间件链会相应地做出反应。

```javascript
export default class DemoPromiseMiddleware {
  onRequest(config) {
    return asyncChecks().then(() => config);
  }

  onResponseError({ config } = {}) {
    if (config && !config.hasRetriedRequest) {
      // Retrying the request
      return this.http({
        ...config,
        hasRetriedRequest: true,
      })
      .catch(function (error) {
        console.log('Retry failed:', error);
        throw error;
      });
    }
    throw err;
  }
}
```
