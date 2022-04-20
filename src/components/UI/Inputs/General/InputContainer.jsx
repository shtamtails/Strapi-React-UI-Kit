import React from "react";

export const InputContainer = React.forwardRef(({ children }, ref) => {
  return (
    <div ref={ref} className="input-container">
      {children}
    </div>
  );
});

export default InputContainer;
