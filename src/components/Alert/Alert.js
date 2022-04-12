import { FaExclamationCircle, FaCheckCircle, FaInfoCircle } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { removeAlert } from "./Utils";
import PropTypes from "prop-types";

const Alert = ({ alerts, setAlerts, text, type, style, id }) => {
  const deleteAlert = removeAlert(alerts, setAlerts);
  let ALERT_STYLE;
  let ALERT_ICON;
  let ALERT_TITLE;

  switch (type) {
    case "warning":
      ALERT_STYLE = "alert-warning";
      ALERT_ICON = <FaExclamationCircle />;
      ALERT_TITLE = "Warning Alert:";
      break;
    case "success":
      ALERT_STYLE = "alert-success";
      ALERT_ICON = <FaCheckCircle />;
      ALERT_TITLE = "Success Alert:";
      break;
    case "info":
      ALERT_STYLE = "alert-info";
      ALERT_ICON = <FaInfoCircle />;
      ALERT_TITLE = "Info Alert:";
      break;
    default:
      ALERT_STYLE = "alert-info";
      ALERT_ICON = <FaInfoCircle />;
      ALERT_TITLE = "Info Alert:";
      break;
  }

  return (
    <div className={`alert ${ALERT_STYLE}`} style={style}>
      <div className={`alert-icon ${ALERT_STYLE}-icon`}>{ALERT_ICON}</div>
      <div className="alert-title">{ALERT_TITLE}</div>
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
