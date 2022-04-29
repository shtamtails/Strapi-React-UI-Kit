import React from "react";

export const CheckboxLabel = ({ label, disabled }) => {
  const labelStyles = ["label"];

  return <>{label && <div className={labelStyles.join(" ")}>{label}</div>}</>;
};

export default CheckboxLabel;
