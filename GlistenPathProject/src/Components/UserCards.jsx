import React from 'react';

const UserCards = ({ users }) => {
  return (
    <div className="card-container">
      {users.map(user => (
        <div className="card" key={user.id}>
         
          <p><strong>User ID:</strong> {user.userId}</p>
          <p><strong>ID:</strong> {user.id}</p>
           <h3><strong>Title:</strong>{user.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default UserCards;
