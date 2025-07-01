import React, { Component } from "react";
import Header from "../Header/Header";
import Todo from "./Todo";
import { FaPlusSquare } from "react-icons/fa";
import "./Todolist.css";
export default class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status:'all',
            todoTitle: '',
            todos: [],
        }
        
        this.statusHandler      = this.statusHandler.bind(this);
        this.todoHander         = this.todoHander.bind(this);
        this.addTodoListHander  = this.addTodoListHander.bind(this);
        this.removeTodoHandler  = this.removeTodoHandler.bind(this);
        this.editTodoHandler    = this.editTodoHandler.bind(this);
    }
    addTodoListHander(event) {
        event.preventDefault();
        if (this.state.todoTitle) {
            let newTodo =  {
                completed: false,
                id: this.state.todos.length + 1,
                title:this.state.todoTitle
            }
            this.setState(prevState => {
                return {
                    todos: [...prevState.todos, newTodo],
                    todoTitle: ''
                }
            })
        }

    }
    todoHander(event){
        this.setState({
            todoTitle: event.target.value
        })
    }
    statusHandler(event){
        this.setState({
            status: event.target.value
        })
    }
    removeTodoHandler(todoId) {
        let newTodoList = this.state.todos.filter(todo => todo.id !== todoId)
        this.setState({
            todos: newTodoList
        })
    }
    editTodoHandler(todoId) {
       let myTodos = [...this.state.todos]

       myTodos.forEach(todo => {
        if (todo.id === todoId) {
            todo.completed = !todo.completed
        }
       });
       this.setState({
        todo:myTodos
       })
    }
    render() {
        return (
            <div className="container">
                <div className="app-content">
                    <Header />
                    <form onSubmit={this.addTodoListHander}>
                        <input
                            type="text"
                            className="todo-input"
                            maxLength="40"
                            onChange={this.todoHander}
                            value={this.state.todoTitle}
                        />
                        <button className="todo-button" type="submit"><FaPlusSquare /></button>
                        <div className="select">
                            <select name="todos" className="filter-todo" onChange={this.statusHandler}>
                                <option value="all">All</option>
                                <option value="completed">Completed</option>
                                <option value="uncompleted">Uncompleted</option>
                            </select>
                        </div>
                    </form>
                    <div className="todo-container">
                        <ul className="todo-list">
                            {this.state.status === 'completed' && this.state.todos.filter(todo => todo.completed).map(todo => (
                                <Todo 
                                key={todo.id} 
                                removeTodo={this.removeTodoHandler} 
                                editTodo={this.editTodoHandler}
                                {...todo} 
                            />
                            ))}
                            {this.state.status === 'uncompleted' && this.state.todos.filter(todo => !todo.completed).map(todo => (
                                <Todo 
                                key={todo.id} 
                                removeTodo={this.removeTodoHandler} 
                                editTodo={this.editTodoHandler}
                                {...todo} 
                            />
                            ))}
                            {this.state.status === 'all' && this.state.todos.map(todo => (
                                <Todo 
                                key={todo.id} 
                                removeTodo={this.removeTodoHandler} 
                                editTodo={this.editTodoHandler}
                                {...todo} 
                            />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
