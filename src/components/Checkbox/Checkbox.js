import PropTypes from "prop-types";
import { useUniqueId } from "../Hooks/useUniqueId";

const Checkbox = ({ label, description, isCheckedState, setCheckedState, disabled }) => {
  const CHECKBOX_UNIQUE_ID = useUniqueId();
  const CHECKBOX_CONTAINER_UNIQUE_ID = useUniqueId();
  return (
    <div className="checkbox-container" key={`checkbox-container-${CHECKBOX_CONTAINER_UNIQUE_ID}`}>
      <div className="checkbox">
        <input
          type="checkbox"
          defaultChecked={isCheckedState}
          className={`custom-checkbox${disabled ? " checkbox-disabled" : ""}${
            disabled && isCheckedState ? " checkbox-dark" : ""
          }`}
          id={`checkbox-${CHECKBOX_UNIQUE_ID}`}
          key={`checkbox-${CHECKBOX_UNIQUE_ID}`}
          onClick={
            !disabled
              ? (e) => setCheckedState(!isCheckedState)
              : (e) => {
                  e.preventDefault();
                }
          }
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
  isChecked: PropTypes.bool.isRequired,
  setChecked: PropTypes.any.isRequired,
};

export default Checkbox;
