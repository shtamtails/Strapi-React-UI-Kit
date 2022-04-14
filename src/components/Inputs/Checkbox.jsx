import React from "react";
import PropTypes from "prop-types";
import { BsCheckLg } from "react-icons/bs";

export const Checkbox = ({ value, setValue, label, disabled, ...props }) => {
  const handleCheckboxClick = (e) => {
    !disabled && setValue(!value);
  };

  const checkboxStyles = ["checkbox"];
  const inputCheckboxStyles = ["input-checkbox"];
  const checkmarkStyles = ["checkbox-checkmark"];
  const labelStyles = ["checkbox-label"];

  disabled && inputCheckboxStyles.push("input-disabled");
  disabled && checkmarkStyles.push("checkbox-checkmark-dark");
  disabled && labelStyles.push("status-disabled");

  props.labelBg && label && disabled && checkboxStyles.push("checkbox-with-label-disabled");
  label && checkboxStyles.push("checkbox-with-label");

  value && inputCheckboxStyles.push("checkbox-checked");

  return (
    <div className={checkboxStyles.join(" ")}>
      <div className="checkbox-container ">
        <div className={inputCheckboxStyles.join(" ")} onClick={handleCheckboxClick}>
          {value && <div className={checkmarkStyles.join(" ")}>{value && <BsCheckLg />}</div>}
        </div>
        {label && <div className={labelStyles.join(" ")}>{label}</div>}
      </div>
    </div>
  );
};

Checkbox.propTypes = {
  value: PropTypes.bool.isRequired,
  setValue: PropTypes.func.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  labelBg: PropTypes.bool,
};

export default Checkbox;
