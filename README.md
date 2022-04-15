# Strapi UI Kit components with React

Created using [Strapi - UI Kit](https://www.figma.com/community/file/1050701975985000987).

## Inputs

### Text Input

```js
import { TextInput } from "./Inputs";
import { useState } from "react";

const Demo = () => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState();

  return (
    <TextInput
      // required props
      value={value}
      setValue={setValue}
      // optional props
      disabled
      required
      loading={loading}
      label="Input label"
      description="Input description"
      placeholder="Placeholder"
    />
  );
};

export default Demo;
```

### Password Input

```js
import { PasswordInput } from "./Inputs";
import { useState } from "react";

const Demo = () => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState();

  return (
    <PasswordInput
      // required props
      value={value}
      setValue={setValue}
      // optional props
      disabled
      required
      loading={loading}
      label="Input label"
      description="Input description"
      placeholder="Placeholder"
    />
  );
};

export default Demo;
```

### Text Area

```js
import { TextArea } from "./Inputs";
import { useState } from "react";

const Demo = () => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState();

  return (
    <TextArea
      // required props
      value={value}
      setValue={setValue}
      // optional props
      disabled
      required
      loading={loading}
      label="Input label"
      description="Input description"
      placeholder="Placeholder"
    />
  );
};

export default Demo;
```

### Select

```js
import { Select } from "./Inputs";
import { useState } from "react";
import { useUniqueId } from "./Hooks/useUniqueId";

const Demo = () => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("Select");

  const options = [
    { id: useUniqueId(), text: "text1", value: "value1" },
    { id: useUniqueId(), text: "text2", value: "value2" },
    { id: useUniqueId(), text: "text3", value: "value3" },
  ];

  return (
    <Select
      // required props
      value={value}
      setValue={setValue}
      optionsList={options}
      // optional props
      disabled
      required
      loading={loading}
      label="Input label"
      description="Input description"
    />
  );
};

export default Demo;
```

### Switch

```js
import { Switch } from "./Inputs";
import { useState } from "react";
import { useUniqueId } from "./Hooks/useUniqueId";

const Demo = () => {
  const [value, setValue] = useState("Select");

  return (
    <Switch
      // required props
      value={value}
      setValue={setValue}
      // optional props
      showStatus
      disabled
      label="Input label"
      description="Input description"
    />
  );
};

export default Demo;
```

### Checkbox

```js
import { Checkbox } from "./Inputs";
import { useState } from "react";
import { useUniqueId } from "./Hooks/useUniqueId";

const Demo = () => {
  const [value, setValue] = useState(false);

  return (
    <Checkbox
      // required props
      value={value}
      setValue={setValue}
      // optional props
      disabled
      label="Input label"
      labelBg
    />
  );
};

export default Demo;
```

### Button

```js
import { Button } from "./Inputs";
import { useState } from "react";

const Demo = () => {
  const [value, setValue] = useState(false);

  return (
    <Button value={value} setValue={setValue} type="success" variant="light" disabled>
      Click me!
    </Button>
  );
};

export default Demo;
```
