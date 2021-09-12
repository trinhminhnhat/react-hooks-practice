import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { TodoContext } from "../contexts/TodoContext";

const TodoItem = ({ todoItem }) => {
	const { deleteTodo } = useContext(TodoContext);
	const { theme } = useContext(ThemeContext);
	const { isLightTheme, light, dark } = theme;
	const themeStyle = isLightTheme ? light : dark;

	return (
		<li
			onClick={() => {
				deleteTodo(todoItem.id);
			}}
			style={themeStyle}
			key={todoItem.id}
		>
			{todoItem.title}
		</li>
	);
};

export default TodoItem;
