import React, { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import Loader from "../../../UI/Utils/Loader/Loader";

export const Notification = ({
  id,
  title,
  body,
  icon,
  type,
  position,
  removeNotification,
  updateNotification,
}) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      updateNotification(id, {
        title: title,
        body: body,
        icon: icon,
        type: type,
        position: "0px",
      });
    }, 50);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  const handleClose = (id) => {
    updateNotification(id, {
      title: title,
      body: body,
      icon: icon,
      type: type,
      position: "-600px",
    });
    setTimeout(() => {
      removeNotification(id);
    }, 300);
  };
  return (
    <>
      <div className={`notification notification-body-${type}`} style={{ right: position }}>
        <div className={`notification-icon notification-${type}`}>
          {type === "loading" ? <Loader /> : icon}
        </div>
        <div className="notification-content">
          <div className="notification-title">{title}</div>
          <div className="notification-body">{body}</div>
        </div>

        {type !== "loading" && (
          <div className="notification-close-btn">
            <CgClose onClick={() => handleClose(id)} />
          </div>
        )}
      </div>
    </>
  );
};

Notification.defaultProps = {
  position: "-600px",
};

export default Notification;
