import React from "react";
import Assesmentreuse from "../../Reusablecomponents/Assesmentreuse/Assesmentreuse";
import asse from "../../../images/Testimonialimage/types.png";
import Cardcomponent from "../../Reusablecomponents/Cardcomponent/Cardcomponent";
import Testimonial from "../../Reusablecomponents/Testimonial/Testimonial";
import Getdemo from "../../Reusablecomponents/Getdemo/Getdemo";

import behavioral from "../../../images/Testimonialimage/behavioral1.png";
import Whychoose from "../../Reusablecomponents/Whychoose/Whychoose";

const Behavioral = () => {
  const behavioralSkills = [
    {
      icon: "📝",
      title: "Working Style",
      description:
        "Understand how candidates manage tasks, prioritize, and stay organized.",
    },
    {
      icon: "🤝",
      title: "Team Dynamics",
      description:
        "Identify individuals who collaborate effectively and foster positive relationships.",
    },
    {
      icon: "💪",
      title: "Emotional Resilience",
      description:
        "Pre-employment behavioral assessment tests can help you evaluate how candidates handle stress, feedback, and workplace challenges.",
    },
    {
      icon: "🚀",
      title: "Motivation",
      description:
        "Measure what drives candidates to succeed and maintain productivity.",
    },
  ];

  return (
    <>
      <div>
        <Assesmentreuse
          tag="📝 Assessment > Behavioral"
          title="Better Hires Start with Better Behavioral Assessments"
          highlight="Better Hires Start with Better Behavioral Assessments"
          description="Pre-employment behavioral assessments help you determine how candidates will perform in leadership roles, team-based positions, or customer-facing jobs. By evaluating key personality traits, you can ensure new hires are not only skilled but  also aligned with your company’s culture and vision."
          buttonText="Get a Demo"
          image={behavioral}
        />
      </div>
      <Cardcomponent
        heading="Behavioral Skills"
        highlight="Evaluate candidates' workplace behaviors"
        skillsData={behavioralSkills}
      />

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

export default Behavioral;
