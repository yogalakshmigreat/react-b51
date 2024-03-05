// Todo.js
import React, { useState } from 'react';

function Todo({ todo, deleteTodo, updateTodo }) {
  const [editing, setEditing] = useState(false);
  const [taskName, setTaskName] = useState(todo.taskName);
  const [description, setDescription] = useState(todo.description);
  const [status, setStatus] = useState(todo.status);

  const handleUpdate = () => {
    updateTodo({
      ...todo,
      taskName,
      description,
      status
    });
    setEditing(false);
  };

  return (
    <div className="todo">
      {editing ? (
        <div>
          <input 
            type="text" 
            value={taskName} 
            onChange={(e) => setTaskName(e.target.value)} 
          />
          <input 
            type="text" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
          />
          <select 
            value={status} 
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Not Completed">Not Completed</option>
            <option value="Completed">Completed</option>
          </select>
          <button onClick={handleUpdate}>Save</button>
        </div>
      ) : (
        <div>
          <h3>{todo.taskName}</h3>
          <p>{todo.description}</p>
          <p>Status: {todo.status}</p>
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default Todo;
