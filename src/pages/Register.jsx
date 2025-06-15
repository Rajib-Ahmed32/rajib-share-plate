import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateRegistrationForm } from "../utils/validateRegistrationForm";
import { RegisterCard } from "../components/form/RegisterCard";
import { toast } from "react-hot-toast";
import { loginWithGoogle, register } from "../services/authServices";

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const validationResult = validateRegistrationForm(name, email, password);

    if (!validationResult.valid) {
      toast.error(validationResult.message);
      return;
    }

    try {
      await register(email, password, name, photoURL);
      toast.success("Registered successfully!");
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
    setName("");
    setEmail("");
    setPassword("");
    setPhotoURL("");
  };

  const handleGoogleRegister = async () => {
    try {
      await loginWithGoogle();
      toast.success("Logged in successfully!");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <RegisterCard
      name={name}
      email={email}
      password={password}
      photoURL={photoURL}
      onNameChange={(e) => setName(e.target.value)}
      onEmailChange={(e) => setEmail(e.target.value)}
      onPasswordChange={(e) => setPassword(e.target.value)}
      onPhotoURLChange={(e) => setPhotoURL(e.target.value)}
      onSubmit={handleRegister}
      onGoogleRegister={handleGoogleRegister}
    />
  );
}
