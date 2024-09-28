// src/hooks/useAuth.js

import { useEffect, useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

// Custom hook for auth state
export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return currentUser;
};

// Sign-up function
export const signup = async (email, password) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
  
    // Initialize Firestore user profile after successful sign-up
    await createUserProfile(user.uid, { email: user.email, createdAt: new Date() });
};

// Login function
export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Logout function
export const logout = () => {
  return signOut(auth);
};
