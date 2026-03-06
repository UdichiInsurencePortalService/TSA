import React from "react";
// import Assesmentreuse from "../../Reusablecomponents/Assesmentreuse/Assesmentreuse";

// import Experts from "../../../images/Testimonialimage/Experts.png";

// import img1 from " ../../../images/Testimonialimage/Customizable.png";

// import "../QuestionStyles/QuestionStyles.css";

import Assesmentreuse from "../../Reusablecomponents/Assesmentreuse/Assesmentreuse";
import Experts from "../../../images/Testimonialimage/Experts.png";
import img1 from "../../../images/Testimonialimage/Dedicated.png";
import "../QuestionStyles/QuestionStyles.css";
import Specialist from "../../../images/Testimonialimage/Specialist.png";
import Testimonial from "../../Reusablecomponents/Testimonial/Testimonial";
import Getdemo from "../../Reusablecomponents/Getdemo/Getdemo";

const Dedicatedassessment = () => {
  return (
    <>
      <div>
        <Assesmentreuse
          tag="Dedicated Assessment Experts"
          title="Expert Guidance For Smarter Hiring & Skills Testing"
          highlight="Expert Guidance For Smarter Hiring & Skills Testing"
          description="Optimize your hiring process with a Dedicated Assessment Expert — your personal TSA specialist for test creation, customization, and results analysis."
          buttonText="Get a Demo"
          image={Experts}
        />
      </div>
      <div className="container">
        <section className="hard-skills-section">
          {/* Section Header */}
          <div className="container">
            <div className="row align-items-center">
              {/* Left Image */}
              <div className="col-md-6 col-12 text-center mb-4 mb-md-0">
                <img
                  className="img-fluid hard-skills-img"
                  src={img1}
                  alt="Hard Skills"
                />
              </div>

              {/* Right Content */}
              <div className="col-md-6 col-12">
                {/* <span className="tag"></span> */}
                <h2 className="hard-skills-title">
                  What Is a Dedicated Assessment Expert?
                </h2>
                <p className="hard-skills-desc">
                  A Dedicated Assessment Expert (DAE) is your personal TSA
                  specialist, guiding you to get the most out of your skills
                  assessments. Whether you need support in customizing tests,
                  analyzing results, or refining assessments to make better
                  hiring decisions, your DAE provides hands-on assistance at
                  every step. A DAE can help with:
                </p>

                {/* Bullet Points */}
                <ul className="skills-list">
                  <li>
                    <div>
                      <h4>💡 Expert Consultations</h4>
                      <p>
                        Get guidance on best practices for pre-employment
                        assessment creation to ensure high-quality and effective
                        test design.
                      </p>
                    </div>
                  </li>

                  <li>
                    <div>
                      <h4>🧠 Job-Specific Hiring Test Development</h4>
                      <p>
                        Ensure your assessments align precisely with job
                        descriptions and role-specific requirements for more
                        accurate evaluations.
                      </p>
                    </div>
                  </li>

                  <li>
                    <div>
                      <h4>📈 Performance Analysis</h4>
                      <p>
                        Gain data-driven insights into candidate performance and
                        assessment accuracy to make informed hiring decisions.
                      </p>
                    </div>
                  </li>

                  <li>
                    <div>
                      <h4>⚙️ Ongoing Optimization</h4>
                      <p>
                        Continuously refine and enhance your employment
                        assessments to improve hiring outcomes over time.
                      </p>
                    </div>
                  </li>
                </ul>

                {/* Button */}
                {/* <button className="explore-btn">Explore Simulations</button> */}
              </div>
            </div>
          </div>
        </section>

        {/* last 2th section--------------  */}

        <section className="hard-skills-section">
          {/* Section Header */}
          <div className="container">
            <div className="row align-items-center">
              {/* Left Content (Text First Now) */}
              <div className="col-md-6 col-12">
                {/* <span className="tag">Video Questions</span> */}
                <h2 className="hard-skills-title">
                  Why Work With a Dedicated Assessment Specialist?
                </h2>
                <p className="hard-skills-desc">
                  Video-based pre-hire assessments provide a unique way to
                  evaluate candidates beyond traditional testing formats. By
                  allowing applicants to record responses to targeted prompts,
                  you gain insight into their verbal communication, confidence,
                  situational awareness, and problem-solving skills—all in a
                  single interactive experience. This method helps you
                  understand how candidates present themselves and handle
                  real-world scenarios that are most relevant to the role.
                </p>

                {/* Bullet Points */}
                <ul className="skills-list">
                  <li>
                    <div>
                      <h4>🎯 Better Hiring Decisions</h4>
                      <p>
                        Ensure talent assessments accurately measure job-related
                        skills, helping you select the most qualified
                        candidates.
                      </p>
                    </div>
                  </li>

                  <li>
                    <div>
                      <h4>⚡ Faster Test Customization</h4>
                      <p>
                        Save time by collaborating with an assessment specialist
                        to fine-tune pre-employment assessments for your roles.
                      </p>
                    </div>
                  </li>

                  <li>
                    <div>
                      <h4>📊 Data-Driven Optimization</h4>
                      <p>
                        Leverage expert insights from pre-employment test
                        results to continuously refine and improve your
                        assessments.
                      </p>
                    </div>
                  </li>

                  <li>
                    <div>
                      <h4>🤝 Consistent Candidate Experience</h4>
                      <p>
                        Ensure a seamless and relevant skills testing process
                        for all applicants, maintaining fairness and clarity.
                      </p>
                    </div>
                  </li>

                  <li>
                    <div>
                      <h4>🛡️ Expert Compliance Guidance</h4>
                      <p>
                        Stay aligned with EEOC and ADA hiring regulations while
                        creating assessments that are legally compliant.
                      </p>
                    </div>
                  </li>
                </ul>

                {/* Button */}
                {/* <button className="explore-btn">Explore video</button> */}
              </div>

              {/* Right Image (Now Second) */}
              <div className="col-md-6 col-12 text-center mt-4 mt-md-0">
                <img
                  className="img-fluid hard-skills-img"
                  src={Specialist}
                  alt="Hard Skills"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="testimonial-section">
          <Testimonial />
        </div>
        <div className="subscription-footer-wrapper">
          <div>
            <Getdemo />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dedicatedassessment;
