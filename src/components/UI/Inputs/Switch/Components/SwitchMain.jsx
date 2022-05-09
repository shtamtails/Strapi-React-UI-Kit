import React from "react";

export const SwitchMain = React.forwardRef(
  ({ setValue, value, disabled, handleSwitchClick }, ref) => {
    const switchStyles = ["switch"];
    disabled && switchStyles.push("switch-disabled");
    const handleClick = (e) => {
      setValue && setValue(!value);
    };
    return (
      <>
        <input
          ref={ref}
          type="checkbox"
          className={switchStyles.join(" ")}
          onClick={handleClick}
          disabled={disabled}
          defaultChecked={value}
        />
      </>
    );
  }
);

export default SwitchMain;
