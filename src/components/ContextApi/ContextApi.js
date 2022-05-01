import React,{useState,createContext} from 'react'
import ToggleState from '../ToggleState';
// import UseStateConditional from './components/UseStateConditional';
// import UseStateLearn from './components/UseStateLearn';


export const AppContext = createContext();

const ContextApi = () => {
    const [userName, setUserName] = useState("Arfan Khan");
    return (
        <>
        <h1>Context Api</h1>
        <AppContext.Provider value={{userName,setUserName}} >
            <ToggleState/>
        </AppContext.Provider>
        </>
    )
}

export default ContextApi
