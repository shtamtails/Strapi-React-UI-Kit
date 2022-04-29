import React from "react";
import { CgClose } from "react-icons/cg";

export const ClearButton = ({ inputValue, setInputValue, loading, disabled }) => {
  const handleClick = () => {
    setInputValue("");
  };
  return (
    <>
      {inputValue.length > 0 && !loading && !disabled && (
        <div className="right-button" onClick={handleClick}>
          <CgClose />
        </div>
      )}
    </>
  );
};

export default ClearButton;
