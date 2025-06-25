import { getAuth } from "firebase/auth";
import { sendTokenToBackend } from "./jwtService";

export const refreshJwt = async () => {
  const user = getAuth().currentUser;
  if (!user) throw new Error("No authenticated user");

  const idToken = await user.getIdToken(true);
  await sendTokenToBackend(idToken);
};

export const getFreshToken = async () => {
  await refreshJwt();
  return localStorage.getItem("access-token");
};
