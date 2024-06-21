import "./FormInput.css";
export const FormInput = ({
  label,
  type,
  name,
  value,
  onChange,
  disabled,
  min,
}) => {
  return (
    <>
      <label className="holder-form-label" htmlFor={name}>
        {label}
      </label>
      <input
        className="holder-form-input"
        disabled={disabled}
        onChange={onChange}
        value={value}
        type={type}
        name={name}
        min={min}
      />
    </>
  );
};
