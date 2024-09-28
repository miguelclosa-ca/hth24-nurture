import React, {useState} from "react";




export const Taskform = ({addTodo}) => {

    const [value, setValue] = useState('');

    const handleSubmit = (e) =>{

        e.preventDefault();

        if (value){
            addTodo(value);

            setValue('');
        } // End if


    };

    return (
        <form className="taskForm" onSubmit={handleSubmit}>
            <input type="text" className="TaskInput" placeholder="Enter your task? " onChange={(e) => setValue(e.target.value)}/>
            <button type={"submit"} className="todo-btn">Add Task</button>
        </form>
    );
}

export default Taskform;