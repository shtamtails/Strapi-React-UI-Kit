import React from "react";
import { Loader } from "../../../Utils/";

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
