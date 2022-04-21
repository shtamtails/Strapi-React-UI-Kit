import React from "react";

export const SkeletonContainer = ({ width, ...props }) => {
  return (
    <div className="skeleton-container" style={{ width: width }}>
      {props.children}
    </div>
  );
};

export default SkeletonContainer;
