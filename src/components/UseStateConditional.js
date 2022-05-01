import React,{useState} from 'react';

const UseStateConditional = ()=>{
    const [loading,setLoading] = useState(true);
    const handleLoading = ()=>{
        setLoading(false)
    }



    if(loading){
        return(
            <>
                <h1>Loading Component</h1>
                <button onClick={handleLoading}>HandleLoading</button>
            </>
        )
    }else{
        return (
            <>
                <h1>Data component</h1>
            </>
        )
    }


}

export default UseStateConditional;