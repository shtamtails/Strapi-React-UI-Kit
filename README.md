# Strapi UI Kit components with React

Created using [Strapi - UI Kit](https://www.figma.com/community/file/1050701975985000987).

## Alerts

```js
import { AlertsContainer } from './Alert/AlertsContainer
```

```js
import { newAlert, removeAlert } from './Alert/
```

In component where alert needed:

```js
const [alerts, setAlerts] = useState([]);
```

```js
const addAlert = newAlert(alerts, setAlerts);
```

```js
<AlertsContainer alerts={alerts} setAlerts={setAlerts} style={{}} />
```

To add alert:

```js
AddAlert("warning", "text");
```

### Props:

`type` - `warning`, `info`, `success`<br>
`text` - `Alert text`<br>
