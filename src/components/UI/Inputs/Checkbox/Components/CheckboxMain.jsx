import React, { useState } from "react";
import { BsCheckLg } from "react-icons/bs";

export const CheckboxMain = React.forwardRef(({ disabled, onClick, value, setValue }, ref) => {
  const checkboxMain = ["checkbox"];
  const checkmarkStyles = ["checkmark"];
  disabled && checkboxMain.push("disabled");
  disabled && checkmarkStyles.push("checkmark-dark");
  const [checked, setChecked] = useState(false);
  const handleClick = () => {
    setChecked(!checked);
    onClick && onClick();
    setValue(!value);
  };

  return (
    <>
      <input
        ref={ref}
        type="checkbox"
        className="checkbox"
        disabled={disabled}
        onClick={handleClick}
        defaultChecked={value}
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
