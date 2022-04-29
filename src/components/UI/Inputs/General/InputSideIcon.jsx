import React from "react";
import PropTypes from "prop-types";

export const InputSideIcon = ({ icon }) => {
  return <div className="left-icon">{icon}</div>;
};

InputSideIcon.propTypes = {
  icon: PropTypes.object.isRequired,
};

export default InputSideIcon;
