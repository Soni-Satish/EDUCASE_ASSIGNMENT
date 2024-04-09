import React from "react";
import ProfileIcon from "../img/Ellipse 114@2x.png";
import CameraIcon from "../img/camera.svg";
const Landing_page = () => {
  return (
    <div>
      <h5
        style={{
          font: "normal normal medium 28px/17px Rubik",
          color: "#1D2226",
          paddingTop: "5px",
          fontSize: "20px",
          background: "#FFFFFF 0% 0% no-repeat padding-box",
          boxShadow: "0px 3px 6px #00000007",
          opacity: "1",
          marginBottom: "20px",
          paddingBottom: "20px",
        }}
        className="px-2"
      >
        Account Settings
      </h5>
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <div style={{ position: "relative" }}>
              <img
                src={ProfileIcon}
                alt=""
                style={{
                  border: "1px solid black",
                  height: "76px",
                  width: "76px",
                  borderRadius: "100%",
                  overflow: "hidden",
                  objectFit: "cover",
                }}
              />
              <img
                src={CameraIcon}
                alt=""
                style={{ position: "absolute", bottom: 5, right: -10 }}
              />
            </div>
          </div>
          <div
            className="col-sm-9"
            style={{
              font: "normal normal medium 15px/19px Rubik",
            }}
          >
            <h6>Marry Doe</h6>
            <p style={{ marginTop: -4 }}>Marry@Gmail.Com</p>
          </div>
        </div>
        <div
          style={{
            marginTop: 20,
            color: "#1D2226",
            fontWeight: 600,
          }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae,
          perferendis obcaecati. Fugiat expedita optio pariatur perspiciatis!
          Commodi obcaecati eveniet facilis, laborum illum nesciunt!
        </div>
      </div>
    </div>
  );
};

export default Landing_page;
