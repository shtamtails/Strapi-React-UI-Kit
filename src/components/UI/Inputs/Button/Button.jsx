import React from "react";
import PropTypes from "prop-types";

export const Button = (props) => {
  const handleBtnClick = (e) => {
    e.preventDefault();
    props.setValue(true);
  };

  const buttonStyles = [""];
  buttonStyles.push(`btn-${props.variant}-${props.type}`);

  return (
    <button
      disabled={props.disabled}
      className={`btn${buttonStyles.join(" ")}`}
      onClick={handleBtnClick}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  value: PropTypes.bool.isRequired,
  setValue: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["success", "danger", "info"]),
  variant: PropTypes.oneOf(["filled", "outline", "light", "subtle"]),
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  type: "success",
  variant: "light",
};

export default Button;
