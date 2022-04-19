import React, { useState } from "react";
import PropTypes from "prop-types";
import { ShowPwdBtn } from "./Components";
import {
  InputContainer,
  InputLabel,
  InputDescription,
  InputMain,
} from "../General";

export const PasswordInput = (props) => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  props.loading && (props.disabled = true);

  return (
    <InputContainer>
      <InputLabel label={props.label} required={props.required} />
      <InputMain loading={props.loading}>
        <input
          required={props.required && true}
          disabled={props.disabled && true}
          type={`${passwordVisibility ? "text" : "password"}`}
          placeholder={props.placeholder && props.placeholder}
          onChange={(e) => {
            props.setValue(e.target.value);
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
