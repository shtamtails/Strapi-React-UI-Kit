import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import { AiOutlineLoading } from "react-icons/ai";

// ! Add border on open

export const Select = ({ optionsList, value, setValue, ...props }) => {
  const [select, setSelect] = useState(false);

  const handleSelectClick = (e) => {
    !props.disabled && !props.loading && setSelect(!select);
  };

  const handleOptionClick = (e) => {
    setSelect(false);
    setValue(e.target.attributes.value.nodeValue);
  };

  return (
    <div className="input-container">
      {props.label && <div className={`${props.required && "required"} input-label`}>{props.label}</div>}
      <div className="select-input-container" onClick={handleSelectClick}>
        <div className={`${props.loading || (props.disabled && "select-disabled")} select-input`}>{value}</div>
        {!props.loading ? (
          <div className={`${select && "select-input-icon-opened"} select-input-icon`}>
            <TiArrowSortedDown />
          </div>
        ) : (
          <div className="input-loading">
            <AiOutlineLoading />
          </div>
        )}
      </div>
      {select && (
        <div className="select-option-container">
          {optionsList.map((el) => {
            return (
              <option key={el.id} className="select-option" value={el.value} onClick={handleOptionClick}>
                {el.text}
              </option>
            );
          })}
        </div>
      )}
      {props.description && <div className="input-description">{props.description}</div>}
    </div>
  );
};

Select.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  optionsList: PropTypes.array.isRequired,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  loading: PropTypes.bool,
  label: PropTypes.string,
  description: PropTypes.string,
};

export default Select;
