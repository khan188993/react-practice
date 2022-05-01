import React,{useContext} from 'react'
import {Routes,Route,NavLink} from 'react-router-dom'
import About from '../Pages/About/About'
import AboutSingle from '../Pages/About/AboutSingle/AboutSingle'
import MyContext from './ContextApi/AppContext'
import AppStates from './ContextApi/AppStates'

const AppSecond = () => {
    return (
        <AppStates>
           <h1>App Second</h1>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/about/single">About Single</NavLink></li>
                <li><NavLink to="/one">One</NavLink></li>
                <li><NavLink to="/two">Two</NavLink></li>
                <li><NavLink to="/three">Three</NavLink></li>
            </ul>

           <Routes>
               <Route path="/" element="home route"></Route>
               <Route path="/about" element={<About/>}></Route>
               <Route path="/about/:name" element={<About/>}></Route>
               <Route path="about/single" element={<AboutSingle/>}></Route>
               <Route path="/one" element={<ComponentOne/>}></Route>
               <Route path="/two" element={<ComponentTwo/>}></Route>
               <Route path="/three" element={<ComponentThree/>}></Route>
           </Routes>
        </AppStates>
    )
}

const ComponentOne = ()=>{
    const oneData = useContext(MyContext);
    console.log(oneData);

    return (
        <>
            <h1>Component one</h1>
            <button onClick={()=>oneData.setUserName("Fahim Khan")}>change UserName</button>
        </>
    )
}
const ComponentTwo = ()=>{
    const twoData = useContext(MyContext);

    return (
        <>
            <h1>Component Two</h1>
            <p>Showing Data by Two : {twoData.userName}</p>
        </>
    )
}
const ComponentThree = ()=>{

    return (
        <>
            <h1>Component Three</h1>
        </>
    )
}

export default AppSecond
