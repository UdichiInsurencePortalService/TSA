import React from "react";
import "./Learnmore.css";

const Learnmore = ({ 
  smallHeading, 
  mainHeading, 
  description, 
  buttonText, 
//   onButtonClick 
}) => {
  return (
    <div className="learnmore-section">
      <h2>{smallHeading}</h2>
      <h1>{mainHeading}</h1>
      <p>{description}</p>
      <button>{buttonText}</button>
    </div>
  );
};

export default Learnmore;
