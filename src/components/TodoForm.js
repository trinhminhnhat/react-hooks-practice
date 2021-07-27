import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid'

const TodoForm = ({addTodo}) => {
    const [title, setTitle] = useState('')

    const onTitleChange = event => {
        setTitle(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        addTodo({
            id: uuidv4(),
            title,
            completed: false
        })
        setTitle('')
    }

    const style = {
        backgroundColor: 'rgba(240, 240, 240, 0.7)',
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder="New Todo" required value={title} onChange={onTitleChange} />
            <input type="submit" value="Submit" style={style}/>
        </form>
    )
}

export default TodoForm