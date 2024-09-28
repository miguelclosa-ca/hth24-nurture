import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditTodoForm";
import { useAuth } from "./useAuth";
import "../styles/TodoWrapperSheet.css"
import { RefreshTasks } from "../firestore";
import { auth } from "../firebase";

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([
            ...todos,
            { id: uuidv4(), task: todo, completed: false, isEditing: false },
        ]);
    }
    
    const toggleComplete = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    }

    const editTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
            )
        );
    }

    const editTask = (task, id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
            )
        );
    };

    // This variable holds all the todo tags
    var FUCKS = RefreshTasks(auth.currentUser.uid);

    return (
        <div className="todo-container">
            {useAuth() ? ( // Show todo list if user is logged in
                <div className="TodoWrapper">
                    <h1 id="enter-task">Enter Your Task: </h1>
                    <TodoForm addTodo={addTodo}/>
                    {/* display todos */}
                    {todos.map((todo) =>
                        todo.isEditing ? (
                            <EditTodoForm editTodo={editTask} task={todo}/>
                        ) : (
                            FUCKS
                        )
                    )}
                </div>
            ) : ( // Show a message if the user is not logged in
                <h2>Please log in to view your todo list.</h2>
            )}
        </div>

    );
};