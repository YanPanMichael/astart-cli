# 语言环境中间件

这是一个语言环境中间件的简单示例，它为每个请求设置语言标头。

```javascript
export default class LocaleMiddleware {
  constructor(i18n) {
    this.i18n = i18n;
  }

  onRequest(config) {
    // returns a new Object to avoid changing the config object referenced.
    return {
      ...config,
      headers: {
        // default `locale`, can still be overwritten by config.headers.locale
        locale: this.i18n.lang,
        ...config.headers
      }
    };
  }
}
```
