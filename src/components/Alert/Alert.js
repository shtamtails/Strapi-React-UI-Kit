import { FaExclamationCircle, FaCheckCircle, FaInfoCircle } from "react-icons/fa"
import { FiX } from "react-icons/fi"

const Alert = ({ alerts, setAlerts, text, type, id }) => {
    const clearAlert = removeAlert(alerts, setAlerts)

    return (
            <div className={`alert alert-${type}`}>
                <div className={`alert-icon alert-${type}-icon `}>
                    {type === "warning" && <FaExclamationCircle />}
                    {type === "success" && <FaCheckCircle />}
                    {type === "info" && <FaInfoCircle />}
                </div>
                <div className="alert-title">
                    {type === "warning" && "Warning Alert:"}
                    {type === "success" && "Success Alert:"}
                    {type === "info" && "Info Alert:"}
                </div>
                <div className={`alert-text 
                ${text.length > 34 ? "alert-text-large" : ""}`}>
                    {text}
                </div>
                <div className="alert-close-btn">
                    <FiX onClick={() => clearAlert(id)}/>
                </div>
            </div>
    )
}

Alert.defaultProps = {
    type: "info"
}

export default Alert

export function removeAlert(alerts, setAlerts) {
    return (id) => {
        setAlerts(alerts.filter((el) => el.id !== id))
    }
}

export function newAlert(alerts, setAlerts) {
    return (type, text) => {
      const alertId = Math.random().toString(36).slice(2, 9)
      setAlerts([
        ...alerts,
        {
          id: alertId,
          text: `${text}-${alerts.length}`,
          type: type,
        }
      ])
    }
  }