// App.js
import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const updateTodo = (updatedTodo) => {
    setTodos(todos.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo));
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList 
        todos={todos} 
        deleteTodo={deleteTodo} 
        updateTodo={updateTodo} 
      />
    </div>
  );
}

export default App;
