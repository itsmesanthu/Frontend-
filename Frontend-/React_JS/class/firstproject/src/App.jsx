// // // import React from 'react'
// // // // import Example from './Module1/Example';
// // // // import Ex2 from './Module1/Ex2';
// // // // import Ex3 from './Module1/Ex3';
// // // import Ex1 from './Module2/Ex1';
// // // import Ex2 from './Module2/Ex2';
// // // import Images from './Module2/Images';
// // // import
// // // function App() {
// // //   return (
// // //     <React.Fragment>
// // //       <h1>my first react app</h1>
// // //       <Ex1/>
// // //       <Ex2/>
// // //       {/* <Example />
// // //       <Ex2 />
// // //       <Ex3 /> */}
// // //       <Images/>
// // //     </React.Fragment>
// // //   )
// // // }

// // // export default App;
// // // import React from 'react'
// // // import './App.css'
// // // function App() {
// // //   return (
// // //     <div>
// // //       <h1 className='heading'>hi welcome to js </h1>
// // //       <div className='div1'>
// // //         <div className='h'> hi</div>
// // //         <div className='h'>hello</div>
// // //         <div className='h'> word</div>
// // //       </div>
// // //       <h1 style={{height:"100px",width:"100%",display:"flex",justifyContent:"center"}}>addiing inline css in jsx file</h1>
// // //       <center>
// // // <p style={{backgroundColor:"yellowgreen",color:"red",height:"200px",width:"90%",display:"flex",justifyContent:"center",alignItems:"center",border:"2px solid black",boxShadow:"10px 10px 10px 10px rgb(229, 184, 184) ",borderRadius:"50%"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque soluta quas nostrum repellat nisi dolorum deserunt voluptas culpa dicta veniam delectus aperiam rerum iusto placeat ipsum, voluptatibus quod consequatur ut.</p>
// // // </center>
// // // <ol style={list}>
// // //   <h1 style={head}>list of the language</h1>
// // //   <li>python</li>
// // //   <li>java</li>
// // //   <li>html</li>
// // //   <li>css</li>
// // // </ol>
// // // <ul style={style.head}>
// // //   <h1 style={style.list}> list of in framework</h1>
// // //   <li>django</li>
// // //   <li>flask</li>
// // // </ul>
// // //     </div>
// // //   )
// // // }
// // // let head={
// // //   color:'green',
// // //   backgroundColor:'aquamarine'
// // // }
// // // let list={
// // //   color:'white',
// // //   backgroundColor:'black'
// // // }
// // // let style={
// // //   head:{
// // //   color:'green',
// // //   backgroundColor:'aquamarine'
// // // },
// // // list:{
// // //   color:'white',
// // //   backgroundColor:'black'
// // // }
// // // }
// // // export default App
// // // import React from 'react'
// // // import ProfileCard from './Module2/ProfileCard'

// // // function App() {
// // //   return (
// // //     <div>
// // //       <ProfileCard/>
// // //     </div>
// // //   )
// // // }

// // // export default App
// // // import React from 'react'
// // // import Greet from './Module3/Components/Greet'
// // // import Greet1 from './Module3/Components/Greet1'
// // // import Heading from './Module3/Components/Heading'
// // // import Nove from './Module3/Components/Nove'
// // // import Sidebar from './Module3/Components/Sidebar'
// // // import Main from './Module3/Components/Main'
// // // import Footer from './Module3/Components/Footer'
// // // import ProfileCards from './Module3/Components/ProfileCards'

// // // function App() {
// // //   return (
// // //     <div>
// // //       <Heading/>
// // //       <Nove/>
// // //       <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
// // //       <Sidebar/> <Main/>
// // //       </div>
// // //       <Footer/>
// // //       <br />
// // //       <br />
// // //       <ProfileCards/>



// // //     </div>
// // //   )
// // // }

// // // export default App
// // // import React, { Component } from 'react'
// // // import Heading from './Module3/class/Head'
// // // import Nove from './Module3/Class/Nve'
// // // import Sidebar from './Module3/Class/Side'
// // // import Main from './Module3/Class/Main'
// // // import Footer from './Module3/Class/Foot'
// // // // import Parent from './Module3/Props/Parent'
// // // import Button from './Module3/Props/Button'
// // // import Parent from './Module4/Parent'
// // // export default class App extends Component {
// // //   render() {
// // //     return (
// // //       <div>
// // //         <Parent/>
// // //       </div>
// // //     )
// // //   }
// // // }
// // import React from 'react'
// // import Parent from './Module4/Parent'
// // import Eample1 from './Module4/Eample1'
// // import Eample2 from './Module4/Eample2'

// // export default function App() {
// //   let studentds={
// //     name:"santhu",
// //     age:23,
// //     city:"bengaluru",
// //     student:true
// //   }
// //   return (
// //     <div>
// //       <Parent/>
// //       <Eample1  
// //       name={name}
// //       age={age}
// //         city={city}
// //         student={student}/>
// //       <Eample2/>
// //     </div>
// //   )
// // }


// // import React from 'react'
// // import Child from './Module4/Child'

// // function App() {
// //     let hclick=()=>{
// //         alert('profile updated soon')}
// //   return (
// //     <div>
// //       <Child sub='math'name='santhu'click={hclick}/>
// //       <Child name='santhu'click={hclick}/>
// //     </div>
// //   )
// // }

// // export default App


// import React from 'react'
// import Ex4 from './Module4/Ex4'
// import Ex5 from './Module4/Ex5'
// import Ex6 from './Module4/Ex6'
// import Ex7 from './Module4/Ex7'
// import ProductCard from './Module4/ProductCard'
// import Card from './Module4/Card'
// import Form from './Module4/Form'
// import Pass from './Module4/Pass'
// function App() {
//   return (
//     <div>
// <ProductCard/>
// <Card/>
// <Form/>
// <Pass/>

//     </div>
//   )
// }
////module 5
// // export default App
// import React from 'react'
// import Icons from './Module4/Icons'
// import Loginfrom from './Modul5/Loginfrom'
// function App() {
//   return (
//     <div>
//    <Loginfrom/>
//     </div>
//   )
// }

// export default App
//  //// module 6
// import React from 'react'
// import Ex1 from './Module6/Ex1'
// import Ex2 from './Module6/Ex2'
// import Ex3 from './Module6/Ex3'
// import Show from './Module6/Show'
// import LL from './Module6/LL'
// function App() {
//   return (
//     <div>
//       <Ex1 condtion={false}/>

//       <Ex2 condtion={true}/>
//       <br />
//       <Ex3 condtion={true}/>
//       <br />
//       <Show/>
//       <LL/>

//     </div>
//   )
// }

// // export default App
//                           //// module 7
// import React from 'react'
// import List from './Module7/List'
// function App() {
//   return (
//     <div>
//       <List/>
//     </div>
//   )
// }

// export default App
///// module 7
// import React from 'react'
// import EnhancedComponent from './Module7.1/EnhancedComponent'
// function App() {
//   return (
//     <div>
//       <EnhancedComponent/>
//     </div>
//   )
// }

// export default App
//// module 8
import React from 'react'
import Exa1 from './Module8/Exa1'
import Exa2 from './Module8/Exa2'
import Eax3 from './Module8/Eax3'
import Eax4 from './Module8/Eax5'
import Eax5 from './Module8/Eax5'

function App() {
  return (
    <div>
      <Exa1/>
      <Exa2/>
      <Eax3/>
      <Eax4/>
      <Eax5/>
    </div>
  )
}

export default App
