import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { ThemeContext } from "../contexts/ThemeContext";
import { TodoContext } from "../contexts/TodoContext";

const TodoForm = () => {
	const { theme } = useContext(ThemeContext);
	const { addTodo } = useContext(TodoContext);
	const { isLightTheme, light, dark } = theme;
	const themeStyle = isLightTheme ? light : dark;
	const [title, setTitle] = useState("");

	const onTitleChange = (event) => {
		setTitle(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		addTodo({
			id: uuidv4(),
			title,
			completed: false,
		});
		setTitle("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				name="title"
				placeholder="New Todo"
				required
				value={title}
				onChange={onTitleChange}
			/>
			<input type="submit" value="Submit" style={themeStyle} />
		</form>
	);
};

export default TodoForm;
