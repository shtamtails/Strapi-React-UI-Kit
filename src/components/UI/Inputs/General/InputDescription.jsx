import PropTypes from "prop-types";

export const InputDescription = ({ description }) => {
  return <>{description && <div className="description">{description}</div>}</>;
};

InputDescription.propTypes = {
  description: PropTypes.string,
};
export default InputDescription;
