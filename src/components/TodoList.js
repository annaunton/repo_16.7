import React from 'react';
import Todo from './Todo'

const TodoList = ({todos, remove}) => {
    return(
        <ul>
            {todos.map((todo) => {
                return <Todo key={todo.id} text={todo.text}  onClickEvent={() => remove(todo.id)} />;
            })}
        </ul>
    )
}

export default TodoList;