// App.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({});

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3000/users'); // Assuming your mock API is running at this endpoint
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleAddUser = async () => {
    try {
      await axios.post('http://localhost:3000/users', newUser);
      setNewUser({});
      fetchUsers();
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:3000/users/${userId}`);
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}{' '}
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <h2>Add User</h2>
      <input
        type="text"
        placeholder="Name"
        value={newUser.name || ''}
        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Email"
        value={newUser.email || ''}
        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
      />
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
};

export default App;
