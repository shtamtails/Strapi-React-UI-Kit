import React from "react";
import PropTypes from "prop-types";
import { useCorrectType } from "../../../Hooks/useCorrectType";
import Loader from "../../../Utils/Loader/Loader";

export const ActionIcon = ({ ...props }) => {
  const handleClick = (e) => {
    !props.disabled && !props.loading && props.onClick();
  };

  const listOfVariants = ["filled", "outline", "transparent", "hover", "light"];
  const listOfSizes = ["sm", "md", "lg"];

  const containerStyles = [""];
  const iconStyles = [""];

  useCorrectType(props.variant, listOfVariants) && containerStyles.push(`action-${props.variant}`);
  useCorrectType(props.size, listOfSizes) && iconStyles.push(props.size);
  props.disabled && containerStyles.push("action-disabled");
  props.loading && containerStyles.push("action-disabled");

  return (
    <div className={`action-icon-container${containerStyles.join(" ")}`} onClick={handleClick}>
      <div className={`action-icon${iconStyles.join(" ")}`}>{!props.loading ? props.children : <Loader />}</div>
    </div>
  );
};

ActionIcon.defaultProps = {
  size: "sm",
  variant: "light",
};

ActionIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
  variant: PropTypes.string,
  size: PropTypes.string,
};

export default ActionIcon;
