import React, { useEffect, useState } from 'react';
import UserCards from './Components/UserCards';
import ToggleUSingHooks from './Components/ToggleUSingHooks';
import './App.css'; 

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(data => {
        const firstTen = data.slice(0, 10); 
        setUsers(firstTen);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Album Cards</h1>
      <ToggleUSingHooks/>
      <UserCards users={users} />
      
    </div>
  );
};

export default App;





