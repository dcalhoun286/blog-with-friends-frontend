import React from 'react';
import { useParams } from 'react-router-dom';

import Username from '../components/Username';

const UsernameRoute = () => {

    const params = useParams();

    return (
        <Username username={params.username}/>
    );
};

export default UsernameRoute;
