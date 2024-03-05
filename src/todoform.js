// TodoForm.js
import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Not Completed');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName.trim()) return;
    addTodo({ id: Date.now(), taskName, description, status });
    setTaskName('');
    setDescription('');
    setStatus('Not Completed');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Task Name" 
        value={taskName} 
        onChange={(e) => setTaskName(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Description" 
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
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;
