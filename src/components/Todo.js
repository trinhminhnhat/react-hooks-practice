import React, {useState} from 'react'
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

    return (
        <div className="todo-list">
            <ul>
                {
                    todo.map(todoItem => (
                        <TodoItem todoItem={todoItem} />
                    ))
                }
            </ul>
        </div>
    )
}

export default Todo
