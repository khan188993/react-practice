import React from 'react';

//App.css priority first 
// import './Index.css'
import './App.css'
import ClassBased from './ClassBased.module.css'
import { Link, NavLink, Route,Routes } from 'react-router-dom';

const App = () => {

  return (
    <>
      {/* Basic Inline CSS Style Add */}
      <h1>React Router V6 Practice code Running.</h1><hr />
      {/* Navigation Adding */}
      <ul>
        {/* A Tag Will Refresh the page */}
        <li><a href="about">A - About</a></li>

        {/* This will not Refresh the page */}
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink  to="/about">About</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><Link to="/basic-component">Basic Component</Link></li>
      </ul>
      {/* React Router Basic Systems added */}
      <Routes>
          <Route path="/" element="Hello Router Home"></Route>
          <Route path="about" element={<h1>Hello Router About</h1>}></Route>
          <Route path="/blog" element="Hello Router Blog"></Route>
          {/* this will run component */}
          <Route path="/basic-component" element={<BasicComponent/>}></Route>
      </Routes>

      {/* Css Adding Style  */}
      <CssAddingComponent/>

    </>
  )
}

//Extra Basic Component For Routing 
const BasicComponent = ()=>{
  return (
    <h1>Basic Component</h1>
  )
}


const CssAddingComponent = ()=>{
    // all style for a tag 
    const allStyle = {
      background:'yellow',
      color:'blue',
    }
  
    const myClass ="myclass-design";
    const bgAdding = "./logo192.png";
    const number = '192';
    console.log(`url("logo"${number}".png")`,`url("${["logo",number,".png"].join("")}")`);
    console.log(ClassBased)


  return (
    <>
       {/* CSS Adding Tricks */}
       <h1>CSS Adding Tricks:</h1><hr></hr>
      <ul>
        <li style={{color:"red",backgroundColor:"yellow"}}>Inline CSS Direct</li>
        <li style={allStyle}>Inline Css variable</li>
        <li className={`text-orange ${myClass}`}>Class based css with dynamic variable</li>
        <li className="myclass-design">Class Css simple String</li>
        <li className={['text-orange',myClass].join(" ")}>Join Based Desing</li>
        <li className={true?'text-orange':'myclass-design'}>Condition Based Class Desing</li>
        <li style={true?{background:'red'}:{color:'red'}}>Condition Based inline Style</li>
        {/* can't use this variant ,background Image used*/}
        <li style={true && {backgroundImage:'url("logo192.png")',backgroundSize:'contain',color:'green'}}>direct bg adding with inline style </li>
        <li style={{backgroundImage:`url(${bgAdding})`,backgroundSize:'contain',color:'green'}}>bg adding by variable with inline style </li>
        {/* this will not work */}
        {/* <li style={{backgroundImage:`url("logo"${number}".png")`,backgroundSize:'cover',color:'red'}}>Trick </li> */}
        {/* console e age dekhe nibo */}
        <li style={{backgroundImage:`url("${["logo",number,".png"].join("")}")`,backgroundSize:'contain'}}>bg adding with string + dynamic variable </li>
        {/* module based css priority first */}
        <li className={`myclass-design ${ClassBased.new} `}>Module Based CSS Adding </li>
      </ul>
    </>
  )
}

export default App
