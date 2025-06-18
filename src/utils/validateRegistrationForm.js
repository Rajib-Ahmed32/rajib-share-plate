export const validateRegistrationForm = (name, email, password, photoURL) => {
  if (!name.trim() || !email.trim() || !photoURL.trim()) {
    return { valid: false, message: "Name, email and photURL are required." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { valid: false, message: "Enter a valid email address." };
  }

  if (password.length < 6) {
    return {
      valid: false,
      message: "Password must be at least 6 characters long.",
    };
  }

  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;

  if (!uppercaseRegex.test(password)) {
    return {
      valid: false,
      message: "Password must contain at least one uppercase letter.",
    };
  }

  if (!lowercaseRegex.test(password)) {
    return {
      valid: false,
      message: "Password must contain at least one lowercase letter.",
    };
  }

  return { valid: true, message: "Validation passed" };
};
