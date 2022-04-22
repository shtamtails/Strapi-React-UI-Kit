import React from "react";
import InputSidebutton from "./InputSidebutton";

export const InputMain = ({ loading, copy, children }) => {
  return (
    <div className="text-input">
      {children}
      {loading && <InputSidebutton loading={loading} />}
      {copy && !loading && <InputSidebutton copy={copy} />}
    </div>
  );
};

export default InputMain;
