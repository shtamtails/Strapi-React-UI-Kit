import Notification from "./Notification";
import { removeFromObject, updateObject } from "./Utils";

export const Notifications = ({ notifications, setNotifications, keys, setKeys }) => {
  const removeNotification = removeFromObject(notifications, setNotifications, setKeys);
  const updateNotification = updateObject(notifications, setNotifications, setKeys);
  return (
    <>
      <div className="notifications">
        {keys.map((key, index) => {
          return (
            <Notification
              key={key}
              id={key}
              title={notifications[key].title}
              body={notifications[key].body}
              icon={notifications[key].icon}
              type={notifications[key].type}
              position={notifications[key].position}
              autoclose={notifications[key].autoclose}
              autocloseTime={notifications[key].autocloseTime}
              removeNotification={removeNotification}
              updateNotification={updateNotification}
            />
          );
        })}
      </div>
    </>
  );
};

export default Notifications;
