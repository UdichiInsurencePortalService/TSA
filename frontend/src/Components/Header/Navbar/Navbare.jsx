import React, { useState, useEffect, useRef, useCallback, memo } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo3 from "../../../../src/images/LOGO3.png";
import ulogo from "../../../../src/images/U-logos.png";
import "./Navbar.css";

// ─── Constants (defined outside component to avoid recreation) ────────────────
const INDUSTRIES_ITEMS = [
  { label: "Manufacturing",                  href: "/munufacturing" },
  { label: "Healthcare",                     href: "/healthcare" },
  { label: "Construction",                   href: "/contruction" },
  { label: "Financial Services",             href: "/financial" },
  { label: "Education",                      href: "/education" },
  { label: "Call Centers",                   href: "/callcenter" },
  { label: "Retail",                         href: "/retail" },
  { label: "Federal, State & Local Government", href: "/fedral" },
  { label: "Engineering",                    href: "/engineer" },
  { label: "Utilities/Energy",               href: "/utility" },
  { label: "Transportation and Logistics",   href: "/transport" },
  { label: "Staffing",                       href: "/staffing" },
  { label: "Hospitality",                    href: "/hospital" },
  { label: "Legal Services",                 href: "/legal" },
];

const RESOURCES_ITEMS = [
  { label: "Blog",                       href: "/blog"     },
  { label: "Case Studies",               href: "/case-studies" },
  { label: "Webinars",                   href: "/webinars" },
  { label: "ROI Calculator",             href: "/roi-calculator" },
  { label: "Hiring Glossary",            href: "/hiring-glossary" },
  { label: "Assessment Taker Resources", href: "/assessment-resources" },
];

const PLATFORM_ASSESSMENT_TYPES = [
  ["Skills",               "/Skills"],
  ["Cognitive",            "/Cognitive"],
  ["Behavioral",           "/Behavioral"],
  ["Popular Assessments",  "/PopularAssessments"],
];

const PLATFORM_OTHER_FEATURES = [
  ["Customization",               "/Customization"],
  ["Dedicated Assessment Experts","/Dedicatedassessment"],
  ["Reporting",                   "/Reporting"],
  ["Proctoring",                  "/Proctoring"],
  ["Test Digitization",           "/TestDigitization"],
  ["Security & Compliance",       "/Security"],
];

const PLATFORM_QUESTION_STYLES = [
  ["Simulation",      "/Simulation"],
  ["Multiple Choice", "/QuestionStyles#multiple-choice"],
  ["Free Response",   "/QuestionStyles#Free-Response"],
  ["Video",           "/Video"],
];

const DIRECT_LINKS = [
  ["📁 Assessment Library", "/AssessmentLibrary"],
  ["🔌 Integrations",       "/integration"],
  ["💳 Subscription Options","/subscribe"],
];

// ─── Chevron SVG ─────────────────────────────────────────────────────────────
const ChevronSVG = memo(() => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
));
ChevronSVG.displayName = "ChevronSVG";

// ─── Topbar ───────────────────────────────────────────────────────────────────
const Topbar = memo(() => (
  <div className="topbar">
    <div className="topbar__inner">
      <div className="topbar__left">
        <span>📞</span>
        <a href="/contact" className="topbar__link">08069640455</a>
      </div>
      <div className="topbar__right">
        <Link to="/assessment-resources" className="topbar__link">Assessment Taker Resources</Link>
        <Link to="/attendence" className="topbar__link">Attendance Login</Link>
      </div>
    </div>
  </div>
));
Topbar.displayName = "Topbar";

// ─── useDropdown Hook ─────────────────────────────────────────────────────────
function useDropdown() {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = useCallback(() => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  }, []);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  return { open, handleMouseEnter, handleMouseLeave };
}

// ─── MegaDropdown ─────────────────────────────────────────────────────────────
const MegaDropdown = memo(({ label, children }) => {
  const { open, handleMouseEnter, handleMouseLeave } = useDropdown();
  const wrapperRef = useRef(null);
  const [menuTop, setMenuTop] = useState(84);

  const handleEnter = useCallback(() => {
    if (wrapperRef.current) {
      const rect = wrapperRef.current.getBoundingClientRect();
      setMenuTop(rect.bottom + 12);
    }
    handleMouseEnter();
  }, [handleMouseEnter]);

  return (
    <div
      ref={wrapperRef}
      className="dropdown-wrapper"
      onMouseEnter={handleEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className={`nav-link${open ? " nav-link--active" : ""}`}>
        {label}
        <span className={`chevron${open ? " chevron--open" : ""}`}>
          <ChevronSVG />
        </span>
      </button>
      <div
        className={`mega-menu${open ? " mega-menu--open" : ""}`}
        style={{ top: menuTop }}
      >
        {children}
      </div>
    </div>
  );
});
MegaDropdown.displayName = "MegaDropdown";

// ─── SimpleDropdown ───────────────────────────────────────────────────────────
const SimpleDropdown = memo(({ label, items }) => {
  const { open, handleMouseEnter, handleMouseLeave } = useDropdown();
  const navigate = useNavigate();

  const handleItemClick = useCallback((e, href) => {
    e.preventDefault();
    navigate(href);
  }, [navigate]);

  return (
    <div
      className="dropdown-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className={`nav-link${open ? " nav-link--active" : ""}`}>
        {label}
        <span className={`chevron${open ? " chevron--open" : ""}`}>
          <ChevronSVG />
        </span>
      </button>
      <div className={`simple-menu${open ? " simple-menu--open" : ""}`}>
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="simple-menu__item"
            onClick={(e) => handleItemClick(e, item.href)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
});
SimpleDropdown.displayName = "SimpleDropdown";

// ─── MobileAccordion ──────────────────────────────────────────────────────────
const MobileAccordion = memo(({ label, children }) => {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen((o) => !o), []);

  return (
    <div className="mobile-accordion">
      <button
        className={`mobile-accordion__btn${open ? " mobile-accordion__btn--open" : ""}`}
        onClick={toggle}
      >
        {label}
        <span className={`mobile-accordion__chevron${open ? " mobile-accordion__chevron--open" : ""}`}>
          ▾
        </span>
      </button>
      <div
        className="mobile-accordion__body"
        style={{ maxHeight: open ? "800px" : "0" }}
      >
        <div className="mobile-accordion__inner">{children}</div>
      </div>
    </div>
  );
});
MobileAccordion.displayName = "MobileAccordion";

// ─── Platform Mega Content (memoized to avoid re-render) ──────────────────────
const PlatformMegaContent = memo(({ onClose }) => (
  <div className="mega-menu__inner">
    <div className="mega-menu__grid">
      {/* Assessment Types */}
      <div className="mega-menu__col">
        <Link to="/AssessmentTypes" className="mega-menu__col-title" onClick={onClose}>
          Assessment Types
        </Link>
        <div className="mega-menu__divider" />
        {PLATFORM_ASSESSMENT_TYPES.map(([label, href]) => (
          <Link key={href} to={href} className="mega-menu__link" onClick={onClose}>
            {label}
          </Link>
        ))}
      </div>

      {/* Other Features */}
      <div className="mega-menu__col">
        <span className="mega-menu__col-title">Other Features</span>
        <div className="mega-menu__divider" />
        {PLATFORM_OTHER_FEATURES.map(([label, href]) => (
          <Link key={href} to={href} className="mega-menu__link" onClick={onClose}>
            {label}
          </Link>
        ))}
      </div>

      {/* Question Styles */}
      <div className="mega-menu__col">
        <Link to="/QuestionStyles" className="mega-menu__col-title" onClick={onClose}>
          Question Styles
        </Link>
        <div className="mega-menu__divider" />
        {PLATFORM_QUESTION_STYLES.map(([label, href]) => (
          <Link key={href} to={href} className="mega-menu__link" onClick={onClose}>
            {label}
          </Link>
        ))}
      </div>

      {/* Platform Overview */}
      <div className="mega-menu__col">
        <span className="mega-menu__col-title">Platform Overview</span>
        <div className="mega-menu__divider" />
        <p className="mega-menu__desc">
          Explore our full suite of assessment tools designed to streamline hiring decisions.
        </p>
        <Link to="/LearnMore" className="mega-menu__cta" onClick={onClose}>
          Learn More →
        </Link>
      </div>
    </div>
  </div>
));
PlatformMegaContent.displayName = "PlatformMegaContent";

// ─── Main Navbar ──────────────────────────────────────────────────────────────
const Navbare = () => {
  const [menuOpen, setMenuOpen]   = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const [isMobile, setIsMobile]   = useState(() => window.innerWidth < 992);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    const onResize = () => setIsMobile(window.innerWidth < 992);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const closeMenu  = useCallback(() => setMenuOpen(false), []);
  const toggleMenu = useCallback(() => setMenuOpen((o) => !o), []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <Topbar />

      <nav className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
        <div className="navbar__container">

          {/* Brand Logo */}
          <Link to="/" className="navbar__brand" onClick={closeMenu}>
            <img src={logo3} alt="Talent Assessor" />
          </Link>

          {/* ── Desktop Nav ── */}
          {!isMobile && (
            <div className="navbar__desktop">
              <div className="navbar__items">

                {/* Platform */}
                <MegaDropdown label={<><span className="nav-link__icon">🧊</span>Platform</>}>
                  <PlatformMegaContent onClose={closeMenu} />
                </MegaDropdown>

                {/* Industries */}
                <MegaDropdown label={<><span className="nav-link__icon">🏭</span>Industries</>}>
                  <div className="mega-menu__industries">
                    <div className="mega-menu__industries-grid">
                      {INDUSTRIES_ITEMS.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          className="mega-menu__link"
                          onClick={closeMenu}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </MegaDropdown>

                {/* Resources */}
                <SimpleDropdown
                  label={<><span className="nav-link__icon">📚</span>Resources</>}
                  items={RESOURCES_ITEMS}
                />

                {/* Direct Links */}
                <Link to="/AssessmentLibrary" className="nav-link">
                  <span className="nav-link__icon">📁</span>Assessment Library
                </Link>
                <Link to="/integration" className="nav-link">
                  <span className="nav-link__icon">🔌</span>Integrations
                </Link>
                <Link to="/subscribe" className="nav-link">
                  <span className="nav-link__icon">💳</span>Subscription
                </Link>

                {/* CTA Buttons */}
                <div className="cta-group">
                  <Link to="/examcode" className="btn-take-test">Take Your Test</Link>
                  <button className="btn-demo">Get a Demo</button>
                </div>
              </div>

              {/* Udichi Logo */}
              <div className="navbar__right-logo">
                <div className="navbar__divider" />
                <div className="udichi-logo-wrap">
                  <img src={ulogo} alt="Udichi Logo" />
                </div>
              </div>
            </div>
          )}

          {/* ── Mobile Right ── */}
          {isMobile && (
            <div className="navbar__mobile-right">
              <div className="udichi-mobile-wrap">
                <img src={ulogo} alt="Udichi Logo" />
              </div>
              <button
                onClick={toggleMenu}
                className={`hamburger${menuOpen ? " hamburger--open" : ""}`}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
              >
                <span className="ham-line" />
                <span className="ham-line" />
                <span className="ham-line" />
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* ── Mobile Drawer ── */}
      {isMobile && menuOpen && (
        <>
          <div className="mobile-overlay" onClick={closeMenu} aria-hidden="true" />
          <div className="mobile-drawer" role="dialog" aria-label="Navigation menu">

            {/* Drawer Header */}
            <div className="mobile-drawer__header">
              <img src={logo3} alt="Talent Assessor" />
              <div className="mobile-drawer__powered">
                <img src={ulogo} alt="Udichi Logo" />
                <span className="mobile-drawer__powered-label">Powered by<br />Udichi</span>
              </div>
              <button className="mobile-drawer__close" onClick={closeMenu} aria-label="Close menu">
                ✕
              </button>
            </div>

            {/* Drawer Body */}
            <div className="mobile-drawer__body">

              {/* Platform Accordion */}
              <MobileAccordion label="🧊 Platform">
                <span className="mobile-sub-label">Assessment Types</span>
                {PLATFORM_ASSESSMENT_TYPES.map(([label, href]) => (
                  <Link key={href} to={href} className="mobile-sub-link" onClick={closeMenu}>{label}</Link>
                ))}
                <span className="mobile-sub-label mobile-sub-label--mt">Other Features</span>
                {PLATFORM_OTHER_FEATURES.map(([label, href]) => (
                  <Link key={href} to={href} className="mobile-sub-link" onClick={closeMenu}>{label}</Link>
                ))}
                <span className="mobile-sub-label mobile-sub-label--mt">Question Styles</span>
                {PLATFORM_QUESTION_STYLES.map(([label, href]) => (
                  <Link key={href} to={href} className="mobile-sub-link" onClick={closeMenu}>{label}</Link>
                ))}
                <div style={{ marginTop: 12, paddingLeft: 12 }}>
                  <Link
                    to="/LearnMore"
                    onClick={closeMenu}
                    style={{
                      background: "#2563eb", color: "white", padding: "8px 16px",
                      borderRadius: 6, textDecoration: "none", fontSize: 13,
                      fontWeight: 600, fontFamily: "'Poppins',sans-serif", display: "inline-block",
                    }}
                  >
                    Learn More →
                  </Link>
                </div>
              </MobileAccordion>

              {/* Industries Accordion */}
              <MobileAccordion label="🏭 Industries">
                {INDUSTRIES_ITEMS.map((item) => (
                  <Link key={item.href} to={item.href} className="mobile-sub-link" onClick={closeMenu}>
                    {item.label}
                  </Link>
                ))}
              </MobileAccordion>

              {/* Resources Accordion */}
              <MobileAccordion label="📚 Resources">
                {RESOURCES_ITEMS.map((item) => (
                  <Link key={item.href} to={item.href} className="mobile-sub-link" onClick={closeMenu}>
                    {item.label}
                  </Link>
                ))}
              </MobileAccordion>

              {/* Direct Links */}
              {DIRECT_LINKS.map(([label, href]) => (
                <Link
                  key={href}
                  to={href}
                  className="mobile-direct-link"
                  onClick={closeMenu}
                >
                  {label}
                </Link>
              ))}

              {/* CTA Buttons */}
              <div className="mobile-cta-group">
                <Link
                  to="/examcode"
                  onClick={closeMenu}
                  className="btn-take-test btn-take-test--mobile"
                >
                  Take Your Test
                </Link>
                <button className="btn-demo btn-demo--mobile">Get a Demo</button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default memo(Navbare);