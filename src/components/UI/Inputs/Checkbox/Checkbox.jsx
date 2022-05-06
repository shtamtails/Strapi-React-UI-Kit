import React from "react";
import PropTypes from "prop-types";
import { CheckboxLabel, CheckboxMain } from "./Components";

export const Checkbox = ({ label, disabled, onClick, useref }) => {
  return (
    <div className="checkbox-container">
      <CheckboxMain ref={useref} disabled={disabled} onClick={onClick} />
      <CheckboxLabel label={label} disabled={disabled} />
    </div>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Checkbox;
