import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';

const Users = () => {

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
        <React.Fragment>
            {
                !users.isEmpty
                    ? (
                    
                    <ul>
                    {users.map(userRecord => (
                        <li key={userRecord.id}>
                            <h2>{`${userRecord.firstname} ${userRecord.lastname}`}</h2>
                            <p>{`username: ${userRecord.username}`}</p>
                            <Link to={`${userRecord.username}/posts`}>See {userRecord.firstname}'s posts</Link>
                        </li>
                    ))}
                    </ul>
                ) : null
            }
        </React.Fragment>
    )
}

export default Users;