import { SwitchMain } from "./SwitchMain";
import { SwitchLabel } from "./SwitchLabel";

export const Switch = ({ label, disabled, value, setValue, useref }) => {
  const handleSwitchClick = (e) => {
    !disabled && setValue(!value);
  };
  return (
    <>
      <div className="switch-container">
        <SwitchMain
          ref={useref}
          value={value}
          setValue={setValue}
          disabled={disabled}
          handleSwitchClick={handleSwitchClick}
        />
        <SwitchLabel label={label} />
      </div>
    </>
  );
};

export default Switch;
