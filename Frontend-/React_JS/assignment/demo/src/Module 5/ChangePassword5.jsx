import React, { useState } from "react";
import { FaKey, FaLock } from "react-icons/fa";

function ChangePassword5() {
  const [form, setForm] = useState({
    oldpassword: "",
    newpassword: "",
    cnfpassword: "",
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

    if (form.oldpassword === "") {
      newErrors.oldpassword = "Old Password is required";
    } else if (form.oldpassword.length < 8) {
      newErrors.oldpassword =
        "Password must contain at least 8 characters";
    }

    if (form.newpassword === "") {
      newErrors.newpassword = "New Password is required";
    } else if (form.newpassword.length < 8) {
      newErrors.newpassword =
        "Password must contain at least 8 characters";
    }

    if (form.cnfpassword === "") {
      newErrors.cnfpassword =
        "Confirm Password is required";
    } else if (form.cnfpassword.length < 8) {
      newErrors.cnfpassword =
        "Password must contain at least 8 characters";
    }

    if (
      form.newpassword !== "" &&
      form.cnfpassword !== "" &&
      form.newpassword !== form.cnfpassword
    ) {
      newErrors.cnfpassword =
        "Passwords do not match";
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
          <FaKey /> Change Password
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label>
              <FaLock /> Old Password
            </label>
            <br />
            <input
              type="password"
              name="oldpassword"
              value={form.oldpassword}
              onChange={handleChange}
              placeholder="Enter Old Password"
              style={style.input}
            />
            <br />
            <span style={style.error}>
              {errors.oldpassword}
            </span>
          </div>

          <br />

          <div>
            <label>
              <FaLock /> New Password
            </label>
            <br />
            <input
              type="password"
              name="newpassword"
              value={form.newpassword}
              onChange={handleChange}
              placeholder="Enter New Password"
              style={style.input}
            />
            <br />
            <span style={style.error}>
              {errors.newpassword}
            </span>
          </div>

          <br />

          <div>
            <label>
              <FaLock /> Confirm Password
            </label>
            <br />
            <input
              type="password"
              name="cnfpassword"
              value={form.cnfpassword}
              onChange={handleChange}
              placeholder="Confirm New Password"
              style={style.input}
            />
            <br />
            <span style={style.error}>
              {errors.cnfpassword}
            </span>
          </div>

          <br />

          <button style={style.button}>
            Change Password
          </button>
        </form>

        <h3 style={{ color: "green" }}>
          {success && "Password Changed Successfully"}
        </h3>

        {submittedData && (
          <div style={style.dataBox}>
            <h3>Entered Data</h3>

            <p>
              <b>Old Password :</b>{" "}
              {submittedData.oldpassword}
            </p>

            <p>
              <b>New Password :</b>{" "}
              {submittedData.newpassword}
            </p>

            <p>
              <b>Confirm Password :</b>{" "}
              {submittedData.cnfpassword}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

const style = {
  container: {
    backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGIb_UvntC3wtVWpKoXjD6MzMcO42OxmdSxw&s")',
    display: "flex",
    justifyContent: "center",
    marginTop: "40px",
  },

  card: {
    width: "500px",
    padding: "20px",
    boxShadow: "0px 0px 10px gray",
    borderRadius: "10px",
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
    backgroundColor: "yellowgreen",
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
    borderRadius: "5px",
  },
};

export default ChangePassword5;