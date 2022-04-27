import React from "react";
import PropTypes from "prop-types";

export const InputLabel = ({ label, required }) => {
  const labelStyle = [""];
  required && labelStyle.push("required");
  return <>{label && <div className={`input-label ${labelStyle.join(" ")}`}>{label}</div>}</>;
};

InputLabel.propTypes = {
  label: PropTypes.string,
  required: PropTypes.bool,
};

export default InputLabel;
