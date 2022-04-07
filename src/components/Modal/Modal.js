import Button from "../Button";
import { FaInfoCircle, FaTimesCircle, FaQuestionCircle, FaExclamationCircle, FaCheckCircle } from 'react-icons/fa'
import { useState } from "react";

const Modal = ({ title, type, text, btnText, btnIcon, onSubmit }) => {
    let btnVariant;
    switch(type) {
        case "warning":
            btnVariant = "danger-light"
            break;
        case "success":
            btnVariant = "success-light"
            break;
            case "info":
            btnVariant = "secondary"
            break;
            default:
            btnVariant = "secondary"
            break;
    }
  return (
      <div className="modal-container">
            <div className="modal-header">
                    {title}
            </div>
            <div className={`modal-main ${type}`}>
                {text}
            </div>
            <div className="modal-footer">
                <div className="modal-footer-btn">
                <Button text="Cancel" variant="tertiary"/>
                </div>
                <div className="modal-footer-btn">
                <Button text={btnText} variant={btnVariant} icon={btnIcon} onClick={onSubmit}/>
                </div>
            </div>

      </div>
  )
}

export default Modal