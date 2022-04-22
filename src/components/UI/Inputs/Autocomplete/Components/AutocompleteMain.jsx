import React, { useEffect, useRef, useState } from "react";
import { InputLoading } from "../../General";
import ClearButton from "./ClearButton";

export const AutocompleteMain = React.forwardRef(
  ({ handleSelectClick, loading, disabled, setInputValue, inputValue }, ref) => {
    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };

    return (
      <>
        <div className="select-input-container">
          <input
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
          <InputLoading loading={loading} />
        </div>
      </>
    );
  }
);

export default AutocompleteMain;
