import React, { useState } from "react";
import PropTypes from "prop-types";
import { AiOutlineLoading } from "react-icons/ai";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Loader from "../../../Utils/Loader/Loader";

// !! TODO ADD LOADER COMPONENT

export const PasswordInput = ({ value, setValue, size, ...props }) => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  if (props.loading === true) {
    props.disabled = true;
  }

  return (
    <div className="input-container">
      {props.label && <div className={`${props.required ? "required " : ""}input-label`}>{props.label}</div>}
      <div className="text-input">
        <input
          required={props.required && true}
          disabled={props.disabled && true}
          type={`${passwordVisibility ? "text" : "password"}`}
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
            {passwordVisibility && !props.disabled ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </div>
        )}

        {props.loading && (
          <div className="input-loading">
            <Loader />
          </div>
        )}
      </div>
      {props.description && <div className="input-description">{props.description}</div>}
    </div>
  );
};

PasswordInput.propTypes = {
  value: PropTypes.any.isRequired,
  setValue: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  loading: PropTypes.bool,
  label: PropTypes.string,
  description: PropTypes.string,
  placeholder: PropTypes.string,
};

export default PasswordInput;
