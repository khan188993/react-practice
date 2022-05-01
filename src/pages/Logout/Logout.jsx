import React from 'react'
import { useLocation } from 'react-router-dom';

const Logout = () => {
    //use location sob khetre use krte parbo,
    console.log(useLocation());
    return (
        <div>
            <h1>Log Out</h1>
            <span>User Successfully log out</span>
        </div>
    )
}

export default Logout
