import React, {useState} from 'react';
// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'


// css Sheet
import "../styles/TodoSheet.css";
import Flower from "../BackgroundImages/flowerbloom.gif";

export const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {

    const [completed, setCompleted] = useState(0);


    return(
        <div className="Todo">

            <div className="Todo-task">
                <p className={`${task.completed ? "completed" : "incompleted"}`}
                   onClick={() => toggleComplete(task.id)}>{task.task}</p>
            </div>
            {completed >=5 && <img src={Flower} alt="flower"/>}

            <div className="Todo-icons">
                {/* These are the buttons for edit task and delete task*/}
                <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={() => editTodo(task.id)}/>
                <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => deleteTodo(task.id)}/>

            {/*    TODO !!! Add Checkmark icon, this will lead to adding a task to the database*/}
                <FontAwesomeIcon icon={faCheck} onClick={() => setCompleted(completed + 1) }/>

            </div>
        </div>
    )


}
