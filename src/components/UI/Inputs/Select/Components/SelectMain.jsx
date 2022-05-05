import React from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import { InputSidebutton, InputSideIcon } from "../../General";

export const SelectMain = ({
  handleSelectClick,
  inputValue,
  loading,
  disabled,
  select,
  sideIcon,
  height,
}) => {
  const styles = ["select-input"];
  const arrorStyles = ["arrow"];
  (loading || disabled) && styles.push("disabled");
  select && arrorStyles.push("opened");
  height && styles.push(height);

  return (
    <div className="select-container" onClick={handleSelectClick}>
      <InputSideIcon icon={sideIcon} />

      <div className={styles.join(" ")}>{inputValue}</div>
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
