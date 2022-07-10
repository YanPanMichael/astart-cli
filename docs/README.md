# Astart 服务

简单的 [astart-cli] 服务，用于简化通过 astart 发出的 HTTP 请求的挂钩（和挂钩测试）

## 这是什么？

一个 [`HttpMiddlewareService`](api/Service.md) 管理着中间件堆栈并钩住可信实例.

中间件只是由用于请求生命周期中不同点的简单方法组成的对象或类。

它适用于全局 astart 或本地实例。

## 为什么不使用拦截器？

使用 astart 拦截器会使代码与 astart 实例紧密耦合并且更难测试。

这个中间件服务模块：

- 提供更多功能 (例如: 参见 [`onSync`](api/methods?id=onsyncpromise))
- 与 astart 的松耦合
- 非常容易测试中间件类

它提高了集中式挂钩策略的可读性和可重用性。

## 例子

所有示例均使用 ES6 语法编写，但您绝对可以将此插件与 ES5 代码一起使用，甚至可以直接在浏览器中使用。

### 最简单的用例

?> 一个常见的用例是公开一个服务实例，该实例使用为 API 配置的Astart实例。然后可以在应用程序初始化过程的不同阶段为该 API 注册中间件。

以下实例使用 [简化的语法](simplified-syntax.md).

```javascript
import astart, { AstartPst } from '@astart-core/astart';
import { Service } from 'astart-cli';

const service = new Service(astart);

service.register({
  onRequest(config) {
    console.log('onRequest');
    return config;
  },
  onSync(promise) {
    console.log('onSync');
    return promise;
  },
  onResponse(response) {
    console.log('onResponse');
    return response;
  }
});

console.log('Ready to fetch.');

// Just use AstartPst like you would normally.
AstartPst('https://jsonplaceholder.typicode.com/posts/1')
  .then(({ data }) => console.log('Received:', data));
```

它应该输出:

```
Ready to fetch.
onRequest
onSync
onResponse
Received: {userId: 1, id: 1, title: ""}
```
