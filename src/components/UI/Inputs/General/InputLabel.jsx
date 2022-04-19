import React from "react";

export const InputLabel = ({ label, required }) => {
  const labelStyle = [""];
  required && labelStyle.push("required");
  return (
    <>
      {label && (
        <div className={`input-label ${labelStyle.join(" ")}`}>{label}</div>
      )}
    </>
  );
};

export default InputLabel;
