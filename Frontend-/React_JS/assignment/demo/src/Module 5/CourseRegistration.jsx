import React, { useState } from "react";

function CourseRegistration() {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    mobile: "",
    email: "",
    password: "",
    cnfpassword: "",
    dob: "",
    gender: "",
    state: "",
    course: "",
    deliverymode: ""
  });

  const [formfields, setFormfields] = useState(false);
  const [passerror, setPasserror] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      form.firstname === "" ||
      form.lastname === "" ||
      form.mobile === "" ||
      form.email === "" ||
      form.password === "" ||
      form.cnfpassword === "" ||
      form.dob === "" ||
      form.gender === "" ||
      form.state === "" ||
      form.course === "" ||
      form.deliverymode === ""
    ) {
      setFormfields(true);
      setPasserror(false);
      setSuccess(false);
    } else if (form.password !== form.cnfpassword) {
      setPasserror(true);
      setFormfields(false);
      setSuccess(false);
    } else {
      setSuccess(true);
      setFormfields(false);
      setPasserror(false);

      console.log(form);
    }
  };

  return (
    <div style={{backgroundImage:'url("data:image/jpeg;base64,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")',margin:'40px'}}>
      <h1 style={style.heading}>Course Registration Form</h1>

      <form onSubmit={handleSubmit} style={style.formContainer}>
        <fieldset>
          <legend>Personal Information</legend>

          <label>First Name:</label>
          <input
            type="text"
            name="firstname"
            placeholder="Enter Your First Name"
            value={form.firstname}
            onChange={handleChange}
            style={style.input}
          />

          <label>Last Name:</label>
          <input
            type="text"
            name="lastname"
            placeholder="Enter Your Last Name"
            value={form.lastname}
            onChange={handleChange}
            style={style.input}
          />

          <label>Mobile Number:</label>
          <input
            type="number"
            name="mobile"
            placeholder="Enter Mobilenumber"
            value={form.mobile}
            onChange={handleChange}
            style={style.input}
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={form.email}
            onChange={handleChange}
            style={style.input}
          />

          <label>Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={form.password}
            onChange={handleChange}
            style={style.input}
          />

          <label>Confirm Password:</label>
          <input
            type="password"
            name="cnfpassword"
            placeholder="Confirm Password"
            value={form.cnfpassword}
            onChange={handleChange}
            style={style.input}
          />

          <label>DOB:</label>
          <input
            type="date"
            name="dob"
            value={form.dob}
            onChange={handleChange}
            style={style.input}
          />

          <label>Gender:</label>
          <div style={style.radioDiv}>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={handleChange}
            />
            Male

            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={handleChange}
            />
            Female

            <input
              type="radio"
              name="gender"
              value="Others"
              onChange={handleChange}
            />
            Others
          </div>

          <label>Select State:</label>
          <select
            name="state"
            value={form.state}
            onChange={handleChange}
            style={style.input}
          >
            <option value="">Select State</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Kerala">Kerala</option>
          </select>
        </fieldset>

        <fieldset>
          <legend>Course Information</legend>

          <label>Select Course:</label>
          <select
            name="course"
            value={form.course}
            onChange={handleChange}
            style={style.input}
          >
            <option value="">Select Course</option>
            <option value="Java Full Stack">Java Full Stack</option>
            <option value="Python Full Stack">Python Full Stack</option>
            <option value="Mern Full Stack">Mern Full Stack</option>
            <option value="Testing">Testing</option>
          </select>

          <label>Delivery Mode:</label>
          <div style={style.radioDiv}>
            <input
              type="radio"
              name="deliverymode"
              value="Online"
              onChange={handleChange}
            />
            Online

            <input
              type="radio"
              name="deliverymode"
              value="Offline"
              onChange={handleChange}
            />
            Offline
          </div>
        </fieldset>

        <button style={style.button}>Submit</button>
      </form>

      <h3 style={{ color: "red", textAlign: "center" }}>
        {formfields && "Please fill all the input fields"}
      </h3>

      <h3 style={{ color: "red", textAlign: "center" }}>
        {passerror && "Password doesn't match"}
      </h3>

      <h3 style={{ color: "green", textAlign: "center" }}>
        {success && "Form Submitted Successfully"}
      </h3>
    </div>
  );
}

const style = {
  heading: {
    backgroundColor: "#006d77",
    color: "white",
    textAlign: "center",
    padding: "15px"
  },

  formContainer: {
    width: "95%",
    margin: "20px auto"
  },

  input: {
    width: "98%",
    padding: "10px",
    marginTop: "5px",
    marginBottom: "15px"
  },

  radioDiv: {
    display: "flex",
    gap: "20px",
    marginBottom: "20px",
    marginTop: "10px"
  },

  button: {
    width: "120px",
    height: "45px",
    backgroundColor: "blue",
    color: "white",
    border: "none",
    borderRadius: "5px",
    marginTop: "20px"
  }
};

export default CourseRegistration;