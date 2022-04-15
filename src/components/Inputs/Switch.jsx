import React from "react";
import PropTypes from "prop-types";

export const Switch = ({ value, setValue, ...props }) => {
  const handleSwitchClick = (e) => {
    !props.disabled && setValue(!value);
  };
  return (
    <div className="input-container">
      {props.label && <div className="input-label">{props.label}</div>}
      <div className="switch-container">
        <div
          className={`${value ? "switch-true" : "switch-false"} ${props.disabled && "input-disabled"} switch-input`}
          onClick={handleSwitchClick}
        >
          <div className={`${value ? "ball-true" : "ball-false"} switch-ball`}></div>
        </div>
        {props.showStatus && (
          <div
            className={`${value ? "status-false" : "status-true"} ${props.disabled && "status-disabled"} switch-status`}
          >
            {value && !props.disabled && "Enabled"}
            {!value && !props.disabled && "Disabled"}
            {props.disabled && "Disabled"}
          </div>
        )}
      </div>
      {props.description && <div className="input-description">{props.description}</div>}
    </div>
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
