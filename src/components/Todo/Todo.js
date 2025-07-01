import React, { Component } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { GoTrash } from "react-icons/go";
export default class Todo extends Component {
    onEditTodo(todoId) {
        this.props.editTodo(todoId)
    }
    onRemoveTodo(todoId) {
        this.props.removeTodo(todoId)
    }
    render() {
        let {id, title, completed} = this.props;
        return (
            <div className={`todo ${completed ? 'completed' : ''}`} style={{ display: "flex" }}>
                <li className="todo-item">{title}</li>

                <button className="check-btn" onClick={this.onEditTodo.bind(this, id)}>
                    <FiCheckCircle />
                </button>

                <button className="trash-btn" onClick={this.onRemoveTodo.bind(this, id)}>
                  <GoTrash />
                </button>
            </div>
        );
    }
}
