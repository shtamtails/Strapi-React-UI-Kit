import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { InputContainer, InputLabel, InputDescription, InputMain } from "../General";

export const TextInput = React.forwardRef(({ ...props }, ref) => {
  if (props.loading) {
    props.disabled = true;
  }
  return (
    <InputContainer>
      <InputLabel label={props.label} required={props.required} />
      <InputMain loading={props.loading} copy={props.copy}>
        <input
          value={props.value}
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
  value: PropTypes.any,
  setValue: PropTypes.func,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  loading: PropTypes.bool,
  label: PropTypes.string,
  description: PropTypes.string,
  placeholder: PropTypes.string,
};

export default TextInput;
