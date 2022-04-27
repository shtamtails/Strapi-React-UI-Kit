import React from "react";
import InputSidebutton from "./InputSidebutton";
import InputSideIcon from "./InputSideIcon";
import PropTypes from "prop-types";

export const InputMain = ({ loading, copy, value, children, icon }) => {
  return (
    <div className={`text-input`}>
      {children}
      {icon && <InputSideIcon icon={icon} />}
      {loading && <InputSidebutton loading={loading} />}
      {copy && !loading && <InputSidebutton copy={copy} value={value} />}
    </div>
  );
};

InputMain.propTypes = {
  loading: PropTypes.bool,
  copy: PropTypes.bool,
  value: PropTypes.any,
  children: PropTypes.any.isRequired,
  icon: PropTypes.object,
};

export default InputMain;
