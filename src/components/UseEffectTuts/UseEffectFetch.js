import React,{useState,useEffect} from 'react'
import './UseEffectFetch.css'

const UseEffectFetch = () => {
    const [users,setUsers] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>res.json())
        .then((data)=>{
            // console.log(data);
            setUsers(data) // after calling this 15 number line will rerender
        })
    },[])

    console.log(users); //data fetch krte object caining use krte hobe must 


    return (
        <div>
            <h1>UseEffect fetch Data </h1><hr></hr>
            <div className="data-container">
                {
                    users.length > 0 && users.map((user)=>{
                        console.log(user);
                        return (
                            <div className="single-data" key={user.id}>
                                <h1>Name : {user.name}</h1>
                                <h3>Phone : {user.phone}</h3>
                                <h5>Address:{user.address.street}</h5>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default UseEffectFetch
