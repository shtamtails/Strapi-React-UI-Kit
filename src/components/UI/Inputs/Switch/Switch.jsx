import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { InputContainer, InputLabel, InputDescription } from "../General";
import { SwitchMain, SwitchLabel } from "./Components";

export const Switch = ({ label, disabled, value, setValue }) => {
  const handleSwitchClick = (e) => {
    !disabled && setValue(!value);
  };
  return (
    <>
      <div className="switch-container">
        <SwitchMain
          value={value}
          setValue={setValue}
          disabled={disabled}
          handleSwitchClick={handleSwitchClick}
        />
        <SwitchLabel label={label} />
      </div>
    </>
  );
};

export default Switch;
