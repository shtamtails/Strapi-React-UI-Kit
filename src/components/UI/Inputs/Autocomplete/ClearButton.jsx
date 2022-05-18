import { CgClose } from "react-icons/cg";

export const ClearButton = ({ inputFieldValue, setInputFieldValue, loading, disabled }) => {
  const handleClick = () => {
    setInputFieldValue("");
  };
  return (
    <>
      {inputFieldValue.length > 0 && !loading && !disabled && (
        <div className="right-button" onClick={handleClick}>
          <CgClose />
        </div>
      )}
    </>
  );
};

export default ClearButton;
