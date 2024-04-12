import { FormFieldProps } from "../types/form";

const FormField: React.FC<FormFieldProps> = ({
  type,
  placeholder,
  name,
  error,
  value,
  onChange,
  className,
}) => (
  <>
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={className}
    />
    {error && (
      <span className="mx-4 mt-2 text-sm text-red-700">{error.message}</span>
    )}
  </>
);

export default FormField;
