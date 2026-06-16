import React,{useState}from 'react'

function Count() {
    const [count,setCount]=useState(0)
  return (
    <div style={{margin:'50px',border:'2px none',backgroundColor:'yellowgreen',height:'200px',width:'80%'}}>
      <center><h2>count :{count}</h2></center>
      <div style={{
        display:'flex',
        justifyContent:'center',
        alignContent:'center'
      }}>
        <button onClick={()=>setCount(count+1)}>incerment</button>
        <button onClick={()=>setCount(0)}>reset</button>
        <button onClick={()=>{if(count>0){
            setCount(count-1)
        }}}>decerment</button>
      </div>
    </div>
  )
}

export default Count
