# 在 Node 中使用 ES5

ES5 中没有类概念 [classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)，所以你不能使用简单的扩展语法糖。从基础中间件类创建新的中间件仍然可以使用典型的基于原型的继承模式来完成。

创建要注册的自定义中间件。

```javascript
var BaseMiddleware = require('./base-middleware');

function MyMiddleware() {
  // call the parent constructor
  BaseMiddleware.apply(this, arguments);
}

// Prototype wiring
var proto = MyMiddleware.prototype = Object.create(BaseMiddleware.prototype);
proto.constructor = MyMiddleware;

// Method overriding
proto.onRequest = function(config) {
  // handle the request
  return config;
};

module.exports = MyMiddleware;
```

然后导出服务。

```javascript
var astart = require('@astart-core/astart'),
    Service = require('astart-cli').Service,
    MyMiddleware = require('./MyMiddleware');

// Create a new service instance
var service = new Service(astart);

// Then register your middleware instances.
service.register(new MyMiddleware());

module.exports = service;
```
