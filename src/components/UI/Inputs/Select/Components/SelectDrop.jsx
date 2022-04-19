import React from "react";

export const SelectDrop = ({ optionsList, handleOptionClick, select }) => {
  return (
    <>
      {select && (
        <div className="select-option-container">
          {optionsList.map((el) => {
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

export default SelectDrop;
