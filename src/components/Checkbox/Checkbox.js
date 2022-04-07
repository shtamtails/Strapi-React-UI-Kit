import { useState } from "react"

const Checkbox = ({label, description, isDisabled }) => {
  const [clicked, setClicked] = useState(false)

  return (
    <div className="checkbox-container ">
        <div className="checkbox">
            <div 
            className={`custom-checkbox
            ${isDisabled && " disabled"} 
            ${clicked && "checked"}`} 
            onClick={() => {setClicked(!clicked)}}></div>
            <div className="checkbox-label">{label}</div>
        </div>
        <div className="input-description">{description}</div>

    </div>
  )
}

Checkbox.defaultProps = {
  isDisabled: "",
}

export default Checkbox