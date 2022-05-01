import React,{useReducer} from 'react'

const reducer = (state,action)=>{

    switch(action.type){
        case "increment":
            return {...state,count:state.count+1};
            break;
        case "toggle":
            return {...state,toggle:!state.toggle}
            break;
        default:
            return state;
    }
    // return {count:0,toggle:false}
}

const UseRedToggle = () => {
    const [state, dispatch] = useReducer(reducer,{count:0,toggle:false})


    const handleToggle = ()=>{
        //function name for implement
        dispatch({type:"increment"})
        dispatch({type:"toggle"})
    }

    return (
        <>
            <h1>Count : {state.count}</h1>
            <button onClick={handleToggle}>Hanndle Reducer</button>
            {state.toggle && <h3>Toggle Text</h3>}
        </>
    )
}

export default UseRedToggle


/* 
Steps of using use Reducer :
-----------------------------------
-)initial setup = const [state, dispatch] = useReducer(reducer,{count:0,toggle:false})
-)console.log(state)
-)dispatch function diye type send krbo 
-)type ta reducer function er bitor collect krbo  and sei onujai data manipulate krbo,
-)reducer function must return krte hobe kichu ekta,


*/