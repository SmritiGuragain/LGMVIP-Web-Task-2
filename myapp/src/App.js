import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showUsers, setShowUsers] = useState(false); 

  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://reqres.in/api/users?page=1');
      const datas = await response.json();
      setUsers(datas.data);
      setShowUsers(true); // Set showUsers to true after fetching data
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="container mt-3">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">My-App</span>
        <button
          className="btn btn-primary"
          onClick={getUsers}
        >
          Get Users
        </button>
      </nav>

      {loading && (
        <div className="d-flex justify-content-center mt-3">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}

      {showUsers && ( // Render user data only if showUsers is true
        <div className="row mt-3">
          {users.map(user => (
            <div key={user.id} className="col-md-4">
              <UserCard user={user} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
