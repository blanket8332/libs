Button.js

```javascript
import React from "react";
import { className } from "../lib/className";

const Button = (props) => {
  return <button className={className("button", props)}>3322</button>;
};

export default Button;
```

Layout.js

```javascript
import React from "react";
import Button from "./Button";

const Layout = (props) => {
  return <Button blue />;
};

export default Layout;
```

output:

```html
<buttom class="button__blue">3322</button>
```
