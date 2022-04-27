import React from "react";
import { Loader, Copy } from "../../";
import useClipboard from "../../../../Hooks/useClipboard";
import PropTypes from "prop-types";

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
          }}
        >
          <Copy />
        </div>
      )}
    </>
  );
};

InputSidebutton.propTypes = {
  loading: PropTypes.bool,
  copy: PropTypes.bool,
  onClick: PropTypes.func,
  value: PropTypes.string,
};

export default InputSidebutton;
