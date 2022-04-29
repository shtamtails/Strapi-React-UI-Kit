import React, { useState } from "react";
import PropTypes from "prop-types";
import { ShowPwdBtn } from "./Components";
import { InputContainer, InputLabel, InputDescription, InputMain } from "../General";

export const PasswordInput = React.forwardRef(({ ...props }, ref) => {
  if (props.loading) {
    props.disabled = true;
  }
  const [passwordVisibility, setPasswordVisibility] = useState(true);

  const styles = [];
  props.sideIcon ? styles.push("with-icon") : styles.push("default");
  props.height && styles.push(props.height);

  return (
    <InputContainer height={props.height}>
      <InputLabel label={props.label} required={props.required} />
      <InputMain loading={props.loading} icon={props.sideIcon}>
        <input
          className={styles.join(" ")}
          required={props.required}
          disabled={props.disabled || props.loading}
          type={`${!passwordVisibility ? "text" : "password"}`}
          placeholder={props.placeholder && props.placeholder}
          onChange={(e) => {
            props.value && props.setValue(e.target.value);
          }}
        />
        <ShowPwdBtn
          loading={props.loading}
          disabled={props.disabled}
          passwordVisibility={passwordVisibility}
          setPasswordVisibility={setPasswordVisibility}
        />
      </InputMain>

      <InputDescription description={props.description} />
    </InputContainer>
  );
});

PasswordInput.propTypes = {
  value: PropTypes.any,
  setValue: PropTypes.func,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  loading: PropTypes.bool,
  label: PropTypes.string,
  description: PropTypes.string,
  placeholder: PropTypes.string,
};

export default PasswordInput;
