import React from "react";
import { Checkmark } from "./Checkmark";

export const CheckboxMain = ({ handleCheckboxClick, disabled, value }) => {
  const checkboxMain = ["input-checkbox"];
  disabled && checkboxMain.push("input-disabled");
  value && checkboxMain.push("checkbox-checked");

  return (
    <div className={checkboxMain.join(" ")} onClick={handleCheckboxClick}>
      <Checkmark value={value} disabled={disabled} />
    </div>
  );
};

export default CheckboxMain;
