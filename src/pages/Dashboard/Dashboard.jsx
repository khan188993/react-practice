import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();
    const logout = ()=>{
        console.log('log out');
        navigate('/logout',{state:'logout successful'});
        
    }
    return (
        <>
            <h1>Dashboard</h1>

            {/* this button will navigate to logout page, */}
            <button onClick={logout}>LogOut</button>
            {/* / diye kaj krte hobe and function  er bitor lekhte hobe) {
                
            } */}
            <button onClick={()=>navigate('/login')}>LogOut 2nd</button>
            <button onClick={()=>navigate(-2)}>Back to Navigate</button>
        </>
    );
};

export default Dashboard;
