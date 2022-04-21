import React from "react";

export const DividerContainer = ({ children, padding, width }) => {
  return (
    <div className="divider-container" style={{ padding: `${padding}`, width: `${width}` }}>
      {children}
    </div>
  );
};

export default DividerContainer;
