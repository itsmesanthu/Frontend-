import React, { Component } from 'react'

export default class Head extends Component {
  render() {
    return (
  <div  style={{height:"100px",
        width:"100%",backgroundColor:"pink",textAlign:"center",
        padding:"5px",display:"flex",justifyContent:"center",alignItems:"center",
        boxShadow:"0px 0px 10px lightgray",margin:"10px"
    }}>
      <h1>heading</h1>
    </div>
    )
  }
}
