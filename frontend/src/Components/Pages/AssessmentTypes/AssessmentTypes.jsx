import React from "react";
import Assesmentreuse from "../../Reusablecomponents/Assesmentreuse/Assesmentreuse";

import asse from "../../../images/Testimonialimage/types.png";

import hard from "../../../images/Testimonialimage/hardskills.png";

import criticalthinking from "../../../images/Testimonialimage/criticalthinking.png";

import SoftSkills from "../../../images/Testimonialimage/SoftSkills.png";

import "./AssessmentTypes.css";
import Testimonial from "../../Reusablecomponents/Testimonial/Testimonial";
import Getdemo from "../../Reusablecomponents/Getdemo/Getdemo";
import Whychoose from "../../Reusablecomponents/Whychoose/Whychoose";

const AssessmentTypes = () => {
  // Scroll function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -80; // adjust if navbar height overlaps
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
    <div>
      <div>
        <Assesmentreuse
          tag="📝 Assessment Types"
          title="Get the Full Picture of Your Candidates"
          highlight="Get the Full Picture of Your Candidates"
          description="From hard skills to cognitive ability, Talent Assessment comprehensive talent assessment solutions help you find the perfect candidate for every role."
          buttonText="Get a Demo"
          image={asse}
        />
      </div>

      {/* hard skills section */}
      <div className="text-center section-header">
        <h1 className="section-title1">
          Talent Assessor Assessment Types for Hiring Success
        </h1>
        <p className="section-subtitle">
          Choose The Right Assessment for Your Open Position
        </p>
      </div>

      {/* Buttons */}
      <div
        className="assessment-buttons"
        style={{ textAlign: "center", margin: "30px 0" }}
      >
        <button onClick={() => scrollToSection("hard-skills")}>
          Hard Skills
        </button>
        <button onClick={() => scrollToSection("cognitive")}>Cognitive</button>
        <button onClick={() => scrollToSection("softskills")}>
          Soft Skills
        </button>
        <button onClick={() => scrollToSection("behavioral")}>
          Behavioral
        </button>
      </div>

      {/* last 1th section--------------  */}

      <section id="hard-skills" className="hard-skills-section">
        {/* Section Header */}
        <div className="container">
          <div className="row align-items-center">
            {/* Left Image */}
            <div className="col-md-6 col-12 text-center mb-4 mb-md-0">
              <img
                className="img-fluid hard-skills-img"
                src={hard}
                alt="Hard Skills"
              />
            </div>

            {/* Right Content */}
            <div className="col-md-6 col-12">
              <span className="tag">Hard Skills</span>
              <h2 className="hard-skills-title">
                Validate Technical Expertise with Hard Skills Tests
              </h2>
              <p className="hard-skills-desc">
                Talent Assessor’s hard skills assessments are built to evaluate
                the essential job-specific competencies that matter most. You
                can easily measure candidates on the exact technical expertise
                required for a role—whether it’s software proficiency, industry
                knowledge, or practical hands-on abilities.
              </p>

              {/* Bullet Points */}
              <ul className="skills-list">
                <li>
                  <span className="icon">📊</span>
                  <div>
                    <h4>Software Proficiency</h4>
                    <p>
                      Test on tools like Excel, accounting & industry software.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="icon">💻</span>
                  <div>
                    <h4>Technical Knowledge</h4>
                    <p>
                      Measure coding, engineering, or troubleshooting skills.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="icon">✅</span>
                  <div>
                    <h4>Task Accuracy</h4>
                    <p>
                      Simulations to identify the most qualified candidates.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="icon">🌍</span>
                  <div>
                    <h4>Industry Expertise</h4>
                    <p>Assess domain-specific skills for specialized roles.</p>
                  </div>
                </li>
              </ul>

              {/* Button */}
              <button className="explore-btn">Explore Hard Skills</button>
            </div>
          </div>
        </div>
      </section>

      {/* last 2th section--------------  */}

      <section id="cognitive" className="hard-skills-section">
        {/* Section Header */}
        <div className="container">
          <div className="row align-items-center">
            {/* Left Content (Text First Now) */}
            <div className="col-md-6 col-12">
              <span className="tag">Cognitive</span>
              <h2 className="hard-skills-title">
                Test Cognitive Skills for Critical Thinking and Problem-Solving
              </h2>
              <p className="hard-skills-desc">
                Cognitive pre-employment assessments evaluate a candidate’s
                capacity for critical thinking, problem-solving, and learning
                agility—essential qualities of top performers in any workplace.
                With Talent Assessor’s cognitive ability tests, you can
                effectively measure these skills to identify high-potential
                talent.
              </p>

              {/* Bullet Points */}
              <ul className="skills-list">
                <li>
                  <span className="icon">🎯</span>
                  <div>
                    <h4>Attention to Detail</h4>
                    <p>
                      Candidates who can focus on the finer points to deliver
                      accurate results.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="icon">🛠️</span>
                  <div>
                    <h4>Problem-Solving</h4>
                    <p>
                      Individuals who can troubleshoot and resolve issues
                      effectively.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="icon">🧠</span>
                  <div>
                    <h4>Critical Thinking</h4>
                    <p>
                      Strategic thinkers who evaluate options and make
                      data-driven decisions.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="icon">🔢</span>
                  <div>
                    <h4>Numerical Reasoning</h4>
                    <p>
                      Quick learners who can analyze and interpret complex data.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="icon">📖</span>
                  <div>
                    <h4>Reading Comprehension</h4>
                    <p>
                      Candidates who process information quickly and act on it
                      efficiently.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="icon">📐</span>
                  <div>
                    <h4>Spatial Reasoning</h4>
                    <p>
                      Problem-solvers with strong visualization and design
                      capabilities.
                    </p>
                  </div>
                </li>
              </ul>

              {/* Button */}
              <button className="explore-btn">Explore Cognitive</button>
            </div>

            {/* Right Image (Now Second) */}
            <div className="col-md-6 col-12 text-center mt-4 mt-md-0">
              <img
                className="img-fluid hard-skills-img"
                src={criticalthinking}
                alt="Hard Skills"
              />
            </div>
          </div>
        </div>
      </section>

      {/* last 3th section--------------  */}

      <section id="softskills" className="hard-skills-section">
        {/* Section Header */}
        <div className="container">
          <div className="row align-items-center">
            {/* Left Image */}
            <div className="col-md-6 col-12 text-center mb-4 mb-md-0">
              <img
                className="img-fluid hard-skills-img"
                src={SoftSkills}
                alt="Hard Skills"
              />
            </div>

            {/* Right Content */}
            <div className="col-md-6 col-12">
              <span className="tag">softskills</span>
              <h2 className="hard-skills-title">
                Evaluate Soft Skills That Drive Team Success
              </h2>
              <p className="hard-skills-desc">
                Beyond technical expertise, soft skills play a critical role in
                determining how well a candidate integrates into your team and
                enhances workplace culture. Talent Assessor’s soft skills
                assessments highlight candidates’ abilities in areas such as
                collaboration, leadership, and problem-solving. With Talent
                Assessor’s soft skills tests, you can evaluate these qualities
                to ensure the right team fit.
              </p>

              {/* Bullet Points */}
              <ul className="skills-list">
                <li>
                  <span className="icon">🗣️</span>
                  <div>
                    <h4>Communication</h4>
                    <p>
                      Test how effectively candidates express ideas and
                      collaborate with others.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="icon">🤝</span>
                  <div>
                    <h4>Teamwork</h4>
                    <p>
                      Identify individuals who thrive in group settings and
                      contribute to shared goals.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="icon">🔄</span>
                  <div>
                    <h4>Adaptability</h4>
                    <p>
                      Evaluate how well candidates respond to change and
                      overcome challenges.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="icon">💡</span>
                  <div>
                    <h4>Emotional Intelligence</h4>
                    <p>
                      Assess the ability to understand, empathize, and manage
                      interpersonal relationships.
                    </p>
                  </div>
                </li>
              </ul>

              {/* Button */}
              <button className="explore-btn">Explore Hard Skills</button>
            </div>
          </div>
        </div>
      </section>

      {/* last 4th section--------------  */}

      <section id="behavioral" className="hard-skills-section">
        {/* Section Header */}
        <div className="container">
          <div className="row align-items-center">
            {/* Right Content */}
            <div className="col-md-6 col-12">
              <span className="tag">Behavioral</span>
              <h2 className="hard-skills-title">
                Assess Personality Traits to Ensure a Perfect Fit
              </h2>
              <p className="hard-skills-desc">
                Pre-employment behavioral testing provides valuable insights
                into how candidates may perform in leadership roles,
                collaborative team positions, or customer-facing jobs. By
                measuring essential personality traits, you can ensure new hires
                are not only capable but also aligned with your organization’s
                culture and long-term vision. With Talent Assessor’s behavioral
                tests, you can evaluate:
              </p>

              {/* Bullet Points */}
              <ul className="skills-list">
                <li>
                  <span className="icon">📝</span>
                  <div>
                    <h4>Working Style</h4>
                    <p>
                      Understand how candidates manage tasks, prioritize, and
                      stay organized.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="icon">🤝</span>
                  <div>
                    <h4>Team Dynamics</h4>
                    <p>
                      Identify individuals who collaborate effectively and
                      foster positive relationships.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="icon">💪</span>
                  <div>
                    <h4>Emotional Resilience</h4>
                    <p>
                      Evaluate how candidates handle stress, feedback, and
                      workplace challenges.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="icon">🚀</span>
                  <div>
                    <h4>Motivation</h4>
                    <p>
                      Measure what drives candidates to succeed and maintain
                      productivity.
                    </p>
                  </div>
                </li>
              </ul>

              {/* Button */}
              <button className="explore-btn">Explore Behavioral</button>
            </div>
            {/* Left Image */}
            <div className="col-md-6 col-12 text-center mb-4 mb-md-0">
              <img
                className="img-fluid hard-skills-img"
                src={hard}
                alt="Hard Skills"
              />
            </div>
          </div>
        </div>
      </section>


      <div>
        <Whychoose />
      </div>



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

export default AssessmentTypes;
