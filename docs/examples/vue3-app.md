# vue3 app初始化解决方案

- 生成vue3最佳初始化app实例生成种子项目。

```json
  "name": "vite-vue3-app",
  "version": "0.0.1",
  "license": "MIT",
  "scripts": {
    "dev": "vite",
    "dev:module1": "cross-env VITE_ROOT_URL=./src/module/module1 VITE_MODULE_NAME=module1 vite",
    "build:module1": "vue-tsc --noEmit --skipLibCheck && cross-env VITE_ROOT_URL=./src/module/module1 VITE_MODULE_NAME=module1 vite build",
    "dev-prod": "vite --mode production",
    "build": "vue-tsc --noEmit --skipLibCheck && vite build",
    "serve": "vite preview"
  },
  "dependencies": {
    "@types/node": "^14.14.41",
    "ant-design-vue": "^2.1.6",
    "axios": "^0.21.1",
    "cross-env": "^7.0.3",
    "element-plus": "^1.0.2-beta.45",
    "esbuild": "^0.11.12",
    "sass": "^1.32.8",
    "vant": "^3.0.17",
    "vue": "^3.0.11",
    "vue-i18n": "^9.1.6",
    "vue-router": "^4.0.5",
    "vuex": "^4.0.0"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^1.2.1",
    "@vue/compiler-sfc": "^3.0.5",
    "typescript": "^4.1.3",
    "vite": "^2.2.1",
    "vite-plugin-style-import": "^0.9.2",
    "vue-tsc": "^0.0.22"
  }
```
