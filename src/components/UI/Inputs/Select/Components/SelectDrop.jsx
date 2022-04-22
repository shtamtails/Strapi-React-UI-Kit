import React from "react";

export const SelectDrop = ({ optionsList, handleOptionClick, select, width }) => {
  return (
    <>
      {select && (
        <div className="select-option-container" style={{ width: width }}>
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
