import React, { Children, createContext, useState } from 'react'

export  const contextTheme=createContext()
function ThemeContext({ children }) {
 const[isDarkMode,setDarkmode]=useState(false)
 let toogleTheme=()=>{
    setDarkmode(!isDarkMode)
 }
  return (
    <div>
        <contextTheme.Provider value={{isDarkMode,toogleTheme}}>
      {children}
      </contextTheme.Provider>
    </div>
  )
}

export default ThemeContext
