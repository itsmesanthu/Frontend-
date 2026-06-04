import React from 'react'
import Burger from './Modules/Burger'
import "./App.css";

import FunComponent1 from "./Module1/Fun1";
import FunComponent2 from "./Module1/Fun2";
import FunComponent3 from "./Module1/Fun3";
import FunComponent4 from "./Module1/Fun4";

export default function App() {
  return (
    <div>
      <Burger/>  
      <div className="container">
      <FunComponent1/>
      <div className="middle">
        <FunComponent2/>
        <FunComponent3/>
      </div>

      <FunComponent4 />
    </div>
 
    </div>
  )
}
