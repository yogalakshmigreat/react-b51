// TodoList.js
import React from 'react';
import Todo from './Todo';

function TodoList({ todos, deleteTodo, updateTodo }) {
  return (
    <div className="todo-list">
      {todos.map(todo => (
        <Todo 
          key={todo.id} 
          todo={todo} 
          deleteTodo={deleteTodo} 
          updateTodo={updateTodo} 
        />
      ))}
    </div>
  );
}

export default TodoList;
