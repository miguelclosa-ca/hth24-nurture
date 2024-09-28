// src/firestore.js

import { collection, getDocs, updateDoc, deleteDoc, doc, setDoc} from "firebase/firestore";
import { db } from "./firebase";
import { Todo } from "./components/Todo";


export const CreateTask = async(userId, taskInfo) =>{
    // Try to create task
    try{
        const tasklist = await getDocs(collection(db, "profiles/"+userId+"/TaskList"));
        var taskId = (tasklist.size + 1).toString();
        await setDoc(doc(db, "profiles/"+userId+"/TaskList",taskId), {task: taskInfo, time: new Date(), complete: false});
    } catch (error){ // If we cannot create a task, create a new tasklist and then create the task
        taskId = 1
        await setDoc(doc(db, "profiles/"+userId+"/TaskList",taskId), {task: taskInfo, time: new Date(), complete: false});
    }
}

// This function will refresh the frontend with the current backend task list
export const RefreshTasks = async(userId) =>{
    const querySnapshot = await getDocs(collection(db, "profiles/"+userId+"/TaskList"));
    const taskList = [];
    querySnapshot.forEach((doc) => {
        taskList.push({...doc.data()});
    });
    // This returns a div with every Todo tag
    const div = document.createElement('div');
    for(let i = 1; i < taskList.length; i++){
        // Append a new Todo tag to the div, with the appropriate data for its index from taskList
        div.appendChild(<Todo
            task={taskList[i].task}
            editTodo={false}
            toggleComplete={taskList[i].toggleComplete}
        />);
    }

    return div;
}

// This function replaces the old task's string with the new taskInfo
export const UpdateTask = async(userId, taskId, taskInfo) =>{
    const taskRef = doc(db, "profiles/"+userId+"/TaskList", taskId);
    await updateDoc(taskRef, taskInfo);
}

// This function removes the given task from the tasklist 
export const DeleteTask = async(userId, taskId) =>{
    await deleteDoc(doc(db, "profiles/"+userId+"/TaskList/"+ taskId));
}

// This function creates a new user profile and corresponding tasklist
export const createUserProfile = async (userId, profileData) => {
  await setDoc(doc(db, "profiles",userId), { profileData });
};
