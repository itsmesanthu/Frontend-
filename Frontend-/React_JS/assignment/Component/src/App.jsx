// // import React from 'react'
// // import Burger from './Modules/Burger'
// // import "./App.css";

// // import FunComponent1 from "./Module1/Fun1";
// // import FunComponent2 from "./Module1/Fun2";
// // import FunComponent3 from "./Module1/Fun3";
// // import FunComponent4 from "./Module1/Fun4";

// // export default function App() {
// //   return (
// //     <div>
// //       <Burger/>  
// //       <div className="container">
// //       <FunComponent1/>
// //       <div className="middle">
// //         <FunComponent2/>
// //         <FunComponent3/>
// //       </div>

// //       <FunComponent4 />
// //     </div>
 
// //     </div>
// //   )
// // }
// import React,{ useState } from "react";
// import Login2 from "./Module4.3/Login2";
// import Signup2 from "./Module4.3/Signup2";
// import Home from "./Module4.3/Home";


// function App() {

//   return (
//     <div style={styles.app}>
//       <div style={styles.header}>
//         <img 
//           src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=300&fit=crop" 
//           alt="Welcome" 
//           style={styles.headerImage}
//         />
//         <h1 style={styles.title}>Welcome</h1>
//       </div>
//       <div style={styles.content}>
//         <Signup2/>
//         <Login2/>
//         <Home/>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   app: {
//     minHeight: "100vh",
//     background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//     padding: "40px 20px",
//     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
//   },
//   header: {
//     textAlign: "center",
//     marginBottom: "40px",
//     backgroundColor: "rgba(255, 255, 255, 0.1)",
//     padding: "20px",
//     borderRadius: "15px",
//     backdropFilter: "blur(10px)"
//   },
//   headerImage: {
//     width: "150px",
//     height: "150px",
//     borderRadius: "50%",
//     border: "4px solid white",
//     marginBottom: "15px",
//     boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
//     objectFit: "cover"
//   },
//   title: {
//     color: "#ffffff",
//     fontSize: "36px",
//     margin: 0,
//     textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)"
//   },
//   content: {
//     maxWidth: "900px",
//     margin: "0 auto",
//     display: "flex",
//     flexDirection: "column",
//     gap: "25px",
//     backgroundColor: "rgba(255, 255, 255, 0.95)",
//     padding: "30px",
//     borderRadius: "20px",
//     boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)"
//   }
// }

// export default App;
import React from 'react'
import UserProfile from './Modul6/UserProfile'
import LoginApp from './Modul6/LoginApp'
import TableList from './Modul6/TableList'
import Calculator from './Module8/Calculator'
function App() {
  return (
    <div >
      {/* <div>
      <UserProfile/>
      </div>
      <div>
      <LoginApp/>
      </div>
      <TableList/> */
      }
      <Calculator/>
    </div>
  )
}

export default App
