import React from 'react';
import { Link, NavLink, Route,Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <h1>React Router V6 Practice code Running.</h1><hr />
      {/* Navigation Adding */}
      <ul>
        {/* A Tag Will Refresh the page */}
        <li><a href="about">A - About</a></li>

        {/* This will not Refresh the page */}
        <li><NavLink to="/">Home</NavLink></li>
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
    </>
  )
}

//Extra Basic Component For Routing 
const BasicComponent = ()=>{
  return (
    <h1>Basic Component</h1>
  )
}

export default App
