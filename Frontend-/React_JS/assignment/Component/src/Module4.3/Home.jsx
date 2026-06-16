import React from 'react'
import Navbar2 from './Navbar2';
import Left2 from './Left2';
import Right2 from './Right2';
import Feed from './Feed';


function Home() {

  return (
    <div>
      <Navbar2 />

      <div
        style={{
          display: "flex",
          backgroundColor: "#f0f2f5",
          minHeight: "100vh"
        }}
      >
        <Left2 />
        <Feed />
        <Right2 />
      </div>
    </div>
  );
}

export default Home;