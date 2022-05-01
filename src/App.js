import React from 'react';

//App.css priority first 
// import './Index.css'
import './App.css'
import ClassBased from './ClassBased.module.css'
import { Link, NavLink, Route,Routes } from 'react-router-dom';
import UseParamPage from './pages/UseParamPage/UseParamPage';
import SearchParam from './pages/SearchParam/SearchParam';

const App = () => {

  //Active Class Style sending
  const activeCheck = ()=>{
    return ({isActive})=>{return isActive?'isActive':'notActive'}
  }

  const activeStyleBased = ()=>{
    return ({isActive})=>{return isActive? ({color:'orange'}):({color:'green'})};
  }

  return (
    <>
      <h1>React Router V6 Practice code Running.</h1><hr />
      {/* Navigation Adding */}
      <ul>
        {/* A Tag Will Refresh the page */}
        <li><a href="about">A - About</a></li>
        <li><NavLink className={activeCheck()} to='/'>Home</NavLink></li>
        <li><NavLink to="/useParam">Use Params</NavLink></li>
        <li><NavLink to="/search">Search Params</NavLink></li>

        {/* This will not Refresh the page */}
        <li><NavLink style={activeStyleBased()} to="/">Home</NavLink></li>
        <li><NavLink className={({isActive})=>{return isActive?'isActive':'notActive'}}  to="/about">About</NavLink></li>
        <li><NavLink style={({isActive})=>{return isActive? ({color:'orange'}):({color:'green'})}} to="/about">About</NavLink></li>
        {/* is Active Function based */}
        <li><NavLink className={activeCheck()} to="/blog">Blog</NavLink></li>
        <li><NavLink className={activeCheck()} to="/basic-component">Basic Component</NavLink></li>
        {/* link custom style not work only class work */}
        <li><NavLink className={activeCheck()} to="/css-component">CSS Component</NavLink></li>
      </ul>
      {/* React Router Basic Systems added */}
      <Routes>
          <Route path="/" element="Hello Router Home"></Route>
          <Route path="about" element={<h1>Hello Router About</h1>}></Route>
          
          {/* jeta upor thakbe seta age asbe, */}
          <Route path="/useParam" element={<UseParamPage/>}></Route>

          {/* useParam cat route ekta button diye handle krbo, */}
          <Route path="/useParam/:category" element={<UseParamPage/>}></Route>
          <Route path="/useParam/:category/:id" element={<UseParamPage/>}></Route>
          <Route path="/blog" element="Hello Router Blog"></Route>

          {/* use params e jai pathabo sob blog component e jabe, */}
          <Route path="/blog/:category" element={<UseParamPage/>}></Route>
          {/* this will run component */}
          <Route path="/basic-component" element={<BasicComponent/>}></Route>
          <Route path="/css-component" element={<CssAddingComponent/>}></Route>
          <Route path='*' element="404 routes"></Route>

          {/* Search Param Using */}
          <Route path="search" element={<SearchParam/>}></Route>
      </Routes>

      {/* Css Adding Style  */}
      

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

      {/* 
      1)class single,class module,style object,style object with dynamic,
      2)join string and dynamic variable,join in background img,
      */}

    </>
  )
}

export default App
