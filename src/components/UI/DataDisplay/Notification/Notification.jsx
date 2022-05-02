import React, { useEffect, useState } from "react";
import { NotificationContainer } from "./Components/NotificationContainer";
import { CgClose } from "react-icons/cg";
import Loader from "../../Utils/Loader/Loader";
import PropTypes from "prop-types";

export const Notification = ({ title, body, icon, type, id, notifications, setNotifications }) => {
  const [position, setPosition] = useState("-600px");

  const clearNotification = () => {
    setPosition("-600px");
    setTimeout(() => {
      setNotifications(
        notifications.filter((el) => {
          return el.id !== id;
        })
      );
    }, 500);
  };
  useEffect(() => {
    setTimeout(() => {
      setPosition("0px");
    }, 50);
  }, [notifications]); // updates when compoenent deleted

  return (
    <div className={`notification notification-body-${type}`} style={{ right: position }}>
      <div className={`notification-icon notification-${type}`}>
        {type === "loading" ? <Loader /> : icon}
      </div>
      <div className="notification-content">
        <div className="notification-title">{title}</div>
        <div className="notification-body">{body}</div>
      </div>

      {type !== "loading" && (
        <div className="notification-close-btn" onClick={clearNotification}>
          <CgClose />
        </div>
      )}
    </div>
  );
};

Notification.propTypes = {
  type: PropTypes.oneOf(["success", "danger", "info", "loading"]),
};

export const newNotification = () => {};

Notification.Container = NotificationContainer;

export default Notification;
