import React from 'react';
import UseStateConditional from './components/UseStateConditional';
import UseStateLearn from './components/UseStateLearn';
import ToggleState from './components/ToggleState';
import UseReducerToggle from './components/UseReducer/UseReducerToggle';
const App = () => {
  return (
    <>
      <h1>React Hook Practice code Running.</h1><hr />
      {/* <UseStateLearn/> */}
      {/* <UseStateConditional/> */}
      {/* <ToggleState/> */}
      <UseReducerToggle/>
    </>
  )
}

export default App
