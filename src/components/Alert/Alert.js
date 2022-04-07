import { useEffect, useState } from "react"
import { FaExclamationCircle, FaCheckCircle, FaInfoCircle } from "react-icons/fa"
import {FiX} from "react-icons/fi"

// TODO Add alert delete timer




const Alert = ({text, type, onDelete, transitionState}) => {
    const [animation, setAnimation] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
            // setAnimation(true)
        }, 2200);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
            <div className={`alert alert-${type} ${animation && "animation-alert-out"}`}>
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
                    <FiX onClick={onDelete}/>
                </div>
            </div>
    )
}

Alert.defaultProps = {
    type: "info",
    timer: 5000,
}


export default Alert