import React from "react";
import "./Assesmentreuse.css";

const Assesmentreuse = ({
  tag,
  title,
  highlight,
  description,
  buttonText,
  image,
  reverse = false,
}) => {
  return (
    <section className="assessment-section">
      <div className="container">
        <div className={`row align-items-center ${reverse ? "flex-row-reverse" : ""}`}>
          
          {/* Left Content */}
          <div className="col-lg-6 col-md-6 col-12 assessment-left">
            {tag && <span className="tag">{tag}</span>}

            {title && (
              <h2 className="assessment-title">
                {title.split(highlight).length > 1 ? (
                  <>
                    {title.split(highlight)[0]}
                    <span className="highlight">{highlight}</span>
                    {title.split(highlight)[1]}
                  </>
                ) : (
                  title
                )}
              </h2>
            )}
            
            {description && <p className="assessment-description">{description}</p>}
            
            {buttonText && (
              <button className="demo-btn">
                {buttonText}
                <span className="btn-arrow">→</span>
              </button>
            )}
          </div>

          {/* Right Content (Image) */}
          <div className="col-lg-6 col-md-6 col-12 assessment-right">
            {image && (
              <div className="image-wrapper">
                <img
                  src={image}
                  alt="assessment illustration"
                  className="assessment-image"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Assesmentreuse;