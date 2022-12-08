import logo from './logo.svg';
import './App.css';
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
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          {console.log('state updated to: ', users)}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
