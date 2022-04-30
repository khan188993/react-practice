import React from 'react';
import { Route,Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <h1>React Router V6 Practice code Running.</h1><hr />
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
