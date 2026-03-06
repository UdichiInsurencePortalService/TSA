import React from "react";
import { Link } from "react-router-dom";

import Assesmentreuse from "../../Reusablecomponents/Assesmentreuse/Assesmentreuse";
import Customizable from "../../../images/Testimonialimage/Customizable.png";
import "./Customization.css";
import Cardcomponent from "../../Reusablecomponents/Cardcomponent/Cardcomponent";
import Testimonial from "../../Reusablecomponents/Testimonial/Testimonial";
import Getdemo from "../../Reusablecomponents/Getdemo/Getdemo";

const Customization = () => {
  const simulationSkillsData = [
    {
      icon: "🖥️",
      title: "Office Suite Simulation",
      description:
        "Evaluate candidates' proficiency with Word®, Excel®, Outlook®, and PowerPoint® using real-time browser simulations that mirror workplace tasks.",
    },
    {
      icon: "⏱️",
      title: "Task Management Simulation",
      description:
        "Test the ability to stay organized under pressure by assigning multiple tasks with deadlines, emails, and quick decision-making challenges.",
    },
    {
      icon: "💬",
      title: "Customer Interaction Simulation",
      description:
        "Assess communication skills through role-based scenarios where candidates respond to live chats, emails, and service requests.",
    },
    {
      icon: "📦",
      title: "Order Processing Simulation",
      description:
        "Measure accuracy and efficiency in handling transactions, updating records, and resolving issues in a simulated business environment.",
    },
    {
      icon: "🧠",
      title: "Problem-Solving Simulation",
      description:
        "Challenge candidates with real-world scenarios that test critical thinking, adaptability, and decision-making in job-related contexts.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div>
        <Assesmentreuse
          tag="🛠️ Customization"
          title="Customizable Talent Assessments for Every Role"
          highlight="Talent Assessments"
          description="TSA lets you customize assessments end-to-end, from content to branding, ensuring reliable evaluation and a polished experience for candidates."
          buttonText="Get a Demo"
          image={Customizable}
        />
      </div>

      {/* Why Customization Section */}
      <section className="customization-intro">
        <div className="customization">
          <div>
            <h1>Why Customization?</h1>
          </div>
          <div>
            <p>
              Standardized assessments don't fit every role. With TSA, you can
              design custom pre-employment testing solutions to measure the skills
              that truly matter for your industry, team, and organizational goals
              — ensuring every hire is the right fit.
            </p>
          </div>
        </div>
      </section>

      {/* Custom Tests Section */}
      <section className="custom-tests-section">
        <div className="container-fluid px-4">
          <div className="row align-items-center justify-content-center">
            {/* Left Image Section */}
            {/* <div className="col-lg-6 col-md-8 col-12 order-2 order-lg-1 text-center mb-4 mb-lg-0">
              <img
                src={Customizable}
                alt="Custom Tests"
                className="custom-image mx-auto d-block"
              />
            </div> */}

            {/* Right Content Section */}
            <div className="col-lg-6 col-12 order-1 order-lg-2 ps-lg-5">
              {/* Tag */}
              <div className="tag-badge">
                <span className="tag-text">Custom Tests</span>
              </div>

              {/* Title */}
              <h2 className="main-title">
                <span className="gradient-text">Personalized Assessments</span>
                <br />
                <span className="text-dark">Built for Your Hiring Goals</span>
              </h2>

              {/* Description */}
              <p className="description-text">
                TSA gives you the flexibility to design assessments that reflect
                the exact skills, knowledge, and qualities you want in a
                candidate. From ready-made test banks to fully tailored
                evaluations, you stay in control of the hiring process.
              </p>

              {/* Feature List */}
              <div className="features-container">
                <div className="feature-item">
                  <div className="feature-icon icon-blue">📚</div>
                  <div className="feature-content">
                    <h4 className="feature-title">
                      Leverage Ready-Made Libraries
                    </h4>
                    <p className="feature-description">
                      Access hundreds of pre-built tests to quickly evaluate
                      candidates across industries and roles.
                    </p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon icon-purple">🎯</div>
                  <div className="feature-content">
                    <h4 className="feature-title">
                      Target Role-Specific Competencies
                    </h4>
                    <p className="feature-description">
                      Build custom assessments that focus on the exact technical
                      or soft skills your job demands.
                    </p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon icon-green">🛠️</div>
                  <div className="feature-content">
                    <h4 className="feature-title">
                      Incorporate Your Own Content
                    </h4>
                    <p className="feature-description">
                      Add company-specific questions and scenarios to align
                      tests with your unique workflows.
                    </p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon icon-orange">⚖️</div>
                  <div className="feature-content">
                    <h4 className="feature-title">
                      Set the Right Challenge Level
                    </h4>
                    <p className="feature-description">
                      Adjust question difficulty, test duration, and focus areas
                      to match different roles and seniority levels.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Question Formats Section */}
      <section className="dynamic-formats-section">
        <div className="customization">
          <div>
            <h1>Dynamic Question Formats to Test Every Skill</h1>
          </div>
          <div>
            <p>
              Multiple-choice questions only go so far. With TSA, you can
              combine different question types to build tailored talent
              assessments that reflect real workplace challenges. This ensures
              candidates are evaluated on the skills that matter most—giving you
              confidence in their ability to succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Simulations Section */}
      <section className="simulations-section">
        <Cardcomponent
          heading="With TSA Simulations"
          highlight="you can evaluate candidates on real workplace challenges:"
          skillsData={simulationSkillsData}
        />

        <div className="cta-container">
          <Link to="/simulation" style={{ textDecoration: "none" }}>
            <button className="cta-button">
              <span>Learn More</span>
              <svg 
                className="arrow-icon" 
                width="20" 
                height="20" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17 8l4 4m0 0l-4 4m4-4H3" 
                />
              </svg>
            </button>
          </Link>
        </div>
      </section>

      {/* Candidate Experience Section */}
      <section className="candidate-experience-section">
        <div className="customization">
          <div>
            <h1>Create a Seamless Candidate Experience</h1>
          </div>
          <div>
            <p>
              Transform pre-employment testing into a branding advantage with TSA's customized talent assessments. From the look and feel of your assessment pages to candidate communications, you can craft a hiring experience that reflects your brand and stands out.
            </p>
          </div>
          <div>
            <a href="#demo" className="btn btn-demo">
              Get a Demo
            </a>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <Testimonial />
      </section>

      {/* Get Demo Section */}
      <section className="subscription-footer-wrappers">
        <Getdemo />
      </section>
    </>
  );
};

export default Customization;