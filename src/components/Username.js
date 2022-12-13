import React from 'react';
import { Link } from 'react-router-dom';

const Username = ({ username }) => {
    return (
        <React.Fragment>
            <p>{username}</p>
            <Link to='../..' relative='path'>Go Back to All Users</Link>
        </React.Fragment>
    );
};

export default Username;
