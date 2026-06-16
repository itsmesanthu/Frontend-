import React,{ useState } from "react";

function Signup2({ setPage }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function signupHandler() {
    alert("Account Created Successfully");
    setPage("login");
  }

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f2f5"
      }}
    >
      <div
        style={{
          width: "450px",
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px"
        }}
      >
        <h1>Create Account</h1>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            width: "100%",
            height: "40px",
            marginBottom: "10px"
          }}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            height: "40px",
            marginBottom: "10px"
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            height: "40px",
            marginBottom: "10px"
          }}
        />

        <button
          onClick={signupHandler}
          style={{
            width: "100%",
            height: "40px",
            backgroundColor: "green",
            color: "white",
            border: "none"
          }}
        >
          Sign Up
        </button>

        <br />
        <br />

        <p
          onClick={() => setPage("login")}
          style={{
            color: "blue",
            cursor: "pointer",
            textAlign: "center"
          }}
        >
          Already have an account?
        </p>
      </div>
    </div>
  );
}

export default Signup2;