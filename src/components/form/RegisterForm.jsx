import { AuthInput } from "../form/AuthInput";
import { AuthButton } from "../form/AuthButton";
import { SocialButton } from "../form/SocialButton";
import { Mail, Lock, User, Image as ImageIcon } from "lucide-react";

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
}) {
  return (
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
      />
      <AuthInput
        id="photoURL"
        label="Photo URL"
        type="text"
        placeholder="Enter your photo URL"
        value={photoURL}
        onChange={onPhotoURLChange}
        icon={<ImageIcon className="w-4 h-4 text-white" />}
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

      <AuthButton text="Register" type="submit" />
      <div className="w-[200px] mx-auto">
        <SocialButton onClick={onGoogleRegister} />
      </div>
    </form>
  );
}
