import React from 'react'
import Profile from './Profile'
import Home from './Home'

function Ex1({condtion}) {
  if(condtion){
    return <Profile/>
  }
  else{
    return <Home/>
  }
}

export default Ex1
