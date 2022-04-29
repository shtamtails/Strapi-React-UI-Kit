import React, { useEffect, useRef, useState } from "react";
import { InputSidebutton } from "../../General";
import ClearButton from "./ClearButton";

export const AutocompleteMain = React.forwardRef(
  ({ handleSelectClick, loading, disabled, setInputValue, inputValue, sideIcon, height }, ref) => {
    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };

    const styles = [];
    sideIcon ? styles.push("with-icon") : styles.push("default");
    height && styles.push(height);

    return (
      <>
        <div className="select">
          <input
            className={styles.join(" ")}
            ref={ref}
            disabled={disabled || loading}
            type="text"
            onClick={handleSelectClick}
            value={inputValue}
            onChange={handleInputChange}
          />
          <ClearButton
            loading={loading}
            disabled={disabled}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
          <InputSidebutton loading={loading} />
        </div>
      </>
    );
  }
);

export default AutocompleteMain;
