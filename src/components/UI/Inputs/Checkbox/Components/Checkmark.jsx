import React from "react";
import { BsCheckLg } from "react-icons/bs";

export const Checkmark = ({ value, disabled }) => {
  const checkmarkStyles = ["checkmark"];
  disabled && checkmarkStyles.push("checkmark-dark");

  return <>{value && <div className={checkmarkStyles.join(" ")}>{value && <BsCheckLg />}</div>}</>;
};

export default Checkmark;
