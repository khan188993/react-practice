import React,{useContext} from 'react'
import MyContext from '../../components/ContextApi/AppContext';
import {useParams} from 'react-router-dom'
import AboutSingle from './AboutSingle/AboutSingle';

const About = () => {
    const {name} = useParams();

    const about = useContext(MyContext);
    console.log(about);
    return (
        <>
            <h1>About Pages - {about.userName}</h1><hr />
            <AboutSingle/>
            <button onClick={()=>about.setUserName(name || "about khan")}>Change form about user Name</button>
        </>
    )
}

export default About
