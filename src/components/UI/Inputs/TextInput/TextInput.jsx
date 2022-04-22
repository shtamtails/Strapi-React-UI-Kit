import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { InputContainer, InputLabel, InputDescription, InputMain } from "../General";

export const TextInput = React.forwardRef((props, ref) => {
  // export const TextInput = (props) => {
  props.loading && (props.disabled = true);

  return (
    <InputContainer>
      <InputLabel label={props.label} required={props.required} />
      <InputMain loading={props.loading}>
        <input
          ref={ref}
          required={props.required && true}
          disabled={props.disabled && true}
          type="text"
          placeholder={props.placeholder && props.placeholder}
          onChange={(e) => {
            props.setValue(e.target.value);
          }}
        />
      </InputMain>
      <InputDescription description={props.description} />
    </InputContainer>
  );
});

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
