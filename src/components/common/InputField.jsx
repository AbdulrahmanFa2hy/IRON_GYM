import PropTypes from "prop-types";

const InputField = ({
  label,
  placeholder,
  value,
  onChange,
  type = "number",
  required = true,
  max,
  min = 0,
  className = "",
}) => {
  const handleChange = (e) => {
    if (type === "number") {
      const value = e.target.value;
      if (
        value === "" ||
        (parseFloat(value) >= min && (!max || parseFloat(value) <= max))
      ) {
        onChange(e);
      }
    } else {
      onChange(e);
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-white text-sm font-medium mb-2">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={handleChange}
        className={`w-full p-2 rounded-md bg-[#374151] text-white border border-[#4B5563] focus:outline-none focus:ring-2 focus:ring-[#DC2626] ${className}`}
        placeholder={placeholder}
        required={required}
        max={max}
        min={min}
      />
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  required: PropTypes.bool,
  max: PropTypes.number,
  min: PropTypes.number,
  className: PropTypes.string,
};

export default InputField;
