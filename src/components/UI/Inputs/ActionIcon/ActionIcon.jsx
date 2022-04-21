import React from "react";
import PropTypes from "prop-types";
import { Loader } from "../../";

export const ActionIcon = ({ ...props }) => {
  const handleClick = (e) => {
    !props.disabled && !props.loading && props.onClick();
  };

  const containerStyles = [""];
  const iconStyles = [""];

  containerStyles.push(`action-${props.variant}`);
  iconStyles.push(props.size);

  props.disabled && containerStyles.push("action-disabled");
  props.loading && containerStyles.push("action-disabled");

  return (
    <div className={`action-icon-container${containerStyles.join(" ")}`} onClick={handleClick}>
      <div className={`action-icon${iconStyles.join(" ")}`}>
        {!props.loading ? props.children : <Loader />}
      </div>
    </div>
  );
};

ActionIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
  variant: PropTypes.oneOf(["filled", "outline", "transparent", "hover", "light"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};

ActionIcon.defaultProps = {
  variant: "hover",
  size: "md",
};

export default ActionIcon;
