import React from "react";
import InputSidebutton from "./InputSidebutton";
import InputSideIcon from "./InputSideIcon";

export const InputMain = ({ loading, copy, value, children, icon }) => {
  return (
    <div className="text-input">
      {children}
      {icon && <InputSideIcon icon={icon} />}
      {loading && <InputSidebutton loading={loading} />}
      {copy && !loading && <InputSidebutton copy={copy} value={value} />}
    </div>
  );
};

export default InputMain;
