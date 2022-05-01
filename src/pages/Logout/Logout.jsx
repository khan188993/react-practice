import React from 'react'
import { useLocation } from 'react-router-dom';

const Logout = () => {
    //use location sob khetre use krte parbo,
    console.log(useLocation());
    // {pathname: '/logout', search: '', hash: '', state: 'logout successful', key: 'kqadaxke'}
    return (
        <div>
            <h1>Log Out</h1>
            <span>{useLocation().state}</span>
        </div>
    )
}

export default Logout
