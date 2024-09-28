// src/firestore.js

import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebase";



// Add a document
export const createUserProfile = async (userId, profileData) => {
  await addDoc(collection(db, "profiles"), { userId, ...profileData });
};

// Read documents
export const getUserProfiles = async () => {
  const querySnapshot = await getDocs(collection(db, "profiles"));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// Update a document
export const updateUserProfile = async (profileId, updatedData) => {
  const profileRef = doc(db, "profiles", profileId);
  await updateDoc(profileRef, updatedData);
};

// Delete a document
export const deleteUserProfile = async (profileId) => {
  const profileRef = doc(db, "profiles", profileId);
  await deleteDoc(profileRef);
};
