import React, { useRef } from "react";
import PropTypes from "prop-types";
import { AiOutlineLoading } from "react-icons/ai";

export const TextArea = ({ value, setValue, size, ...props }) => {
  if (props.loading === true) {
    props.disabled = true;
  }

  return (
    <div className="input-container">
      <div className={`${props.required ? "required " : ""}input-label`}>{props.label}</div>
      <div className="text-input">
        <textarea
          required={props.required && true}
          disabled={props.disabled && true}
          type="text"
          className={`${props.disabled ? "input-disabled" : ""}`}
          placeholder={props.placeholder && props.placeholder}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
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

TextArea.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  loading: PropTypes.bool,
  label: PropTypes.string,
  description: PropTypes.string,
  placeholder: PropTypes.string,
};

export default TextArea;
