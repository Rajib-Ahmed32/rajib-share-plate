import { useState } from "react";
import { LoginCard } from "../components/form/LoginCard";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
  };

  const handleGoogleLogin = () => {};

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
