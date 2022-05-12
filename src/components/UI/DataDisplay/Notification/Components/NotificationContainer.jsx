import React from "react";
import { Notification } from "../Notification";

export const NotificationContainer = ({ notifications, setNotifications }) => {
  const clearNotification = (id) => {
    setTimeout(() => {
      setNotifications(
        notifications.filter((el) => {
          return el.id !== id;
        })
      );
    }, 300);
  };

  return (
    <>
      <div className="notifications">
        {notifications.length > 0 &&
          notifications.map((el, index) => {
            return (
              <Notification
                key={el.id}
                id={el.id}
                title={el.title}
                body={el.body}
                icon={el.icon}
                type={el.type}
                clearNotification={clearNotification}
              />
            );
          })}
      </div>
    </>
  );
};

export default NotificationContainer;
