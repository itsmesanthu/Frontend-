import React, { useState } from "react";
import { FaLock, FaEnvelope } from "react-icons/fa";

function Login5() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [name]: value });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let newErrors = {};

    if (form.email === "") {
      newErrors.email = "Email is required";
    }

    if (form.password === "") {
      newErrors.password = "Password is required";
    } else if (form.password.length < 8) {
      newErrors.password =
        "Password must contain at least 8 characters";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSuccess(true);
      setSubmittedData(form);

      console.log(form);
    } else {
      setSuccess(false);
      setSubmittedData(null);
    }
  };

  return (
    <div style={style.container}>
      <div style={style.card}>
        <h1 style={style.heading}>
          <FaLock /> Login Form
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label>
              <FaEnvelope /> Email
            </label>
            <br />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter Email"
              style={style.input}
            />
            <br />
            <span style={style.error}>
              {errors.email}
            </span>
          </div>

          <br />

          <div>
            <label>
              <FaLock /> Password
            </label>
            <br />
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter Password"
              style={style.input}
            />
            <br />
            <span style={style.error}>
              {errors.password}
            </span>
          </div>

          <br />

          <button style={style.button}>
            Login
          </button>
        </form>

        <h3 style={{ color: "green" }}>
          {success && "Login Successful"}
        </h3>

        {submittedData && (
          <div style={style.dataBox}>
            <h3>Entered Data</h3>

            <p>
              <b>Email :</b> {submittedData.email}
            </p>

            <p>
              <b>Password :</b>{" "}
              {submittedData.password}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

const style = {
  container: {
    display: "flex",
    justifyContent: "center",
    marginTop: "40px",
  },

  card: {
    width: "450px",
    padding: "20px",
    boxShadow: "0px 0px 10px gray",
    borderRadius: "10px",
    backgroundColor:"yellow"
  },

  heading: {
    textAlign: "center",
  },

  input: {
    width: "100%",
    height: "35px",
    marginTop: "5px",
  },

  button: {
    width: "100%",
    height: "40px",
    backgroundColor: "blue",
    color: "white",
    border: "none",
    borderRadius: "5px",
  },

  error: {
    color: "red",
    fontSize: "14px",
  },

  dataBox: {
    marginTop: "20px",
    padding: "10px",
    border: "1px solid gray",
  },
};

export default Login5;