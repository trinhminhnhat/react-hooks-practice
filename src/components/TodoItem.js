import React from 'react'

const TodoItem = ({ todoItem, deleteTodo }) => {
    const style = {
        backgroundColor: 'rgba(240, 240, 240, 0.7)',
    }

    return (
        <li onClick={() => {deleteTodo(todoItem.id)}} style={style} key={todoItem.id}>{todoItem.title}</li>
    )
}

export default TodoItem
