import React, { useContext } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { TodoContext } from "../contexts/TodoContext";
import { AuthContext } from "../contexts/AuthContext";

const Todo = () => {
	const { todo } = useContext(TodoContext);
	const { isAuthenticated } = useContext(AuthContext);

	return (
		<div className="todo-list">
			<TodoForm />
			{isAuthenticated ? (
				<ul>
					{todo.map((todoItem) => (
						<TodoItem key={todoItem.id} todoItem={todoItem} />
					))}
				</ul>
			) : (
				"Not authen"
			)}
		</div>
	);
};

export default Todo;
