import { useState } from "react";
import { RegisterCard } from "../components/form/RegisterCard";
import { toast } from "react-hot-toast";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      toast.error("Name and email are required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Enter a valid email address.");
      return;
    }

    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }
    if (!uppercaseRegex.test(password)) {
      toast.error("Password must contain at least one uppercase letter.");
      return;
    }
    if (!lowercaseRegex.test(password)) {
      toast.error("Password must contain at least one lowercase letter.");
      return;
    }

    console.log({
      name,
      email,
      password,
      photoURL,
    });

    toast.success("Registration successful!");
  };

  const handleGoogleRegister = () => {
    toast("Google registration not implemented yet.");
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
