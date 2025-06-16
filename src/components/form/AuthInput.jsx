import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function AuthInput({
  id,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  icon,
  required = false,
  autoComplete,
  className = "",
  ...rest
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-white">
        {label}
      </Label>
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2">{icon}</div>
        )}
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          autoComplete={autoComplete}
          className={`w-full pl-10 border border-white text-white bg-input placeholder-muted-foreground focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-2 rounded-md ${className}`}
          {...rest}
        />
      </div>
    </div>
  );
}
