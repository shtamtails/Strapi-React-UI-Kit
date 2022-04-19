import React from "react";

export const SwitchMain = ({ value, disabled, handleSwitchClick }) => {
  const inputStyles = ["switch-input"];
  value ? inputStyles.push("switch-true") : inputStyles.push("switch-false");
  disabled && inputStyles.push("input-disabled");
  const ballStyles = ["switch-ball"];
  value ? ballStyles.push("ball-true") : ballStyles.push("ball-false");

  return (
    <div className={inputStyles.join(" ")} onClick={handleSwitchClick}>
      <div className={ballStyles.join(" ")}></div>
    </div>
  );
};

export default SwitchMain;
