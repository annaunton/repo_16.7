import React from 'react';
import Title from '../components/Title'
import style from './App.css'
import uuid from 'uuid';
import TodoList from '../components/TodoList'
import TodoForm from '../components/TodoForm'


class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data: [
                {
                    id:1,
                    text: 'posptrzątać pokój'
                },
                {
                    id:2,
                    text: 'wynieść śmieci'
                },
                {
                    id:3,
                    text: 'nakarmić kota'
                }
            ]
        }
        this.removeTodo = this.removeTodo.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }
    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4()
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }
    removeTodo(id) {
        const reminder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: reminder})
    }
    render(){
        return(
            <div className={style.TodoApp} >
                <Title number={this.state.data.length} />
                <TodoForm addTodo={this.addTodo}/>
                <TodoList todos={this.state.data} remove={this.removeTodo} />
            </div>
        )
    }
}

export default App;