import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { SelectMain, SelectDrop } from "./Components";
import { InputContainer, InputLabel, InputDescription } from "../General";

// ! Add border on open

export const Select = ({
  value,
  setValue,
  optionsList,
  label,
  description,
  disabled,
  loading,
  required,
}) => {
  const [select, setSelect] = useState(false);

  const handleSelectClick = (e) => {
    !disabled && !loading && setSelect(!select);
  };

  const handleOptionClick = (e) => {
    setSelect(false);
    setValue(e.target.attributes.value.nodeValue);
  };

  return (
    <InputContainer>
      <InputLabel label={label} required={required} />
      <SelectMain
        handleSelectClick={handleSelectClick}
        value={value}
        loading={loading}
        disable={disabled}
        select={select}
      />
      <SelectDrop
        select={select}
        optionsList={optionsList}
        handleOptionClick={handleOptionClick}
      />
      <InputDescription description={description} />
    </InputContainer>
  );
};

Select.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  optionsList: PropTypes.array.isRequired,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  loading: PropTypes.bool,
  label: PropTypes.string,
  description: PropTypes.string,
};

export default Select;
