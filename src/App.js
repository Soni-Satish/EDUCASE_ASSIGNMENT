import "./index.css";
import React from "react";
import Home from "./components/home";
import Login from "./components/login";
import Signup from "./components/signup";
import Landing_page from "./components/landing_page";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
function App() {
  return (
    <div
      style={{
        width: "375px",
        background: "#F7F8F9 0% 0% no-repeat padding-box",
        opacity: "1",
        position: "relative",
        height: "96vh",
      }}
      className="shadow-sm rounded mt-3"
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Home" element={<Landing_page />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
