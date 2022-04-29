import React from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import { InputSidebutton } from "../../General";

export const SelectMain = ({ handleSelectClick, inputValue, loading, disabled, select }) => {
  const inputStyles = ["select-input"];
  const arrorStyles = ["arrow"];
  (loading || disabled) && inputStyles.push("disabled");
  select && arrorStyles.push("opened");

  return (
    <div className="select-container" onClick={handleSelectClick}>
      <div className={inputStyles.join(" ")}>{inputValue}</div>
      <InputSidebutton loading={loading} />
      {!loading && (
        <div className={arrorStyles.join(" ")}>
          <TiArrowSortedDown />
        </div>
      )}
    </div>
  );
};

export default SelectMain;
