import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useState, useRef } from "react";
import { SelectMain, SelectDrop } from "./Components";
import { InputContainer, InputLabel, InputDescription } from "../General";
import { useClickOutside, useElementWidth } from "../../../../Hooks";

export const Select = ({
  value,
  setValue,
  label,
  required,
  loading,
  disabled,
  height,
  sideIcon,
  optionsList,
  description,
  defaultValue,
}) => {
  // State for handle if select options is opened or closed
  const [opened, setOpened] = useState(false);
  // State for input field value, if defaultValue is handled sets text to defaultValue.text
  const [inputFieldValue, setInputValue] = useState(defaultValue ? defaultValue.text : null);
  // If defaultValue is handled set props.value to defaultValue.value
  useEffect(() => {
    defaultValue && setValue(defaultValue.value);
  }, []);
  // optionsContainerWidth state is needed to set options container width because its impossible to do with css
  const [optionsContainerWidth, setOptionsContainerWidth] = useState(0);
  // Handle click on select input filed
  const handleSelectInputFieldClick = (e) => {
    !disabled && !loading && setOpened(!opened);
  };
  // Handle click on some option
  const handleOptionClick = (e) => {
    setOpened(false); // Close option container
    // props.optionsList contains object with id, text(!) and value(!)
    setValue(e.target.attributes.value.nodeValue); // Set props.value to value of option
    setInputValue(e.target.innerHTML); // Set input field value to text of option
  };
  // Ref for input container
  const inputContainerRef = useRef(null);
  // If clicked outside of InputContainer options container closes
  useClickOutside(inputContainerRef, () => {
    setOpened(false);
  });
  // Setting width of options container
  useElementWidth(inputContainerRef, (optionsContainerWidth) => {
    setOptionsContainerWidth(optionsContainerWidth - 2);
  });

  return (
    <InputContainer ref={inputContainerRef}>
      <InputLabel label={label} required={required} />
      <SelectMain
        handleSelectInputFieldClick={handleSelectInputFieldClick}
        inputFieldValue={inputFieldValue}
        loading={loading}
        disabled={disabled}
        opened={opened}
        height={height}
        sideIcon={sideIcon}
      />
      <SelectDrop
        opened={opened}
        optionsList={optionsList}
        handleOptionClick={handleOptionClick}
        width={optionsContainerWidth}
      />
      <InputDescription description={description} />
    </InputContainer>
  );
};

Select.propTypes = {
  setValue: PropTypes.func.isRequired,
  optionsList: PropTypes.array.isRequired,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  loading: PropTypes.bool,
  label: PropTypes.string,
  description: PropTypes.string,
};

export default Select;
