# 中间件的简化语法

您可以使用仅实现您需要的[方法](api/methods.md)的简单对象文字，而不是创建一个类。

```javascript
service.register({
  onRequest(config) {
    // handle the request
    return config;
  }
});
```
