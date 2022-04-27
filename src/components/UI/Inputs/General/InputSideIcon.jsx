import React from "react";
import PropTypes from "prop-types";

export const InputSideIcon = ({ icon }) => {
  return <div className="input-sideicon">{icon}</div>;
};

InputSideIcon.propTypes = {
  icon: PropTypes.object.isRequired,
};

export default InputSideIcon;
