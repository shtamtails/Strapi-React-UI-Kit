import { useUniqueId } from "../Hooks/useUniqueId";

export function removeAlert(alerts, setAlerts) {
  return (id) => {
    setAlerts(alerts.filter((el) => el.id !== id));
  };
}

export function newAlert(alerts, setAlerts) {
  return (type, text) => {
    setAlerts([
      ...alerts,
      {
        id: useUniqueId(),
        text: text,
        type: type,
      },
    ]);
  };
}
