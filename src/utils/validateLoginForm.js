export const validateLoginForm = (email, password) => {
  if (!email.trim() || !password.trim()) {
    return { valid: false, message: "Email and password are required." };
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

  return { valid: true, message: "Validation passed" };
};
