import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function UserManagementPage() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState('');
  const [editedUser, setEditedUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('mongodb+srv://claudia:claudia123@cluster1.ibatkxp.mongodb.net/Sport?retryWrites=true&w=majority');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleUserChange = (event) => {
    setNewUser(event.target.value);
  };

  const handleAddUser = async () => {
    try {
      const response = await axios.post('mongodb+srv://claudia:claudia123@cluster1.ibatkxp.mongodb.net/Sport?retryWrites=true&w=majority', { name: newUser });
      setUsers([...users, response.data]);
      setNewUser('');
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const handleEditUser = (user) => {
    setEditedUser(user);
    setNewUser(user.name);
  };

  const handleUpdateUser = async () => {
    try {
      await axios.put(`mongodb+srv://claudia:claudia123@cluster1.ibatkxp.mongodb.net/Sport?retryWrites=true&w=majority/${editedUser._id}`, { name: newUser });
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === editedUser._id ? { ...user, name: newUser } : user
        )
      );
      setNewUser('');
      setEditedUser(null);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleDeleteUser = async (user) => {
    try {
      await axios.delete(`mongodb+srv://claudia:claudia123@cluster1.ibatkxp.mongodb.net/Sport?retryWrites=true&w=majority/${user._id}`);
      setUsers((prevUsers) => prevUsers.filter((u) => u._id !== user._id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div>
      <h2>User Management</h2>
      <div>
        <input type="text" value={newUser} onChange={handleUserChange} />
        {editedUser ? (
          <button onClick={handleUpdateUser}>Update</button>
        ) : (
          <button onClick={handleAddUser}>Add</button>
        )}
      </div>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name}
            <button onClick={() => handleEditUser(user)}>Edit</button>
            <button onClick={() => handleDeleteUser(user)}>Delete</button>
          </li>
        ))}
      </ul>
      <Link to="/admin">Go back</Link>
    </div>
  );
}

export default UserManagementPage;