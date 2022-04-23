import React from "react";
import { Loader, Copy } from "../../";
import useClipboard from "../../../../Hooks/useClipboard";

export const InputSidebutton = ({ loading, copy, onClick, ...props }) => {
  const clipboard = useClipboard();
  return (
    <>
      {loading && (
        <div className="input-sidebutton">
          <Loader />
        </div>
      )}
      {copy && !loading && (
        <div
          className="input-sidebutton"
          onClick={() => {
            clipboard.copy(props.value);
            // Throw new alert "Copied"
          }}
        >
          <Copy />
        </div>
      )}
    </>
  );
};

export default InputSidebutton;
