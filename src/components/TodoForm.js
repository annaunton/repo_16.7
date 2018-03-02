import React from 'react'
import style from './TodoForm.css'
const TodoForm  = ({addTodo}) => {
    let input;
    return(
        <div className={style.TodoForm} >
            <label htmlFor='addTodo'>Dodaj zadanie: </label>
            <input type='text' id='addTodo' ref={node => input = node}/>
            <button onClick={() => addTodo(input.value)} >dodaj </button>
        </div>
    )
}

export default TodoForm;