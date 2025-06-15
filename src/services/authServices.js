import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase/firebase.config";

export const register = async (email, password, name, photoURL) => {
  const userCredentials = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  await updateProfile(userCredentials.user, { displayName: name, photoURL });
  return userCredentials;
};

export const login = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);

export const loginWithGoogle = () => signInWithPopup(auth, googleProvider);
