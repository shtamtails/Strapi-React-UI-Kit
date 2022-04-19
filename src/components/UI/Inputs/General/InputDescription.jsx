import React from "react";

export const InputDescription = ({ description }) => {
  return (
    <>{description && <div className="input-description">{description}</div>}</>
  );
};

export default InputDescription;
