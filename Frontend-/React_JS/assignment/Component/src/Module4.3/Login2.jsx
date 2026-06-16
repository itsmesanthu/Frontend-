import React,{ useState } from "react";

function Login2({ setPage }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function loginHandler() {
    setPage("home");
  }

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#f0f2f5"
      }}
    >
      <div>
        <h1
          style={{
            color: "#1877f2",
            fontSize: "70px"
          }}
        >
          facebook
        </h1>

        <h2>
          Connect with friends and
          <br />
          the world around you.
        </h2>
      </div>

      <div
        style={{
          width: "400px",
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px"
        }}
      >
        <input type="text"placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}style={{ width: "100%",  height: "40px", marginBottom: "10px" }} />

        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
          style={{width: "100%", height: "40px", marginBottom: "10px" }} />

        <button onClick={loginHandler}
          style={{
            width: "100%",
            height: "40px",
            backgroundColor: "#1877f2",
            color: "white",
            border: "none"
          }}
        >
          Login
        </button>

        <br />
        <br />

        <p
          onClick={() => setPage("signup")}
          style={{
            color: "blue",
            cursor: "pointer",
            textAlign: "center"
          }}
        >
          Create New Account
        </p>
      </div>
    </div>
  );
}

export default Login2;