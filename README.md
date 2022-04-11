# Strapi UI Kit components with React

Created using [Strapi - UI Kit](https://www.figma.com/community/file/1050701975985000987).

## Alerts

```js
import { AlertsContainer } from './Alert/AlertsContainer
```

```js
import { newAlert, removeAlert } from './Alert/
```

In app:

```js
const [alerts, setAlerts] = useState([]);
```

```js
const addAlert = newAlert(alerts, setAlerts);
```

```js
<AlertsContainer alerts={alerts} setAlerts={setAlerts} style={{ JSX css styling }} />
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
