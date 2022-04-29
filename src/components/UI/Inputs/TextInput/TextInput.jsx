import React from "react";
import PropTypes from "prop-types";

import { InputContainer, InputLabel, InputDescription, InputMain } from "../General";

export const TextInput = React.forwardRef(({ ...props }, ref) => {
  if (props.loading) {
    props.disabled = true;
  }
  if (props.value && ref) {
    throw new Error(
      "Catched attempt to use controlled and uncotrolled component at one time. Delete or value prop or ref prop from component props"
    );
  }

  const styles = [];
  props.sideIcon ? styles.push("with-icon") : styles.push("default");
  props.height && styles.push(props.height);

  return (
    <>
      <InputContainer height={props.height}>
        <InputLabel label={props.label} required={props.required} />
        <InputMain
          loading={props.loading}
          copy={props.copy}
          value={props.value}
          icon={props.sideIcon}
        >
          <input
            className={styles.join(" ")}
            value={props.value}
            ref={ref}
            required={props.required && true}
            disabled={props.disabled || props.loading}
            type="text"
            placeholder={props.placeholder && props.placeholder}
            onChange={(e) => {
              !ref && !props.copy && props.setValue(e.target.value);
            }}
          />
        </InputMain>
        <InputDescription description={props.description} />
      </InputContainer>
    </>
  );
});

TextInput.propTypes = {
  height: PropTypes.oneOf(["xs", "sm", "md", "lg", "full"]),
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
