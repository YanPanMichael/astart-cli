# Export一个服务实例

```javascript
import astart from '@astart-core/astart';
import { Service } from 'astart-cli';
import i18n from './i18n';
import { LocaleMiddleware, OtherMiddleware } from './middlewares';

// Create a new service instance
const service = new Service(astart);

// Then register your middleware instances.
service.register([
  new LocaleMiddleware(i18n),
  new OtherMiddleware()
]);

export default service;
```
