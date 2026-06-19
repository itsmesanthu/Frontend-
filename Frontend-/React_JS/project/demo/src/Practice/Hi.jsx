import React ,{useState}from 'react'

function Hi(){
  const [name,setName]=useState("")
  const[display,setDisplay]=useState("")
  function handlying(e){
    e.preventDefault()
    setDisplay(name)
    setName("")
  }
  const [sent,setSent]=useState("loging plaes your acoount ")
  const[username,setUsername]=useState('')
  const[password,setPassword]=useState('')
  const[error,setError]=useState(false)
  let submit=(e)=>{
    e.preventDefault()
    console.log("username is"+username)
    console.log("password is"+password)
    setError(true)
  }
     function fun1() {
      alert("hi hello welcome!");
    }
function fun2() {
  const [msg, setMsg] = useState("");
  setMsg("Hi Welcome");
}

  return(
    <>
    <form onSubmit={handlying}>
      <label >entern the text:</label> <input type='text' value={name} placeholder='enter the text' onChange={(e)=>{setName(e.target.value)}}></input>
      <button type='submit'>submit</button>
    </form>
     {display?(<p>texted data: {display}</p>):null}
     <h1>{sent}</h1>
     <button onClick={()=>setSent("welcome to home page")} > loging</button>
     <button onClick={()=>setSent("logout.....")}> logout</button>
     <br />
     <br />

     <br />

        <div style={{margin:'50px',
}}>
      <form >
        <label>username:</label><input type="text" name="ursename" onChange={(e)=>setUsername(e.target.value)} /><br />
        <br />
        <label>password</label><input type='password' name='password' onChange={(e)=>setPassword(e.target.value)}/><br /><br />
        <button onClick={submit}>Login</button>
      </form>
      {error && <center><p>Form submitted successfully</p></center> }
     </div> 
     <br /><br />
     <button onClick={fun1}>click me</button>
{/* <button onDoubleClick={fun2}>Double Click Me</button>
    <p>{msg}</p> */}
<div
  onMouseOver={(e) => {
    e.target.style.backgroundColor = "yellow";
  }}
  onMouseOut={(e) => {
    e.target.style.backgroundColor = "lightblue";
  }}
  style={{
    width: "150px",
    height: "50px",
    backgroundColor: "lightblue",
  }}
>
  Move mouse here
</div>

    </>

  )

}

export default Hi