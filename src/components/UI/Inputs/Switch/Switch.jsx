import React from "react";
import PropTypes from "prop-types";
import { InputContainer, InputLabel, InputDescription } from "../General";
import { SwitchMain, SwitchStatus } from "./Components";

export const Switch = (props) => {
  const handleSwitchClick = (e) => {
    !props.disabled && setValue(!props.value);
  };
  return (
    <InputContainer>
      <InputLabel label={props.label} required={props.required} />
      <div className="switch-container">
        <SwitchMain
          value={props.value}
          disabled={props.disabled}
          handleSwitchClick={handleSwitchClick}
        />
        <SwitchStatus value={props.value} disabled={props.disabled} showStatus={props.showStatus} />
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
