import "./FormInput.css";
export const FormInput = ({
  onChange,
  disabled,
  style,
  value,
  label,
  type,
  name,
  min,
  max,
}) => {
  return (
    <>
      <label className={`holder-form-label ${style}`} htmlFor={name}>
        {label}
      </label>
      <input
        className="holder-form-input"
        disabled={disabled}
        onChange={onChange}
        value={value}
        type={type}
        name={name}
        max={max}
        min={min}
      />
    </>
  );
};
