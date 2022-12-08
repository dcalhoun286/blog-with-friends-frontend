import React, { useState, useEffect } from 'react';

function App() {

  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {

    const res = await fetch('http://127.0.0.1:8000/users');
    const jsonData = await res.json();
    const arrayOfUsers = jsonData.data;
    setUsers(arrayOfUsers);
  };


  useEffect(() => {

    fetchUsers();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Blog With Friends</h1>
      </header>
    </div>
  );
}

export default App;
