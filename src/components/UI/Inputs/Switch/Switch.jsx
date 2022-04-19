import React from "react";
import PropTypes from "prop-types";
import { InputContainer, InputLabel, InputDescription } from "../General";

export const Switch = ({ value, setValue, ...props }) => {
  const handleSwitchClick = (e) => {
    !props.disabled && setValue(!value);
  };
  return (
    <InputContainer>
      <InputLabel label={props.label} required={props.required} />
      <div className="switch-container">
        <div
          className={`${value ? "switch-true" : "switch-false"} ${
            props.disabled && "input-disabled"
          } switch-input`}
          onClick={handleSwitchClick}
        >
          <div
            className={`${value ? "ball-true" : "ball-false"} switch-ball`}
          ></div>
        </div>
        {props.showStatus && (
          <div
            className={`${value ? "status-false" : "status-true"} ${
              props.disabled && "status-disabled"
            } switch-status`}
          >
            {value && "Enabled"}
            {!value && "Disabled"}
          </div>
        )}
      </div>
      <InputDescription description={props.description} />
    </InputContainer>
  );
};

Switch.propTypes = {
  value: PropTypes.bool.isRequired,
  setValue: PropTypes.func.isRequired,
  showStatus: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  description: PropTypes.string,
};

export default Switch;
