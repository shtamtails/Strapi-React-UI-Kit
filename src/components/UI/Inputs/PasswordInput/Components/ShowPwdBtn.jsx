import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export const ShowPwdBtn = ({
  loading,
  disabled,
  passwordVisibility,
  setPasswordVisibility,
}) => {
  return (
    <>
      {!loading && (
        <div
          className="password-visibility-btn"
          onClick={() => {
            setPasswordVisibility(!passwordVisibility);
          }}
        >
          {passwordVisibility && !disabled ? (
            <AiOutlineEyeInvisible />
          ) : (
            <AiOutlineEye />
          )}
        </div>
      )}
    </>
  );
};

export default ShowPwdBtn;
