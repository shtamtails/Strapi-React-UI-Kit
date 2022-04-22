import React from "react";
import { Loader, Copy } from "../../";

export const InputSidebutton = ({ loading, copy, onClick, ...props }) => {
  return (
    <>
      {loading && (
        <div className="input-sidebutton">
          <Loader />
        </div>
      )}
      {copy && !loading && (
        <div className="input-sidebutton" onClick={() => console.log("copy")}>
          <Copy />
        </div>
      )}
    </>
  );
};

export default InputSidebutton;
