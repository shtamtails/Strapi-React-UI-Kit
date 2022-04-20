import React from "react";
import PropTypes from "prop-types";
import { CheckboxLabel, CheckboxMain } from "./Components";

export const Checkbox = ({ value, setValue, label, disabled, ...props }) => {
  const handleCheckboxClick = (e) => {
    !disabled && setValue(!value);
  };

  const checkboxStyles = ["checkbox"];

  props.labelBg && label && disabled && checkboxStyles.push("checkbox-with-label-disabled");
  label && props.labelBg && checkboxStyles.push("checkbox-with-label");

  return (
    <div className={checkboxStyles.join(" ")}>
      <div className="checkbox-container">
        <CheckboxMain handleCheckboxClick={handleCheckboxClick} disabled={disabled} value={value} />
        <CheckboxLabel label={label} disabled={disabled} />
      </div>
    </div>
  );
};

Checkbox.propTypes = {
  value: PropTypes.bool.isRequired,
  setValue: PropTypes.func.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  labelBg: PropTypes.bool,
};

export default Checkbox;
