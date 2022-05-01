import React,{useRef,useEffect} from 'react'

const UseRefTuts = () => {
    const heading = useRef(null)
    const count = useRef(null)

    useEffect(()=>{
        console.log(heading.current.innerHTML = 'arfan khan');
    },[])

    //useRef diye sob tag element manipulation krte parbo,
    const handleRef = ()=>{
        console.log(count.current.innerHTML = Number(count.current.innerHTML) + 1)
    }

    return (
        <div>
            <h1 ref={heading}>UseRef</h1>
            <h3 ref={count}>0</h3>
            <p id="p">Lorem ipsum dolor sit amet.</p>
            <button onClick={handleRef}>HandleButton</button>
        </div>
    )
}

export default UseRefTuts
