import React from "react";
import PropTypes from "prop-types";
import { InputContainer, InputLabel, InputDescription, InputMain } from "../General";

export const TextArea = React.forwardRef(({ ...props }, ref) => {
  if (props.loading) {
    props.disabled = true;
  }

  return (
    <InputContainer height={props.height}>
      <InputLabel label={props.label} required={props.required} />
      <InputMain loading={props.loading} icon={props.sideIcon}>
        <textarea
          className={props.sideIcon ? "with-icon" : "default"}
          required={props.required && true}
          disabled={props.disabled && true}
          type="text"
          placeholder={props.placeholder && props.placeholder}
          onChange={(e) => {
            props.value && props.setValue(e.target.value);
          }}
        />
      </InputMain>

      <InputDescription description={props.description} />
    </InputContainer>
  );
});

TextArea.propTypes = {
  value: PropTypes.any,
  setValue: PropTypes.func,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  loading: PropTypes.bool,
  label: PropTypes.string,
  description: PropTypes.string,
  placeholder: PropTypes.string,
};

export default TextArea;
