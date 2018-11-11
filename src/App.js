import React, { Component } from 'react';
import Todos from './Todos';
import TodoInput from './TodoInput'


class App extends Component {
  state = {
    todos: [ ]
  }

  deleteTodo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  completeTodo = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.done = !todo.done;
          return todo
        } else {
          return todo
        }
      })
    })
  }

  addTodo = todo => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo]
    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="todos container">
        <h1 className="center blue-text">Todo's</h1>
        <TodoInput addTodo={this.addTodo} />
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} completeTodo={this.completeTodo} />
      </div>
    );
  }
}

export default App;
