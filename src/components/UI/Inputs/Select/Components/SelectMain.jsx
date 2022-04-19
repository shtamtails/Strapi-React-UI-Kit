import React from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import { AiOutlineLoading } from "react-icons/ai";
import Loader from "../../../../Utils/Loader/Loader";
import { InputLoading } from "../../General";

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
      <InputLoading loading={loading} />
      {!loading && (
        <div className={`${inputIconStyles.join(" ")} select-input-icon`}>
          <TiArrowSortedDown />
        </div>
      )}
    </div>
  );
};

export default SelectMain;
