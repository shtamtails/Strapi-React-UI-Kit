import React from "react";
import { InputSidebutton, InputSideIcon } from "../General";
import ClearButton from "./ClearButton";

export const AutocompleteMain = React.forwardRef(
  (
    {
      handleSelectInputFieldClick,
      loading,
      disabled,
      setInputFieldValue,
      inputFieldValue,
      sideIcon,
      height,
      borderRadius,
      placeholder,
      required,
    },
    ref
  ) => {
    const handleInputChange = (e) => {
      setInputFieldValue(e.target.value);
    };

    const styles = ["select-input"];
    sideIcon ? styles.push("with-icon") : styles.push("default");
    height && styles.push(height);
    borderRadius && styles.push(`br-${borderRadius}`);

    return (
      <>
        <div className="select-container">
          <InputSideIcon icon={sideIcon} />
          <input
            required={required}
            className={styles.join(" ")}
            ref={ref}
            disabled={disabled || loading}
            type="text"
            onClick={handleSelectInputFieldClick}
            value={inputFieldValue}
            onChange={handleInputChange}
            placeholder={placeholder}
          />
          <ClearButton
            loading={loading}
            disabled={disabled}
            inputFieldValue={inputFieldValue}
            setInputFieldValue={setInputFieldValue}
          />
          <InputSidebutton loading={loading} />
        </div>
      </>
    );
  }
);

export default AutocompleteMain;
