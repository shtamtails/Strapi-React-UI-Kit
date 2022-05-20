export const AutocompleteDrop = ({
  optionsList,
  handleOptionClick,
  opened,
  inputFieldValue,
  loading,
  disabled,
  width,
}) => {
  const tempOptionsList = optionsList.filter((el) => {
    return el.text.toLowerCase().includes(inputFieldValue.toLowerCase());
  });
  return (
    <>
      {opened && !loading && !disabled && tempOptionsList.length > 0 && (
        <div className="select-options" style={{ width: width }}>
          {tempOptionsList.map((el) => {
            return (
              <>
                <div className="option">
                  <option key={el.id} value={el.value} onClick={handleOptionClick}>
                    {el.text}
                  </option>
                  {el.description && <div className="option-description">{el.description}</div>}
                </div>
              </>
            );
          })}
        </div>
      )}
    </>
  );
};

export default AutocompleteDrop;
