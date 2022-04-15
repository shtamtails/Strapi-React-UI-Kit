import React from "react";
import PropTypes from "prop-types";
import { AiOutlineLoading } from "react-icons/ai";

export const TextInput = ({ value, setValue, size, ...props }) => {
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
          type="text"
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
      {props.description && <div className="input-description">{props.description}</div>}
    </div>
  );

  // ! Form to test submit

  // return (
  //   <>
  //     <form action="submit">
  //       <div className="text-input-container">
  //         <div className={`${props.required ? "required " : ""}input-label`}>{props.label}</div>
  //         <div className="text-input">
  //           <input
  //             required={props.required && true}
  //             disabled={props.disabled && true}
  //             type="text"
  //             className={`${props.disabled ? "input-disabled" : ""}`}
  //             placeholder={props.placeholder && props.placeholder}
  //             onChange={(e) => {
  //               setValue(e.target.value);
  //             }}
  //           />
  //           {props.loading && (
  //             <div className="input-loading">
  //               <AiOutlineLoading />
  //             </div>
  //           )}
  //         </div>
  //         <div className="input-description">{props.description}</div>
  //       </div>
  //       <button type="submit"></button>
  //     </form>
  //   </>
  // );
};

TextInput.propTypes = {
  value: PropTypes.any.isRequired,
  setValue: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  loading: PropTypes.bool,
  label: PropTypes.string,
  description: PropTypes.string,
  placeholder: PropTypes.string,
};

export default TextInput;
