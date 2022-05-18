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
              <option key={el.id} className="option" value={el.value} onClick={handleOptionClick}>
                {el.text}
              </option>
            );
          })}
        </div>
      )}
    </>
  );
};

export default AutocompleteDrop;
