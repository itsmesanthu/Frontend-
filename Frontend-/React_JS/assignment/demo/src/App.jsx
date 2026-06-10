// // // import React from 'react'
// // // import Mydetail from './Model/Mydetail'
// // // import './App.css';


// // // function App() {
// // //   return (
// // //     <div>
// // //       <center>
// // //         <hr />
// // //       <h1>hi hello i am santhosh g p</h1>
// // //       <Mydetail/>
// // //       </center>
// // //     </div>
// // //   )
// // // }

// // // export default App

// // import React from 'react'
// // import Header from './Model1/Header'
// // import Footer from './Model1/Footer'
// // import Card from './Model1/Card'
// // import Nve from './Model1/Nve'

// // function App() {
// //   return (
// //     <div>
// //       <Header/>
// //       <Nve/>
// // <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "20px" }}>
// //   <Card
// //     image="https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=300&q=80"
// //     name="iPhone 15"
// //     category="Mobile"
// //     price={79999}
// //     brand="Apple"
// //     rating={4.8}
// //     inStock={true}
// //   />

// //   <Card
// //     image="https://images.unsplash.com/photo-1511454612769-005902ceb22b?w=300&q=80"
// //     name="Samsung S24"
// //     category="Mobile"
// //     price={69999}
// //     brand="Samsung"
// //     rating={4.7}
// //     inStock={true}
// //   />

// //   <Card
// //     image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&q=80"
// //     name="OnePlus 13"
// //     category="Mobile"
// //     price={59999}
// //     brand="OnePlus"
// //     rating={4.6}
// //     inStock={false}
// //   />

// //   <Card
// //     image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&q=80"
// //     name="Sony WH-1000XM5"
// //     category="Headphones"
// //     price={29999}
// //     brand="Sony"
// //     rating={4.9}
// //     inStock={true}
// //   />

// //   <Card
// //     image="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300&q=80"
// //     name="iPad Pro 12.9"
// //     category="Tablet"
// //     price={99999}
// //     brand="Apple"
// //     rating={4.7}
// //     inStock={true}
// //   />

// //   <Card
// //     image="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&q=80"
// //     name="Galaxy Watch 6"
// //     category="Wearable"
// //     price={25999}
// //     brand="Samsung"
// //     rating={4.5}
// //     inStock={true}
// //   />

// //   <Card
// //     image="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300&q=80"
// //     name="Google Pixel 8"
// //     category="Mobile"
// //     price={64999}
// //     brand="Google"
// //     rating={4.6}
// //     inStock={true}
// //   />

// //   <Card
// //     image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&q=80"
// //     name="Apple AirPods Pro"
// //     category="Earbuds"
// //     price={24999}
// //     brand="Apple"
// //     rating={4.8}
// //     inStock={false}
// //   />
// // </div>
// // <Footer/>
// //     </div>
// //   )
// // }

// // export default App
// import React from 'react'
// import Employeecard from './Profile_card/Employeecard'
// import Student from './Profile_card/Student'
// import Product from './Profile_card/Product'
// function App() {
//   return (
//     <div>
//       <Employeecard/>
//       <Student/>
//       <Product/>
//     </div>
//   )
// }

// export default App
import React from 'react'
import Login from './Form/Login'
import Signup from './Form/Signup'
 import Employeecard from './Profile_card/Employeecard'
import Student from './Profile_card/Student'
import Product from './Profile_card/Product'
import EmployeeProfileCard from './ProfileCards/EmployeeProfileCard'
import ProductProfileCard from './ProfileCards/ProductProfileCard'
function App() {
  return (
    <div>
      <Login/>
      <Signup/>
   <Employeecard/>
   <Student/>
     <Product/>
     <br />
     <hr />
     <br />
     <EmployeeProfileCard/>
     <ProductProfileCard/>
     
    </div>
  )
}

export default App
