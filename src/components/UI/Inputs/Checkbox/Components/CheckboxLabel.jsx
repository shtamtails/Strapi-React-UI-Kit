import React from "react";

export const CheckboxLabel = ({ label, disabled }) => {
  const labelStyles = ["checkbox-label"];
  disabled && labelStyles.push("status-disabled");

  return <>{label && <div className={labelStyles.join(" ")}>{label}</div>}</>;
};

export default CheckboxLabel;
