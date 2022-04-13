# Strapi UI Kit components with React

Created using [Strapi - UI Kit](https://www.figma.com/community/file/1050701975985000987).

## Alerts

```js
import { newAlert, removeAlert, AlertsContainer } from "./Alert/";
```

In app:

```js
const [alerts, setAlerts] = useState([]);
```

```js
const addAlert = newAlert(alerts, setAlerts);
```

```js
<AlertsContainer alerts={alerts} setAlerts={setAlerts} />
```

To add alert:

```js
AddAlert("warning", "text");
```

### Props:

`type` - required. `warning`, `info`, `success`<br>
`text` - required. `Alert text`<br>

## Buttons

```js
import Button from "./Button/";
```

To add button:

```js
<Button
      type="danger-light"
      icon={<FaExclamationCircle />}
      style={{ JSX css styling }}
      onClick={someFunc}
>
Hello World
</Button>
```

### Props:

`type` - required. `primary`, `secondary`, `tertiary`, `success`, `danger`, `danger-light`, `success-light`<br>
`icon` - optional. <br>
`style` - optional. JSX styling. <br>
`onClick` - required. Any function that will execute on button click.

## Checkbox

```js
import Checkbox from "./Checkbox/";
```

To add checkbox:

```js
const [privacyCheckbox, setPrivacyCheckbox] = useState(true);
<Checkbox
  checkboxState={privacyCheckbox}
  changeCheckedState={() => setPrivacyCheckbox(!checkbox)}
  label="I agree to sell my privacy"
  description="Thats a very important description."
/>;
```

In multi-state state:

```js
  const [checkbox, setCheckbox] = useState({
    first: false,
    second: true,
  });

  <Checkbox
    label="first"
    checkboxState={checkbox.first}
    changeCheckedState={() => setCheckbox({ ...checkbox, first: !checkbox.first })}
  />
  <Checkbox
    label="second"
    checkboxState={checkbox.second}
    changeCheckedState={() => setCheckbox({ ...checkbox, second: !checkbox.second })}
  />
```

### Props:

`label` <br>
`description` <br>
`isCheckedState` - REQUIRED. <br>
`setCheckedState` - REQUIRED.<br>
`label` - REQUIRED.<br>
`disabled` <br>
