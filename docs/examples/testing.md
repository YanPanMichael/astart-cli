# 中间件规范

该模块的一大特色是能够创建易于测试的自包含中间件。为了完成任务，仍然需要以易于测试的方式设计中间件。

在实现中间件类时我们应该遵循的一条规则是对本地导入的模块使用依赖注入。

```javascript
/**
 * When a request fails, this middleware adds a toast message using the
 * injected toast service.
 */
export default class ApiErrorMiddleware {
  /**
   * @param {Object} i18n
   * @param {Object} toast message service
   */
  constructor(i18n, toast) {
    this.toast = toast;
    this.i18n = i18n;
  }

  /**
   * @param {Object} err
   */
  onResponseError(err = {}) {
    let key = 'errors.default';
    const { response } = err;

    if (response && this.i18n.te(`errors.${response.status}`)) {
      key = `errors.${response.status}`;
    } else if (err.message === 'Network Error') {
      key = 'errors.network-error';
    }

    this.toast.error(this.i18n.t(key));
    throw err;
  }
}
```

然后，这是一条使用 [Jest](https://jestjs.io/) 的规范示例。

```javascript
import ApiErrorMiddleware from '@/middlewares/ApiErrorMiddleware';

let hasKey = false;

// Simple translation mock, making it easier to compare results.
const i18n = {
  t: key => key,
  te: () => hasKey,
};

const errors = {
  unhandledCode: { response: { status: 999 } },
  notfound: { response: { status: 404 } },
  unhandledMessage: { message: 'test message' },
  networkError: { message: 'Network Error' },
};

describe('ApiErrorMiddleware', () => {
  let toast;
  let middleware;

  /**
  * Jest needs a function when we're expecting an error to be thrown.
  *
  * @param {Object} err
  * @return {function(): *}
  */
  function onResponseError(err) {
    return () => middleware.onResponseError(err);
  }

  beforeEach(() => {
    toast = { error: jest.fn() };
    middleware = new ApiErrorMiddleware(i18n, toast);
  });

  it('sends a default error message if not handled', () => {
    expect(onResponseError()).toThrow();
    expect(toast.error).toHaveBeenLastCalledWith('errors.default');

    expect(onResponseError(errors.unhandledCode)).toThrow();
    expect(toast.error).toHaveBeenLastCalledWith('errors.default');

    expect(onResponseError(errors.unhandledMessage)).toThrow();
    expect(toast.error).toHaveBeenLastCalledWith('errors.default');
  });

  it('sends a code error message', () => {
    hasKey = true;
    expect(onResponseError(errors.notfound)).toThrow();
    expect(toast.error).toHaveBeenLastCalledWith('errors.404');
  });

  it('sends a network error message', () => {
    hasKey = false;
    expect(onResponseError(errors.networkError)).toThrow();
    expect(toast.error).toHaveBeenLastCalledWith('errors.network-error');
  });
});
```
