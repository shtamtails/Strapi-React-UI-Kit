import React from "react";

export const AutocompleteDrop = ({
  optionsList,
  handleOptionClick,
  dropDown,
  inputValue,
  loading,
  disabled,
}) => {
  const tempOptionsList = optionsList.filter((el) => {
    return el.text.toLowerCase().includes(inputValue.toLowerCase());
  });
  return (
    <>
      {dropDown && !loading && !disabled && tempOptionsList.length > 0 && (
        <div className="select-option-container">
          {tempOptionsList.map((el) => {
            return (
              <option
                key={el.id}
                className="select-option"
                value={el.value}
                onClick={handleOptionClick}
              >
                {el.text}
              </option>
            );
          })}
        </div>
      )}
    </>
  );
};

export default AutocompleteDrop;
