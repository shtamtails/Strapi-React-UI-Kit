import React from "react";
import PropTypes from "prop-types";

export const Divider = ({ padding, width, children, height, variant, color }) => {
  const lineStyle = { borderTop: `${height} ${variant} ${color}` };
  const dividerStyle = { padding: `${padding}`, width: `${width}` };

  return (
    <div className="divider" style={dividerStyle}>
      <div className={`line`} style={lineStyle}></div>
      {children && <div className="label">{children}</div>}
      {children && <div className={`line`} style={lineStyle}></div>}
    </div>
  );
};

Divider.defaultProps = {
  height: "2px",
  variant: "solid",
  color: "#dcdce4",
  width: "100%",
  padding: "10px 0px",
};

Divider.propTypes = {
  variant: PropTypes.oneOf(["solid", "dashed", "dotted"]),
  height: PropTypes.string,
  color: PropTypes.string,
  margin: PropTypes.string,
  children: PropTypes.string,
};

export default Divider;
