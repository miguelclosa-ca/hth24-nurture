import React, {useState} from 'react'
import "../styles/TodoFormSheet.css"

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        // Stop any defaults
        e.preventDefault();
        if (value) {
            // Add to the todo
            addTodo(value);
            // Clear after adding
            setValue('');
        }
    };
    return (

        // Create the HTML form, button
        <form onSubmit={handleSubmit} className="TodoForm">

            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" />
            <button type="submit" className='todo-btn'>Add</button>
        </form>
    )
}