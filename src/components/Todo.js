import React from 'react';
// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { CreateTask } from '../firestore';
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
                <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => deleteTodo(task.id)}/>

            {/*    TODO !!! Add Checkmark icon, this will lead to adding a task to the database*/}
            {/* _______________________________THIS IS HOW TO MAKE CALL TO DATABASE_______________________________*/}
                <FontAwesomeIcon icon={faCheck} onClick={()=> CreateTask()} />

            </div>
        </div>
    )


}