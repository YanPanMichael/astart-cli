## 阅读我！！

此目录中配置所有请求库 从引入到二次封装。  
 目的是将所有请求 url 归类到一个文件夹中  
 只需向外部暴露返回为 promise 的函数即可  
 外部不同模块页面只需引入需要的请求函数即可通过.then 处理  
 当需要同步多个请求时只需 aysnc await 即可轻松处理

当然此项目结构可根据业务不同进行修改,这里只是演示推荐。

  <hr/>
 
 ------- api 文件夹放置 api的配置 api的集合  
 ---- 外层ts是二次封装的请求库，方便根据不同业务是否注入到vue全局对象中,
 方便单独页面引入。
