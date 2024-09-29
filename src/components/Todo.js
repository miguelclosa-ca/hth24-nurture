import React, {useState} from 'react';
// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'


// css Sheet
import "../styles/TodoSheet.css";
import Flower from "../BackgroundImages/flowerbloom.gif";

//SFX
import playSound from "./PlaySounds";
import soundEdit from "../SFX/25.mp3";
import soundDelete from "../SFX/32.wav";
import soundComplete from "../SFX/complete.wav";

export const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {

    const [completed, setCompleted] = useState(false);

    const handleEdit = () => {
        playSound(soundEdit);
        editTodo(task.id);
    }

    const handleDelete = () => {
        playSound(soundDelete);
        deleteTodo(task.id);
    }

    const handleComplete = () => {
        playSound(soundComplete);
        setCompleted(true)
    }

    return(
        <div className="Todo">

            <div className="Todo-task">
                <p className={`${task.completed ? "completed" : "incompleted"}`}
                   onClick={() => toggleComplete(task.id)}>{task.task}</p>
            </div>
            {completed === true && <img src={Flower} alt="flower" className="congratulations-flower"/>}

            <div className="Todo-icons">
                {/* These are the buttons for edit task and delete task*/}
                <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={handleEdit}/>
                <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={handleDelete}/>

            {/*    TODO !!! Add Checkmark icon, this will lead to adding a task to the database*/}
                <FontAwesomeIcon icon={faCheck} onClick={handleComplete}/>

            </div>
        </div>
    )


}
