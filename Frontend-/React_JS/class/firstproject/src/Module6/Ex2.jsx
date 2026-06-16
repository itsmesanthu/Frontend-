import React from 'react'
import Profile from './Profile'
import Home from './Home'
function Ex2(condtion) {
    const login=<h3>have been logged in successfully</h3>
     const logout=<h3>have been logout in successfully</h3>
  return (
    <div>
      <h1>Example for ternary opertor</h1>
      {condtion?login:logout}
      {condtion?Profile:Home}
    </div>
  )
}

export default Ex2
