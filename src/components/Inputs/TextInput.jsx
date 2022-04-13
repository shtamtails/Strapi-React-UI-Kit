import React, { useRef } from "react";
import PropTypes from "prop-types";
import { AiOutlineLoading, AiFillApple } from "react-icons/ai";

// ! Props:
// ? disabled
// ? required
// ? label
// ? description
// ? placeholder
// ? loading

// TODO Add red border to input and description when error handled

export const TextInput = ({ value, setValue, size, ...props }) => {
  if (props.loading === true) {
    props.disabled = true;
  }
  const handleSubmit = () => {
    if (props.required && value.length === 0) {
      console.log("error");
    }
  };
  return (
    <>
      <div className="text-input-container">
        <div className={`${props.required ? "required " : ""}input-label`}>{props.label}</div>
        <div className="text-input">
          <input
            required={props.required && true}
            disabled={props.disabled && true}
            type="text"
            className={`${props.disabled ? "input-disabled" : ""}`}
            placeholder={props.placeholder && props.placeholder}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            onSubmit={handleSubmit}
          />
          {props.loading && (
            <div className="input-loading">
              <AiOutlineLoading />
            </div>
          )}
        </div>
        <div className="input-description">{props.description}</div>
      </div>
    </>
  );
};

TextInput.propTypes = {};

export default TextInput;
