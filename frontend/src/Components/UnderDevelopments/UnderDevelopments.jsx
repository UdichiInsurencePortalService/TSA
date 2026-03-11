import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// ─── Page title map ────────────────────────────────────────────────────────────
const PAGE_TITLES = {
  "/blog":                 { title: "Blog",                       icon: "✍️" },
  "/case-studies":         { title: "Case Studies",               icon: "📊" },
  "/webinars":             { title: "Webinars",                   icon: "🎥" },
  "/roi-calculator":       { title: "ROI Calculator",             icon: "🧮" },
  "/hiring-glossary":      { title: "Hiring Glossary",            icon: "📖" },
  "/assessment-resources": { title: "Assessment Taker Resources", icon: "🎯" },
};

// ─── Floating Orb ─────────────────────────────────────────────────────────────
const Orb = ({ style }) => (
  <div
    style={{
      position: "absolute",
      borderRadius: "50%",
      filter: "blur(60px)",
      pointerEvents: "none",
      ...style,
    }}
  />
);

// ─── Gear SVG ─────────────────────────────────────────────────────────────────
const GearIcon = ({ size = 48, speed = "8s", color = "#2563eb", opacity = 1, reverse = false }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    style={{
      animation: `${reverse ? "gearSpinReverse" : "gearSpin"} ${speed} linear infinite`,
      opacity,
    }}
  >
    <path
      fill={color}
      d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.92c.04-.34.07-.69.07-1.08s-.03-.74-.07-1.08l2.32-1.81c.21-.16.27-.46.13-.7l-2.2-3.81c-.14-.24-.42-.32-.67-.24l-2.73 1.1c-.57-.44-1.18-.81-1.85-1.09L14.1 1.4c-.04-.26-.27-.4-.5-.4h-4.4c-.23 0-.46.14-.5.4L8.27 4.27C7.6 4.55 7 4.92 6.42 5.36l-2.73-1.1c-.25-.08-.53 0-.67.24L.82 8.31c-.14.24-.08.54.13.7l2.32 1.81C3.23 11.16 3.2 11.5 3.2 12s.03.84.07 1.18l-2.32 1.81c-.21.16-.27.46-.13.7l2.2 3.81c.14.24.42.32.67.24l2.73-1.1c.57.44 1.18.81 1.85 1.09l.43 2.87c.04.26.27.4.5.4h4.4c.23 0 .46-.14.5-.4l.43-2.87c.67-.28 1.28-.65 1.85-1.09l2.73 1.1c.25.08.53 0 .67-.24l2.2-3.81c.14-.24.08-.54-.13-.7l-2.32-1.81Z"
    />
  </svg>
);

// ─── Progress Bar ─────────────────────────────────────────────────────────────
const ProgressBar = ({ percent, delay = 0 }) => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setWidth(percent), 300 + delay);
    return () => clearTimeout(t);
  }, [percent, delay]);

  return (
    <div style={{
      width: "100%",
      height: 6,
      background: "rgba(37,99,235,0.12)",
      borderRadius: 99,
      overflow: "hidden",
    }}>
      <div style={{
        height: "100%",
        width: `${width}%`,
        background: "linear-gradient(90deg, #2563eb, #60a5fa)",
        borderRadius: 99,
        transition: `width 1.8s cubic-bezier(0.4,0,0.2,1) ${delay}ms`,
        boxShadow: "0 0 12px rgba(37,99,235,0.5)",
      }} />
    </div>
  );
};

// ─── Particle Dot ─────────────────────────────────────────────────────────────
const Dot = ({ style }) => (
  <div style={{
    width: 6,
    height: 6,
    borderRadius: "50%",
    background: "#2563eb",
    opacity: 0.25,
    position: "absolute",
    ...style,
  }} />
);

// ─── Main Component ───────────────────────────────────────────────────────────
const UnderDevelopments = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const canvasRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(0);

  const info = PAGE_TITLES[location.pathname] || { title: "This Page", icon: "🔧" };

  // Fade in on mount
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  // Animated counter 0 → 73
  useEffect(() => {
    let frame;
    let start = null;
    const target = 73;
    const duration = 2000;
    const animate = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    const t = setTimeout(() => { frame = requestAnimationFrame(animate); }, 600);
    return () => { clearTimeout(t); cancelAnimationFrame(frame); };
  }, []);

  // Canvas particle network
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const NUM = 38;
    const dots = Array.from({ length: NUM }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach(d => {
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0 || d.x > canvas.width)  d.vx *= -1;
        if (d.y < 0 || d.y > canvas.height) d.vy *= -1;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(37,99,235,0.35)";
        ctx.fill();
      });
      dots.forEach((a, i) => {
        dots.slice(i + 1).forEach(b => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(37,99,235,${0.12 * (1 - dist / 110)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  const features = [
    { label: "UI Design",        pct: 85, delay: 0 },
    { label: "Backend Logic",    pct: 60, delay: 150 },
    { label: "Content & Data",   pct: 40, delay: 300 },
    { label: "Testing & QA",     pct: 25, delay: 450 },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');

        @keyframes gearSpin        { to { transform: rotate(360deg);  } }
        @keyframes gearSpinReverse { to { transform: rotate(-360deg); } }
        @keyframes floatY  { 0%,100% { transform: translateY(0);    } 50% { transform: translateY(-18px); } }
        @keyframes floatY2 { 0%,100% { transform: translateY(-8px); } 50% { transform: translateY(10px);  } }
        @keyframes pulse   { 0%,100% { opacity: 0.6; transform: scale(1);    } 50% { opacity: 1; transform: scale(1.08); } }
        @keyframes blink   { 0%,100% { opacity: 1; } 50% { opacity: 0; } }
        @keyframes slideUp { from { opacity:0; transform:translateY(32px); } to { opacity:1; transform:translateY(0); } }
        @keyframes scanline {
          0%   { transform: translateY(-100%); }
          100% { transform: translateY(400%);  }
        }

        .ud__page {
          min-height: 100vh;
          background: #f0f5ff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
          padding: 40px 24px;
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        .ud__page--visible { opacity: 1; }

        .ud__canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .ud__card {
          position: relative;
          z-index: 2;
          background: rgba(255,255,255,0.85);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(37,99,235,0.12);
          border-radius: 28px;
          padding: 56px 52px 48px;
          max-width: 620px;
          width: 100%;
          box-shadow: 0 32px 80px rgba(37,99,235,0.10), 0 4px 20px rgba(0,0,0,0.04);
          text-align: center;
          animation: slideUp 0.7s cubic-bezier(0.4,0,0.2,1) both;
          animation-delay: 0.1s;
        }

        .ud__gears {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: -8px;
          margin-bottom: 28px;
          position: relative;
          height: 80px;
        }
        .ud__gear-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ud__gear-wrap--float  { animation: floatY  3.2s ease-in-out infinite; }
        .ud__gear-wrap--float2 { animation: floatY2 2.8s ease-in-out infinite; }

        .ud__badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: rgba(37,99,235,0.08);
          border: 1px solid rgba(37,99,235,0.18);
          color: #2563eb;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          padding: 6px 14px;
          border-radius: 99px;
          margin-bottom: 20px;
          font-family: 'DM Sans', sans-serif;
        }
        .ud__badge-dot {
          width: 7px; height: 7px;
          background: #2563eb;
          border-radius: 50%;
          animation: pulse 1.4s ease-in-out infinite;
        }

        .ud__icon { font-size: 36px; margin-bottom: 10px; display: block; }

        .ud__title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(28px, 5vw, 40px);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.15;
          margin: 0 0 12px;
          letter-spacing: -0.5px;
        }
        .ud__title span { color: #2563eb; }

        .ud__subtitle {
          font-size: 15.5px;
          color: #64748b;
          line-height: 1.65;
          margin: 0 0 36px;
          font-weight: 400;
        }

        /* Counter ring */
        .ud__counter-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 36px;
        }
        .ud__counter-ring {
          position: relative;
          width: 100px;
          height: 100px;
          margin-bottom: 8px;
        }
        .ud__counter-ring svg { transform: rotate(-90deg); }
        .ud__counter-ring circle.track {
          fill: none;
          stroke: rgba(37,99,235,0.1);
          stroke-width: 6;
        }
        .ud__counter-ring circle.fill {
          fill: none;
          stroke: url(#ringGrad);
          stroke-width: 6;
          stroke-linecap: round;
          stroke-dasharray: 263;
          stroke-dashoffset: 263;
          transition: stroke-dashoffset 2s cubic-bezier(0.4,0,0.2,1) 0.6s;
        }
        .ud__counter-num {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-family: 'Syne', sans-serif;
          font-size: 26px;
          font-weight: 800;
          color: #1e40af;
          line-height: 1;
        }
        .ud__counter-num small {
          font-size: 12px;
          color: #94a3b8;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          margin-top: 2px;
        }

        /* Progress bars */
        .ud__progress-list {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 36px;
          text-align: left;
        }
        .ud__progress-label {
          display: flex;
          justify-content: space-between;
          font-size: 13px;
          font-weight: 600;
          color: #374151;
          margin-bottom: 6px;
          font-family: 'DM Sans', sans-serif;
        }
        .ud__progress-label span { color: #2563eb; }

        /* Terminal */
        .ud__terminal {
          background: #0f172a;
          border-radius: 12px;
          padding: 16px 20px;
          text-align: left;
          margin-bottom: 36px;
          border: 1px solid rgba(255,255,255,0.06);
          position: relative;
          overflow: hidden;
        }
        .ud__terminal::before {
          content: '';
          position: absolute;
          left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(96,165,250,0.5), transparent);
          animation: scanline 3s linear infinite;
        }
        .ud__terminal-dots {
          display: flex;
          gap: 6px;
          margin-bottom: 12px;
        }
        .ud__terminal-dots span {
          width: 10px; height: 10px;
          border-radius: 50%;
        }
        .ud__terminal-line {
          font-family: 'Courier New', monospace;
          font-size: 12.5px;
          line-height: 1.9;
          color: #94a3b8;
        }
        .ud__terminal-line .cmd  { color: #60a5fa; }
        .ud__terminal-line .ok   { color: #34d399; }
        .ud__terminal-line .warn { color: #fbbf24; }
        .ud__cursor {
          display: inline-block;
          width: 7px; height: 13px;
          background: #60a5fa;
          margin-left: 3px;
          vertical-align: middle;
          animation: blink 1s step-end infinite;
        }

        /* Buttons */
        .ud__actions {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .ud__btn-back {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #1d4ed8, #2563eb);
          color: white;
          padding: 12px 28px;
          border-radius: 10px;
          font-weight: 600;
          font-size: 14.5px;
          font-family: 'DM Sans', sans-serif;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 16px rgba(37,99,235,0.35);
          text-decoration: none;
        }
        .ud__btn-back:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(37,99,235,0.45);
        }
        .ud__btn-notify {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: white;
          color: #2563eb;
          padding: 12px 28px;
          border-radius: 10px;
          font-weight: 600;
          font-size: 14.5px;
          font-family: 'DM Sans', sans-serif;
          border: 2px solid #2563eb;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        .ud__btn-notify:hover {
          background: #eff6ff;
          transform: translateY(-2px);
          box-shadow: 0 4px 14px rgba(37,99,235,0.2);
        }

        /* Decorative dots grid */
        .ud__dots-grid {
          position: absolute;
          top: 0; right: 0;
          width: 200px; height: 200px;
          opacity: 0.4;
          pointer-events: none;
        }

        @media (max-width: 600px) {
          .ud__card { padding: 36px 24px 32px; }
          .ud__actions { flex-direction: column; }
          .ud__btn-back, .ud__btn-notify { width: 100%; justify-content: center; }
        }
      `}</style>

      <div className={`ud__page${visible ? " ud__page--visible" : ""}`}>
        {/* Canvas particle bg */}
        <canvas ref={canvasRef} className="ud__canvas" />

        {/* Floating orbs */}
        <Orb style={{ width: 400, height: 400, background: "rgba(37,99,235,0.07)", top: -100, left: -120 }} />
        <Orb style={{ width: 300, height: 300, background: "rgba(96,165,250,0.08)", bottom: -80, right: -60 }} />
        <Orb style={{ width: 200, height: 200, background: "rgba(37,99,235,0.05)", top: "40%", right: "8%" }} />

        <div className="ud__card">
          {/* Decorative dots in corner */}
          <svg className="ud__dots-grid" viewBox="0 0 200 200" fill="none">
            {Array.from({ length: 6 }, (_, row) =>
              Array.from({ length: 6 }, (_, col) => (
                <circle key={`${row}-${col}`} cx={20 + col * 32} cy={20 + row * 32} r="2.5" fill="#2563eb" opacity="0.3" />
              ))
            )}
          </svg>

          {/* Gears */}
          <div className="ud__gears">
            <div className="ud__gear-wrap ud__gear-wrap--float2" style={{ marginRight: -10 }}>
              <GearIcon size={36} speed="12s" color="#bfdbfe" reverse />
            </div>
            <div className="ud__gear-wrap ud__gear-wrap--float">
              <GearIcon size={64} speed="7s" color="#2563eb" />
            </div>
            <div className="ud__gear-wrap ud__gear-wrap--float2" style={{ marginLeft: -10 }}>
              <GearIcon size={40} speed="10s" color="#93c5fd" reverse />
            </div>
          </div>

          {/* Badge */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
            <div className="ud__badge">
              <span className="ud__badge-dot" />
              Under Development
            </div>
          </div>

          {/* Icon + Title */}
          <span className="ud__icon">{info.icon}</span>
          <h1 className="ud__title">
            <span>{info.title}</span><br />
            is Coming Soon
          </h1>
          <p className="ud__subtitle">
            We're crafting something great for you. Our team is hard at work building this feature — check back soon!
          </p>

          {/* Counter ring */}
          <div className="ud__counter-wrap">
            <div className="ud__counter-ring">
              <svg width="100" height="100" viewBox="0 0 100 100">
                <defs>
                  <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#60a5fa" />
                  </linearGradient>
                </defs>
                <circle className="track" cx="50" cy="50" r="42" />
                <circle
                  className="fill"
                  cx="50" cy="50" r="42"
                  style={{ strokeDashoffset: 263 - (count / 100) * 263 }}
                />
              </svg>
              <div className="ud__counter-num">
                {count}%<small>complete</small>
              </div>
            </div>
          </div>

          {/* Progress bars */}
          <div className="ud__progress-list">
            {features.map(({ label, pct, delay }) => (
              <div key={label}>
                <div className="ud__progress-label">
                  <span style={{ color: "#374151" }}>{label}</span>
                  <span>{pct}%</span>
                </div>
                <ProgressBar percent={pct} delay={delay} />
              </div>
            ))}
          </div>

          {/* Terminal */}
          <div className="ud__terminal">
            <div className="ud__terminal-dots">
              <span style={{ background: "#ef4444" }} />
              <span style={{ background: "#f59e0b" }} />
              <span style={{ background: "#22c55e" }} />
            </div>
            <div className="ud__terminal-line"><span className="cmd">$</span> git status</div>
            <div className="ud__terminal-line"><span className="ok">✓</span> feature/{location.pathname.slice(1)} — in progress</div>
            <div className="ud__terminal-line"><span className="warn">⚡</span> estimated launch: Q3 2025</div>
            <div className="ud__terminal-line"><span className="cmd">$</span> <span className="ud__cursor" /></div>
          </div>

          {/* Actions */}
          <div className="ud__actions">
            <button className="ud__btn-back" onClick={() => navigate(-1)}>
              ← Go Back
            </button>
            <button className="ud__btn-notify" onClick={() => alert("You'll be notified when this page launches!")}>
              🔔 Notify Me
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UnderDevelopments;