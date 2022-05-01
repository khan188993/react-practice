import React,{useContext} from 'react'
import MyContext from '../../../components/ContextApi/AppContext'

const AboutSingle = () => {
    const {userName,setUserName} = useContext(MyContext)
    return (
        <div>
            <h1>About Single : Name = {userName}</h1>
            <button onClick={()=>setUserName('Robben Hood')}>About Single Changle userName</button>
        </div>
    )
}

export default AboutSingle
