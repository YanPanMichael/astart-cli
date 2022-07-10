# 中间件 `Service` 类

这是这个插件模块的核心。它的工作原理是利用 astart 的适配器在请求生命周期的每个相关步骤调用中间件堆栈。

## `constructor(astart)`

您可以传递一个可选的 astart 实例（全局实例或本地实例）以在其上注册中间件。如果您没有立即传递 astart 实例，您可以 `setHttp` 稍后使用该方法。

即使没有传递 astart 实例，您仍然可以注册中间件。

## `setHttp(astart)`

设置或替换在其上拦截请求和响应的 astart 实例。

## `unsetHttp()`

删除 astart 实例上注册的拦截器，如果有的话。

!> 请注意，在初始化中间件服务后更改默认适配器，然后调用 `unsetHttp` 或 `setHttp` 会将默认适配器设置回 astart 实例。之后使用的任何适配器都可能丢失。

## `has(middleware)`

返回 `true` 传递的 `middleware` 实例是否在堆栈中。

## `register(middlewares)`

将一个中间件实例或一组中间件添加到堆栈中。

您可以传递一个类实例或一个仅实现您需要的功能的简单对象（请参阅 [简化语法](simplified-syntax.md))）。

!> 如果中间件实例已经在堆栈中，则抛出错误。

## `unregister(middleware)`

从堆栈中删除中间件实例。

## `reset()`

清空中间件堆栈。

## `adapter(config)`

替换默认 astart 适配器的适配器功能。它调用默认实现并将结果承诺传递给中间件堆栈的 `onSync` 方法。
