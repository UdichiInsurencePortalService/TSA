import React from "react";
import "./Getdemo.css";
import demo from "../../../../src/images/Testimonialimage/Demo.png";

const Getdemo = () => {
  return (
    <>
      {/* Demo Section */}
      <div className="demo-container">
        <div className="demo-section">
          {/* Left Column */}
          <div className="demo-left">
            <div className="demo-content">
              <h2>Get a Demo</h2>
              <p>
                Learn how pre-employment assessments can help you reduce
                recruiting costs.
              </p>
              <button
                className="demo-btn"
                onClick={() => alert("Demo requested!")}
              >
                Get a Demo
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="demo-right">
            <img src={demo} alt="Demo Illustration" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Getdemo;
