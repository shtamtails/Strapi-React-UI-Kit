import React from "react";
import PropTypes from "prop-types";
import { Loader } from "../../";

export const ActionIcon = ({ disabled, loading, variant, size, children, onClick }) => {
  // Styling
  const styles = [variant];
  (disabled || loading) && styles.push("disabled");
  //

  const handleClick = (e) => {
    !disabled && !loading && onClick();
  };

  return (
    <div className={`action-icon-container icon-${size} `}>
      <div className={styles.join(" ")} onClick={handleClick}>
        <div className={`icon icon-${size}`}>{!loading ? children : <Loader />}</div>
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
