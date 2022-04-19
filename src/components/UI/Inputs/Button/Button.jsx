import React from "react";
import PropTypes from "prop-types";
import { useCorrectType } from "../../../Hooks/useCorrectType";

export const Button = ({ value, setValue, type, variant, ...props }) => {
  const handleBtnClick = (e) => {
    e.preventDefault();
    setValue(true);
  };

  const buttonStyles = [""];
  useCorrectType([type, variant], [Button.availableProps.type, Button.availableProps.variant])
    ? buttonStyles.push(`btn-${variant}-${type}`) // custom
    : buttonStyles.push(`btn-light-info`); // default

  return (
    <button disabled={props.disabled} className={`btn${buttonStyles.join(" ")}`} onClick={handleBtnClick}>
      {props.children}
    </button>
  );
};

Button.availableProps = {
  type: ["success", "danger", "info"],
  variant: ["filled", "outline", "light", "subtle"],
};

Button.propTypes = {
  value: PropTypes.bool.isRequired,
  setValue: PropTypes.func.isRequired,
  type: PropTypes.string,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
