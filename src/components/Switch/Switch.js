import { useState } from "react"

const Switch = ({defaultState, label}) => {
    const [switchState, setSwitchState] = useState(defaultState)
  return (
      <div className="switch-container">
          <div className={`switch-body ${switchState ? "switch-enabled" : "switch-disabled"}`} onClick={() => {setSwitchState(!switchState)}}>
              <div className={`switch-ball`}>
              </div>
          </div>
          <div className={`switch-label ${switchState ? "switch-label-enabled" : "switch-label-disabled"}`}>
            {switchState ? "Enabled" : "Disabled"}
          </div>
      </div>
  )
}

Switch.defaultProps = {
    switchState: false,
    label: "",
}

export default Switch