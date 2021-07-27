import React, {useState} from 'react'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'

const Todo = () => {
    const [todo, setTodo] = useState([
        {
            id: 1,
            title: 'Learn React',
            completed: false
        },
        {
            id: 2,
            title: 'Learn JS',
            completed: false
        },
        {
            id: 3,
            title: 'Learn PHP',
            completed: false
        }
    ])

    const addTodo = todoItem => {
        setTodo([...todo, todoItem])
    }

    const deleteTodo = id => {
        setTodo(todo.filter(t => t.id !== id))
    }

    return (
        <div className="todo-list">
            <TodoForm addTodo={addTodo} />
            <ul>
                {
                    todo.map(todoItem => (
                        <TodoItem key={todoItem.id} todoItem={todoItem} deleteTodo={deleteTodo} />
                    ))
                }
            </ul>
        </div>
    )
}

export default Todo
