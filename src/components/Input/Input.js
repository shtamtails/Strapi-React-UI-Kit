import { useState } from "react"
import { GoEye, GoEyeClosed } from "react-icons/go"

// TODO: Add event listenel or show password button

const Input = ({ label, placeholder, description, type, isDisabled, isError, inputWidth, isTextArea }) => {
    const [inputIcon, setInputIcon] = useState(<GoEye />)
    const [inputType, setInputType] = useState(type)

    const changePwdType = () => {
        if (inputIcon.type.name === (<GoEyeClosed />).type.name) {
            setInputIcon(<GoEye />);
            setInputType("password");
        }   else {
            setInputIcon(<GoEyeClosed />);
            setInputType("text")
        }
    }
    if (isTextArea) {
        return (
            <div className="input-container">
                <div className="input-label">
                {label}
                </div>
    
                <textarea
                disabled={isDisabled}
                type={inputType} 
                placeholder={`${placeholder}`} 
                className={`input${isDisabled  && " disabled"}${isError && " input-error"} `}
                style={{ width: `${inputWidth}`}}
                />
                {type === "password" && <div className="show-password-btn" id="togglePassword" onClick={changePwdType}>{inputIcon}</div>}
                <div className={`${isError === true && "input-error"} input-description`}>
                {description}
                </div>
            </div>
          )
    } else {
        return (
            <div className="input-container">
                <div className="input-label">
                {label}
                </div>
    
                <input
                disabled={isDisabled}
                type={inputType} 
                placeholder={`${placeholder}`} 
                className={`input${isDisabled  && " disabled"}${isError && " input-error"} `}
                style={{ width: `${inputWidth}`}}
                />
                {type === "password" && <div className="show-password-btn" id="togglePassword" onClick={changePwdType}>{inputIcon}</div>}
                <div className={`${isError === true && "input-error"} input-description`}>
                {description}
                </div>
            </div>
          )
    }
    
}

Input.defaultProps = {
    label: "",
    placeholder: "",
    description: "",
    type: "text",
    isDisabled: "",
    isError: "",
    inputWidth: '',
}

export default Input