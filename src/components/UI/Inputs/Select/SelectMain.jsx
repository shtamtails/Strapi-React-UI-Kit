import { TiArrowSortedDown } from "react-icons/ti";
import { InputSidebutton, InputSideIcon } from "../General";

export const SelectMain = ({
  handleSelectInputFieldClick,
  inputFieldValue,
  loading,
  disabled,
  opened,
  sideIcon,
  height,
}) => {
  const inputFieldStyle = ["select-input"]; // Style of input field
  const arrowStyle = ["arrow"]; // Style of an arrow
  (loading || disabled) && inputFieldStyle.push("disabled"); // If loading or disabled add disabled class to input field styles
  height && inputFieldStyle.push(height); // If height prop is handled add height class to input field styles
  sideIcon ? inputFieldStyle.push("with-icon") : inputFieldStyle.push("default"); // If sideicon prop is handled add class with-icon to add space for icon
  opened && arrowStyle.push("opened"); // If opened add opened class to arrow styles (rotate 180deg)

  return (
    <div className="select-container" onClick={handleSelectInputFieldClick}>
      <InputSideIcon icon={sideIcon} />

      <div className={inputFieldStyle.join(" ")}>{inputFieldValue}</div>
      <InputSidebutton loading={loading} />
      {!loading && ( // if loading dont show arrow
        <div className={arrowStyle.join(" ")}>
          <TiArrowSortedDown />
        </div>
      )}
    </div>
  );
};

export default SelectMain;
