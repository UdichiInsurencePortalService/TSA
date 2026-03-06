// import React from 'react'
import "./PopularAssessments.css";
import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import popular from "../../../images/Testimonialimage/Popular2.png";
import Assesmentreuse from "../../Reusablecomponents/Assesmentreuse/Assesmentreuse";
import Testimonial from "../../Reusablecomponents/Testimonial/Testimonial";
import Getdemo from "../../Reusablecomponents/Getdemo/Getdemo";
import Cardcomponent from "../../Reusablecomponents/Cardcomponent/Cardcomponent";

// import Skills from "../Skills/Skills.jsx";
// import Cognitive from "../Cognitive/Cognitive.jsx"; // ✅ Import added
// import Behavioral from "../Behavioral/Behavioral.jsx";
// import PopularAssessments from './Components/Pages/PopularAssessments/PopularAssessments.jsx'

const PopularAssessments = () => {
  const hiringBenefitsData = [
    {
      icon: "🎯",
      title: "Eliminate Hiring Guesswork",
      description: "Evaluate actual skills, not just qualifications on paper.",
    },
    {
      icon: "⏱️",
      title: "Reduce Time-To-Hire",
      description:
        "Filter out unqualified candidates early, saving time and resources.",
    },
    {
      icon: "💼",
      title: "Improve Retention",
      description:
        "Hire employees who meet job-specific skills and workplace expectations.",
    },
    {
      icon: "✅",
      title: "Ensure Compliance",
      description:
        "All assessments are EEOC- and ADA-compliant, ensuring fair and bias-free hiring.",
    },
    {
      icon: "🛠️",
      title: "Customizable and Scalable",
      description:
        "Choose from pre-built tests or create custom assessments for any role.",
    },
    {
      icon: "📊",
      title: "Instant Results and Insights",
      description:
        "View real-time scores and performance data to make faster, informed hiring decisions.",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // const navigate = useNavigate();

  const assessments = [
    {
      title: "Cognitive Assessments", // Fixed: was "titl"
      description:
        "Measure problem-solving, critical thinking, logical reasoning, and analytical skills to identify high-potential candidates.",
      button: "Learn More",
      icon: "🧠",
      colorClass: "cognitive-card",
      path: "/Cognitive",
    },
    {
      title: "Hard Skills Assessments",
      description:
        "Evaluate technical and job-specific competencies such as Microsoft Office, bookkeeping, mechanical aptitude, and project management.",
      button: "Learn More",
      icon: "⚙️",
      colorClass: "hard-skills-card",
      path: "/Skills#Hard-Skill",
    },
    {
      title: "Soft Skills Assessments",
      description:
        "Assess communication, teamwork, leadership, adaptability, and emotional intelligence to ensure a strong cultural fit.",
      button: "Learn More",
      icon: "🤝",
      colorClass: "soft-skills-card",
      path: "/Skills#Soft-Skill",
    },
    {
      title: "Behavioral Assessments",
      description:
        "Gain insights into personality traits, decision-making tendencies, and work ethic, helping you predict job performance and retention.",
      button: "Learn More",
      icon: "📊",
      colorClass: "behavioral-card",
      path: "/Behavioral",
    },
  ];

  const customStyles = {
    mainContainers: {
      
      background:
        "linear-gradient(135deg, #f8f9fa 0%, #e3f2fd 50%, #f3e5f5 100%)",
      minHeight: "100vh",
      fontFamily:
        "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    },
    sectionTitle: {
      background: "linear-gradient(135deg, #2563eb, #9333ea, #06b6d4)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      fontSize: "clamp(2.5rem, 5vw, 4rem)",
      fontWeight: "800",
      lineHeight: "1.2",
      transform: isVisible ? "translateY(0)" : "translateY(40px)",
      opacity: isVisible ? 1 : 0,
      transition: "all 1s ease-out",
    },
    subtitle: {
      background: "linear-gradient(135deg, #374151, #4b5563)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      fontSize: "1.5rem",
      fontWeight: "600",
    },
    description: {
      color: "#64748b",
      fontSize: "1.125rem",
      lineHeight: "1.7",
      fontWeight: "500",
    },
    decorativeLine: {
      width: "80px",
      height: "4px",
      background: "linear-gradient(90deg, #2563eb, #9333ea)",
      borderRadius: "2px",
      position: "relative",
    },
    decorativeLineAfter: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "12px",
      height: "12px",
      background: "#2563eb",
      borderRadius: "50%",
      boxShadow: "0 0 0 4px rgba(37, 99, 235, 0.2)",
    },
    assessmentCard: {
      margin: "10px",
      height: "100%",
      background: "rgba(255, 255, 255, 0.85)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      borderRadius: "24px",
      border: "1px solid rgba(255, 255, 255, 0.3)",
      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      position: "relative",
      overflow: "hidden",
      cursor: "pointer",
      boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
    },
    cardHover: {
      transform: "translateY(-12px)",
      boxShadow: "0 20px 60px rgba(0, 0, 0, 0.2)",
    },
    iconContainer: {
      width: "70px",
      height: "70px",
      borderRadius: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "2rem",
      boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
      transition: "transform 0.3s ease",
    },
    cardTitle: {
      color: "#1e293b",
      fontWeight: "700",
      fontSize: "1.25rem",
      marginBottom: "1rem",
    },
    cardDescription: {
      color: "#64748b",
      fontSize: "0.95rem",
      lineHeight: "1.6",
      marginBottom: "1.5rem",
    },
  };

  const cardGradients = {
    "cognitive-card": "linear-gradient(135deg, #3b82f6, #06b6d4)",
    "hard-skills-card": "linear-gradient(135deg, #8b5cf6, #ec4899)",
    "soft-skills-card": "linear-gradient(135deg, #10b981, #14b8a6)",
    "behavioral-card": "linear-gradient(135deg, #f59e0b, #ef4444)",
  };

  return (
    <>
      <div>
        <Assesmentreuse
          tag="📝 Popular Assessments"
          title="Assess Skills With Confidence, Hire With Certainty"
          highlight="Assess Skills With Confidence, Hire With Certainty"
          description="Resumes outline history, not potential. TSA’s scientifically validated assessments provide clear, skills-focused evaluations so you can confidently select the top talent for any role."
          buttonText="Get a Demo"
          image={popular}
        />
      </div>

      <div style={customStyles.mainContainers} className="py-5">
      <div className="container-fluid px-4">
        {/* Header Section */}
        <div className="row justify-content-center mb-5">
          <div className="col-12 text-center">
            <div className="position-relative d-inline-block mb-4">
              <h2 style={customStyles.sectionTitle} className="mb-3">
                Pre-Employment Assessments
              </h2>
              <div
                style={customStyles.decorativeLine}
                className="mx-auto position-relative"
              >
                <div style={customStyles.decorativeLineAfter}></div>
              </div>
            </div>

            <p style={customStyles.subtitle} className="mb-4">
              For Every Role
            </p>

            <div className="col-lg-10 mx-auto">
              <p style={customStyles.description}>
                TSA provides a diverse range of pre-employment and workforce
                development assessments to help businesses
                <span className="fw-bold text-primary">
                  {" "}
                  identify top talent
                </span>
                ,
                <span className="fw-bold text-info">
                  {" "}
                  reduce hiring risks
                </span>
                , and
                <span className="fw-bold text-success">
                  {" "}
                  improve workforce efficiency
                </span>
                . Our assessments cover:
              </p>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="row g-4 mb-5">
          {assessments.map((item, index) => (
            <div key={index} className="col-12 col-md-6 col-xl-3">
              <div
                style={{
                  ...customStyles.assessmentCard,
                  ...(hoveredCard === index ? customStyles.cardHover : {}),
                  transform: isVisible ? "translateY(0)" : "translateY(40px)",
                  opacity: isVisible ? 1 : 0,
                  transitionDelay: `${index * 150}ms`,
                }}
                className="h-100 p-4"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Background Gradient Overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "24px",
                    background: cardGradients[item.colorClass],
                    opacity: hoveredCard === index ? 0.1 : 0,
                    transition: "opacity 0.4s ease",
                    pointerEvents: "none",
                  }}
                ></div>

                {/* Icon */}
                <div className="mb-4" style={{ position: "relative", zIndex: 1 }}>
                  <div
                    style={{
                      ...customStyles.iconContainer,
                      background: cardGradients[item.colorClass],
                      transform:
                        hoveredCard === index ? "scale(1.1)" : "scale(1)",
                    }}
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="position-relative" style={{ zIndex: 1 }}>
                  <h5 style={customStyles.cardTitle}>{item.title}</h5>

                  <p style={customStyles.cardDescription}>
                    {item.description}
                  </p>
                  <Link to={item.path} style={{ textDecoration: "none" }}>
                    <button
                      className="btn btn-primary w-100 fw-semibold py-2 px-4"
                      style={{
                        background: cardGradients[item.colorClass],
                        border: "none",
                        borderRadius: "16px",
                        transition: "all 0.3s ease",
                        transform:
                          hoveredCard === index ? "scale(1.02)" : "scale(1)",
                        boxShadow:
                          hoveredCard === index
                            ? "0 8px 25px rgba(0, 0, 0, 0.2)"
                            : "0 4px 15px rgba(0, 0, 0, 0.1)",
                        cursor: "pointer",
                      }}
                    >
                      {item.button}
                    </button>
                  </Link>
                </div>

                {/* Decorative Elements */}
                <div
                  style={{
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                    width: "80px",
                    height: "80px",
                    background:
                      "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
                    borderRadius: "50%",
                    pointerEvents: "none",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>




      <div>
        <Cardcomponent
          heading="Tailored Testing For Any"
          highlight="Hiring Process"
          skillsData={hiringBenefitsData}
        />
      </div>

      <div className="testimonial-section">
        <Testimonial />
      </div>

      <div className="subscription-footer-wrapper">
        <div>
          <Getdemo />
        </div>
      </div>
    </>
  );
};

export default PopularAssessments;
