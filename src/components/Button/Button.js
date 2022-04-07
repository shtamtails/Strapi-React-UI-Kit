const Button = ({ text, variant, size, width, icon, onClick }) => {
    return (
        <button 
        className={`btn btn-${variant} ${size}`} 
        style={{ width: width}}
        onClick={onClick}
        >
            <div className="btn-text">
            {icon && <div className="btn-icon">
                {icon}
            </div>}
                {text}
            </div>
            
        </button>
        
    )
    
};

Button.defaultProps = {
    text: "button",
    variant: "btn-primary",
    size: "s",
}

export default Button;
