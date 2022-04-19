import React from "react";
import { BsCheckLg } from "react-icons/bs";

export const Checkmark = ({ value, disabled }) => {
  const checkmarkStyles = ["checkbox-checkmark"];
  disabled && checkmarkStyles.push("checkbox-checkmark-dark");

  return (
    <>
      {value && (
        <div className={checkmarkStyles.join(" ")}>
          {value && <BsCheckLg />}
        </div>
      )}
    </>
  );
};

export default Checkmark;
