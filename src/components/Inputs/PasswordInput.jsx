import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { AiOutlineLoading } from "react-icons/ai";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export const PasswordInput = ({ value, setValue, size, ...props }) => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  if (props.loading === true) {
    props.disabled = true;
  }

  return (
    <div className="input-container">
      <div className={`${props.required ? "required " : ""}input-label`}>{props.label}</div>
      <div className="text-input">
        <input
          required={props.required && true}
          disabled={props.disabled && true}
          type={`${passwordVisibility ? "text" : "password"}`}
          className={`${props.disabled ? "input-disabled" : ""}`}
          placeholder={props.placeholder && props.placeholder}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        {!props.loading && (
          <div
            className="password-visibility-btn"
            onClick={() => {
              setPasswordVisibility(!passwordVisibility);
            }}
          >
            {passwordVisibility ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </div>
        )}

        {props.loading && (
          <div className="input-loading">
            <AiOutlineLoading />
          </div>
        )}
      </div>
      <div className="input-description">{props.description}</div>
    </div>
  );
};

PasswordInput.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  loading: PropTypes.bool,
  label: PropTypes.string,
  description: PropTypes.string,
  placeholder: PropTypes.string,
};

export default PasswordInput;
