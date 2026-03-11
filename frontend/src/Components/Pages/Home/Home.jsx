/**
 * Home.jsx — Talent Access (Optimized)
 *
 * OPTIMIZATIONS:
 * 1. CSS extracted to Home.css — no runtime style injection
 * 2. All static arrays/objects at MODULE level (not recreated per render)
 * 3. MARQUEE_ITEMS pre-duplicated once at module level
 * 4. Single interval drives all 3 stat counters (vs 3 parallel timers)
 * 5. useCallback on handlers, useMemo for activeTabData
 * 6. memo() on BrandChip, ClientCard, TestimonialCard sub-components
 * 7. Stable EMPTY_FORM constant (no inline object literal)
 * 8. aria-* attributes added throughout for accessibility
 *
 * ADD to public/index.html <head> once:
 *   <link rel="stylesheet"
 *     href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"/>
 */

import React, { useState, useEffect, useRef, useCallback, useMemo, memo } from "react";
import "./Home.css";

import Acc          from "../../../images/client/ACC.png";
import ADSF         from "../../../images/client/ADSF.png";
import APSE         from "../../../images/client/APSE.png";
import AspireEdtech from "../../../images/client/AspireEdtech.png";
import Ayana        from "../../../images/client/Ayana.jpg";
import barclayes    from "../../../images/client/barclayes.png";
import Ced          from "../../../images/client/Ced.png";
import Coromander   from "../../../images/client/Coromander.png";
import HMB          from "../../../images/client/HMB.png";
import LBSS         from "../../../images/client/LBSS.png";
import Logoa        from "../../../images/client/LOGOa.png";
import Manab        from "../../../images/client/Manab.png";
import nrl          from "../../../images/client/nrl.png";
import nsdc         from "../../../images/client/nsdc.png";
import Om           from "../../../images/client/Om.png";
import Red          from "../../../images/client/Red.png";
import Roshani      from "../../../images/client/Roshani.png";
import SEED         from "../../../images/client/SEED.png";
import Ssac         from "../../../images/client/Sscac.png";
import udichi       from "../../../images/client/udichi.png";

const IMAGE_MAP = {
  Acc, ADSF, APSE, AspireEdtech, Ayana,
  barclayes, Ced, Coromander, HMB, LBSS,
  Logoa, Manab, nrl, nsdc, Om,
  Red, Roshani, SEED, Ssac, udichi,
};

// ─── ALL STATIC DATA AT MODULE LEVEL (never recreated on render) ──────────────

const BRAND_DATA = [
  { name: "ACC",          imageKey: "Acc",          color: "#e8f4fd" },
  { name: "ADSF",         imageKey: "ADSF",         color: "#f0fdf4" },
  { name: "APSE",         imageKey: "APSE",         color: "#fdf4ff" },
  { name: "Aspire Edtech",imageKey: "AspireEdtech", color: "#fff7ed" },
  { name: "Ayana",        imageKey: "Ayana",        color: "#f0f9ff" },
  { name: "Barclayes",    imageKey: "barclayes",    color: "#fefce8" },
  { name: "CED",          imageKey: "Ced",          color: "#fdf2f8" },
  { name: "Coromander",   imageKey: "Coromander",   color: "#f0fdf4" },
  { name: "HMB",          imageKey: "HMB",          color: "#eff6ff" },
  { name: "LBSS",         imageKey: "LBSS",         color: "#faf5ff" },
  { name: "Logoa",        imageKey: "Logoa",        color: "#ecfeff" },
  { name: "Manab",        imageKey: "Manab",        color: "#f0fdf4" },
  { name: "NRL",          imageKey: "nrl",          color: "#eff6ff" },
  { name: "NSDC",         imageKey: "nsdc",         color: "#fefce8" },
  { name: "Om",           imageKey: "Om",           color: "#f0f9ff" },
  { name: "Red",          imageKey: "Red",          color: "#fff1f2" },
  { name: "Roshani",      imageKey: "Roshani",      color: "#fdf4ff" },
  { name: "SEED",         imageKey: "SEED",         color: "#f0fdf4" },
  { name: "SSAC",         imageKey: "Ssac",         color: "#eff6ff" },
  { name: "Udichi",       imageKey: "udichi",       color: "#fdf2f8" },
];

// Pre-duplicated once for seamless marquee loop
const MARQUEE_ITEMS = [...BRAND_DATA, ...BRAND_DATA];

const CLIENTS_DATA = [
  { name: "ACC",          imageKey: "Acc",          sector: "Education",   bg: "#e8f4fd" },
  { name: "ADSF",         imageKey: "ADSF",         sector: "Healthcare",  bg: "#f0fdf4" },
  { name: "APSE",         imageKey: "APSE",         sector: "Academia",    bg: "#fdf4ff" },
  { name: "Aspire Edtech",imageKey: "AspireEdtech", sector: "EdTech",      bg: "#fff7ed" },
  { name: "Ayana",        imageKey: "Ayana",        sector: "Wellness",    bg: "#f0f9ff" },
  { name: "Barclayes",    imageKey: "barclayes",    sector: "Finance",     bg: "#fefce8" },
  { name: "CED",          imageKey: "Ced",          sector: "Education",   bg: "#fdf2f8" },
  { name: "Coromander",   imageKey: "Coromander",   sector: "Technology",  bg: "#f0fdf4" },
  { name: "HMB",          imageKey: "HMB",          sector: "Staffing",    bg: "#eff6ff" },
  { name: "LBSS",         imageKey: "LBSS",         sector: "Recruitment", bg: "#faf5ff" },
  { name: "Logoa",        imageKey: "Logoa",        sector: "Networking",  bg: "#ecfeff" },
  { name: "Manab",        imageKey: "Manab",        sector: "Development", bg: "#f0fdf4" },
  { name: "NRL",          imageKey: "nrl",          sector: "Energy",      bg: "#eff6ff" },
  { name: "NSDC",         imageKey: "nsdc",         sector: "Skill Dev",   bg: "#fefce8" },
  { name: "Om",           imageKey: "Om",           sector: "Consulting",  bg: "#f0f9ff" },
  { name: "Red",          imageKey: "Red",          sector: "Media",       bg: "#fff1f2" },
  { name: "Roshani",      imageKey: "Roshani",      sector: "NGO",         bg: "#fdf4ff" },
  { name: "SEED",         imageKey: "SEED",         sector: "AgriTech",    bg: "#f0fdf4" },
  { name: "SSAC",         imageKey: "Ssac",         sector: "Govt Body",   bg: "#eff6ff" },
  { name: "Udichi",       imageKey: "udichi",       sector: "Culture",     bg: "#fdf2f8" },
];

const TABS = [
  { id: "library",   label: "Assessment Library", title: "Extensive Test Library",   content: "Use tried-and-true content spanning over 600 subjects and 70,000+ questions covering every skill domain.",                                                  button: "Explore Assessment Types",   icon: "📚" },
  { id: "custom",    label: "Customizations",      title: "Robust Customization",     content: "Mix-and-match questions or create your own to assemble a test specific to your unique job and company requirements.",                                         button: "Explore Customizations",     icon: "⚙️" },
  { id: "anticheat", label: "Anti-Cheat",          title: "Anti-Cheat Tools",         content: "Authenticate accurate results with Talent Access anti-cheat tools and AI-assisted proctoring solutions.",                                                    button: "View Anti-Cheat Features",   icon: "🛡️" },
  { id: "experts",   label: "Assessment Experts",  title: "Assessment Experts",       content: "Lean on Talent Access experts who assist with test consultation, analysis, and refinement for your needs.",                                                  button: "Meet Our Experts",           icon: "👨‍💼" },
];

const INDUSTRIES = [
  { title: "Manufacturing",      icon: "🏭" },
  { title: "Government",         icon: "🏛️" },
  { title: "Healthcare",         icon: "🏥" },
  { title: "Engineering",        icon: "⚙️" },
  { title: "Construction",       icon: "🏗️" },
  { title: "Energy/Utilities",   icon: "⚡" },
  { title: "Financial Services", icon: "💰" },
  { title: "Transportation",     icon: "🚚" },
  { title: "Education",          icon: "🎓" },
  { title: "Staffing",           icon: "👥" },
  { title: "Call Center",        icon: "📞" },
  { title: "Hospitality",        icon: "🏨" },
];

const TESTIMONIALS = [
  { text: "Talent Access completely transformed our hiring process. We cut time-to-hire by 60% while dramatically improving candidate quality.", author: "Sarah M.", role: "HR Director, TechCorp",    stars: 5 },
  { text: "The assessment library is incredible. We found exactly what we needed for our specialized engineering roles without any customization.", author: "James R.", role: "Talent Lead, BuildFirm",  stars: 5 },
  { text: "The anti-cheat features give us full confidence that our scores are genuine. Game-changer for remote hiring.",                         author: "Priya K.", role: "Recruiter, FinanceHub",   stars: 5 },
];

const STATS_DATA = [
  { value: 95, label: "Reduction in Time to Hire",      suffix: "%", icon: "fa-clock"      },
  { value: 80, label: "Improvement in Quality of Hire", suffix: "%", icon: "fa-star"       },
  { value: 70, label: "Cost Savings per Hire",          suffix: "%", icon: "fa-piggy-bank" },
];

const HERO_STATS    = [["500+", "Companies"], ["70K+", "Questions"], ["95%", "Satisfaction"]];
const TAB_TAGS      = ["Validated", "Scalable", "Customizable"];
const CLIENT_STATS  = [["500+", "Organizations Served"], ["12+", "Industry Sectors"], ["30+", "States Covered"], ["98%", "Client Retention"]];

const PROBLEM_CARDS = [
  { icon: "fa-users-slash",       title: "Volume Overload",       text: "HR teams are overwhelmed by high volumes of applicants per role. Sorting through hundreds of resumes manually is time-consuming and inefficient." },
  { icon: "fa-file-circle-xmark", title: "Resumes Aren't Enough", text: "Resumes and cover letters don't predict performance. Hiring managers need objective tools to assess real job fit and future potential." },
  { icon: "fa-chart-line-down",   title: "High Cost of Bad Hires",text: "A single bad hire can cost up to 30% of their annual salary. Objective assessments dramatically reduce this costly risk." },
  { icon: "fa-clock-rotate-left", title: "Lengthy Time-to-Hire",  text: "Slow hiring processes let top candidates accept competing offers. Streamlined assessments cut decision time without sacrificing quality." },
];

const WHY_CARDS = [
  { icon: "fa-brain",        title: "Test Hard Skills",        text: "Go beyond the resume. Pull from hundreds of subjects and thousands of questions to assess job-critical skills." },
  { icon: "fa-filter",       title: "Screen Out Bad Fits",     text: "Leverage objective, data-driven information to quickly filter out mismatched candidates so you focus on quality." },
  { icon: "fa-puzzle-piece", title: "Customize to Fit Your Job", text: "Create tests aligned with your roles and goals. Mix, match, upload, or build from scratch." },
  { icon: "fa-chart-bar",    title: "See Impactful Results",   text: "Assess skills to stop wasting time, avoid costly bad hires, and dramatically reduce turnover." },
];

const EMPTY_FORM = { firstName: "", lastName: "", email: "", company: "", phone: "", employees: "" };

// ─── Scroll-reveal hook ───────────────────────────────────────────────────────
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".ta-fade:not(.visible)");
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  });
}

// ─── Memoised sub-components ─────────────────────────────────────────────────

const BrandChip = memo(({ name, imageKey, color }) => {
  const img = IMAGE_MAP[imageKey];
  return (
    <div className="ta-brand-chip">
      <div className="ta-brand-img-wrap" style={{ background: color }}>
        {img && <img src={img} alt={name} loading="lazy" width={36} height={36} />}
      </div>
      <span>{name}</span>
    </div>
  );
});

const ClientCard = memo(({ name, imageKey, sector, bg }) => {
  const img = IMAGE_MAP[imageKey];
  return (
    <div className="ta-client-card ta-fade">
      <div className="ta-client-logo-box" style={{ background: bg }}>
        {img
          ? <img src={img} alt={name} loading="lazy" width={80} height={80} />
          : <span style={{ fontSize: 28 }}>🏢</span>}
      </div>
      <div className="ta-client-name">{name}</div>
      <div className="ta-client-badge">{sector}</div>
    </div>
  );
});

const TestimonialCard = memo(({ text, author, role, stars }) => (
  <div className="ta-col ta-col-12 ta-col-md-4">
    <div className="ta-testimonial-card ta-fade">
      <div className="ta-stars" aria-label={`${stars} stars`}>{"★".repeat(stars)}</div>
      <div className="ta-quote" aria-hidden="true">"</div>
      <p>"{text}"</p>
      <div className="ta-author">
        <div className="ta-avatar" aria-hidden="true">{author[0]}</div>
        <div className="ta-author-info">
          <h5>{author}</h5>
          <span>{role}</span>
        </div>
      </div>
    </div>
  </div>
));

// ─── Main component ───────────────────────────────────────────────────────────
const Home = () => {
  const [activeTab,       setActiveTab]       = useState("library");
  const [toast,           setToast]           = useState(null);
  const [animatedValues,  setAnimatedValues]  = useState([0, 0, 0]);
  const [statsVisible,    setStatsVisible]    = useState(false);
  const [formData,        setFormData]        = useState(EMPTY_FORM);
  const [submitting,      setSubmitting]      = useState(false);

  const statsRef = useRef(null);

  const activeTabData = useMemo(() => TABS.find((t) => t.id === activeTab), [activeTab]);

  useScrollReveal();

  // Stats section observer
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Single interval drives all 3 counters
  useEffect(() => {
    if (!statsVisible) return;
    const targets  = STATS_DATA.map((s) => s.value);
    const current  = [0, 0, 0];
    const increments = targets.map((v) => v / 60);

    const timer = setInterval(() => {
      let finished = true;
      targets.forEach((target, i) => {
        if (current[i] < target) {
          current[i] = Math.min(current[i] + increments[i], target);
          finished = false;
        }
      });
      setAnimatedValues(current.map(Math.floor));
      if (finished) clearInterval(timer);
    }, 25);

    return () => clearInterval(timer);
  }, [statsVisible]);

  const handleInput = useCallback(
    (e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value })),
    [],
  );

  const dismissToast = useCallback(() => setToast(null), []);
  const scrollToDemo = useCallback(
    () => document.getElementById("ta-demo")?.scrollIntoView({ behavior: "smooth" }),
    [],
  );

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (!formData.firstName || !formData.email || !formData.company) {
        setToast({ message: "Please fill in all required fields.", type: "error" });
        setTimeout(() => setToast(null), 3500);
        return;
      }
      setSubmitting(true);
      await new Promise((r) => setTimeout(r, 1200));
      setSubmitting(false);
      setToast({ message: "🎉 Demo request sent! We'll contact you shortly.", type: "success" });
      setFormData(EMPTY_FORM);
      setTimeout(() => setToast(null), 4000);
    },
    [formData.firstName, formData.email, formData.company],
  );

  return (
    <>
      {/* TOAST */}
      {toast && (
        <div className="ta-toast-wrap" role="alert">
          <div className={`ta-toast ${toast.type === "success" ? "ta-toast-ok" : "ta-toast-err"}`}>
            <span aria-hidden="true">{toast.type === "success" ? "✅" : "❌"}</span>
            <span>{toast.message}</span>
            <button className="ta-toast-close" onClick={dismissToast} aria-label="Close notification">✕</button>
          </div>
        </div>
      )}

      {/* ── HERO ── */}
      <section className="ta-hero">
        <div className="ta-container" style={{ position: "relative", zIndex: 2 }}>
          <div className="ta-row ta-align-center ta-g5">

            <div className="ta-col ta-col-12 ta-col-lg-6">
              <div className="ta-hero-badge ta-anim-0">
                <i className="fas fa-bolt" aria-hidden="true"></i>
                AI-Powered Pre-Employment Testing
              </div>
              <h1 className="ta-hero-title ta-anim-1">
                Hire Smarter.<br />Build <span>Stronger</span> Teams.
              </h1>
              <p className="ta-hero-sub ta-anim-2">
                Streamline hiring with 70,000+ validated assessments. Identify top talent faster,
                reduce bias, and make data-driven decisions that drive results.
              </p>
              <div className="ta-hero-btns ta-anim-3">
                <a className="ta-btn-primary ta-me-3" href="#ta-demo" style={{ marginBottom: 8 }}>
                  <i className="fas fa-calendar-check" aria-hidden="true"></i> Get a Free Demo
                </a>
                <a className="ta-btn-outline" href="#ta-platform" style={{ marginBottom: 8 }}>
                  <i className="fas fa-play-circle" aria-hidden="true"></i> See It in Action
                </a>
              </div>
              <div className="ta-hero-stats ta-anim-4">
                {HERO_STATS.map(([val, lab]) => (
                  <div key={lab} style={{ textAlign: "center" }}>
                    <div className="ta-hero-stat-val">{val}</div>
                    <div className="ta-hero-stat-lab">{lab}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="ta-col ta-col-12 ta-col-lg-6" id="ta-demo">
              <div className="ta-form-card ta-anim-r">
                <h3>Request a Demo</h3>
                <p>See how Talent Access transforms your hiring in 30 minutes.</p>
                <form onSubmit={handleSubmit} noValidate>
                  <div className="ta-row ta-g4">
                    <div className="ta-col ta-col-12 ta-col-md-6">
                      <div className="ta-form-group">
                        <label htmlFor="ta-firstName">First Name <span className="ta-form-required">*</span></label>
                        <div className="ta-input-wrap">
                          <i className="fas fa-user ta-input-icon" aria-hidden="true"></i>
                          <input id="ta-firstName" className="ta-input" type="text" name="firstName"
                            placeholder="John" value={formData.firstName} onChange={handleInput} />
                        </div>
                      </div>
                    </div>
                    <div className="ta-col ta-col-12 ta-col-md-6">
                      <div className="ta-form-group">
                        <label htmlFor="ta-lastName">Last Name</label>
                        <div className="ta-input-wrap">
                          <i className="fas fa-user ta-input-icon" aria-hidden="true"></i>
                          <input id="ta-lastName" className="ta-input" type="text" name="lastName"
                            placeholder="Doe" value={formData.lastName} onChange={handleInput} />
                        </div>
                      </div>
                    </div>
                    <div className="ta-col ta-col-12">
                      <div className="ta-form-group">
                        <label htmlFor="ta-email">Work Email <span className="ta-form-required">*</span></label>
                        <div className="ta-input-wrap">
                          <i className="fas fa-envelope ta-input-icon" aria-hidden="true"></i>
                          <input id="ta-email" className="ta-input" type="email" name="email"
                            placeholder="john@company.com" value={formData.email} onChange={handleInput} />
                        </div>
                      </div>
                    </div>
                    <div className="ta-col ta-col-12">
                      <div className="ta-form-group">
                        <label htmlFor="ta-company">Company Name <span className="ta-form-required">*</span></label>
                        <div className="ta-input-wrap">
                          <i className="fas fa-building ta-input-icon" aria-hidden="true"></i>
                          <input id="ta-company" className="ta-input" type="text" name="company"
                            placeholder="Acme Corp" value={formData.company} onChange={handleInput} />
                        </div>
                      </div>
                    </div>
                    <div className="ta-col ta-col-12">
                      <div className="ta-form-group">
                        <label htmlFor="ta-phone">Phone Number</label>
                        <div className="ta-input-wrap">
                          <i className="fas fa-phone ta-input-icon" aria-hidden="true"></i>
                          <input id="ta-phone" className="ta-input" type="tel" name="phone"
                            placeholder="+1 (555) 000-0000" value={formData.phone} onChange={handleInput} />
                        </div>
                      </div>
                    </div>
                    <div className="ta-col ta-col-12">
                      <div className="ta-form-group">
                        <label htmlFor="ta-employees">Company Size</label>
                        <div className="ta-input-wrap">
                          <i className="fas fa-users ta-input-icon" aria-hidden="true"></i>
                          <select id="ta-employees" className="ta-input" name="employees"
                            value={formData.employees} onChange={handleInput}>
                            <option value="">Select company size</option>
                            <option value="1-10">1–10 employees</option>
                            <option value="11-50">11–50 employees</option>
                            <option value="51-200">51–200 employees</option>
                            <option value="201-500">201–500 employees</option>
                            <option value="500+">500+ employees</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="ta-col ta-col-12">
                      <button type="submit" className="ta-btn-submit" disabled={submitting}>
                        {submitting
                          ? <><span className="ta-spinner ta-me-2"></span>Sending…</>
                          : <><i className="fas fa-paper-plane" aria-hidden="true"></i> Request My Demo</>}
                      </button>
                    </div>
                  </div>
                </form>
                <p className="ta-form-hint">
                  <i className="fas fa-lock ta-me-2" aria-hidden="true"></i>
                  No credit card required. Free 30-min demo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BRANDS MARQUEE ── */}
      <section className="ta-brands" aria-label="Our clients">
        <div className="ta-container">
          <p className="ta-brands-title">✦ Trusted by 1,000s of Organizations Worldwide ✦</p>
          <div className="ta-marquee-outer">
            <div className="ta-marquee-track" aria-hidden="true">
              {MARQUEE_ITEMS.map((b, i) => (
                <BrandChip key={`${b.imageKey}-${i}`} name={b.name} imageKey={b.imageKey} color={b.color} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section className="ta-problem">
        <div className="ta-container">
          <div className="ta-text-center ta-mb-5">
            <div className="ta-eyebrow ta-justify-center ta-d-flex">The Challenge</div>
            <h2 className="ta-section-title">Hiring is Getting Harder</h2>
            <p className="ta-section-sub ta-mx-auto">
              Traditional methods leave hiring managers overwhelmed and unable to identify
              truly qualified candidates in a sea of applicants.
            </p>
          </div>
          <div className="ta-row ta-g4">
            {PROBLEM_CARDS.map((item, i) => (
              <div key={item.title} className="ta-col ta-col-12 ta-col-md-6 ta-col-lg-3">
                <div className="ta-problem-card ta-fade" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="ta-problem-icon">
                    <i className={`fas ${item.icon}`} aria-hidden="true"></i>
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY ── */}
      <section className="ta-why">
        <div className="ta-container">
          <div className="ta-row ta-g5 ta-align-center">
            <div className="ta-col ta-col-12 ta-col-lg-5">
              <div className="ta-why-left ta-fade">
                <div className="ta-why-visual" aria-hidden="true">🎯</div>
                <h4>Go Beyond the Resume</h4>
                <h2>Assess real skills to find the right candidate for every job.</h2>
                <p>Pre-employment tests identify talented candidates before the interview — saving time, reducing bias, and improving outcomes.</p>
                <button className="ta-btn-primary ta-mt-4" onClick={scrollToDemo}>
                  <i className="fas fa-calendar-check" aria-hidden="true"></i> Get a Demo
                </button>
              </div>
            </div>
            <div className="ta-col ta-col-12 ta-col-lg-7">
              <div className="ta-eyebrow ta-mb-3">Why It Works</div>
              <h2 className="ta-section-title">Why Pre-Employment<br />Assessments Work</h2>
              <div className="ta-mt-4">
                {WHY_CARDS.map((item, i) => (
                  <div key={item.title} className="ta-info-card ta-fade" style={{ transitionDelay: `${i * 0.1}s` }}>
                    <div className="ta-info-icon">
                      <i className={`fas ${item.icon}`} aria-hidden="true"></i>
                    </div>
                    <div className="ta-info-body">
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                      <a href="#">Learn More <i className="fas fa-arrow-right" aria-hidden="true"></i></a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="ta-stats" ref={statsRef}>
        <div className="ta-container">
          <div className="ta-d-flex ta-justify-center ta-mb-4">
            <div className="ta-eyebrow">Proven Results</div>
          </div>
          <h2 className="ta-section-title ta-text-center">Talent Access Customers Have Experienced…</h2>
          <div className="ta-row ta-g4 ta-mt-2">
            {STATS_DATA.map((item, i) => (
              <div key={item.label} className="ta-col ta-col-12 ta-col-md-4">
                <div className="ta-stat-card ta-fade" style={{ transitionDelay: `${i * 0.15}s` }}>
                  <div className="ta-stat-icon">
                    <i className={`fas ${item.icon}`} aria-hidden="true"></i>
                  </div>
                  <div className="ta-stat-val" aria-live="polite">{animatedValues[i]}{item.suffix}</div>
                  <p className="ta-stat-lab">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="ta-text-center ta-mt-5">
            <button className="ta-btn-primary" style={{ margin: "0 auto" }} onClick={scrollToDemo}>
              <i className="fas fa-rocket" aria-hidden="true"></i> Start Hiring Smarter Today
            </button>
          </div>
        </div>
      </section>

      {/* ── PLATFORM TABS ── */}
      <section className="ta-platform" id="ta-platform">
        <div className="ta-container">
          <div className="ta-text-center">
            <div className="ta-d-flex ta-justify-center ta-mb-4">
              <div className="ta-eyebrow">Our Platform</div>
            </div>
            <h2 className="ta-section-title">Pre-Hire Assessment Platform</h2>
            <p className="ta-section-sub ta-mx-auto">
              Everything you need to build a world-class hiring process, all in one place.
            </p>
          </div>
          <div className="ta-tabs-nav" role="tablist">
            {TABS.map((tab) => (
              <button key={tab.id} role="tab" aria-selected={activeTab === tab.id}
                className={`ta-tab-btn${activeTab === tab.id ? " active" : ""}`}
                onClick={() => setActiveTab(tab.id)}>
                {tab.label}
              </button>
            ))}
          </div>
          {activeTabData && (
            <div className="ta-tab-box" role="tabpanel">
              <div className="ta-row ta-align-center ta-g5">
                <div className="ta-col ta-col-12 ta-col-md-6">
                  <div style={{ fontSize: 48, marginBottom: 16 }} aria-hidden="true">{activeTabData.icon}</div>
                  <h2>{activeTabData.title}</h2>
                  <p style={{ color: "var(--ta-text-muted)", lineHeight: 1.75, marginBottom: 28 }}>{activeTabData.content}</p>
                  <button className="ta-btn-primary">
                    <i className="fas fa-arrow-right" aria-hidden="true"></i> {activeTabData.button}
                  </button>
                  <div className="ta-d-flex ta-flex-wrap ta-gap3 ta-mt-4">
                    {TAB_TAGS.map((tag) => (
                      <span key={tag} style={{ background: "var(--ta-primary-light)", color: "var(--ta-primary)", padding: "6px 14px", borderRadius: 50, fontSize: 12, fontWeight: 600 }}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="ta-col ta-col-12 ta-col-md-6">
                  <div className="ta-tab-img" aria-hidden="true">{activeTabData.icon}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── EXPLORE ── */}
      <section className="ta-explore">
        <div className="ta-container">
          <div className="ta-row ta-align-center ta-g4">
            <div className="ta-col ta-col-12 ta-col-md-7">
              <h2>Experience Our Platform</h2>
              <p>See exactly how Talent Access can improve your hiring operations — no commitment required.</p>
            </div>
            <div className="ta-col ta-col-12 ta-col-md-5">
              <div className="ta-explore-btns">
                <button className="ta-btn-white"><i className="fas fa-map" aria-hidden="true"></i> Tour Our Platform</button>
                <button className="ta-btn-white-outline"><i className="fas fa-play" aria-hidden="true"></i> Platform Overview</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="ta-industries">
        <div className="ta-container">
          <div className="ta-industries-hdr">
            <div>
              <div className="ta-eyebrow">Industries</div>
              <h2 className="ta-section-title" style={{ marginBottom: 0 }}>Built for Every Industry</h2>
              <p style={{ color: "#000", marginTop: 8, fontWeight: 500 }}>Pre-hire assessments tailored for virtually any sector.</p>
            </div>
            <button className="ta-view-all">
              <i className="fas fa-th" aria-hidden="true"></i> View All Industries
            </button>
          </div>
          <div className="ta-industries-grid">
            {INDUSTRIES.map((item, i) => (
              <div key={item.title} className="ta-industry-card ta-fade" style={{ transitionDelay: `${(i % 4) * 0.08}s` }}>
                <div className="ta-industry-img" aria-hidden="true">{item.icon}</div>
                <div className="ta-industry-body">
                  <h3>{item.title}</h3>
                  <button>Read More <i className="fas fa-arrow-right" aria-hidden="true"></i></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENTS ── */}
      <section className="ta-clients">
        <div className="ta-container">
          <div className="ta-text-center">
            <div className="ta-d-flex ta-justify-center ta-mb-4">
              <div className="ta-eyebrow">Our Clients</div>
            </div>
            <h2 className="ta-section-title">Trusted by Leading Organizations</h2>
            <p className="ta-section-sub ta-mx-auto">
              From government bodies to EdTech startups, Talent Access powers smarter hiring across every sector.
            </p>
          </div>
          <div className="ta-clients-grid">
            {CLIENTS_DATA.map((client) => (
              <ClientCard key={client.name} name={client.name} imageKey={client.imageKey} sector={client.sector} bg={client.bg} />
            ))}
          </div>
          <div className="ta-clients-stats ta-fade">
            {CLIENT_STATS.map(([val, lab]) => (
              <div key={lab} style={{ textAlign: "center", minWidth: 120 }}>
                <div style={{ fontFamily: "var(--ta-font-heading)", fontSize: "2.2rem", fontWeight: 800, color: "var(--ta-primary)" }}>{val}</div>
                <div style={{ fontSize: "0.9rem", color: "var(--ta-text-muted)", fontWeight: 500, marginTop: 4 }}>{lab}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="ta-testimonials">
        <div className="ta-container">
          <div className="ta-text-center ta-mb-5">
            <div className="ta-d-flex ta-justify-center ta-mb-4">
              <div className="ta-eyebrow">Testimonials</div>
            </div>
            <h2 className="ta-section-title">What Our Customers Say</h2>
          </div>
          <div className="ta-row ta-g4">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.author} text={t.text} author={t.author} role={t.role} stars={t.stars} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="ta-cta">
        <div className="ta-container">
          <h2>Ready to Transform Your Hiring?</h2>
          <p>Join 1,000+ organizations already hiring smarter with Talent Access.</p>
          <div className="ta-d-flex ta-gap3 ta-justify-center ta-flex-wrap">
            <button className="ta-btn-primary" onClick={scrollToDemo}>
              <i className="fas fa-calendar-check" aria-hidden="true"></i> Get a Free Demo
            </button>
            <button className="ta-btn-outline">
              <i className="fas fa-phone" aria-hidden="true"></i> Talk to Sales
            </button>
          </div>
          <p className="ta-cta-hint">No credit card required · Setup in minutes · Cancel anytime</p>
        </div>
      </section>
    </>
  );
};

export default Home;