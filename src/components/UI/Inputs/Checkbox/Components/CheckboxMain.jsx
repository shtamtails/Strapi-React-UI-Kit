import React, { useState } from "react";
import { BsCheckLg } from "react-icons/bs";

export const CheckboxMain = React.forwardRef(({ disabled, onClick }, ref) => {
  const checkboxMain = ["checkbox"];
  const checkmarkStyles = ["checkmark"];
  disabled && checkboxMain.push("disabled");
  disabled && checkmarkStyles.push("checkmark-dark");
  const [checked, setChecked] = useState(false);
  const handleClick = () => {
    setChecked(!checked);
    onClick && onClick();
  };

  return (
    <>
      <input
        ref={ref}
        type="checkbox"
        className="checkbox"
        disabled={disabled}
        onClick={handleClick}
      />
      <span className={checkboxMain.join(" ")}>
        {checked && (
          <div className={checkmarkStyles.join(" ")}>
            <BsCheckLg />
          </div>
        )}
      </span>
    </>
  );
});

export default CheckboxMain;
