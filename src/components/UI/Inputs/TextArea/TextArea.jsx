import React from "react";
import PropTypes from "prop-types";
import { InputContainer, InputLabel, InputDescription, InputMain } from "../General";

export const TextArea = React.forwardRef((props, ref) => {
  props.loading && (props.disabled = true);

  return (
    <InputContainer>
      <InputLabel label={props.label} required={props.required} />
      <InputMain loading={props.loading}>
        <textarea
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
