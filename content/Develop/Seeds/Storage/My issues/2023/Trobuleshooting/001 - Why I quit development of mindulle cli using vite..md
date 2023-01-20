
> [!error] Because...
> During building process, There were RollupError that doesn't support legacy node modules such as fs, resolve, and so on So It is not able to use vite for building a cli program.
> Detailed error examples are below.

```
1: import { dirname, resolve } from 'path';
                     ^
2: import { readdirSync, statSync } from 'fs';
error during build:
```

Even though there are legacy support plugin for vite, but the plugin only has supports for browser environment. 