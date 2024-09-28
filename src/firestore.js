// src/firestore.js

import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebase";

export const CreateTask = async(userId, taskInfo) =>{
    const tasklist = await getDocs(collection(db, "profiles/"+userId+"/TaskList"));
    taskId = (tasklist.size + 1).toString();
    await setDoc(collection(db, "profiles/"+userId+"/TaskList",taskId), {task: taskInfo, time: new Date().getDate(), complete: false});
  }
export const ReadTask = async(userId) =>{
    const querySnapshot = await getDocs(collection(db, "profiles/"+userId+"/TaskList"));
    const taskList = [];
    querySnapshot.forEach((doc) => {
        taskList.push({id: doc.id, ...doc.data()});
    });
    return taskList;
}
export const UpdateTask = async(userId, taskId, taskInfo) =>{
    const taskRef = doc(db, "profiles/"+userId+"/TaskList", taskId);
    await updateDoc(taskRef, taskInfo);
}
export const DeleteTask = async(userId, taskId) =>{
    await deleteDoc(doc(db, "profiles/"+userId+"/TaskList", taskId));
}
// Add a document
export const createUserProfile = async (userId, profileData) => {
  await addDoc(collection(db, "profiles"), { userId, ...profileData });
};
