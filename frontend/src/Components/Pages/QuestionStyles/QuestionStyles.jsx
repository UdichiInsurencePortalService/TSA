import { useEffect, useRef } from "react";

import "./QuestionStyles.css";
import Assesmentreuse from "../../Reusablecomponents/Assesmentreuse/Assesmentreuse";
import skill from "../../../images/Testimonialimage/skill.png";

import simulation from "../../../images/Testimonialimage/Simulations.png";

import communication from "../../../images/Testimonialimage/communication.jpg";
import multisubject from "../../../images/Testimonialimage/multisubject.png";

import "./QuestionStyles.css";
import Testimonial from "../../Reusablecomponents/Testimonial/Testimonial";
import Getdemo from "../../Reusablecomponents/Getdemo/Getdemo";
import choice from "../../../images/Testimonialimage/choice1.png";
import Whychoose from "../../Reusablecomponents/Whychoose/Whychoose";

import { useLocation } from "react-router-dom";

const QuestionStyles = () => {
    const freeResponseRef = useRef(null);
    const multipleChoiceRef = useRef(null);
  const location = useLocation();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -80; // adjust if navbar height overlaps
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  
   useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  //   useEffect(() => {
  //   const hash = location.hash;

  //   if (hash === "#multiple-choice") {
  //     multipleChoiceRef.current?.scrollIntoView({ behavior: "smooth" });
  //   }  if (hash === "#free-response") {
  //     freeResponseRef.current?.scrollIntoView({ behavior: "smooth" });
  //   }
  // }, [location]);


  return (
    <>
      <Assesmentreuse
        tag="📝 Question style"
        title="Hire with Confidence via Talent Assessment Job Simulation Tests"
        highlight="Confidence via Talent Assessment"
        description="Build hiring tests that align with the demands of your roles by customizing your pre-hire assessment questions to include video, simulations, multiple-choice, and free-response styles."
        buttonText="Get a Demo"
        image={skill}
      />

      {/* hard skills section */}
      <div className="text-center section-header">
        <h1 style={{color: "#0a1f55", fontWeight:"700", fontSize:"2rem"}}>
          Pre-Hire Assessment Questions Tailored to Every Role
        </h1>
        <p className="section-subtitle text-center">
          Every job requires a unique set of skills, and your hiring tests
          should reflect that. With Talent Assessment versatile question styles, you can
          craft hiring assessment questions tailored to each role's needs.
          Whether you're evaluating verbal communication with video questions,
          testing technical abilities through simulations, or assessing
          knowledge with multiple-choice and free response formats, our talent
          assessment tools help you identify top candidates quickly and
          effectively.
        </p>
      </div>

      {/* Buttons */}
      <div
        className="assessment-buttons"
        style={{ textAlign: "center", margin: "30px 0" }}
      >
        <button onClick={() => scrollToSection("simulation")}>
          simulation
        </button>
        <button onClick={() => scrollToSection("VideoQuestions")}>
          Video Questions
        </button>
        <button onClick={() => scrollToSection("Free-Response")}>
          Free-Response Questions
        </button>
        <button onClick={() => scrollToSection("MultipleChoice")}>
          Multiple Choice Questions
        </button>
      </div>

      <section id="simulation" className="hard-skills-section">
        {/* Section Header */}
        <div className="container">
          <div className="row align-items-center">
            {/* Left Image */}
            <div className="col-md-6 col-12 text-center mb-4 mb-md-0">
              <img
                className="img-fluid hard-skills-img"
                src={simulation}
                alt="Hard Skills"
              />
            </div>

            {/* Right Content */}
            <div className="col-md-6 col-12">
              <span className="tag">Simulation-Style Questions</span>
              <h2 className="hard-skills-title">
                See Candidates in Action with Tailored Simulations
              </h2>
              <p className="hard-skills-desc">
                Simulation-style questions provide a hands-on, immersive way to
                evaluate candidates’ practical abilities by replicating the
                challenges they’ll face on the job. Instead of relying solely on
                theoretical knowledge or interview responses, you can see how
                candidates adapt, solve problems, and make decisions in real
                time. Simulations are ideal for assessing technical,
                multitasking, and customer-facing skills critical to success in
                your organization.
              </p>

              {/* Bullet Points */}
              <ul className="skills-list">
                <li>
                  <div>
                    <h4>📝 Replicate Job-Specific Tasks</h4>
                    <p>
                      Simulation-style hiring assessment questions mimic the
                      day-to-day responsibilities of the role, allowing
                      candidates to demonstrate their ability to complete tasks.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h4>🧩 Assess Real-World Problem Solving</h4>
                    <p>
                      Observe how candidates approach challenges and make
                      decisions in realistic situations.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h4>📊 Objective Performance Metrics</h4>
                    <p>
                      Simulation-style pre hire assessment questions provide
                      measurable, data-driven results to help you identify the
                      most qualified candidates.
                    </p>
                  </div>
                </li>
              </ul>
              {/* Button */}
              <button className="explore-btn">Explore Simulations</button>
            </div>
          </div>
        </div>
      </section>

      {/* last 2th section--------------  */}

      <section id="VideoQuestions" className="hard-skills-section">
        {/* Section Header */}
        <div className="container">
          <div className="row align-items-center">
            {/* Left Content (Text First Now) */}
            <div className="col-md-6 col-12">
              <span className="tag">Video Questions</span>
              <h2 className="hard-skills-title">
                Identify Top Communicators with Video Assessments
              </h2>
              <p className="hard-skills-desc">
                Video-based pre-hire assessments give you a unique way to
                evaluate candidates beyond traditional formats. By allowing
                applicants to record responses to specific prompts, you can gain
                insight into their verbal communication, confidence, situational
                awareness, and problem-solving abilities—all in one interactive
                experience. This approach helps you understand how candidates
                present themselves and navigate real-world scenarios that matter
                most to the role.
              </p>

              {/* Bullet Points */}
              <ul className="skills-list">
                <li>
                  <span className="icon">🗣️</span>
                  <div>
                    <h4>Assess Verbal Communication Skills</h4>
                    <p>
                      Test how well candidates articulate ideas, explain
                      concepts, and express themselves professionally.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="icon">🎬</span>
                  <div>
                    <h4>Simulate Real-World Scenarios</h4>
                    <p>
                      Present candidates with open-ended prompts that reflect
                      workplace situations, such as resolving a customer issue
                      or pitching an idea to a team.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="icon">🤝</span>
                  <div>
                    <h4>Measure Cultural Fit</h4>
                    <p>
                      Gain insights into a candidate’s personality and how they
                      might interact with colleagues or clients.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="icon">⚙️</span>
                  <div>
                    <h4>Customize Your Prompts</h4>
                    <p>
                      Tailor video questions to the specific role or industry,
                      ensuring relevance and accuracy in your evaluations.
                    </p>
                  </div>
                </li>
              </ul>

              {/* Button */}
              <button className="explore-btn">Explore video</button>
            </div>

            {/* Right Image (Now Second) */}
            <div className="col-md-6 col-12 text-center mt-4 mt-md-0">
              <img
                className="img-fluid hard-skills-img"
                src={communication}
                alt="Hard Skills"
              />
            </div>
          </div>
        </div>
      </section>

      {/* last 3th section--------------  */}

      <section id="Free-Response" className="hard-skills-section">
        {/* Section Header */}
        <div className="container" ref={freeResponseRef} id="Free-Response">
          <div className="row align-items-center">
            {/* Left Image */}
            <div className="col-md-6 col-12 text-center mb-4 mb-md-0">
              <img
                className="img-fluid hard-skills-img"
                src={multisubject}
                alt="Hard Skills"
              />
            </div>

            {/* Right Content */}
            <div className="col-md-6 col-12">
              <span className="tag">
                Free-Response Employment Testing Questions
              </span>
              <h2 className="hard-skills-title">
                Gain Deeper Insights Through Open-Ended Hiring Questions
              </h2>
              <p className="hard-skills-desc">
                Free-response assessments go beyond basic right-or-wrong answers
                by revealing how candidates think, reason, and communicate. When
                applicants provide thoughtful, detailed responses, you gain
                deeper insight into their problem-solving approach,
                decision-making process, and creativity—insights that
                multiple-choice questions simply can’t capture.
              </p>

              {/* Bullet Points */}
              <ul className="skills-list">
                <li>
                  <span className="icon">🧠</span>
                  <div>
                    <h4>Evaluate Critical Thinking</h4>
                    <p>
                      Pose open-ended pre-hire assessment questions that
                      challenge candidates to analyze scenarios and provide
                      reasoned solutions.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="icon">📝</span>
                  <div>
                    <h4>Assess Written Communication</h4>
                    <p>
                      Evaluate grammar, tone, clarity, and organization in a
                      candidate’s written responses.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="icon">🎨</span>
                  <div>
                    <h4>Measure Creativity</h4>
                    <p>
                      Tailor your employment test questions to reveal how
                      candidates think outside the box and propose new ideas.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="icon">⚙️</span>
                  <div>
                    <h4>Customizable Prompts</h4>
                    <p>
                      Adapt questions to align with the specific requirements of
                      the role or industry for more relevant insights.
                    </p>
                  </div>
                </li>
              </ul>

              {/* Button */}
              {/* <button className="explor/e-btn">Explore </button> */}
            </div>
          </div>
        </div>
      </section>

      {/* last 4th section--------------  */}

      <section id="MultipleChoice" className="hard-skills-section" >
        {/* Section Header */}
        <div className="container" ref={multipleChoiceRef} id = "multiple-choice">
          <div className="row align-items-center">
            {/* Right Content */}
            <div className="col-md-6 col-12">
              <span className="tag" ref={multipleChoiceRef} id = "multiple-choice">Multiple Choice Questions</span>
              <h2 className="hard-skills-title">
                Quickly and Objectively Assess Knowledge and Skills
              </h2>
              <p className="hard-skills-desc">
                Multiple-choice assessments remain one of the most reliable
                tools for evaluating candidate skills. They offer a fair,
                scalable, and straightforward way to measure knowledge across
                specific domains. This question format works equally well for
                testing core fundamentals as it does for advanced technical
                expertise, making it a flexible choice suitable for diverse
                roles and industries.
              </p>

              {/* Bullet Points */}
              <ul className="skills-list">
                <li>
                  <span className="icon">⚡</span>
                  <div>
                    <h4>Efficiently Assess Knowledge</h4>
                    <p>
                      Leverage multiple-choice hiring assessment questions to
                      evaluate specific skills and concepts quickly and
                      effectively, saving time during the hiring process.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="icon">🔀</span>
                  <div>
                    <h4>Single or Multiple Correct Answers</h4>
                    <p>
                      Adapt complexity with hiring questions that allow one or
                      several correct responses.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="icon">⏱️</span>
                  <div>
                    <h4>Auto-Scoring For Speed</h4>
                    <p>
                      Multiple-choice employment test questions allow you to
                      instantly analyze results and focus on the most qualified
                      candidates.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="icon">📊</span>
                  <div>
                    <h4>Customizable Difficulty Levels</h4>
                    <p>
                      Tailor hiring assessment questions to match the job’s
                      requirements, from entry-level to senior roles.
                    </p>
                  </div>
                </li>
              </ul>

              {/* Button */}
              {/* <button className="explore-btn">Explore Behavioral</button> */}
            </div>
            {/* Left Image */}
            <div className="col-md-6 col-12 text-center mb-4 mb-md-0">
              <img
                className="img-fluid hard-skills-img"
                src={choice}
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
    </>
  );
};

export default QuestionStyles;
