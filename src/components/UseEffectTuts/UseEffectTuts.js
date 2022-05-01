import React,{useState,useEffect} from 'react'

const UseEffectTuts = () => {
    const [count, setCount] = useState(0)


    useEffect(()=>{
        console.log('useEffect running');
    },[])

    console.log('first time load'); //useEffect sobar last e run krbe,


    // },[count,multiple]) = single time ekbar run krbe and baki gulo count change e run krbe,
    // },[]) = single time run krbe first render e,
    // }) = all time run krbe all render e,

    return (
        <div>
            <h1>UseEffect Tuts {count}</h1>
            <button onClick={()=>setCount(count+1)}>count Increment</button>
        </div>
    )
}

export default UseEffectTuts
