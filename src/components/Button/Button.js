import PropTypes from "prop-types";

const Button = (props) => {
  const handleClick = (e) => {
    if (!props.disabled) {
      props.onClick();
    } else {
      e.preventDefault();
    }
  };

  const buttonStyles = ["btn", `btn-${props.type}`];
  props.disabled && buttonStyles.push("btn-disabled");

  return (
    <button className={buttonStyles.join(" ")} onClick={handleClick} style={props.style}>
      {props.icon && <div className="btn-icon">{props.icon}</div>}
      <div className="btn-text">{props.children}</div>
    </button>
  );
};

Button.defaultProps = {
  children: "OK",
  type: "primary",
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  style: PropTypes.object,
  onClick: PropTypes.func.isRequired,
};

export default Button;
