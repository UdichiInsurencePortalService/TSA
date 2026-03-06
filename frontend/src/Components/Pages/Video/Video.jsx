import React from "react";
import skill from "../../../images/Testimonialimage/Video.jpg";
import Assesmentreuse from "../../Reusablecomponents/Assesmentreuse/Assesmentreuse";
import Learnmore from "../../Reusablecomponents/Learnmore/Learnmore";
import Cardcomponent from "../../Reusablecomponents/Cardcomponent/Cardcomponent";
import Testimonial from "../../Reusablecomponents/Testimonial/Testimonial";
import Getdemo from "../../Reusablecomponents/Getdemo/Getdemo";

const Video = () => {
  const softSkillData = [
    {
      icon: "🗣️",
      title: "Soft Skill Insights",
      description:
        "Gain deeper insights into verbal skills, personality, and problem-solving ability before scheduling interviews.",
    },
    {
      icon: "⚡",
      title: "Faster, More Efficient Hiring",
      description:
        "Cut time-to-hire by eliminating unnecessary screening calls and allowing hiring teams to evaluate candidates on their own schedule.",
    },
    {
      icon: "🌐",
      title: "Customizable For Any Industry",
      description:
        "Whether you’re hiring for customer service, healthcare, sales, or executive roles, talent assessments can be customized to fit your needs.",
    },
  ];

  return (
    <>
      <div>
        <Assesmentreuse
          tag="📝 Question style > Video"
          title="Discover Candidate Skills with Video-Based Interview Questions"
          highlight="Video-Based Interview"
          description="Combine skill assessments with video interviews to evaluate candidates’ communication, problem-solving ability, and cultural alignment early in the hiring process."
          buttonText="Get a Demo"
          image={skill}
        />
      </div>

      <div>
        <Learnmore
          smallHeading="Why Video Assessments?"
          mainHeading="See Beyond the Resume"
          description="Hard skills tests demonstrate a candidate’s knowledge, while video assessments provide a fuller view. Incorporating video tools into your hiring process helps uncover communication style, problem-solving skills, and cultural alignment."
          buttonText="Learn More"
          // onButtonClick={handleLearnMore}
        />
      </div>

      <Cardcomponent
        heading="Soft Skills Assessments"
        highlight="Insightful, customizable, and efficient evaluations"
        skillsData={softSkillData}
      />

      <div>
        <Learnmore
          smallHeading="Why TSA"
          mainHeading="A Better Experience for Employers & Candidates"
          description="TSA’s video response questions deliver a more engaging and interactive pre-employment assessment experience, helping you identify top talent more quickly."
          buttonText="Learn More"
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

export default Video;
