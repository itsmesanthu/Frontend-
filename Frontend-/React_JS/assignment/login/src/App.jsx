import React from 'react'
import './CardStyles.css'
import Login from './Module/Login'
import Signup from './Module/Signup'
import Forgot from './Module/Forgot'
import Sinfo from './Studentcard/Sinfo'
import Pinfo from './Product/Pinfo'
import Einfo from './Employee/Einfo'
import Cinfo from './Course/Cinfo'
import Movieinfo from './Movie/Movieinfo'
import Counter from './Counter/Counter'
import StudentResultP from './Studentcard/StudentResultP'
import Spinfo from './Shopping/Spinfo'
import Dinfo from './Dashboard/Dinfo'
import Productinfo from './Product/Productinfo'
import Cainfo from './Course/Cainfo'

function App() {
  return (
    <center>
    <div>
      {/* <Login/>
      <br />
      <hr />
      <Signup/>
      <br />
      <hr />
        <br />
          <br />
            <br />
              <br />
      <Forgot/> */}
      <Sinfo/>
      <br />
      <hr />
      <Pinfo/>
      <br />
      <hr />
        <Einfo/>
        <br /><hr />
        <Cinfo/>
        <br />
        <hr />
        <Movieinfo/>
        <br /><hr />
        <Counter/>
        <br /><hr />
        <StudentResultP/>
        <br /><hr />
        <Spinfo/>
        <br /><hr />
        <Dinfo/>
        <br /> <hr />
        <Productinfo/>
        <br /> <hr />
        <Cainfo/>
    </div>
    </center>
  )
}

export default App
