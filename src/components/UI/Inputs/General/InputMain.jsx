import React from "react";
import InputSidebutton from "./InputSidebutton";

export const InputMain = ({ loading, copy, value, children }) => {
  return (
    <div className="text-input">
      {children}
      {loading && <InputSidebutton loading={loading} />}
      {copy && !loading && <InputSidebutton copy={copy} value={value} />}
    </div>
  );
};

export default InputMain;
