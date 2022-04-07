import { useState } from "react"

const Select = ({options, label, description}) => {
    const [selectState, setSelectState] = useState("none")
    const handleSelectClick = () => {
        selectState === "none" ? setSelectState(" ") : setSelectState("none")
    }
    const [selectValue, setSelectValue] = useState("Select")

    const [isOptionSelected, setIsOptionSelected] = useState({color: "#8E8EA9"})
    const handleOptionClick = (e) => {
        setSelectValue(e.target.outerText)
        setSelectState("none")
        setIsOptionSelected({color: "#32324D"})
    }
    
  return (
    <div className="select-container">
        <div className="input-label">
            {label}
        </div>
        <select onClick={handleSelectClick} style={ isOptionSelected }>
            <option value={selectValue} >{selectValue}</option>
        </select>
        <div className="select-options" style={{ display: selectState }}>
        {options.map((el, index) => {
                return (
                    <div key={index} className="option" onClick={handleOptionClick}>
                        {el}
                    </div>
                )
            })}
        </div>
        <div className="input-description">
            {description}
        </div>
        
    </div>
  )
}

export default Select