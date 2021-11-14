import React from "react";
import logo from "../../assets/logo.png";
import "./Register.css";

const Register = () => {
  return (
    <section
      style={{
        padding: "120px 0 80px 0",
        width: "100%",
      }}
    >
      <div
        className="container"
        style={{
          width: "100%",
          padding: "0px 35px",
          margin: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginRight: "-15px",
            marginLeft: "-15px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: "0 0 100%", maxWidth: "100%" }}>
            <div className="cardWrapper">
              <div
                className="imgWrapper"
                style={{
                  position: "relative",
                  top: "-180px",
                  height: "0",
                  marginBottom: "16px",
                }}
              >
                <img
                  src={logo}
                  alt="logo"
                  style={{
                    width: "150px",
                    margin: "2em auto",
                    borderRadius: "50%",
                  }}
                />
              </div>
              <div
                className="text-center"
                style={{
                  color: "#fff",
                  marginBottom: "16px !important",
                  textAlign: "center",
                }}
              >
                <h4 style={{ fontSize: "1.2rem" }}>
                  Join ElectroInfinity Club
                </h4>
                <p className="para-styles" style={{ fontSize: "1rem" }}>
                  Meet students and educators excited about technology🚀
                </p>
              </div>

              <div className="linkToJoin" style={{ textAlign: "center" }}>
                <a
                  className="discordLink"
                  href="https://forms.gle/fjxAKbc9vYUsCPHz6"
                  target="_blank"
                  rel="noreferrer"
                >
                  Register Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
