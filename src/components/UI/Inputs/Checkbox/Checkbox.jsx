import React from "react";
import PropTypes from "prop-types";
import { CheckboxLabel, CheckboxMain } from "./Components";

export const Checkbox = ({ label, disabled, onClick, useref, value, setValue }) => {
  return (
    <div className="checkbox-container">
      <CheckboxMain
        ref={useref}
        disabled={disabled}
        onClick={onClick}
        value={value}
        setValue={setValue}
      />
      <CheckboxLabel label={label} disabled={disabled} />
    </div>
  );
};

Checkbox.propTypes = {
  value: (props, propName, componentName) => {
    if (props.value == undefined && props.useref == undefined) {
      return new Error(`One of props "value" or "useref" was not specified in ${componentName}`);
    }
  },
  useref: (props, propName, componentName) => {
    if (props.value == undefined && props.useref == undefined) {
      return new Error(`One of props "value" or "useref" was not specified in ${componentName}`);
    }
  },
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Checkbox;
