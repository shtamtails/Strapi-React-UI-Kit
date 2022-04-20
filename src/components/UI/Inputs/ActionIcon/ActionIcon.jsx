import React from "react";
import PropTypes from "prop-types";
import { useCorrectType } from "../../../../Hooks";
import { Loader } from "../../../Utils";

export const ActionIcon = ({ ...props }) => {
  const handleClick = (e) => {
    !props.disabled && !props.loading && props.onClick();
  };

  const containerStyles = [""];
  const iconStyles = [""];

  useCorrectType(props.variant, ActionIcon.availableProps.variant)
    ? containerStyles.push(`action-${props.variant}`)
    : containerStyles.push(`action-light`);

  useCorrectType(props.size, ActionIcon.availableProps.size)
    ? iconStyles.push(props.size)
    : iconStyles.push("md");

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

ActionIcon.availableProps = {
  variant: ["filled", "outline", "transparent", "hover", "light"],
  size: ["sm", "md", "lg"],
};

ActionIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
  variant: PropTypes.string,
  size: PropTypes.string,
};

export default ActionIcon;
