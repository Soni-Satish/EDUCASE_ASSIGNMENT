import React from "react";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ position: "absolute", top: "500px", left: "20px" }}>
      <h5
        style={{
          font: "normal normal medium 28px/17px Rubik",
          color: "#1D2226",
        }}
        className="px-2"
      >
        Welcome to PopX
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
      <div class="d-flex flex-column gap-2 align-items-center">
        <button
          style={{
            width: "335px",
            height: "46px",
            background: "#6C25FF 0% 0% no-repeat padding-box",
            borderRadius: "6px",
            textAlign: "center",
            color: "white",

            border: "none",
            font: "normal normal medium 16px/17px Rubik",
            cursor: "pointer",
          }}
          onClick={() => navigate("/Signup")}
        >
          Create Account
        </button>
        <button
          style={{
            width: "335px",
            height: "46px",
            background: "#6C25FF4B 0% 0% no-repeat padding-box",
            borderRadius: "6px",
            textAlign: "center",
            color: "#1D2226",
            cursor: "pointer",
            border: "none",
            font: "normal normal medium 16px/17px Rubik",
            fontWeight: 600,
          }}
          onClick={() => navigate("/Login")}
        >
          Already Registered?Login
        </button>
      </div>
    </div>
  );
}

export default Home;
