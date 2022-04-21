import React from "react";

export const DividerLine = ({ height, variant, color }) => {
  return (
    <div
      className={`divider-line`}
      style={{
        borderTop: `${height} ${variant} ${color}`,
      }}
    ></div>
  );
};

export default DividerLine;
