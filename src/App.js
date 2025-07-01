import "./App.css";
import Todolist from "./components/Todo/Todolist";
import React, { Component } from "react";

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <Todolist />
            </div>
        );
    }
}
