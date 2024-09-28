import React, {useState} from 'react';
import Taskform from "./Taskform";
import Task from "./Task";
import {v4 as uuidv4} from "uuid";
import {EditTaskForm} from "./EditTaskForm";

function TaskWrapper() {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([
            ...todos,
            {id: uuidv4(), task: todo, completed: false, isEditing: false},
        ]);
    }

    const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

    const toggleComplete = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? {...todo, completed: !todo.completed} : todo
            )
        );
    }

    const editTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo
            )
        );
    }

    const editTask = (task, id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo
            )
        );
    };

    return (
        <div className="TodoWrapper">
            <h1>Enter A task: </h1>
            <Taskform addTodo={addTodo}/>
            {/* display todos */}
            {todos.map((todo) =>
                todo.isEditing ? (
                    <EditTaskForm editTodo={editTask} task={todo}/>
                ) : (
                    <Task
                        key={todo.id}
                        task={todo}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                        toggleComplete={toggleComplete}
                    />
                )
            )}
        </div>
    );
}

export default TaskWrapper;