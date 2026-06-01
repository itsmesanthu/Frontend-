import React from 'react'
import login from './login'

function Signup() {
    let submit=()=>{
        alert("signup is susscefully")
    }
  return (
    <div>
      <form>
        <legend> Signup</legend>
        <p>Name: <input type="text" placeholder="enter your name"/></p>
        <p>email: <input type="email" placeholder='enter your mail'/></p>
        <p>Phone number: <input type="text" placeholder='enter your phone number' /></p>
        <p>password: <input type="password" placeholder="enter a password" /></p>
        <p>comform password: <input type="password" placeholder="Re-enter your password" /></p>
        <button onClick={submit}>submit</button>
        <a href="./Login.jsx"> login</a>
      </form>
    </div>
  )
}

export default Signup
