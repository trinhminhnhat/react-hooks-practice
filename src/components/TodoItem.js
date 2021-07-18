import React from 'react'

const TodoItem = ({ todoItem }) => {
    const style = {
        backgroundColor: 'rgba(240, 240, 240, 0.7)',
    }

    return (
        <li style={style} key={todoItem.id}>{todoItem.title}</li>
    )
}

export default TodoItem
