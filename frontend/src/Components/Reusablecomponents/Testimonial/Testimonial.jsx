import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Testimonial.css";

// Images
import Udichi from "../../../images/Testimonialimage/udichi-logo.png";
import Teamlease from "../../../images/Testimonialimage/Teamlease.png";
import st from "../../../images/Testimonialimage/st.png";
import sectorskill from "../../../images/Testimonialimage/sectorskill.png";
import pratichi from "../../../images/Testimonialimage/pratichi.png";
import asdp from "../../../images/Testimonialimage/asdp.png";
import amity from "../../../images/Testimonialimage/amity2.png";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      text: "Talent Assessor has helped Udichi streamline assessments and evaluate candidates quickly with accurate results. Their platform is simple and powerful.",
      image: Udichi,
      name: "HR Team",
      designation: "Udichi",
    },
    {
      id: 2,
      text: "Teamlease uses Talent Assessor to assess large volumes of candidates efficiently. It has saved us countless hours in recruitment and screening.",
      image: Teamlease,
      name: "Recruitment Head",
      designation: "Teamlease",
    },
    {
      id: 3,
      text: "Amity leverages Talent Assessor to test students’ employability skills. The platform ensures reliable assessments that prepare them for industry.",
      image: amity,
      name: "Placement Cell",
      designation: "Amity University",
    },
    {
      id: 4,
      text: "ASDP relies on Talent Assessor to provide tailored skill evaluations. It helps us map learners’ abilities and recommend the right training paths.",
      image: asdp,
      name: "Program Director",
      designation: "ASDP",
    },
    {
      id: 5,
      text: "Prathichi trusts Talent Assessor for its versatility in creating custom tests that match our training needs. It’s accurate and easy to use.",
      image: pratichi,
      name: "Operations Manager",
      designation: "Prathichi",
    },
    {
      id: 6,
      text: "SectorSkill benefits from Talent Assessor’s wide test library and analytics. It has become an essential part of our candidate evaluation process.",
      image: sectorskill,
      name: "Assessment Lead",
      designation: "SectorSkill Council",
    },
    {
      id: 7,
      text: "ST has improved hiring outcomes by integrating Talent Assessor into our recruitment. The insights and reporting features are outstanding.",
      image: st,
      name: "Talent Acquisition",
      designation: "ST",
    },
  ];

  return (
    <div className="testimonial-wrapper">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="testimonial-card">
              <p className="testimonial-text">“{item.text}”</p>
              <div className="testimonial-meta">
                <img
                  src={item.image}
                  alt={item.designation}
                  className="testimonial-logo"
                />
                <p className="name">{item.name}</p>
                <p className="designation">{item.designation}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
