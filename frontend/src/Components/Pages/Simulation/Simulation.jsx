import React from "react";
import behavioral from "../../../images/Testimonialimage/Simulation.png";
import Assesmentreuse from "../../Reusablecomponents/Assesmentreuse/Assesmentreuse";
import Cardcomponent from "../../Reusablecomponents/Cardcomponent/Cardcomponent";
import Testimonial from "../../Reusablecomponents/Testimonial/Testimonial";
import Getdemo from "../../Reusablecomponents/Getdemo/Getdemo";

import "./Simulation.css";
import Learnmore from "../../Reusablecomponents/Learnmore/Learnmore";

const Simulation = () => {
  const jobSimulationData = [
    {
      icon: "📊",
      title: "Make Data-Driven Hiring Decisions",
      description:
        "Job simulation tests provide an efficient, realistic, and quantifiable measurement of skills, and provide data you can use to identify the most qualified applicants.",
    },
    {
      icon: "⚙️",
      title: "Customizable Simulations",
      description:
        "If you have processes and procedures that are critical for your business operation, we can create online job simulation tests to help you assess candidates’ ability to learn and perform these operations.",
    },
    {
      icon: "💻",
      title: "User-Friendly Interface",
      description:
        "No test-taker plugins or additional downloads are required. Our job simulation testing solution allows for multiple correct response pathways and offers beginner to expert difficulty levels.",
    },
  ];

  return (
    <>
      <div>
        <Assesmentreuse
          tag="📝 Assessment > Simulation"
          title="Hire the Right Talent with TSA’s Real-World Job Simulations"
          highlight="TSA"
          description="Don’t just test knowledge — TSA’s interactive simulations show how candidates act in real-life job tasks."
          buttonText="Get a Demo"
          image={behavioral}
        />

        <div>
          <Learnmore
            smallHeading="Simulation Assessments"
            mainHeading="Go Beyond Traditional Tests with TSA Employment Simulation Assessments"
            description="Effective hiring focuses on what candidates can do, not only what they know. TSA’s job simulations provide an engaging, practical experience to accurately assess essential skills. Popular simulations include:"
            buttonText="Learn More"
            // onButtonClick={handleLearnMore}
          />
        </div>

        <Cardcomponent
          heading="Job Simulation Tests"
          highlight="Realistic, customizable, and data-driven assessments"
          skillsData={jobSimulationData}
        />
      </div>

      <div>
          <Learnmore
            smallHeading="Benefits"
            mainHeading="Smarter, More Predictive Hiring"
            description="Selecting top talent requires measuring performance, not just knowledge. TSA’s simulation-based assessments offer an interactive, hands-on approach to accurately evaluate real job skills. Some of our most sought-after simulations include:"
            buttonText="Get a Demo"
            // onButtonClick={handleLearnMore}
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

export default Simulation;
