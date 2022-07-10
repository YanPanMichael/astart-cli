# 在浏览器中的使用

_astart-cli_ 插件在浏览器中通过脚本注入使用。

## 常用方法

只需使用简短的中间件语法即可快速定义一次性使用中间件。

```html
<script src="https://unpkg.com/@astart-core/dist/astart.iife.min.js"></script>
<script src="https://unpkg.com/astart-cli/dist/mwcore.iife.min.js"></script>
<script>
  // Create a new service instance
  var service = new HttpMiddlewareService(astart);

  // Then register your middleware instances.
  service.register({
    onRequest: function(config) {
      // handle the request
      return config;
    },
    onResponseError(error) {
      // handle the response error
      throw error;
    }
  });
</script>
```


## 高级用法

在应用程序的通用命名空间模式中混合使用 ES5。

在 `Middleware.js` 文件中定义您的中间件。

```javascript
// Middleware.js
var app = app || {};

/**
* Custom Middleware class
*/
app.MyMiddleware = (function(){
  function MyMiddleware() {}

  var proto = MyMiddleware.prototype = Object.create();

  proto.constructor = MyMiddleware;
  proto.onRequest = function(config) {
    // handle the request
    return config;
  };
  return MyMiddleware;
})();
```

然后使用新创建的`HttpMiddlewareService`实例注册这些中间件。

```javascript
// Service.js
var app = app || {};

/**
* Middleware Service
*/
app.MiddlewareService = (function(MiddlewareService, MyMiddleware) {
  // Create a new service instance
  var service = new MiddlewareService(astart);

  // Then register your middleware instances.
  service.register(new MyMiddleware());

  return service;
})(AstartMiddleware.Service, app.MyMiddleware);
```

在这种情况下，导入 JS 文件的顺序很重要。

```html
<script src="https://unpkg.com/@astart-core/dist/astart.iife.min.js"></script>
<script src="https://unpkg.com/dist/mwcore.iife.min.js"></script>
<script src="Middleware.js"></script>
<script src="Service.js"></script>
```
