import React, { useRef } from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { AutocompleteMain, AutocompleteDrop } from "./Components";
import { InputContainer, InputLabel, InputDescription } from "../General";
import { useClickOutside, useElementWidth } from "../../../../Hooks";

export const Autocomplete = (props) => {
  const [dropDown, setDropDown] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [width, setWidth] = useState(0);

  const handleSelectClick = (e) => {
    !props.disabled && !props.loading && setDropDown(true);
  };

  const handleOptionClick = (e) => {
    setDropDown(false);
    props.setValue(e.target.attributes.value.nodeValue);
    setInputValue(e.target.innerHTML);
  };

  const ref = useRef(null);
  useClickOutside(ref, () => {
    setDropDown(false);
  });

  useElementWidth(ref, (width) => {
    setWidth(width - 2);
  });

  return (
    <InputContainer ref={ref}>
      <InputLabel label={props.label} required={props.required} />
      <AutocompleteMain
        handleSelectClick={handleSelectClick}
        loading={props.loading}
        disabled={props.disabled}
        dropDown={dropDown}
        setInputValue={setInputValue}
        inputValue={inputValue}
      />
      <AutocompleteDrop
        dropDown={dropDown}
        loading={props.loading}
        disabled={props.disabled}
        optionsList={props.optionsList}
        handleOptionClick={handleOptionClick}
        inputValue={inputValue}
        width={width}
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
