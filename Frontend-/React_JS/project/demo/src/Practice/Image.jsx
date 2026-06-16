import React ,{useState} from 'react'

function Image() {
    const [imageurl,setImage]=useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr2MZZ65XLE3zJ3f61zRuZ4BSMceJYcl0E2ddwvQZP8Q&s=10')
  return (
    <div style={{margin:'20px', padding:'10px', height:'400px', width:'500px',backgroundColor:'gray'}}>
      <center><img src={imageurl} alt="react image"  height={"300px"} width={'400px'}/></center>
      <div style={{
        display:'flex',justifyContent:'center',alignContent:'center', margin:'20px',gap:'100px'
      }}>
        <button onClick={()=>setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr2MZZ65XLE3zJ3f61zRuZ4BSMceJYcl0E2ddwvQZP8Q&s=10')}>React</button>
        <button onClick={()=>setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5qWvVcFV1jl8xlDlaVTDzFSVrIFCEmFsBaBBGFYQRxw&s=10')}>Angular</button>
      </div>
    </div>
  )
}

export default Image
