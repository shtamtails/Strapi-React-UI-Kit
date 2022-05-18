import PropTypes from "prop-types";

export const InputLabel = ({ label, required }) => {
  const labelStyle = ["label"];
  required && labelStyle.push("required");
  return <>{label && <div className={labelStyle.join(" ")}>{label}</div>}</>;
};

InputLabel.propTypes = {
  label: PropTypes.string,
  required: PropTypes.bool,
};

export default InputLabel;
