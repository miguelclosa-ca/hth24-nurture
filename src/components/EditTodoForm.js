import React, {useState} from 'react'
import "../styles/EditTodoFormSheet.css"

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        // prevent default action
        e.preventDefault();
        // edit todo
        editTodo(value, task.id);
    };
    return (
        // This handles UPDATING tasks, not adding new tasks
        <form onSubmit={handleSubmit} className="TodoForm">
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Update task' />
            <button type="submit" className='change-btn'>Update</button>
        </form>
    )
}