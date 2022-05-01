import React,{useState} from 'react'

const ToggleState = ()=>{
    const [count,setCount] = useState(0);
    const [toggle,setToggle] = useState(true);

    const handleToggle = ()=>{
        setCount(count+1);
        setToggle(!toggle)
    }

    return (
        <>
            <h1>Count {count}</h1>
            <button onClick={handleToggle}>Toggle Handle</button>
            {toggle && <h1>Toggle Text Data</h1>}
            {toggle ? <h1>Toggle True {count}</h1>:<h1>Toggle False</h1>}
            {count || <h1>not found count</h1>}
        </>
    )
}

export default ToggleState;