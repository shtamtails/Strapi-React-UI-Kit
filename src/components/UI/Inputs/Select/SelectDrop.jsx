export const SelectDrop = ({ optionsList, handleOptionClick, opened, width }) => {
  return (
    <>
      {opened && (
        <div className="select-options" style={{ width: width }}>
          {optionsList.map((el) => {
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

export default SelectDrop;
