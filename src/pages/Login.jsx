import { useState } from "react";
import { validateLoginForm } from "../utils/validateLoginForm";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { loginWithGoogle, login } from "../services/authServices";
import { LoginCard } from "../components/form/LoginCard";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    console.log(e, "handlelogin");
    e.preventDefault();
    const validationResult = validateLoginForm(email, password);
    if (!validationResult.valid) {
      toast.error(validationResult.message);
      return;
    }

    try {
      await login(email, password);
      toast.success("Logged in successfully!");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      toast.success("Logged in successfully!");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <LoginCard
      email={email}
      password={password}
      onEmailChange={(e) => setEmail(e.target.value)}
      onPasswordChange={(e) => setPassword(e.target.value)}
      onSubmit={handleLogin}
      onGoogleLogin={handleGoogleLogin}
    />
  );
}
