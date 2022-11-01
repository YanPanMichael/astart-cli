# 原生webpack初始化实例解决方案

- 生成原生webpack最佳初始化实例项目。

```json
  "name": "webpack-protist-js",
  "version": "0.0.1",
  "description": "webpack builds native js projects",
  "main": "index.js",
  "scripts": {
    "dev": "webpack serve",
    "prod": "webpack serve --mode=production",
    "build": "webpack --mode=production"
  },
  "license": "MIT",
  "dependencies": {
    "babel-loader": "^8.2.2",
    "css-loader": "^5.2.4",
    "html-loader": "^2.1.2",
    "html-webpack-plugin": "^5.3.1",
    "style-loader": "^2.0.0",
    "url-loader": "^4.1.1",
    "webpack": "^5.36.2",
    "webpack-cli": "^4.7.0"
  },
  "devDependencies": {
    "@babel/core": "^7.14.0",
    "css-minimizer-webpack-plugin": "^3.0.2",
    "file-loader": "^6.2.0",
    "mini-css-extract-plugin": "^2.1.0",
    "webpack-dev-server": "^3.11.2"
  }
```
