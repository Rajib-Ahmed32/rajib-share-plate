import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase/firebase.config";
import { sendTokenToBackend } from "./jwtService";

export const register = async (email, password, name, photoURL) => {
  const userCredentials = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  await updateProfile(userCredentials.user, {
    displayName: name,
    photoURL,
  });

  const firebaseIdToken = await userCredentials.user.getIdToken(true);
  await sendTokenToBackend(firebaseIdToken);
  return userCredentials;
};

export const login = async (email, password) => {
  const userCredentials = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );

  const firebaseIdToken = await userCredentials.user.getIdToken(true);
  await sendTokenToBackend(firebaseIdToken);
  return userCredentials;
};

export const logout = async () => {
  await signOut(auth);
  localStorage.removeItem("access-token");
};

export const loginWithGoogle = async () => {
  const userCredentials = await signInWithPopup(auth, googleProvider);
  const firebaseIdToken = await userCredentials.user.getIdToken(true);
  await sendTokenToBackend(firebaseIdToken);
  return userCredentials;
};
