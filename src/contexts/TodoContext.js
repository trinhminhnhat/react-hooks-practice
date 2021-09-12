import React, { useState, createContext } from "react";

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
	const [todo, setTodo] = useState([
		{
			id: 1,
			title: "Learn React",
			completed: false,
		},
		{
			id: 2,
			title: "Learn JS",
			completed: false,
		},
		{
			id: 3,
			title: "Learn PHP",
			completed: false,
		},
	]);

	const addTodo = (todoItem) => {
		setTodo([...todo, todoItem]);
	};

	const deleteTodo = (id) => {
		setTodo(todo.filter((t) => t.id !== id));
	};
	const todoContextData = {
		todo,
		addTodo,
		deleteTodo,
	};
	return (
		<TodoContext.Provider value={todoContextData}>
			{children}
		</TodoContext.Provider>
	);
};

export default TodoContextProvider;
