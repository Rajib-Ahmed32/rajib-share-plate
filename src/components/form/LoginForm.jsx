import { AuthInput } from "../form/AuthInput";
import { AuthButton } from "../form/AuthButton";
import { SocialButton } from "../form/SocialButton";
import { Link } from "react-router-dom";
import { Mail, Lock } from "lucide-react";

export function LoginForm({
  email,
  password,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  onGoogleLogin,
}) {
  return (
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
      />
      <AuthInput
        id="password"
        label="Password"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={onPasswordChange}
        icon={<Lock className="w-4 h-4 text-white" />}
        required
      />

      <div className="text-right">
        <Link className="text-foreground hover:underline text-sm">
          Forgot password?
        </Link>
      </div>
      <AuthButton text="Login" type="submit" />
      <div className="w-[200px] mx-auto">
        <SocialButton onClick={onGoogleLogin} />
      </div>
    </form>
  );
}
