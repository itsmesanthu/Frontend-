// // import React from 'react'
// // // import Example from './Module1/Example';
// // // import Ex2 from './Module1/Ex2';
// // // import Ex3 from './Module1/Ex3';
// // import Ex1 from './Module2/Ex1';
// // import Ex2 from './Module2/Ex2';
// // import Images from './Module2/Images';
// // import
// // function App() {
// //   return (
// //     <React.Fragment>
// //       <h1>my first react app</h1>
// //       <Ex1/>
// //       <Ex2/>
// //       {/* <Example />
// //       <Ex2 />
// //       <Ex3 /> */}
// //       <Images/>
// //     </React.Fragment>
// //   )
// // }

// // export default App;
// // import React from 'react'
// // import './App.css'
// // function App() {
// //   return (
// //     <div>
// //       <h1 className='heading'>hi welcome to js </h1>
// //       <div className='div1'>
// //         <div className='h'> hi</div>
// //         <div className='h'>hello</div>
// //         <div className='h'> word</div>
// //       </div>
// //       <h1 style={{height:"100px",width:"100%",display:"flex",justifyContent:"center"}}>addiing inline css in jsx file</h1>
// //       <center>
// // <p style={{backgroundColor:"yellowgreen",color:"red",height:"200px",width:"90%",display:"flex",justifyContent:"center",alignItems:"center",border:"2px solid black",boxShadow:"10px 10px 10px 10px rgb(229, 184, 184) ",borderRadius:"50%"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque soluta quas nostrum repellat nisi dolorum deserunt voluptas culpa dicta veniam delectus aperiam rerum iusto placeat ipsum, voluptatibus quod consequatur ut.</p>
// // </center>
// // <ol style={list}>
// //   <h1 style={head}>list of the language</h1>
// //   <li>python</li>
// //   <li>java</li>
// //   <li>html</li>
// //   <li>css</li>
// // </ol>
// // <ul style={style.head}>
// //   <h1 style={style.list}> list of in framework</h1>
// //   <li>django</li>
// //   <li>flask</li>
// // </ul>
// //     </div>
// //   )
// // }
// // let head={
// //   color:'green',
// //   backgroundColor:'aquamarine'
// // }
// // let list={
// //   color:'white',
// //   backgroundColor:'black'
// // }
// // let style={
// //   head:{
// //   color:'green',
// //   backgroundColor:'aquamarine'
// // },
// // list:{
// //   color:'white',
// //   backgroundColor:'black'
// // }
// // }
// // export default App
// // import React from 'react'
// // import ProfileCard from './Module2/ProfileCard'

// // function App() {
// //   return (
// //     <div>
// //       <ProfileCard/>
// //     </div>
// //   )
// // }

// // export default App
// // import React from 'react'
// // import Greet from './Module3/Components/Greet'
// // import Greet1 from './Module3/Components/Greet1'
// // import Heading from './Module3/Components/Heading'
// // import Nove from './Module3/Components/Nove'
// // import Sidebar from './Module3/Components/Sidebar'
// // import Main from './Module3/Components/Main'
// // import Footer from './Module3/Components/Footer'
// // import ProfileCards from './Module3/Components/ProfileCards'

// // function App() {
// //   return (
// //     <div>
// //       <Heading/>
// //       <Nove/>
// //       <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
// //       <Sidebar/> <Main/>
// //       </div>
// //       <Footer/>
// //       <br />
// //       <br />
// //       <ProfileCards/>



// //     </div>
// //   )
// // }

// // export default App
// // import React, { Component } from 'react'
// // import Heading from './Module3/class/Head'
// // import Nove from './Module3/Class/Nve'
// // import Sidebar from './Module3/Class/Side'
// // import Main from './Module3/Class/Main'
// // import Footer from './Module3/Class/Foot'
// // // import Parent from './Module3/Props/Parent'
// // import Button from './Module3/Props/Button'
// // import Parent from './Module4/Parent'
// // export default class App extends Component {
// //   render() {
// //     return (
// //       <div>
// //         <Parent/>
// //       </div>
// //     )
// //   }
// // }
// import React from 'react'
// import Parent from './Module4/Parent'
// import Eample1 from './Module4/Eample1'
// import Eample2 from './Module4/Eample2'

// export default function App() {
//   let studentds={
//     name:"santhu",
//     age:23,
//     city:"bengaluru",
//     student:true
//   }
//   return (
//     <div>
//       <Parent/>
//       <Eample1  
//       name={name}
//       age={age}
//         city={city}
//         student={student}/>
//       <Eample2/>
//     </div>
//   )
// }
import React from 'react'
import Child from './Module4/Child'

function App() {
    let hclick=()=>{
        alert('profile updated soon')}
  return (
    <div>
      <Child sub='math'name='santhu'click={hclick}/>
      <Child name='santhu'click={hclick}/>
    </div>
  )
}

export default App
