import React,{useReducer} from 'react'

//Reducer Function management
const reducer = (state,action)=>{
    console.log(state,action.type);
    if(action.type == 'increment'){
        return {...state,count:state.count+1}
    }else if(action.type=='toggle'){
        return {...state,textData:!state.textData}
    }else{
        return state;
    }
        

}

const UseReducerToggle = ()=>{
    //Setting UseReducer Initial
    const [state, dispatch] = useReducer(reducer,{count:0,textData:true})
    console.log(state);

    const handleReducer = ()=>{
        dispatch({type:'increment'});
        dispatch({type:'toggle'});
    }

    return (
        <>
            <h1>count : {state.count}</h1>
            <button onClick={handleReducer}>handleToggle</button>
            {
                state.textData && <h3>Toggle Text</h3>
            }
        </>
    )
}

export default UseReducerToggle;

/* 
-)useReducer initial setup 
const [state, dispatch] = useReducer(reducer,{count:0,textData:'Arfan Khan'})
-)dispatch function diye reducer function run krte and segulo manage hobe,

<button onClick={()=>dispatch({type:'functionName'})}></button>

const reducer = (state,action)=>{
    console.log(state,action);
    return {...state};
}


*/