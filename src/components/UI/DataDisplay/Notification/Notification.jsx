import React, { useEffect, useState } from "react";
import { NotificationContainer } from "./Components/NotificationContainer";
import { CgClose } from "react-icons/cg";
import Loader from "../../Utils/Loader/Loader";
import PropTypes from "prop-types";

export const Notification = ({ title, body, icon, type, id, clearNotification }) => {
  const [titleState, setTitle] = useState(title);
  const [bodyState, setBody] = useState(body);
  const [iconState, setIcon] = useState(icon);
  const [typeState, setType] = useState(type);

  const [position, setPosition] = useState("-600px");

  useEffect(() => {
    setTimeout(() => {
      setPosition("0px");
    }, 50);
  }, []);

  const handleClose = (id) => {
    setPosition("-600px");
    clearNotification(id);
  };

  return (
    <>
      <div className={`notification notification-body-${typeState}`} style={{ right: position }}>
        <div className={`notification-icon notification-${typeState}`}>
          {typeState === "loading" ? <Loader /> : iconState}
        </div>
        <div className="notification-content">
          <div className="notification-title">{titleState}</div>
          <div className="notification-body">{bodyState}</div>
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

Notification.propTypes = {
  type: PropTypes.oneOf(["success", "danger", "info", "loading"]),
  id: PropTypes.any.isRequired,
};

export const updateNotification = (notifications, setNotifications, data) => {
  // console.log(notifications.find((e) => e.id === "testid"));
  // console.log(data);
};

Notification.Container = NotificationContainer;

export default Notification;
