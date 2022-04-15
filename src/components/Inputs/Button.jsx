import React from "react";
import PropTypes from "prop-types";

// Props
// Type: succes, danger,info, custom
// Variant: filled, light, outline, subtle

export const Button = ({ value, setValue, type, variant, ...props }) => {
  const handleBtnClick = (e) => {
    e.preventDefault();
    setValue(true);
  };

  const buttonStyles = ["btn"];
  type === "success" && variant === "filled" && buttonStyles.push("btn-filled-success");
  type === "danger" && variant === "filled" && buttonStyles.push("btn-filled-danger");
  type === "info" && variant === "filled" && buttonStyles.push("btn-filled-info");

  type === "success" && variant === "outline" && buttonStyles.push("btn-outline-success");
  type === "danger" && variant === "outline" && buttonStyles.push("btn-outline-danger");
  type === "info" && variant === "outline" && buttonStyles.push("btn-outline-info");

  type === "success" && variant === "light" && buttonStyles.push("btn-light-success");
  type === "danger" && variant === "light" && buttonStyles.push("btn-light-danger");
  type === "info" && variant === "light" && buttonStyles.push("btn-light-info");

  type === "success" && variant === "subtle" && buttonStyles.push("btn-subtle-success");
  type === "danger" && variant === "subtle" && buttonStyles.push("btn-subtle-danger");
  type === "info" && variant === "subtle" && buttonStyles.push("btn-subtle-info");
  return (
    <button disabled={props.disabled} className={buttonStyles.join(" ")} onClick={handleBtnClick}>
      {props.children}
    </button>
  );
};

Button.propTypes = {};

export default Button;
