import React from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import { AiOutlineLoading } from "react-icons/ai";

export const SelectMain = ({
  handleSelectClick,
  value,
  loading,
  disabled,
  select,
}) => {
  const inputStyles = [""];
  const inputIconStyles = [""];
  (loading || disabled) && inputStyles.push("select-disabled");
  select && inputIconStyles.push("select-input-icon-opened");

  return (
    <div className="select-input-container" onClick={handleSelectClick}>
      <div className={`${inputStyles.join(" ")} select-input`}>{value}</div>
      {!loading ? (
        <div className={`${inputIconStyles.join(" ")} select-input-icon`}>
          <TiArrowSortedDown />
        </div>
      ) : (
        <div className="input-loading">
          <AiOutlineLoading />
        </div>
      )}
    </div>
  );
};

export default SelectMain;
