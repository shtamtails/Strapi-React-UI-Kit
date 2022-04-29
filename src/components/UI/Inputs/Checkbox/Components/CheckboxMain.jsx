import React from "react";
import { Checkmark } from "./Checkmark";

export const CheckboxMain = ({ handleCheckboxClick, disabled, value }) => {
  const checkboxMain = ["checkbox"];
  disabled && checkboxMain.push("disabled");
  value && checkboxMain.push("checked");

  return (
    <div className={checkboxMain.join(" ")} onClick={handleCheckboxClick}>
      <Checkmark value={value} disabled={disabled} />
    </div>
  );
};

export default CheckboxMain;
