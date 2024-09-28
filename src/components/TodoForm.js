import React, {useState} from 'react'
import "../styles/TodoFormSheet.css"
import { auth } from '../firebase';
import { CreateTask, ReadTask } from '../firestore';

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        // Stop any defaults
        e.preventDefault();
        if (value) {
            // Add to the todo
            addTodo(value);
            // Create new task with userId from auth, value from textfield
            CreateTask(auth.currentUser.uid, value);
            // Clear after adding
            setValue('');
        }
    };
    return (

        // Create the HTML form, button
        <form onSubmit={handleSubmit} className="TodoForm">


            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" />

            <div className="todo-button">
                <button type="submit" className='todo-btn'>Add</button>
            </div>

        </form>
    )
}