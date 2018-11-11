import React, { Component } from 'react'

class TodoInput extends Component {
  state = {
    content: ''
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({
      content: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content: ''
    })
  }

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>Add new todo:</label>
            <input type="text" onChange={this.handleChange} value={this.state.content} />
          </form>
        </div>
      </div>
    )
  }
}

export default TodoInput
