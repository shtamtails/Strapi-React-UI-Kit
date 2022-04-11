import PropTypes from 'prop-types'
import { useUniqueId } from '../Hooks/useUniqueId';

const Button = ({ children, type, style, onClick, icon }) => {
    return (
        <button key={useUniqueId} className={`btn btn-${type}`} onClick={onClick} style={style}>
            {icon && 
            <div className="btn-icon">
            {icon}
            </div>}
            <div className="btn-text">
            {children}
            </div>
        </button>
    )
    
};

Button.defaultProps = {
    children: "OK",
    type: "primary",
}

Button.propTypes = {
    children: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    style: PropTypes.object,
    onClick: PropTypes.func.isRequired,
}

export default Button;
