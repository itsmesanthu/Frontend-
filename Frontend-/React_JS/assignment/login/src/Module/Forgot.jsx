import React from 'react'

function Forgot() {
    let submit=()=>{
        alert("password is reseted")
    }
  return (
    <div>
      <form>
        <legend>forgot password</legend>
        <p>new password: <input type="password" placeholder="enter new password"/></p>
        <p>confrom password: <input type="password" placeholder="re-enter password" /></p>
        <button onClick={submit}>submit</button>
      </form>
    </div>
  )
}

export default Forgot
