import React from 'react'
import Signup from './Signup'
function login() {
    let submit=()=>{
        alert("login susscefully")
    }
  return (
    <div>
        <form> <legend>login</legend>

      <p>User name: <input type="text" placeholder="enter user name"/></p>
      <p>password: <input type="password" placeholder="enter password" /></p>
      <button onClick={submit}>submit</button>
        </form>
              <p><button>Forgot Password?</button></p>
   <p>Don't have an account? <button> <a href="./Signup">signup</a></button></p>
   
    </div>
  )
}

export default login
