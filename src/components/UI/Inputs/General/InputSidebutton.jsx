import { Loader, Copy } from "../../";
import { useClipboard } from "../../../Hooks/";

import PropTypes from "prop-types";

export const InputSidebutton = ({ loading, copy, onClick, ...props }) => {
  const clipboard = useClipboard();
  return (
    <>
      {loading && (
        <div className="right-button">
          <Loader />
        </div>
      )}
      {copy && !loading && (
        <div
          className="right-button"
          onClick={() => {
            clipboard.copy(props.value);
          }}
        >
          <Copy />
        </div>
      )}
    </>
  );
};

InputSidebutton.propTypes = {
  loading: PropTypes.bool,
  copy: PropTypes.bool,
  onClick: PropTypes.func,
  value: PropTypes.string,
};

export default InputSidebutton;
