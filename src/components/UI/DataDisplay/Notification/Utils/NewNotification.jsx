export function newNotification(setNotifications, notifications) {
  return (notification) => {
    setNotifications([...notifications, notification]);
  };
}
