import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { SelectMain, SelectDrop } from "./Components";
import { InputContainer, InputLabel, InputDescription } from "../General";

// ! Add border on open

export const Select = (props) => {
  const [select, setSelect] = useState(false);

  const handleSelectClick = (e) => {
    !props.disabled && !props.loading && setSelect(!select);
  };

  const handleOptionClick = (e) => {
    setSelect(false);
    props.setValue(e.target.attributes.value.nodeValue);
  };

  return (
    <InputContainer>
      <InputLabel label={props.label} required={props.required} />
      <SelectMain
        handleSelectClick={handleSelectClick}
        value={props.value}
        loading={props.loading}
        disable={props.disabled}
        select={select}
      />
      <SelectDrop
        select={select}
        optionsList={props.optionsList}
        handleOptionClick={handleOptionClick}
      />
      <InputDescription description={props.description} />
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
