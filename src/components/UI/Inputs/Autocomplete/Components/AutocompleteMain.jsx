import React, { useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import { InputLoading } from "../../General";

export const AutocompleteMain = ({
  handleSelectClick,
  loading,
  disabled,
  select,
  setInputValue,
  inputValue,
}) => {
  const inputStyles = [""];
  const inputIconStyles = [""];
  (loading || disabled) && inputStyles.push("select-disabled");
  select && inputIconStyles.push("select-input-icon-opened");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <input
      type="text"
      onClick={handleSelectClick}
      value={inputValue}
      onChange={handleInputChange}
    />
  );
};

export default AutocompleteMain;
