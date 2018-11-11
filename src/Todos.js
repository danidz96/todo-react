import React from 'react';
import "./todos.css";

const Todos = ({todos, deleteTodo, completeTodo}) => {

  const todoList = todos.length ? (
    todos.map(todo => 
      <div className="collection-item" key={todo.id} >
        <span onClick={() => completeTodo(todo.id)} className={todo.done ? "done" : ""}>{todo.content}</span><span className="right" onClick={() => deleteTodo(todo.id)}>X</span>
      </div>)
  ) : (
    <p className="center">No Todo's left</p>
  )

  return (
    <div className="todos collection">
      {todoList}
    </div>
  )
}

export default Todos
