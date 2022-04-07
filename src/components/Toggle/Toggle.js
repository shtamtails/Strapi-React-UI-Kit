import { useState } from "react"

const Toggle = ({defaultState, disabled, label, description}) => {
    const [toggleState, setToggleState] = useState(defaultState);
  return (
      <div className="toggle-container">
          <div className={`input-label`}>{label}</div>
          <div className="toggle-btns">
          <button className={`toggle-left-btn ${!toggleState & !disabled ? "toggle-off" : ""} ${disabled ? "disabled-left-btn" : ""}`} onClick={() => {setToggleState(false)}}>OFF</button>
          <button className={`toggle-right-btn ${toggleState & !disabled ? "toggle-on" : ""} ${disabled ? "disabled-right-btn" : ""}`} onClick={() => {setToggleState(true)}}>ON</button>
          </div>
          <div className="input-description">{description}</div>
      </div>
  )
}

Toggle.defaultProps = {
    defaultState: false,
    label: "Label",
    description: "",
}

export default Toggle