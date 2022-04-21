import React from "react";
import PropTypes from "prop-types";

export const Skeleton = (props) => {
  return (
    <>
      <div
        className={`${props.circle ? "skeleton-circle" : "skeleton"}`}
        style={{ width: props.width, height: props.height, ...props.style }}
      ></div>
    </>
  );
};

Skeleton.defaultProps = {
  height: "8px",
  width: "100%",
  circle: false,
};

Skeleton.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  circle: PropTypes.bool,
  style: PropTypes.object,
};

export default Skeleton;
