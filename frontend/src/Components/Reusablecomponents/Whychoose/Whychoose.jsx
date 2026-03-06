import React from "react";

const Whychoose = () => {
  const features = [
    {
      icon: "⚙️",
      title: "Customizable Tests",
      description:
        "Select from over 800 job and subject-based pre-employment tests or build customized talent assessments for virtually any role in any industry.",
    },
    {
      icon: "👥",
      title: "Expert Guidance",
      description:
        "Get help from your Dedicated Assessments Specialist to create talent assessments, analyze results, and constantly refine processes to improve your hiring process.",
    },
    {
      icon: "💬",
      title: "Industry-Best Support",
      description:
        "Contact us via chat, email, or phone to get the help you need, when you need it.",
    },
    {
      icon: "🔗",
      title: "Integration Options",
      description:
        "Use Talent Assess hiring assessments inside your existing ATS, LMS and HR systems to simplify your workflow.",
    },
  ];

  const handleDemoClick = () => {
    console.log("Demo requested");
    // Add your demo logic here
  };

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .why-choose-wrapper {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
          padding: 80px 0;
          position: relative;
          overflow: hidden;
        }

        /* Animated background circles */
        .why-choose-wrapper::before,
        .why-choose-wrapper::after {
          content: '';
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          animation: float 20s ease-in-out infinite;
        }

        .why-choose-wrapper::before {
          width: 400px;
          height: 400px;
          top: -100px;
          left: -100px;
        }

        .why-choose-wrapper::after {
          width: 300px;
          height: 300px;
          bottom: -50px;
          right: -50px;
          animation-delay: -10s;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-30px) scale(1.05);
          }
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 1;
        }

        /* Hero Card */
        .hero-card {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
          border-radius: 24px;
          padding: 60px 40px;
          margin-bottom: 60px;
          text-align: center;
          animation: fadeInDown 0.8s ease-out;
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .brand-tag {
          display: inline-block;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          padding: 10px 24px;
          border-radius: 30px;
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 24px;
          box-shadow: 0 8px 20px rgba(99, 102, 241, 0.4);
        }

        .hero-title {
          font-size: 3rem;
          font-weight: 800;
          color: #1f2937;
          line-height: 1.2;
          margin-bottom: 24px;
          background: linear-gradient(135deg, #1f2937, #4b5563);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-description {
          font-size: 1.15rem;
          color: #6b7280;
          line-height: 1.8;
          max-width: 700px;
          margin: 0 auto 36px;
        }

        .cta-button {
          background: linear-gradient(135deg, #f59e0b, #ef4444);
          color: white;
          padding: 16px 48px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1.1rem;
          border: none;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 12px 30px rgba(239, 68, 68, 0.35);
          position: relative;
          overflow: hidden;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .cta-button:hover {
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 16px 40px rgba(239, 68, 68, 0.5);
        }

        .cta-button:active {
          transform: translateY(-2px) scale(1.02);
        }

        /* Features Grid */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }

        .feature-card {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
          border-radius: 20px;
          padding: 40px 30px;
          text-align: center;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
          animation: fadeInUp 0.8s ease-out both;
        }

        .feature-card:nth-child(1) { animation-delay: 0.1s; }
        .feature-card:nth-child(2) { animation-delay: 0.2s; }
        .feature-card:nth-child(3) { animation-delay: 0.3s; }
        .feature-card:nth-child(4) { animation-delay: 0.4s; }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.1), transparent);
          transition: left 0.6s;
        }

        .feature-card:hover::before {
          left: 100%;
        }

        .feature-card:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
          border-color: rgba(99, 102, 241, 0.3);
        }

        .feature-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 36px;
          margin: 0 auto 24px;
          box-shadow: 0 12px 30px rgba(99, 102, 241, 0.4);
          transition: all 0.3s ease;
          position: relative;
        }

        .feature-icon::after {
          content: '';
          position: absolute;
          top: -5px;
          left: -5px;
          right: -5px;
          bottom: -5px;
          border-radius: 50%;
          border: 2px solid rgba(99, 102, 241, 0.3);
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.5;
          }
        }

        .feature-card:hover .feature-icon {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 15px 40px rgba(99, 102, 241, 0.6);
        }

        .feature-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 16px;
          line-height: 1.3;
        }

        .feature-description {
          color: #6b7280;
          line-height: 1.7;
          font-size: 1rem;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 25px;
          }
        }

        @media (max-width: 768px) {
          .why-choose-wrapper {
            padding: 60px 0;
          }

          .hero-card {
            padding: 40px 30px;
            margin-bottom: 40px;
            border-radius: 20px;
          }

          .hero-title {
            font-size: 2.2rem;
          }

          .hero-description {
            font-size: 1rem;
            margin-bottom: 28px;
          }

          .cta-button {
            padding: 14px 36px;
            font-size: 1rem;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .feature-card {
            padding: 35px 25px;
          }

          .feature-icon {
            width: 70px;
            height: 70px;
            font-size: 32px;
          }

          .feature-title {
            font-size: 1.25rem;
          }

          .feature-description {
            font-size: 0.95rem;
          }
        }

        @media (max-width: 576px) {
          .why-choose-wrapper {
            padding: 40px 0;
          }

          .container {
            padding: 0 15px;
          }

          .hero-card {
            padding: 30px 20px;
            margin-bottom: 30px;
            border-radius: 16px;
          }

          .brand-tag {
            font-size: 11px;
            padding: 8px 18px;
            margin-bottom: 20px;
          }

          .hero-title {
            font-size: 1.8rem;
            line-height: 1.3;
          }

          .hero-description {
            font-size: 0.95rem;
            line-height: 1.6;
            margin-bottom: 24px;
          }

          .cta-button {
            width: 100%;
            padding: 14px 32px;
            font-size: 0.95rem;
            align-items: center;
        justify-content: center;
        text-align: center;

          }
    
          .feature-card {
            padding: 30px 20px;
            border-radius: 16px;
          }

          .feature-icon {
            width: 65px;
            height: 65px;
            font-size: 28px;
            margin-bottom: 20px;
          }

          .feature-title {
            font-size: 1.15rem;
            margin-bottom: 12px;
          }

          .feature-description {
            font-size: 0.9rem;
            line-height: 1.6;
          }
        }

        @media (max-width: 375px) {
          .hero-title {
            font-size: 1.6rem;
          }

          .hero-description {
            font-size: 0.9rem;
          }

          .feature-icon {
            width: 60px;
            height: 60px;
            font-size: 26px;
          }

          .feature-title {
            font-size: 1.1rem;
          }

          .feature-description {
            font-size: 0.85rem;
          }
        }

        /* Focus states for accessibility */
        .cta-button:focus {
          outline: 3px solid #fbbf24;
          outline-offset: 4px;
        }

        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      <div className="why-choose-wrapper">
        <div className="container">
          {/* Hero Section */}
          <div className="hero-card">
            <div className="brand-tag">Why Talent Assessment</div>
            <h1 className="hero-title">
              Level Up Your Hiring Process With TSA Skills Tests
            </h1>
            <p className="hero-description">
              TSA assessments are designed to strengthen your hiring process
              while ensuring you find the best candidates for every role. No
              matter what job role you're hiring for, our platform offers
              unmatched customization, accuracy, and support.
            </p>
            <button className="cta-button" onClick={handleDemoClick}>
              Get a Demo
            </button>
          </div>

          {/* Features Grid */}
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Whychoose;
