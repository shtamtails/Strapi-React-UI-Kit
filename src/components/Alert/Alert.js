import { FaExclamationCircle, FaCheckCircle, FaInfoCircle } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { removeAlert } from "./Utils";
import PropTypes from "prop-types";
import { useEffect } from "react";

const Alert = ({ alerts, setAlerts, text, type, style, id }) => {
  const deleteAlert = removeAlert(alerts, setAlerts);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (alerts.length > 0) {
        deleteAlert(alerts[0].id);
      }
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [alerts]);

  const ALERT = {
    ALERT_STYLE: "",
    ALERT_ICON: "",
    ALERT_TITLE: "",
  };

  switch (type) {
    case "warning":
      ALERT.ALERT_STYLE = "alert-warning";
      ALERT.ALERT_ICON = <FaExclamationCircle />;
      ALERT.ALERT_TITLE = "Warning Alert:";
      break;
    case "success":
      ALERT.ALERT_STYLE = "alert-success";
      ALERT.ALERT_ICON = <FaCheckCircle />;
      ALERT.ALERT_TITLE = "Success Alert:";
      break;
    case "info":
      ALERT.ALERT_STYLE = "alert-info";
      ALERT.ALERT_ICON = <FaInfoCircle />;
      ALERT.ALERT_TITLE = "Info Alert:";
      break;
    default:
      ALERT.ALERT_STYLE = "alert-info";
      ALERT.ALERT_ICON = <FaInfoCircle />;
      ALERT.ALERT_TITLE = "Info Alert:";
      break;
  }

  return (
    <div className={`alert ${ALERT.ALERT_STYLE}`} style={style}>
      <div className={`alert-icon ${ALERT.ALERT_STYLE}-icon`}>{ALERT.ALERT_ICON}</div>
      <div className="alert-title">{ALERT.ALERT_TITLE}</div>
      <div className={`alert-text${text.length > 34 ? " alert-text-large" : ""}`}>{text}</div>
      <div className="alert-close-btn">
        <FiX
          onClick={() => {
            deleteAlert(id);
          }}
        />
      </div>
    </div>
  );
};

Alert.defaultProps = {
  text: "Ooopsie, something went wrong!",
  type: "info",
};

Alert.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Alert;
