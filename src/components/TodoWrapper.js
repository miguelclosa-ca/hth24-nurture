import React, { useState } from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditTodoForm";
import { useAuth } from "./useAuth";
import "../styles/TodoWrapperSheet.css"

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([
            ...todos,
            { id: uuidv4(), task: todo, completed: false, isEditing: false },
        ]);
    }

    const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

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
                            <Todo
                                key={todo.id}
                                task={todo}
                                deleteTodo={deleteTodo}
                                editTodo={editTodo}
                                toggleComplete={toggleComplete}
                            />
                        )
                    )}
                </div>
            ) : ( // Show a message if the user is not logged in
                <h2>Please log in to view your todo list.</h2>
            )}
        </div>

    );
};