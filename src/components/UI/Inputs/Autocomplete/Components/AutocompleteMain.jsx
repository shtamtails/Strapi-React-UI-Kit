import React, { useState } from "react";
import { InputLoading } from "../../General";

export const AutocompleteMain = ({
  handleSelectClick,
  loading,
  disabled,
  select,
  setInputValue,
  inputValue,
}) => {
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <div className="select-input-container">
        <input
          disabled={disabled || loading}
          type="text"
          onClick={handleSelectClick}
          value={inputValue}
          onChange={handleInputChange}
        />

        <InputLoading loading={loading} />
      </div>
    </>
  );
};

export default AutocompleteMain;
