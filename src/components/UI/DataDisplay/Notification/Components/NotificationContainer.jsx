import React, { useEffect, useState } from "react";
import { useUniqueId } from "../../../../../Hooks";
import { Notification } from "../Notification";

export const NotificationContainer = ({ notifications, setNotifications }) => {
  return (
    <>
      <div className="notifications">
        {notifications.length > 0 &&
          notifications.map((el) => {
            return (
              <Notification
                key={el.id}
                id={el.id}
                title={el.title}
                body={el.body}
                icon={el.icon}
                type={el.type}
                notifications={notifications}
                setNotifications={setNotifications}
              />
            );
          })}
      </div>
    </>
  );
};

export default NotificationContainer;
