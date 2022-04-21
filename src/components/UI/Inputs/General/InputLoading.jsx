import React from "react";
import { Loader } from "../../";

export const InputLoading = ({ loading }) => {
  return (
    <>
      {loading && (
        <div className="input-sidebutton">
          <Loader />
        </div>
      )}
    </>
  );
};

export default InputLoading;
