import React from 'react';
import style from './Todo.css'

const Todo = ({text, onClickEvent}) => {
    return(
        <li onClick={onClickEvent} className={style.Todo}>{text}</li>
    )
}

export default Todo;