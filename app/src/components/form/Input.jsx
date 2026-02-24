const Input = ({
    name,
    type = "text",
    placeholder = "",
    value,
    onChange,
    required = false
}) => {
    return (
        <input
            id={name}
            name={name}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            className="py-3 px-4 border border-gray-200 focus:border-teal-500 rounded-lg focus:ring-1 focus:ring-teal-500 outline-none"
            required={required}
        />
    );
};

export default Input;