import React,{useState,useEffect} from 'react'

const UseEffectFetch = () => {
    const [user,setUser] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>res.json())
        .then((data)=>{
            // console.log(data);
            setUser(data) // after calling this 15 number line will rerender
        })
    },[])

    console.log(user[0]?.name); //data fetch krte object caining use krte hobe must 
    

    return (
        <div>
            <h1>UseEffect fetch Data </h1><hr></hr>
        </div>
    )
}

export default UseEffectFetch
