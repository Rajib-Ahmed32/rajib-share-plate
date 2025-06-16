import { useState } from "react";
import { AuthInput } from "../form/AuthInput";
import { AuthButton } from "../form/AuthButton";
import { SocialButton } from "../form/SocialButton";
import { Link } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export function LoginForm({
  email,
  password,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  onGoogleLogin,
  loading,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <>
      <form onSubmit={onSubmit} className="space-y-4">
        <AuthInput
          id="email"
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={onEmailChange}
          icon={<Mail className="w-4 h-4 text-white" />}
          required
          autoComplete="email"
          aria-required="true"
        />

        <div className="relative w-full">
          <AuthInput
            id="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={onPasswordChange}
            icon={<Lock className="w-4 h-4 text-white" />}
            required
            autoComplete="current-password"
            aria-required="true"
            className="pr-10"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="absolute right-3 top-12 transform -translate-y-1/2 text-gray-400 hover:text-gray-500 rounded-sm"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <div className="text-right">
          <Link className="text-foreground hover:underline text-sm">
            Forgot password?
          </Link>
        </div>

        <AuthButton text="Login" type="submit" loading={loading} />
      </form>

      <div className="w-[200px] mx-auto">
        <SocialButton type="button" onClick={onGoogleLogin} />
      </div>
    </>
  );
}
