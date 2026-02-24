const Label = ({ text = '', id = '', className = '' }) => {
    return (
        <label id={id} className={`text-sm text-gray-900 font-manrope font-medium ${className}`}>
            {text}
        </label>
    )
}

export default Label;