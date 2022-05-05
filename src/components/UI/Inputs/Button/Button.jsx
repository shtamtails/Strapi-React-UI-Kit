import React from "react";
import PropTypes from "prop-types";

export const Button = (props) => {
  const handleBtnClick = (e) => {
    props.onClick(e);
  };

  const buttonStyles = [""];
  buttonStyles.push(`btn-${props.variant}-${props.color}`);
  props.height && buttonStyles.push(props.height);

  return (
    <button
      disabled={props.disabled}
      className={`btn${buttonStyles.join(" ")}`}
      onClick={handleBtnClick}
      type={props.submit && "submit"}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.oneOf(["success", "danger", "info"]),
  variant: PropTypes.oneOf(["filled", "outline", "light", "subtle"]),
  height: PropTypes.oneOf(["xs", "sm", "md", "lg", "full"]),
  disabled: PropTypes.bool,
};

export default Button;
