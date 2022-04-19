import React from "react";
import { InputLoading } from "./InputLoading";

export const InputMain = ({ loading, children }) => {
  return (
    <div className="text-input">
      {children}
      <InputLoading loading={loading} />
    </div>
  );
};

export default InputMain;
