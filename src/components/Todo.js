import React from 'react';
// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
// css Sheet
import "../styles/TodoSheet.css";

export const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {

    return(
        <div className="Todo">

            <div className="Todo-task">
                <p className={`${task.completed ? "completed" : "incompleted"}`}
                   onClick={() => toggleComplete(task.id)}>{task.task}</p>
            </div>

            <div className="Todo-icons">
                {/* These are the buttons for edit task and delete task*/}
                <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={() => editTodo(task.id)}/>
                {/* All we have to do is replace 1 with the index of the task we want deleted*/}
                <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => deleteTodo(task.id)}/>
                {/*This is the checkmark button*/}
                <FontAwesomeIcon className="check-icon" icon={faCheck} onClick={()=> toggleComplete(task.id)} />
            </div>
        </div>
    )
}