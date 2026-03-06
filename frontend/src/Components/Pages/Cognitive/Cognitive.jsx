import React from "react";
import Assesmentreuse from "../../Reusablecomponents/Assesmentreuse/Assesmentreuse";

import criticalthinkings from "../../../images/Testimonialimage/criticalthinkings.png";
import Testimonial from "../../Reusablecomponents/Testimonial/Testimonial";
import Getdemo from "../../Reusablecomponents/Getdemo/Getdemo";
import Cardcomponent from "../../Reusablecomponents/Cardcomponent/Cardcomponent";
import Whychoose from "../../Reusablecomponents/Whychoose/Whychoose";

const Cognitive = () => {
  const reasoningSkills = [
    {
      icon: "🎯",
      title: "Attention to Detail",
      description:
        "Canidates who can focus on the finer points to deliver accurate results.",
    },
    {
      icon: "🛠️",
      title: "Problem-Solving",
      description:
        "Individuals who can troubleshoot and resolve issues effectively.",
    },
    {
      icon: "🤔",
      title: "Critical Thinking",
      description:
        "Strategic thinkers who evaluate options and make data-driven decisions.",
    },
    {
      icon: "🔢",
      title: "Numerical Reasoning",
      description: "Quick learners who can analyze and interpret complex data.",
    },
    {
      icon: "📖",
      title: "Reading Comprehension",
      description:
        "Candidates who process information quickly and act on it efficiently.",
    },
    {
      icon: "📐",
      title: "Spatial Reasoning",
      description:
        "Problem-solvers with strong visualization and design capabilities.",
    },
  ];

  return (
    <>
      <div>
        <Assesmentreuse
          tag="📝 Assessment Types > Cognitive"
          title="Cognitive Ability Tests for Critical Thinking and Problem-Solving"
          highlight="Critical Thinking and Problem-Solving"
          description="By assessing critical thinking, problem-solving, and adaptability, cognitive ability tests identify the qualities that set high-performing talent apart in any workplace."
          buttonText="Get a Demo"
          image={criticalthinkings}
        />
      </div>

      <Cardcomponent
        heading="Cognitive & Reasoning Skills"
        highlight="Evaluate candidates on essential thinking skills"
        skillsData={reasoningSkills}
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

export default Cognitive;
