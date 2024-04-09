import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div className="d-flex flex-column align-items-center">
      <div style={{ textAlign: "left", width: "100%", marginLeft: 30 }}>
        <h5
          style={{
            font: "normal normal medium 28px/17px Rubik",
            color: "#1D2226",
            paddingTop: "50px",
            fontWeight: "bold",
            fontSize: "25px",
          }}
          className="px-2"
        >
          Signin to your <br /> PopX account
        </h5>
        <p
          style={{
            font: "normal normal normal 18px/26px",
            color: "#1D2226",
            opacity: "0.6",
          }}
          className="px-2"
        >
          Lorem ipsum dolor sit amet. <br /> consectetur adipisicing elit.
        </p>
      </div>
      <form class="form-md">
        <div class="form-group">
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            required
            onChange={(e) => handleChange(e)}
          />
          <label for="email">
            Email<span class="gl-form-asterisk"></span>
          </label>
        </div>
        <div class="form-group">
          <input
            type="password"
            id="pass"
            name="password"
            className="form-control"
            required
            onChange={(e) => handleChange(e)}
          />
          <label for="pass">
            Password<span class="gl-form-asterisk"></span>
          </label>
        </div>
        <button
          style={{
            width: "335px",
            height: "46px",
            background:
              formData.email && formData.password
                ? "#6C25FF 0% 0% no-repeat padding-box"
                : "#CBCBCB 0% 0% no-repeat padding-box",
            borderRadius: "6px",
            textAlign: "center",
            color: "white",
            border: "none",
            font: "normal normal medium 16px/17px Rubik",
            cursor: "pointer",
          }}
          onClick={() => {
            formData.email && formData.password && navigate("/Home");
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
