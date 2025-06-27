export const sendTokenToBackend = async (firebaseIdToken) => {
  const response = await fetch(
    "https://rajibsharedfood-server.onrender.com/api/auth/jwt-login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${firebaseIdToken}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to get JWT from backend");
  }

  const data = await response.json();
  localStorage.setItem("access-token", data.token);
};
