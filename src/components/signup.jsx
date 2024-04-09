import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    mobile: "",
    name: "",
    companyName: "",
    agency: "",
  });

  const handleChange = (event) => {
    console.log(event);
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  console.log(formData);
  return (
    <div className="d-flex flex-column align-items-center">
      <h5
        style={{
          font: "normal normal medium 28px/17px Rubik",
          color: "#1D2226",
          paddingTop: "50px",
          fontWeight: "bold",
          fontSize: "28px",
          width: "100%",
          textAlign: "left",
          marginLeft: "20px",
        }}
        className="px-2"
      >
        Create your <br /> PopX account
      </h5>
      <form class="form-md" onSubmit={() => navigate("/Home")}>
        <div class="form-group">
          <input
            id="form_name1"
            class="form-control"
            name="name"
            type="text"
            required
            onChange={(e) => handleChange(e)}
          />
          <label for="form_name1">
            Full Name<span class="gl-form-asterisk"></span>
          </label>
        </div>

        <div class="form-group">
          <input
            id="form_name3"
            class="form-control"
            type="number"
            name="mobile"
            required
            onChange={(e) => handleChange(e)}
          />
          <label for="form_name3">
            Phone number<span class="gl-form-asterisk"></span>
          </label>
        </div>
        <div class="form-group">
          <input
            id="form_name4"
            class="form-control"
            type="email"
            name="email"
            required
            onChange={(e) => handleChange(e)}
          />
          <label for="form_name4">
            Email address<span class="gl-form-asterisk"></span>
          </label>
        </div>
        <div class="form-group">
          <input
            id="form_name5"
            class="form-control"
            type="password"
            required
            onChange={(e) => handleChange(e)}
            name="password"
          />
          <label for="form_name5">
            Password<span class="gl-form-asterisk"></span>
          </label>
        </div>
        <div class="form-group">
          <input
            id="form_name6"
            class="form-control"
            type="text"
            onChange={(e) => handleChange(e)}
            name="companyName"
          />
          <label for="form_name6">Company Name</label>
        </div>
        <div
          style={{
            position: "relative",
            textAlign: "left",
            width: "100%",
            padding: "0px 0px 0px 30px",
          }}
        >
          <p>Are you an Agency?*s</p>
          <div class="form-check form-check-inline ">
            <input
              class="form-check-input"
              type="radio"
              name="agency"
              id="inlineRadio1"
              value="Yes"
              onChange={(e) => handleChange(e)}
            />
            <label
              class="form-check-label"
              for="inlineRadio1"
              style={{
                position: "relative",
                marginLeft: "-10px",
                marginTop: "10px",
              }}
            >
              Yes
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="agency"
              id="inlineRadio2"
              value="No"
              onChange={(e) => handleChange(e)}
            />
            <label
              class="form-check-label"
              for="inlineRadio2"
              style={{
                position: "relative",
                marginLeft: "-10px",
                marginTop: "10px",
              }}
            >
              No
            </label>
          </div>
        </div>
        <button
          style={{
            width: "335px",
            height: "46px",
            background: "#642AF5 0% 0% no-repeat padding-box",
            borderRadius: "6px",
            textAlign: "center",
            color: "white",
            border: "none",
            font: "normal normal medium 16px/17px Rubik",
            cursor: "pointer",
            position: "absolute",
            left: "20px",
            bottom: 20,
          }}
          type="submit"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Signup;
