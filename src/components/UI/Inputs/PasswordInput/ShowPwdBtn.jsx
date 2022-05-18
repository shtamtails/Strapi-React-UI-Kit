import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export const ShowPwdBtn = ({ loading, disabled, passwordVisibility, setPasswordVisibility }) => {
  return (
    <>
      {!loading && (
        <div
          className="right-button"
          onClick={() => {
            setPasswordVisibility(!passwordVisibility);
          }}
        >
          {passwordVisibility && !disabled ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </div>
      )}
    </>
  );
};

export default ShowPwdBtn;
