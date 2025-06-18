import { useState, useRef } from "react";
import { validateLoginForm } from "../utils/validateLoginForm";
import { toast } from "react-hot-toast";
import { useNavigate, useLocation } from "react-router-dom";
import { loginWithGoogle, login } from "../services/authServices";
import { LoginCard } from "../components/form/LoginCard";
import Loading from "../components/ui/Loading";

export default function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const from = location.state?.from?.pathname || "/";

  const handleLogin = async (e) => {
    e.preventDefault();
    const validationResult = validateLoginForm(email, password);
    if (!validationResult.valid) {
      toast.error(validationResult.message);
      return;
    }

    try {
      setLoading(true);
      await login(email, password);
      toast.success("Logged in successfully!");
      navigate(from, { replace: true });
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      await loginWithGoogle();
      toast.success("Logged in successfully!");
      navigate(from, { replace: true });
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loading />}
      <LoginCard
        email={email}
        password={password}
        onEmailChange={(e) => setEmail(e.target.value)}
        onPasswordChange={(e) => setPassword(e.target.value)}
        onSubmit={handleLogin}
        onGoogleLogin={handleGoogleLogin}
        loading={loading}
      />
    </>
  );
}
