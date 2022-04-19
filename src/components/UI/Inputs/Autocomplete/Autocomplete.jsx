import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { AutocompleteMain, AutocompleteDrop } from "./Components";
import { InputContainer, InputLabel, InputDescription } from "../General";

export const Autocomplete = (props) => {
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

  return (
    <InputContainer>
      <InputLabel label={props.label} required={props.required} />
      <AutocompleteMain
        handleSelectClick={handleSelectClick}
        loading={props.loading}
        disabled={props.disabled}
        select={select}
        setInputValue={setInputValue}
        inputValue={inputValue}
      />
      <AutocompleteDrop
        select={select}
        optionsList={props.optionsList}
        handleOptionClick={handleOptionClick}
        inputValue={inputValue}
      />
      <InputDescription description={props.description} />
    </InputContainer>
  );
};

Autocomplete.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  optionsList: PropTypes.array.isRequired,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  loading: PropTypes.bool,
  label: PropTypes.string,
  description: PropTypes.string,
};

export default Autocomplete;
