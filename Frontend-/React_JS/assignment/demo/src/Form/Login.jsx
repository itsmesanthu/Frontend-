import React, { useState } from "react";
import "./Styles/form.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = () => {
    if (email === "" || password === "") {
      alert("Please fill all fields");
    } else {
      console.log("Email:", email);
      console.log("Password:", password);
      setSuccess(true);
    }
  };

  return (
    <div>
      <h2 className="formTitle">Login Form</h2>

      <div className="formControl">
        <div className="inputControl">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="inputControl">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button onClick={handleSubmit}>Login</button>
      </div>

      <center>{success && "Login Successful"}</center>
    </div>
  );
}

export default Login;