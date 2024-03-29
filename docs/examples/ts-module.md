# ts module初始化解决方案

- 结合struk和qk-release生成最佳初始化ts module实例项目。

```json
  "name": "template-seed-ts-module",
  "version": "0.0.1",
  "description": "seed typescript module",
  "main": "dist/bundle.cjs.min.js",
  "module": "dist/bundle.esm.min.js",
  "unpkg": "dist/bundle.umd.min.js",
  "devMain": "src/index.ts",
  "typings": "dist/types/index.d.ts",
  "files": [
    "dist"
  ],
  "scripts": {
    "test": "cross-env BABEL_ENV=test NODE_ENV=testing jest --coverage",
    "test:watch": "jest --watch",
    "build": "cross-env NODE_ENV=production struk build --source=ts",
    "lint": "eslint . --ext .ts",
    "fix": "eslint . --fix",
    "format": "prettier --write .",
    "release": "qkrelease",
    "changelog:help": "conventional-changelog --help",
    "changelog": "conventional-changelog -p simple -i CHANGELOG.md -s -r 0"
  },
  "license": "MIT",
  "dependencies": {},
  "devDependencies": {
    "@commitlint/prompt": "^16.2.4",
    "@types/jest": "^27.0.1",
    "@types/node": "~16.11",
    "@typescript-eslint/eslint-plugin": "~5.14",
    "@typescript-eslint/parser": "~5.14",
    "babel-jest": "^27.3.0",
    "cross-env": "5.2.0",
    "eslint": "~8.11",
    "eslint-config-prettier": "~8.5",
    "eslint-plugin-jest": "^26.1.5",
    "jest": "~27.5",
    "qk-release": "^1.1.2",
    "struk": "^1.1.0",
    "ts-jest": "^27.1.4",
    "validate-commit-msg": "^2.14.0",
    "@commitlint/cli": "^11.0.0",
    "@commitlint/config-conventional": "^11.0.0",
    "conventional-changelog-cli": "^2.1.1",
    "husky": "^4.3.8"
  }
```
