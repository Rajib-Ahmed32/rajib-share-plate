import { AuthInput } from "../form/AuthInput";
import { AuthButton } from "../form/AuthButton";
import { SocialButton } from "../form/SocialButton";
import { Mail, Lock, User, Image as ImageIcon } from "lucide-react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

export function RegisterForm({
  name,
  email,
  password,
  photoURL,
  onNameChange,
  onEmailChange,
  onPasswordChange,
  onPhotoURLChange,
  onSubmit,
  onGoogleRegister,
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
          id="name"
          label="Name"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={onNameChange}
          icon={<User className="w-4 h-4 text-white" />}
          required
          autoComplete="name"
          aria-required="true"
        />

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

        <AuthInput
          id="photoURL"
          label="Photo URL"
          type="text"
          placeholder="Enter your photo URL"
          value={photoURL}
          onChange={onPhotoURLChange}
          icon={<ImageIcon className="w-4 h-4 text-white" />}
          autoComplete="off"
          required
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
            autoComplete="new-password"
            className="pr-10"
            aria-required="true"
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

        <AuthButton text="Register" type="submit" loading={loading} />
      </form>

      <div className="w-[200px] mx-auto">
        <SocialButton onClick={onGoogleRegister} />
      </div>
    </>
  );
}
