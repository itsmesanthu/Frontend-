// import React, { useState } from 'react'

// function Loginfrom() {
//     const[formdata,setFormdata]=useState({
//         name:'',
//         age:'',
//         email:'',
//         password:'',
//         confirmpassword:''
//     })
//     const[passworderror,setPassworderror]=useState(false)
//     const[formfelid, setFormfelid]=useState(false)
//     const[submit,setSubmit]=useState(false)
//     const hond=(e)=>{
//         const name=e.target.name
//         const value=e.target.value
//         setFormdata({...formdata,[name]:value})
//     }
//     const submitform=(e)=>{
//         e.preventDefault();
//         if(formdata.password!==formdata.confirmpassword){
//             setPassworderror(true)
//         }
//         else if(formdata.name===''||formdata.age===''||formdata.email===''|| formdata.password===''|| formdata.confirmpassword===''){
//             setFormfelid(true)
//         }
//         else{
//             setSubmit(true)
//             console.log('name:',formdata.name)
//             console.log('age:',formdata.age)
//             console.log('email:',formdata.email)
//             console.log('password:',formdata.password)
//             console.log('coofirmpassword',formdata.confirmpassword)
//         }
//     }
//   return (
//     <div>
//       <center>
//         <h1>user login form</h1>
//         <div style={{ border:'2px solid none',boxShadow:'0px 0px 10px 0px black',borderRadius:'12px',width:'60%', height:'auto',padding:'10px'}}>
//             <center>
//                 <form onSubmit={submitform}>
//                 <label>Name:</label><br />
//                 <input type="text" value={formdata.name}name='name' onChange={hond} /><br /><br />
//                 <label>age:</label><br />
//                 <input type="number" value={formdata.age} name='age' onChange={hond}/><br /><br />
//                 <label>email:</label><br />
//                 <input type="email" value={formdata.email} name='email' onChange={hond}/><br /><br />
//                 <label>password:</label><br />
//                 <input type="password" value={formdata.password} name='password'onChange={hond} /><br /><br />
//                 <label>confrom password:</label><br />
//                 <input type="password" value={formdata.confirmpassword} name='confirmpassword' onChange={hond} /><br /><br />
//                 {passworderror&& <p>password doesn't match</p>}
//                 {formfelid&& <p>fill the all form</p>}
//                 {submit&&<p>form submited successfully</p>}
//                 <button type='submit'>submit</button>
//                 </form>
                
//             </center>
//         </div>
//       </center>
//     </div>
//   )
// }

// export default Loginfrom
import React, { useState } from 'react'

function Loginfrom() {
    const [formdata,setFormdata]=useState({
        
    })
  return (
    <>
      <center>
        <h1 style={{ color: "#2c3e50", marginBottom: "20px" }}>
          Course Registration Form
        </h1>
      </center>

      <form
        style={{
          width: "450px",
          margin: "auto",
          border: "2px solid black",
          padding: "20px",
          borderRadius: "10px",
          backgroundColor: "#f9f9f9",
          boxShadow: "0px 0px 10px gray",
          fontFamily: "Arial",
        }}
      >
        <fieldset style={{ marginBottom: "20px", padding: "15px" }}>
          <legend style={{ fontWeight: "bold", color: "#007bff" }}>
            Personal Information
          </legend>

          <label>Firstname:</label><br />
          <input
            type="text"
            name="firstname"
            placeholder="Enter first name"
            style={{ width: "90%", padding: "8px", marginTop: "5px" }}
          /><br /><br />

          <label>Lastname:</label><br />
          <input
            type="text"
            name="lastname"
            placeholder="Enter lastname"
            style={{ width: "90%", padding: "8px", marginTop: "5px" }}
          /><br /><br />

          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            style={{ width: "90%", padding: "8px", marginTop: "5px" }}
          /><br /><br />

          <label>Password:</label><br />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            style={{ width: "90%", padding: "8px", marginTop: "5px" }}
          /><br /><br />

          <label>Confirm Password:</label><br />
          <input
            type="password"
            name="confirmpassword"
            placeholder="Confirm password"
            style={{ width: "90%", padding: "8px", marginTop: "5px" }}
          /><br /><br />

          <label>DOB:</label><br />
          <input
            type="date"
            name="DOB"
            style={{ width: "90%", padding: "8px", marginTop: "5px" }}
          /><br /><br />

          <label>Gender:</label><br />

          <input type="radio" name="gender" />
          <label style={{ marginRight: "15px", marginLeft: "5px" }}>Male</label>

          <input type="radio" name="gender" />
          <label style={{ marginRight: "15px", marginLeft: "5px" }}>Female</label>

          <input type="radio" name="gender" />
          <label style={{ marginLeft: "5px" }}>Other</label>

          <br /><br />

          <label>Choose a State:</label><br />
          <select
            name="state"
            style={{
              width: "95%",
              padding: "8px",
              marginTop: "5px",
            }}
          >
            <option value="">--Please choose an option--</option>
            <option value="goa">Goa</option>
            <option value="ka">Karnataka</option>
            <option value="tn">Tamil Nadu</option>
          </select>
        </fieldset>

        <fieldset style={{ padding: "15px" }}>
          <legend style={{ fontWeight: "bold", color: "#007bff" }}>
            Course Information
          </legend>

          <label>Choose a Course:</label><br />
          <select
            name="course"
            style={{
              width: "95%",
              padding: "8px",
              marginTop: "5px",
            }}
          >
            <option value="">--Please choose an option--</option>
            <option value="pft">Python Full Stack</option>
            <option value="jft">Java Full Stack</option>
            <option value="mft">MERN Full Stack</option>
          </select>

          <br /><br />

          <label>Delivery Mode:</label><br />

          <input type="radio" name="Deliverymode" />
          <label style={{ marginRight: "15px", marginLeft: "5px" }}>Online</label>

          <input type="radio" name="Deliverymode" />
          <label style={{ marginLeft: "5px" }}>Offline</label>

          <br /><br />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Register
          </button>
        </fieldset>
      </form>
    </>
  )
}

export default Loginfrom