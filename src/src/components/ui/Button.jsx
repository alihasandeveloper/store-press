const Button = ({
                    variant = "primary", size = "large", className = "", onClick = () => {
    }, disabled = false, children
                }) => {
    const baseClasses = "rounded-lg font-onest transition";

    const variantClasses = variant === "primary"
        ? "bg-teal-600 text-white hover:bg-teal-700"
        : "bg-transparent text-teal-600 border border-teal-600 hover:bg-teal-50";

    const sizeClasses = size === "large"
        ? "py-3 px-6 text-base"
        : "py-2 px-4 text-sm";

    return (
        <button className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`} onClick={onClick}
                disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;