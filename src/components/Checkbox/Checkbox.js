import PropTypes from "prop-types";
import { useMemo } from "react";
import { useUniqueId } from "../Hooks/useUniqueId";

const Checkbox = ({ label, description, checkboxState, changeCheckedState, disabled }) => {
  const handleClick = (e) => {
    if (!disabled) {
      changeCheckedState();
    } else {
      e.preventDefault();
    }
  };
  const uniqueID = useUniqueId();
  // prevents from unnecessary re-rendering when changing click state
  const CHECKBOX_UNIQUE_ID = useMemo(() => {
    return uniqueID;
  }, []);

  const checkboxStyles = ["custom-checkbox"];
  disabled && checkboxStyles.push("checkbox-disabled");
  disabled && checkboxState && checkboxStyles.push("checkbox-dark");

  return (
    <div className="checkbox-container">
      <div className="checkbox">
        <input
          type="checkbox"
          defaultChecked={checkboxState}
          className={checkboxStyles.join(" ")}
          id={`checkbox-${CHECKBOX_UNIQUE_ID}`}
          onClick={handleClick}
        />
        <label htmlFor={`checkbox-${CHECKBOX_UNIQUE_ID}`}>{label}</label>
      </div>
      <div className="checkbox-description">{description}</div>
    </div>
  );
};

Checkbox.defaultProps = {
  isChecked: false,
  disabled: false,
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  description: PropTypes.string,
  disabled: PropTypes.bool,
  checkboxState: PropTypes.bool.isRequired,
  changeCheckedState: PropTypes.any.isRequired,
};

export default Checkbox;
