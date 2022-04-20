import React from "react";
import PropTypes from "prop-types";
import { useState, useRef } from "react";
import { SelectMain, SelectDrop } from "./Components";
import { InputContainer, InputLabel, InputDescription } from "../General";
import useClickOutside from "../../../Hooks/useClickOutside";

export const Select = (props) => {
  const [select, setSelect] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleSelectClick = (e) => {
    !props.disabled && !props.loading && setSelect(!select);
  };

  const handleOptionClick = (e) => {
    setSelect(false);
    props.setValue(e.target.attributes.value.nodeValue);
    setInputValue(e.target.innerHTML);
  };

  const ref = useRef(null);
  useClickOutside(ref, () => {
    setSelect(false);
  });

  return (
    <InputContainer ref={ref}>
      <InputLabel label={props.label} required={props.required} />
      <SelectMain
        handleSelectClick={handleSelectClick}
        inputValue={inputValue}
        loading={props.loading}
        disabled={props.disabled}
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
