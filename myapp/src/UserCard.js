import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="card mb-3">
      <img src={user.avatar} className="card-img-top" alt={`${user.first_name} ${user.last_name}`}  style={{ width: '150px', height: '150px' }}/>
      <div className="card-body">
        <h5 className="card-title">{`${user.first_name} ${user.last_name}`}</h5>
        <p className="card-text">{`ID: ${user.id}`}</p>
        <p className="card-text">{`Email: ${user.email}`}</p>
      </div>
    </div>
  );
};

export default UserCard;