import React,{useState,useEffect} from 'react'
import './UseEffectFetch.css'

const UseEffectFetch = () => {
    const [users,setUsers] = useState([]);
    const [loading,setLoading] =useState(true);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>res.json())
        .then((data)=>{
            // console.log(data);
            setLoading(false)
            setUsers(data) // after calling this 15 number line will rerender
        })
    },[])

    console.log(users); //data fetch krte object caining use krte hobe must 

    //handle Search function for search data 
    const handleSeach = (e)=>{
        e.preventDefault();
        let searchCity = e.target.search.value;
        if(searchCity){
            let searchUsers = users.filter((user)=> user.address.street.toLowerCase() === searchCity.toLowerCase())
            setUsers(searchUsers);
            console.log('search fun',searchCity,'searchUsers',searchUsers);
        }
    }


    return (
        <div>
            <h1>UseEffect fetch Data </h1><hr></hr>
            <form action="" onSubmit={handleSeach}>
                Search by Id: <input type="text" name="search"/>
                <input type="submit" value="submit" />
            </form>
            <div className="data-container">
                {
                    users.length > 0 && !loading ?(
                        users.map((user)=>{
                            console.log(user);
                            return (
                                <div className="single-data" key={user.id}>
                                    <h1>Name : {user.name}</h1>
                                    <h3>Phone : {user.phone}</h3>
                                    <h5>Address:{user.address.street}</h5>
                                </div>
                            )
                        })
                    ): (<h1>Loading</h1>)
                }
            </div>
        </div>
    )
}

export default UseEffectFetch
