import React from 'react'
import Login from './Module/Login'
import Signup from './Module/Signup'
import Forgot from './Module/Forgot'

function App() {
  return (
    <div>
      <Login/>
      <br />
      <hr />
      <Signup/>
      <br />
      <hr />
      <Forgot/>
    </div>
  )
}

export default App
