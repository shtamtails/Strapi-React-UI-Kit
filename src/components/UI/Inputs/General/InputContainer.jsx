import React from "react";
import PropTypes from "prop-types";

export const InputContainer = React.forwardRef(({ children }, ref) => {
  return (
    <div ref={ref} className="input-container">
      {children}
    </div>
  );
});

InputContainer.propTypes = {
  children: PropTypes.any.isRequired,
};

InputContainer.defaultProps = {};

export default InputContainer;
