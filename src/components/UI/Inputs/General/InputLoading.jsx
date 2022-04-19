import React from "react";
import Loader from "../../../Utils/Loader/Loader";

export const InputLoading = ({ loading }) => {
  return (
    <>
      {loading && (
        <div className="input-loading">
          <Loader />
        </div>
      )}
    </>
  );
};

export default InputLoading;
