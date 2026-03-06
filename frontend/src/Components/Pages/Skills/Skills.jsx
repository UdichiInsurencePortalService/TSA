import React from "react";
import Assesmentreuse from "../../Reusablecomponents/Assesmentreuse/Assesmentreuse";

import "./Skills.css";

import softskil from "../../../images/Testimonialimage/softskil.png";

import skillsassessment from "../../../images/Testimonialimage/skillsassessment.png";
import skillsassessment2 from "../../../images/Testimonialimage/skillsassessment1.jpg";
import Testimonial from "../../Reusablecomponents/Testimonial/Testimonial";
import Getdemo from "../../Reusablecomponents/Getdemo/Getdemo";
import Cardcomponent from "../../Reusablecomponents/Cardcomponent/Cardcomponent";
import Whychoose from "../../Reusablecomponents/Whychoose/Whychoose";

import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

const Skills = () => {
  const skillsData = [
    {
      icon: "💻",
      title: "Microsoft Office & Excel",
      description:
        "Measure proficiency in Microsoft Office, Word, and Excel with basic office skills tests, essential for common workplace tools.",
    },
    {
      icon: "📊",
      title: "Math & Bookkeeping",
      description: "Evaluate numerical accuracy and financial understanding.",
    },
    {
      icon: "⌨️",
      title: "Clerical & Typing Skills",
      description:
        "Leverage typing skills tests to measure attention to detail, speed, and accuracy.",
    },
    {
      icon: "⚙️",
      title: "Mechanical Aptitude",
      description:
        "Identify candidates with hands-on technical knowledge via mechanical skills tests.",
    },
    {
      icon: "📋",
      title: "Project Management",
      description:
        "Assess planning, organization, and task execution capabilities.",
    },
  ];

  // const freeResponseRef = useRef(null);
  const HardSkillRef = useRef(null);
  const SoftSkillRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <div>
        <Assesmentreuse
          tag="📝 Assessment Types > Skills"
          title="Hire Confidently with Hard Talent Assessments"
          highlight="Hire Confidently with Hard Talent Assessments"
          description="From technical expertise to leadership potential Talent Assesss comprehensive skills assessment solution helps you identify the right candidates with the skills you need."
          buttonText="Get a Demo"
          image={skillsassessment}
        />
      </div>

      <section className="hard-skills-testing-section" id="Hard-Skill">
        <div className="container content-wrapper" ref={HardSkillRef} id="Hard-Skill">
          <div className="row align-items-center g-4">
            {/* Left Content */}
            <div className="col-md-6 col-12">
              <span className="section-tag">Hard Skills Testing</span>
              <h2 className="section-title">
                Test the Skills That Matter Most
              </h2>
              <p className="section-desc">
                Whether you're hiring for data analysis, customer service, or
                mechanical trades, hard skills form the backbone of job success.
                <strong>TSA</strong> assessment platform enables you to
                customize skills tests that measure real-world competencies
                directly tied to performance. Build stronger teams faster with
                tailored assessments that align with your industry's specific
                hiring needs.
              </p>
              <div className="stats-highlight">
                Measure real-world competencies with precision
              </div>
            </div>

            {/* Right Image */}
            <div className="col-md-6 col-12">
              <div className="image-container text-center">
                <img
                  src={skillsassessment2}
                  alt="Skills Assessment Dashboard showing various testing metrics and analytics"
                  className="section-image img-fluid"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>
        <Cardcomponent
          heading="With Talent Assessments"
          highlight="Pre Employment Skills Tests, you can assess:"
          skillsData={skillsData}
        />
      </div>

      <section className="hard-skills-testing-section">
        <div className="container content-wrapper" ref={SoftSkillRef} id="Soft-Skill">
          <div className="row align-items-center g-4">
            {/* Left Content */}
            <div className="col-md-6 col-12">
              <span className="section-tag">Soft Skills Testing</span>
              <h2 className="section-title">
                Drive Team Success with Soft Skills Testing
              </h2>
              <p className="section-desc">
                Beyond technical skills, a candidate’s soft skills play a
                crucial role in how effectively they integrate into your team
                and enhance your workplace culture. <strong>TSA</strong>soft
                skills assessments allow you to identify candidates’ strengths
                in areas such as collaboration, problem-solving, and leadership.
              </p>
              <div className="stats-highlight">
                Measure real-world competencies with precision
              </div>
            </div>

            {/* Right Image */}
            <div className="col-md-6 col-12">
              <div className="image-container text-center">
                <img
                  src={softskil}
                  alt="Skills Assessment Dashboard showing various testing metrics and analytics"
                  className="section-image img-fluid"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Whychoose />

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

export default Skills;
