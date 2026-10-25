import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { createPortal } from 'react-dom';
import { 
  ArrowDown, ArrowLeft, ArrowUpRight, Boxes, CircuitBoard, Cpu, 
  Download, Mail, MapPin, Menu, Phone, Wrench, X, Linkedin, 
  Eye, FileText, GraduationCap, Award, ExternalLink,
  ZoomIn, ZoomOut, RotateCcw
} from 'lucide-react';
import './styles.css';
import './figma.css';
import './casestudy.css';
import ManipulatorCaseStudy from './ManipulatorCaseStudy';
import SolarCoolingCaseStudy from './SolarCoolingCaseStudy';
import KRAICaseStudy from './KRAICaseStudy';

// ══ SPATIAL EFFECTS ══════════════════════════════════════════════════════════

/** Scroll-reveal: add .reveal to fade-in, .stagger to stagger children */
function useScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.classList.add('is-visible');
        if (e.target.classList.contains('stagger')) {
          [...e.target.children].forEach((child, i) => {
            child.style.transitionDelay = `${(i * 0.08).toFixed(2)}s`;
            child.classList.add('is-visible');
          });
        }
        io.unobserve(e.target);
      }),
      { threshold: 0.08, rootMargin: '0px 0px -24px 0px' }
    );
    document.querySelectorAll('.reveal, .stagger').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/** Mouse parallax — returns ref to attach to target element */
function useParallax(strength = 18) {
  const ref = useRef(null);
  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return; // skip touch
    const handler = e => {
      if (!ref.current) return;
      const x = (e.clientX / window.innerWidth  - 0.5) * strength;
      const y = (e.clientY / window.innerHeight - 0.5) * strength;
      ref.current.style.transform = `translate(${x.toFixed(2)}px, ${y.toFixed(2)}px)`;
    };
    window.addEventListener('mousemove', handler, { passive: true });
    return () => window.removeEventListener('mousemove', handler);
  }, [strength]);
  return ref;
}

/** Spread onto any card: {...tilt(strength)} */
function tilt(strength = 6) {
  return {
    onMouseMove(e) {
      const el = e.currentTarget;
      el.style.transition = 'transform 0.09s ease-out, box-shadow 0.12s ease-out';
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width  - 0.5;
      const y = (e.clientY - r.top)  / r.height - 0.5;
      el.style.transform = `perspective(900px) rotateX(${(-y * strength).toFixed(2)}deg) rotateY(${(x * strength).toFixed(2)}deg) translateZ(8px)`;
      el.style.boxShadow = '0 20px 52px rgba(0,0,0,0.14)';
    },
    onMouseLeave(e) {
      const el = e.currentTarget;
      el.style.transition = 'transform 0.55s cubic-bezier(0.22,1,0.36,1), box-shadow 0.5s ease-out';
      el.style.transform  = '';
      el.style.boxShadow  = '';
    },
  };
}

// ═════════════════════════════════════════════════════════════════════════════

/** Active-section scroll spy — returns the id of the section in viewport */
function useScrollSpy(ids) {
  const [active, setActive] = React.useState(ids[0]);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);
  return active;
}

/** Animated counter — counts from 0 to `target` when ref enters viewport */
function useCountUp(target, decimals = 0, duration = 1400) {
  const ref = useRef(null);
  const [val, setVal] = React.useState(0);
  useEffect(() => {
    if (ref.current === null) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const step = ts => {
        const p = Math.min((ts - start) / duration, 1);
        const ease = 1 - Math.pow(1 - p, 3); // ease-out-cubic
        setVal(+(ease * target).toFixed(decimals));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, { threshold: 0.4 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [target, decimals, duration]);
  return [val, ref];
}



const projects = [
  {
    number: '01',
    slug: 'manipulator',
    category: 'FINAL PROJECT · 2026',
    title: '5-DOF Robotic Manipulator Arm',
    summary: '5-DOF arm with custom 3D-printed PLA cycloidal gearboxes (1:50 & 1:25), AS5600 closed-loop magnetic sensing (0.088°), and analytical inverse kinematics on STM32F411.',
    tags: ['Robotics', 'Cycloidal Gearbox', 'Closed-Loop Control', 'STM32'],
    image: 'manipulator-real.png',
    detailBanner: 'manipulator_project_banner.png',
    subtitle: '5-DOF robotic arm with cycloidal gearbox transmission & closed-loop control — Telkom University Final Project (2026).',
    label: 'FINAL CAPSTONE THESIS · 5-DOF ROBOTIC MANIPULATOR',
    problem: 'Commercial robotic arms are cost-prohibitive for specialized service robots, while typical 3D-printed arms suffer from joint backlash, compliance error, and low payload capacity.',
    design: 'Designed custom 3D-printed PLA Cycloidal Gearboxes with reduction ratios of 1:50 (J2 high-torque) and 1:25 (J1/J3/J4), integrated with NEMA17 steppers and TB6600 drivers.',
    prototype: 'Engineered closed-loop feedback using 12-bit AS5600 magnetic encoders via TCA9548A I2C multiplexing, driven by an STM32F411CEU6 MCU with S-curve acceleration profiles.',
    test: 'Validated across 8 target angle configurations and multi-payload trials. Achieved 79.8% average accuracy improvement (error down from 0.51° to 0.10°) with stable payload operation from 250 to 1,000 g (IK mean error 6.65 mm / 2.03%).',
    metrics: [
      ['79.8%', 'Positional accuracy improvement (0.51° → 0.10°)'],
      ['250–1,000 g', 'Stable validated payload range (exceeded 600 g target)'],
      ['6.65 mm', 'Mean absolute Inverse Kinematics position error (2.03%)'],
      ['1:50 & 1:25', 'Custom 3D-printed cycloidal reduction ratios']
    ],
    note: 'All metrics directly extracted from Bachelor Thesis Book (Buku TA), Telkom University 2026.'
  },
  {
    number: '02',
    slug: 'solar-cooling',
    category: 'INTEGRATED DESIGN PROJECT · 2025–2026',
    title: 'Automatic Solar Panel Cooling System',
    summary: 'Automated thermal regulation system maintaining PV surface efficiency. Features closed-loop pump control activating above 30°C and deactivating below 25°C, with 4.02 L/min spray delivery and IPX4 weatherproof enclosure.',
    tags: ['Thermal Regulation', 'Embedded Electronics', 'Clean Energy'],
    image: 'solar-cooling-real.png',
    detailBanner: 'solar_cooling_project_banner.png',
    subtitle: 'Automated water-cooling thermal management for photovoltaic panels — Integrated Design Project, Telkom University.',
    label: 'INTEGRATED DESIGN PROJECT · PV THERMAL REGULATION SYSTEM',
    problem: 'High ambient and surface temperatures cause substantial drops in photovoltaic conversion efficiency, accelerating cell degradation over extended operation.',
    design: 'Engineered an automated closed-loop surface cooling subsystem utilizing waterproof digital temperature probes, relay actuation, and mist/spray nozzle distribution.',
    prototype: 'Built physical outdoor test rig with solar panel instrumentation, threshold calibration logic, and automated pump management circuit.',
    test: 'Subsystem verified with temperature sensor precision within ±0.3°C across trials. Automated cooling duty cycle reduced surface temperature by >16°C back to 25°C.',
    metrics: [
      ['>30°C / ON', 'Automated pump activation threshold'],
      ['<25°C / OFF', 'Automated pump deactivation threshold'],
      ['4.02 L/MIN', 'Spray delivery rate across PV surface'],
      ['SDG 7', 'Aligned with Affordable & Clean Energy initiative']
    ],
    note: 'Extracted directly from Integrated Design Project (IDP) report and subsystem validation data.'
  },
  {
    number: '03',
    slug: 'krai-2025',
    category: 'KRAI COMPETITION · 2025',
    title: 'Robot Basketball Mechanisms',
    summary: "Designed the precision dribble and pneumatic shooting mechanisms for Team ROOBICS (EIRRG Telkom University), qualifying and advancing to the National KRAI Stage at ITB Jatinangor.",
    tags: ['Mechanism Design', 'Pneumatics', 'Robotics Competition'],
    image: 'krai-cert-real.png',
    detailBanner: 'krai-cert-real.png',
    subtitle: 'Team ROOBICS — Mechanical contribution to ABU Robocon Indonesia (KRAI 2025).',
    label: 'NATIONAL COMPETITION · ROBOT BASKETBALL MECHANISMS',
    problem: 'Develop a high-speed, repeatable robotic mechanism capable of picking, dribbling, and accurately shooting basketballs within tight competition match timing.',
    design: 'Calculated trajectory kinematics and mechanical linkages for dual-roller ball intake, active dribble retainer, and high-pressure pneumatic actuator launch mechanism.',
    prototype: 'Fabricated chassis and linkage structures in the EIRRG lab at Telkom University, conducting rigorous field testing on regulation-size competition courts.',
    test: 'Team ROOBICS successfully qualified through regional preliminaries and advanced to the National KRAI 2025 stage at ITB Jatinangor.',
    metrics: [
      ['6–7 METERS', 'High-speed basketball shooting range'],
      ['5–6 BAR', 'Pneumatic dribble & feeder pressure'],
      ['3× RS775', 'Tri-roller pulley-coupled shooter motors'],
      ['NATIONAL', 'Advanced to National Stage at ITB Jatinangor']
    ],
    note: 'Verified from official KRAI 2025 Certificate of Participation & Team ROOBICS documentation.'
  },
  {
    number: '04',
    slug: 'line-follower',
    category: 'INDEPENDENT PROJECT · 2024',
    title: 'Line Follower Robot',
    summary: 'Autonomous line-tracking mobile robot featuring an 8-channel photodiode + LED sensor array, real-time threshold comparator circuitry, and differential drive steering logic.',
    tags: ['Autonomous Mobile Robot', 'Sensor Array', 'Analog & Digital Electronics'],
    image: 'line-follower.png',
    detailBanner: 'line-follower.png',
    subtitle: 'Independent engineering build · Bandung (2024).',
    label: 'AUTONOMOUS SENSING SYSTEM · LINE FOLLOWER',
    problem: 'Build a responsive, self-contained mobile robot that navigates high-contrast track paths with zero manual steering input.',
    design: 'Designed an 8-pair photodiode and LED sensor bar for high-contrast floor boundary sensing with integrated analog filtering.',
    prototype: 'Fabricated modular chassis, installed differential gear motors with H-bridge motor driver, and programmed path-tracking response algorithms.',
    test: 'Validated track acquisition, corner tracking, and intersection detection on multi-radius test tracks.',
    metrics: [
      ['8 SENSORS', 'Integrated photodiode + LED sensing pairs'],
      ['CLOSED-LOOP', 'Continuous sensor-driven path steering'],
      ['INDEPENDENT', 'Self-funded & independently developed build (2024)']
    ],
    note: 'Confirmed from Curriculum Vitae and independent engineering build records.'
  },
  {
    number: '05',
    slug: 'sumo-robot',
    category: 'INDEPENDENT PROJECT · 2023',
    title: 'Bluetooth Sumo Robot',
    summary: '1 kg competition-class sumo robot (20 × 20 cm) built on a reinforced acrylic chassis with 4-wheel independent high-torque gear motors and Bluetooth wireless telemetry.',
    tags: ['Robotics', 'Wireless Telemetry', 'High-Torque Drive'],
    image: 'sumo-robot.png',
    detailBanner: 'sumo-robot.png',
    subtitle: 'Independent mobile robotics project · Bandung (2023).',
    label: 'MOBILE ROBOTIC VEHICLE · BLUETOOTH SUMO ROBOT',
    problem: 'Construct a rigid, high-traction compact sumo robot within 1 kg mass and 20 × 20 cm dimensional competition limits.',
    design: 'Designed a precision-cut acrylic multi-deck chassis, 4-wheel independent drivetrain, and wireless Bluetooth transceiver interface.',
    prototype: 'Integrated motor driver shields, regulated battery power distribution, and programmed wireless smartphone control via custom Bluetooth packet parsing.',
    test: 'Validated pushing traction under load, confirming physical push performance up to 4 kg (4× robot deadweight).',
    metrics: [
      ['1 KG / 20×20 CM', 'Chassis mass and dimension limit compliance'],
      ['UP TO 4 KG', 'Tested push load capacity (4× robot mass)'],
      ['4 MOTORS', 'Independent high-torque drive wheels'],
      ['BLUETOOTH', 'Wireless smartphone real-time remote control']
    ],
    note: 'Confirmed from Curriculum Vitae and independent engineering build records.'
  },
];

// SKILLS DATA — verified against CV, TA thesis, Formulatrix internships & engineering toolstack
const engineeringDisciplines = [
  {
    id: 'mechanical',
    label: '01 / MECHANICAL',
    title: 'Mechanical Design & Fabrication',
    color: '#F05A22',
    skills: [
      '3D parametric CAD modeling (parts, assemblies, GD&T tolerancing & technical drawings)',
      'Custom Cycloidal Gearbox design (reduction ratio 1:50 & 1:25) for high-torque joints',
      'Additive manufacturing (FDM 3D printing PLA, slicing optimization & post-processing)',
      'CNC toolpath generation & machining preparation (OneCNC CAM)',
      'Production-oriented component design for LV Tip Automation (Formulatrix)',
    ],
    tools: [
      { name: 'onshape', logo: '/images/onshape-official.png' },
      { name: 'Fusion', logo: '/images/fusion360-official.png' },
      { name: 'Inventor', logo: '/images/inventor-official.png' },
      { name: 'Bambu Lab', logo: '/images/bambulab.svg' },
      { name: 'Ultimaker Cura', logo: '/images/ultimakercura.svg' },
      { name: 'Creality', logo: '/images/creality-official.png' },
      { name: 'OneCNC', logo: '/images/onecnc-clean.png' },
    ],
  },
  {
    id: 'electronics',
    label: '02 / ELECTRONICS',
    title: 'Electronics & PCB Design',
    color: '#F05A22',
    skills: [
      'Schematic capture & 2-layer PCB layout (EasyEDA & Autodesk EAGLE)',
      'Circuit simulation, SPICE analysis & virtual instrument testing (Proteus)',
      'PCB solder paste stencil panel design using Easy-PC (SMT line process)',
      'SMT production line workflows (pick-and-place, reflow soldering & inspection)',
      'Sensor wiring, harness diagrams & pinout documentation',
      'Assembly Work Instructions (AWI) & Standard Operating Procedures (SOP)',
    ],
    tools: [
      { name: 'EasyEDA', logo: '/images/easyeda.svg' },
      { name: 'Eagle', logo: '/images/eagle-official.png' },
      { name: 'Proteus', logo: '/images/proteus-official.png' },
      { name: 'Easy-PC', logo: '/images/easypc-clean.png' },
    ],
  },
  {
    id: 'embedded',
    label: '03 / EMBEDDED',
    title: 'Embedded Systems & Control',
    color: '#F05A22',
    skills: [
      'ARM Cortex-M microcontroller firmware (STM32F411, HAL library & register configuration)',
      'Real-time closed-loop control using AS5600 12-bit magnetic encoders (0.088° resolution)',
      'I2C bus multiplexing with TCA9548A 8-channel switch for multi-sensor integration',
      'Analytical Inverse Kinematics (IK) modeling & joint space trajectory execution',
      'S-curve motion profile implementation in C/C++ to eliminate inertial jerk & vibration',
      'Microcontroller flashing and on-chip debugging via ST-Link V2.1 (SWD protocol)',
    ],
    tools: [
      { name: 'STM32', logo: '/images/stm32-official.png' },
      { name: 'Arduino', logo: '/images/arduino.svg' },
      { name: 'VS Code', logo: '/images/vscode-official.png' },
      { name: 'C/C++', logo: '/images/cplusplus.svg' },
      { name: 'Python', logo: '/images/python-official.png' },
    ],
  },
  {
    id: 'productivity',
    label: '04 / PRODUCTIVITY & DOCUMENTATION',
    title: 'Engineering Productivity & Collaboration',
    color: '#F05A22',
    skills: [
      'Technical documentation, test report authoring & academic thesis publishing',
      'Engineering data analysis, calculation sheets & sensor test data logging',
      'Collaborative engineering design sprints, system flowcharts & mind-mapping',
      'Standardized production line work instructions & process verification workflows',
    ],
    tools: [
      { name: 'Google Docs', logo: '/images/googledocs.svg' },
      { name: 'Google Sheets', logo: '/images/googlesheets.svg' },
      { name: 'Google Drive', logo: '/images/googledrive.svg' },
      { name: 'Google Chat', logo: '/images/googlechat.svg' },
      { name: 'Google Workspace', logo: '/images/googleworkspace-official.png' },
      { name: 'Miro', logo: '/images/miro-official.png' },
    ],
  },
];

function DocumentModal({ doc, onClose }) {
  if (!doc) return null;
  const isPdf = doc.type === 'pdf';
  const [zoom, setZoom] = useState(1);

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.25, 0.75));
  const handleResetZoom = () => setZoom(1);

  // Lock scroll: overflow hidden on html+body — no layout shift, no fixed-child bug
  useEffect(() => {
    const html = document.documentElement;
    html.style.overflow  = 'hidden';
    document.body.style.overflow = 'hidden';
    return () => {
      html.style.overflow  = '';
      document.body.style.overflow = '';
    };
  }, []);

  // Close modal on Escape key
  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return createPortal(
    <div className="fh-modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="fh-modal-content" onClick={e => e.stopPropagation()}>
        <div className="fh-modal-header">
          <button className="fh-button fh-modal-back" onClick={onClose}>
            <ArrowLeft size={16} /> Close
          </button>
          <div className="fh-modal-title">
            <strong>{doc.title}</strong>
            <small>{doc.subtitle}</small>
          </div>
          
          <div className="fh-modal-header-actions">
            {!isPdf && (
              <div className="fh-zoom-controls">
                <button 
                  className="fh-zoom-btn" 
                  onClick={handleZoomOut} 
                  title="Zoom Out"
                  disabled={zoom <= 0.75}
                >
                  <ZoomOut size={16} />
                </button>
                <span className="fh-zoom-level" onClick={handleResetZoom} title="Reset Zoom (100%)">
                  {Math.round(zoom * 100)}%
                </span>
                <button 
                  className="fh-zoom-btn" 
                  onClick={handleZoomIn} 
                  title="Zoom In"
                  disabled={zoom >= 2.5}
                >
                  <ZoomIn size={16} />
                </button>
                {zoom !== 1 && (
                  <button 
                    className="fh-zoom-btn" 
                    onClick={handleResetZoom} 
                    title="Reset Zoom"
                  >
                    <RotateCcw size={14} />
                  </button>
                )}
              </div>
            )}
            <button className="fh-modal-close" onClick={onClose} aria-label="Close document view">
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="fh-modal-body">
          {isPdf ? (
            <iframe 
              src={`${doc.file}#view=FitH`} 
              title={doc.title} 
              className="fh-modal-iframe" 
            />
          ) : (
            <div className="fh-modal-img-container">
              <img 
                src={doc.image} 
                alt={doc.title} 
                className="fh-modal-image"
                style={{ 
                  transform: `scale(${zoom})`,
                  transformOrigin: 'top center',
                  transition: 'transform 0.2s ease-out'
                }} 
              />
            </div>
          )}
        </div>

        <div className="fh-modal-footer">
          <span className="fh-mono">{doc.institution} · {doc.period}</span>
          <div className="fh-modal-actions">
            {doc.downloadUrl && (
              <a 
                className="fh-button fh-primary" 
                href={doc.downloadUrl} 
                download={doc.downloadName || true}
              >
                <Download size={14} /> Download Document
              </a>
            )}
            <a 
              className="fh-button" 
              href={isPdf ? doc.file : doc.image} 
              target="_blank" 
              rel="noreferrer"
            >
              Open in New Tab <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

function Eyebrow({ index, children }) { return <div className="eyebrow"><span>{index} /</span><span>{children}</span></div>; }

function Header() {
  const [open, setOpen] = useState(false);
  const links = [['Projects', '#projects'], ['Experience', '#experience'], ['Skills', '#skills'], ['Education', '#education'], ['Contact', '#contact']];
  return <header className="site-header"><a href="/" className="brand"><span className="brand-mark">BA<span>.</span></span><span className="brand-name">Bayu Aji Trisasongko<small>Electrical engineering · Robotics</small></span></a><button className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button><nav className={open ? 'navigation is-open' : 'navigation'}>{links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}<span className="location">SEMARANG, ID</span></nav></header>;
}

function ProjectCard({ project }) {
  return <a className="project-card" href={`/projects/${project.slug}`}><div className="project-image"><img src={`/images/${project.image}`} alt={`${project.title} illustrative project visual`} loading="lazy" /><span className="image-stamp">ILLUSTRATIVE<br />PROJECT VISUAL</span><span className="card-index">{project.number}</span></div><div className="project-meta">{project.category}</div><div className="project-title-row"><h3>{project.title}</h3><ArrowUpRight size={18} strokeWidth={1.6} /></div><p>{project.summary}</p><div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></a>;
}

function Footer() { return <footer className="site-footer"><div className="page-width footer-inner"><a href="/" className="footer-brand">Bayu Aji Trisasongko</a><span className="mono">PERSONAL ENGINEERING PORTFOLIO / 2026</span><a href="#top" onClick={event => { event.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>BACK TO TOP ↑</a></div></footer>; }

function Detail({ project }) {
  const steps = [['A /', 'Problem', project.problem], ['B /', 'Design', project.design], ['C /', 'Prototype', project.prototype], ['D /', 'Test', project.test]];
  const bannerImg = project.detailBanner || project.image;
  const isRealPhoto = project.number === '01' || project.number === '02' || project.number === '03';
  return (
    <>
      <Header />
      <main className="detail-page page-width">
        <a className="back-link" href="/#projects"><ArrowLeft size={15} /> ALL PROJECTS</a>
        <div className="detail-heading">
          <Eyebrow index={project.number}>{project.category}</Eyebrow>
          <h1>{project.title}<span>.</span></h1>
          <p>{project.subtitle}</p>
        </div>
        <figure className="detail-visual">
          <img src={`/images/${bannerImg}`} alt={`${project.title} project documentation visual`} />
          <figcaption>
            <span>{project.label}</span>
            <span>{isRealPhoto ? 'OFFICIAL DOCUMENTATION & TEST DATA · TELKOM UNIVERSITY' : 'INDEPENDENT BUILD · PROJECT DOCUMENTATION'}</span>
          </figcaption>
        </figure>
        <div className="detail-story">
          <div className="story-intro">
            <span className="mono">PROJECT NOTES / {project.number}</span>
            <h2>From first principles<br />to physical form.</h2>
          </div>
          <div className="story-steps">
            {steps.map(([id, title, text]) => (
              <article key={id}>
                <span className="mono">{id}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="metrics-block">
          <span className="mono">VALIDATED TECHNICAL METRICS &amp; RESULTS</span>
          <div>
            {project.metrics.map(([value, label]) => (
              <article key={value}>
                <strong>{value}</strong>
                <span>{label}</span>
              </article>
            ))}
          </div>
          <p>{project.note}</p>
        </div>
        <a href="/#projects" className="next-project">
          <span className="mono">BACK TO SELECTED WORK</span>
          <span>Explore more projects <ArrowUpRight size={17} /></span>
        </a>
      </main>
      <Footer />
    </>
  );
}

function FigmaHeader({ activeSection = '' }) {
  const [open, setOpen] = useState(false);
  return <header className="fh-header"><a href="/" className="fh-brand"><span className="fh-mark">BA.</span><span className="fh-identity"><strong>Bayu Aji Trisasongko</strong><small>SEMARANG, CENTRAL JAVA</small></span></a><button className="fh-menu" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button><nav className={open ? 'fh-nav is-open' : 'fh-nav'}>{[['projects','Projects'],['experience','Experience'],['skills','Skills'],['education','Education'],['contact','Contact']].map(([id,label])=><a key={id} href={`#${id}`} onClick={()=>setOpen(false)} className={activeSection===id?'is-active':''}>{label}</a>)}<span><i /> AVAILABLE FOR WORK</span></nav></header>;
}


/** Animated counter display */
function StatNum({ target, decimals = 0, suffix = '' }) {
  const [val, ref] = useCountUp(target, decimals, 1500);
  return <strong ref={ref} className="fh-edu-metric-val">
    {val.toFixed(decimals)}<span>{suffix}</span>
  </strong>;
}

function FigmaHome() {
  const [activeDoc, setActiveDoc] = useState(null);
  useScrollReveal();
  const profileRef = useParallax(16);
  const activeSection = useScrollSpy(['projects','experience','skills','education','contact']);

  const disciplines = [
    [Boxes, 'Mechanical', '3D CAD modeling, mechanism design, and fabrication.'],
    [CircuitBoard, 'Electronics', 'Schematic design, circuit wiring, and hardware assembly.'],
    [Cpu, 'Embedded Control', 'Microcontrollers, sensors, and actuator integration.'],
    [Wrench, 'Prototyping', 'Physical build, functional testing, and validation workflows.'],
  ];

  return (
    <>
      <FigmaHeader activeSection={activeSection} />
      <main className="fh-main">
        {/* SECTION: INTRODUCTION / HERO */}
        <section className="fh-intro">
          <div className="fh-hero">
            <div className="fh-copy">
              <h1>PORTOFOLIO</h1>

              {/* BIO / INTRODUCTION TEXT LINKED TO EDUCATION */}
              <a href="#education" className="fh-bio-link">
                <h2>BAYU AJI TRISASONGKO</h2>
                <div className="fh-subtitle">Electrical Engineering Graduate | Robotics &amp; Mechatronics</div>
                <p>Bringing mechanical design, electronics and control together to turn engineering ideas into tangible prototypes. An electrical engineering fresh graduate with hands-on expertise in mechatronics, system and component fabrication. Currently eager to contribute to innovative teams in developing advanced robotics and complex systems.</p>
              </a>

              {/* ACTION BUTTONS (DEFAULT WHITE, HOVER BECOMES COLOR) */}
              <div className="fh-actions">
                <a className="fh-button" href="#projects">
                  View Projects <ArrowUpRight size={15} />
                </a>

                {/* CV BUTTON OPENS POPUP VIEWER WITH DOWNLOAD OPTION */}
                <button 
                  className="fh-button" 
                  onClick={() => setActiveDoc({
                    type: 'pdf',
                    file: '/CV_BAYU%20AJI%20TRISASONGKO.pdf',
                    title: 'Curriculum Vitae · Bayu Aji Trisasongko',
                    subtitle: 'Electrical Engineering & Robotics / Mechatronics',
                    institution: 'Telkom University & Formulatrix Alum',
                    period: 'Portfolio 2026',
                    downloadUrl: '/CV_BAYU%20AJI%20TRISASONGKO.pdf',
                    downloadName: 'CV_BAYU_AJI_TRISASONGKO.pdf'
                  })}
                >
                  <span>Curriculum Vitae</span>
                  <Eye size={15} />
                </button>

                <a className="fh-button fh-small" href="mailto:bayuajitrisasongko26@gmail.com">
                  <span>Email</span><Mail size={15} />
                </a>

                <a className="fh-button fh-small" href="https://linkedin.com/in/bayuajitrasasongko" target="_blank" rel="noreferrer">
                  <span>LinkedIn</span><Linkedin size={15} />
                </a>

                <a className="fh-button fh-small" href="https://wa.me/6282223769735" target="_blank" rel="noreferrer">
                  <span>WhatsApp</span><Phone size={15} />
                </a>
              </div>
            </div>

            <img className="fh-profile" src="/images/profile.png" alt="Profile Bayu Aji Trisasongko" ref={profileRef} />
          </div>

          {/* 4 DISCIPLINES / SKILL BAR - WRAPPED INTO 1 UNIFIED INTERACTIVE BUTTON */}
          <div className="fh-disciplines-wrapper">
            <a href="#skills" className="fh-disciplines-bar" title="Click to view full Engineering Stack & Tools">
              {disciplines.map(([Icon, title, text]) => (
                <div className="fh-discipline-col" key={title}>
                  <Icon />
                  <div>
                    <strong>{title}</strong>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </a>
          </div>
        </section>

        {/* SECTION 01: PROJECTS */}
        <section className="fh-projects fh-width" id="projects">
          <div className="fh-project-heading reveal">
            <div>
              <div className="fh-eyebrow"><span>01 /</span> PROJECTS</div>
              <h2>Engineering work, in practice.</h2>
            </div>
            <p>A collection of 5 projects, covering my final project, national competition, capstone design, and independent builds.</p>
          </div>
          <div className="fh-project-grid stagger">
            {projects.map(project => (
              <a className="fh-card" key={project.slug} href={`/projects/${project.slug}`} {...tilt(6)}>
                <img src={`/images/${project.image}`} alt={`${project.title} illustrative project drawing`} />
                <div className="fh-card-meta">
                  <span>{project.number} / {project.category.split(' · ')[0]}</span>
                  <span>{project.category.split(' · ')[1]}</span>
                </div>
                <div className="fh-card-title">
                  <h3>{project.title}</h3>
                  <ArrowUpRight />
                </div>
                <p>{project.summary}</p>
                <div className="fh-tags">
                  {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                </div>
                <small className="fh-card-foot">
                  {['Telkom University · Jan - Aug 2026', 'Mechanical team · ROOBICS', 'Telkom University · Capstone Design', 'Independent project - 2024', 'Independent project - 2023'][Number(project.number) - 1]}
                </small>
              </a>
            ))}
          </div>
          <div className="fh-note">Engineering documentation backed by official Telkom University thesis (Buku TA), Capstone design, and national robotics competition records.
          </div>
        </section>

        {/* SECTION 02: INDUSTRY EXPERIENCE (Formulatrix) */}
        {/* CARDS ARE INTERACTIVE BUTTONS THEMSELVES */}
        <section className="fh-experience" id="experience">
          <div className="fh-width fh-section">
            <div className="fh-section-heading reveal">
              <div>
                <div className="fh-eyebrow"><span>02 /</span> EXPERIENCE</div>
                <h2>Learning where design<br />meets production.</h2>
              </div>
              <p>Hands-on internships across mechanical and process engineering at PT Promanufacture Indonesia (Formulatrix).</p>
            </div>
            <div className="fh-experience-grid">
              <div className="fh-company reveal">
                <div className="fh-company-brand">
                  <img src="/images/formulatrix-logo-official.png" alt="Formulatrix" className="fh-company-logo" />
                </div>
                <h3>PT Promanufacture Indonesia</h3>
                <p>Experience with production-oriented CAD, fabrication and technical documentation grounded in real industrial systems.</p>

                <small>No confidential company materials are reproduced in this portfolio.</small>
              </div>

              <div className="fh-roles stagger">
                {/* PROCESS ENGINEERING CARD AS DIRECT BUTTON */}
                <article 
                  className="fh-role-card fh-clickable-card" {...tilt(5)}
                  onClick={() => setActiveDoc({
                    title: 'Letter of Work Certificate · Process Engineering',
                    subtitle: 'PT Promanufacture Indonesia (Formulatrix)',
                    image: '/images/letter-work-process-clean.png',
                    institution: 'PT Promanufacture Indonesia',
                    period: 'July 2025 - September 2025',
                    downloadUrl: '/LETTER_OF_WORK_CERTIFICATE_FORMULATRIX_2025_PROCESS_ENGINEERING.pdf',
                    downloadName: 'LETTER_OF_WORK_CERTIFICATE_FORMULATRIX_2025_PROCESS_ENGINEERING.pdf'
                  })}
                  title="Click to view Process Engineering certificate"
                >
                  <div className="fh-role-head">
                    <div className="fh-role-meta">
                      <h3>Process Engineering Intern</h3>
                      <span className="fh-mono">SALATIGA, JAWA TENGAH</span>
                    </div>
                    <div className="fh-role-right">
                      <span className="fh-role-date">July 2025 - September 2025</span>
                    </div>
                  </div>
                  <ul>
                    <li>Gained familiarity with SMT workflows and prepared assembly / wiring work instructions.</li>
                    <li>Designed PCB stencil panels in Easy-PC and exported Gerber files.</li>
                    <li>Designed production brackets in Onshape and produced 3D-printed parts.</li>
                  </ul>
                </article>

                {/* MECHANICAL ENGINEERING CARD AS DIRECT BUTTON */}
                <article 
                  className="fh-role-card fh-clickable-card" {...tilt(5)}
                  onClick={() => setActiveDoc({
                    title: 'Letter of Work Certificate · Mechanical Engineering',
                    subtitle: 'PT Promanufacture Indonesia (Formulatrix)',
                    image: '/images/letter-work-mechanical-clean.png',
                    institution: 'PT Promanufacture Indonesia',
                    period: 'May 2021 - October 2021',
                    downloadUrl: '/LETTER_OF_WORK_CERTIFICATE_FORMULATRIX_2021_MECHANICAL_ENGINEERING.pdf',
                    downloadName: 'LETTER_OF_WORK_CERTIFICATE_FORMULATRIX_2021_MECHANICAL_ENGINEERING.pdf'
                  })}
                  title="Click to view Mechanical Engineering certificate"
                >
                  <div className="fh-role-head">
                    <div className="fh-role-meta">
                      <h3>Mechanical Engineering Intern</h3>
                      <span className="fh-mono">SEMARANG, JAWA TENGAH</span>
                    </div>
                    <div className="fh-role-right">
                      <span className="fh-role-date">May 2021 - October 2021</span>
                    </div>
                  </div>
                  <ul>
                    <li>Designed Onshape components for LV Tip Automation.</li>
                    <li>Prepared OneCNC toolpaths for fabrication.</li>
                    <li>Supported fabrication, finishing and assembly work.</li>
                  </ul>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 03: ENGINEERING STACK & PRODUCTION ECOSYSTEM */}
        <section className="fh-skills" id="skills">
          <div className="fh-width fh-section">

            <div className="fh-section-heading reveal">
              <div>
                <div className="fh-eyebrow"><span>03 /</span> CAPABILITIES &amp; TOOLS</div>
                <h2>Engineering stack &amp;<br />production ecosystem.</h2>
              </div>
              <p>Tools and disciplines applied across thesis research, Formulatrix internships, and personal robotics projects. Only software confirmed in source documents is listed.</p>
            </div>

            {/* DISCIPLINES — 3-column grid */}
            <div className="fh-stack-grid stagger">
              {engineeringDisciplines.map(disc => (
                <article key={disc.id} className="fh-stack-card" {...tilt(4)}>
                  <div className="fh-stack-card-header" style={{ borderLeftColor: disc.color }}>
                    <span className="fh-stack-label" style={{ color: disc.color }}>{disc.label}</span>
                    <h3 className="fh-stack-title">{disc.title}</h3>
                  </div>

                  <ul className="fh-stack-skills">
                    {disc.skills.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>

                  <div className="fh-stack-tools">
                    <span className="fh-stack-tools-label">SOFTWARE &amp; TOOLS</span>
                    <div className="fh-stack-tool-chips">
                      {disc.tools.map(tool => (
                        <span key={tool.name} className="fh-stack-chip">
                          {tool.logo
                            ? <img src={tool.logo} alt={tool.name} className="fh-stack-chip-logo" />
                            : <span className="fh-stack-chip-wordmark">{tool.name.split('/')[0].trim().slice(0, 3).toUpperCase()}</span>
                          }
                          <span className="fh-stack-chip-name">{tool.name}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

                {/* SECTION 04: EDUCATION (CARDS ARE DIRECT BUTTONS) */}
        <section className="fh-education-section" id="education">
          <div className="fh-width fh-section">
            <div className="fh-section-heading reveal">
              <div>
                <div className="fh-eyebrow"><span>04 /</span> EDUCATION</div>
                <h2>Academic background &amp; qualifications.</h2>
              </div>
              <p>Academic history and verified qualifications in electrical engineering, mechatronics, and robotics.</p>
            </div>

            <div className="fh-edu-grid stagger">
                            {/* TELKOM UNIVERSITY CARD */}
              <article 
                className="fh-edu-card fh-clickable-card fh-edu-card-centered" {...tilt(4)}
                onClick={() => setActiveDoc({
                  title: 'Graduation Certificate (SKL) · Electrical Engineering',
                  subtitle: 'Telkom University · Bandung, Indonesia',
                  image: '/images/skl-telkom.jpeg',
                  institution: 'Telkom University',
                  period: 'Sep 2022 - Aug 2026',
                  downloadUrl: '/images/skl-telkom.jpeg',
                  downloadName: 'SKL_Telkom_University_Bayu_Aji.jpeg'
                })}
                title="Click to view Bachelor Graduation Certificate (SKL)"
              >
                <div className="fh-edu-center-header">
                  <div className="fh-edu-logo-wrapper">
                    <img src="/images/logo-telkom-shield.png" alt="Telkom University" className="fh-edu-center-logo" />
                  </div>
                  <h3>Telkom University</h3>
                  <strong className="fh-edu-major">Bachelor of Science in Electrical Engineering (S.T.)</strong>
                  <div className="fh-edu-badge-row">
                    <span className="fh-edu-badge"><GraduationCap size={13} /> UNDERGRADUATE DEGREE</span>
                    <span className="fh-edu-date">Sep 2022 - Aug 2026</span>
                  </div>
                </div>

                <p>Specialization in Robotics, Mechatronics &amp; Embedded Control Systems. Completed Final Capstone Thesis on a <em>5-DOF Robotic Manipulator Arm</em> with PLA 3D-printed cycloidal gearboxes and closed-loop magnetic sensing.</p>

                <div className="fh-edu-metrics">
                  <div className="fh-edu-metric-item">
                    <span className="fh-edu-metric-label">CUMULATIVE GPA</span>
                    <StatNum target={3.32} decimals={2} suffix=" / 4.00" />
                  </div>
                  <div className="fh-edu-metric-item">
                    <span className="fh-edu-metric-label">ACCREDITATION</span>
                    <strong className="fh-edu-metric-val">Unggul (BAN-PT) · IABEE</strong>
                  </div>
                  <div className="fh-edu-metric-item">
                    <span className="fh-edu-metric-label">TOTAL CREDITS</span>
                    <strong className="fh-edu-metric-val">154 SKS Passed</strong>
                  </div>
                </div>
              </article>

              {/* SMK NEGERI 7 SEMARANG CARD */}
              <article 
                className="fh-edu-card fh-clickable-card fh-edu-card-centered" {...tilt(4)}
                onClick={() => setActiveDoc({
                  title: 'Official Diploma & Certificate of Graduation (SKL)',
                  subtitle: 'SMK Negeri 7 Semarang · Mechatronics Engineering',
                  image: '/images/ijazah-smk.jpeg',
                  institution: 'SMK Negeri 7 Semarang',
                  period: 'Jul 2018 - Jul 2022',
                  downloadUrl: '/images/ijazah-smk.jpeg',
                  downloadName: 'Ijazah_SMK_7_Semarang_Bayu_Aji.jpeg'
                })}
                title="Click to view Vocational Diploma & Graduation Certificate"
              >
                <div className="fh-edu-center-header">
                  <div className="fh-edu-logo-wrapper">
                    <img src="/images/logo-smkn7-clean.png" alt="SMK Negeri 7 Semarang" className="fh-edu-center-logo fh-edu-center-logo-smk" />
                  </div>
                  <h3>SMK Negeri 7 Semarang</h3>
                  <strong className="fh-edu-major">Mechatronics Engineering (4-Year Program)</strong>
                  <div className="fh-edu-badge-row">
                    <span className="fh-edu-badge"><Award size={13} /> 4-YEAR VOCATIONAL</span>
                    <span className="fh-edu-date">Jul 2018 - Jul 2022</span>
                  </div>
                </div>

                <p>Comprehensive 4-year industrial curriculum covering automation systems, PLC programming, pneumatics &amp; hydraulics, mechanical CAD drafting, assembly, and precision CNC fabrication.</p>

                <div className="fh-edu-metrics">
                  <div className="fh-edu-metric-item">
                    <span className="fh-edu-metric-label">GRADUATION SCORE</span>
                    <StatNum target={90.00} decimals={2} suffix=" / 100" />
                  </div>
                  <div className="fh-edu-metric-item">
                    <span className="fh-edu-metric-label">ACCREDITATION</span>
                    <strong className="fh-edu-metric-val">Accredited "A" (BAN-S/M)</strong>
                  </div>
                  <div className="fh-edu-metric-item">
                    <span className="fh-edu-metric-label">PROGRAM TYPE</span>
                    <strong className="fh-edu-metric-val">STEM 4-Year Diploma</strong>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* SECTION 05: GET IN TOUCH */}
        <section className="fh-contact" id="contact">
          <div className="fh-width fh-contact-grid reveal">
            <div>
              <div className="fh-eyebrow"><span>05 /</span> GET IN TOUCH</div>
              <h2>Let's build<br />what comes next.</h2>
              <p>Have an engineering role in mind? Let's talk about robotics, mechatronics and building useful systems.</p>
              <button 
                className="fh-button" 
                onClick={() => setActiveDoc({
                  type: 'pdf',
                  file: '/CV_BAYU%20AJI%20TRISASONGKO.pdf',
                  title: 'Curriculum Vitae · Bayu Aji Trisasongko',
                  subtitle: 'Electrical Engineering & Robotics / Mechatronics',
                  institution: 'Telkom University & Formulatrix Alum',
                  period: 'Portfolio 2026',
                  downloadUrl: '/CV_BAYU%20AJI%20TRISASONGKO.pdf',
                  downloadName: 'CV_BAYU_AJI_TRISASONGKO.pdf'
                })}
              >
                <span>Curriculum Vitae</span>
                <Eye size={15} />
              </button>
            </div>
            <div className="fh-contact-list">
              <a href="mailto:bayuajitrisasongko26@gmail.com">
                <small>EMAIL</small>
                <strong>bayuajitrisasongko26@gmail.com</strong>
                <ArrowUpRight />
              </a>
              <a href="https://linkedin.com/in/bayuajitrasasongko" target="_blank" rel="noreferrer">
                <small>LINKEDIN</small>
                <strong>linkedin.com/in/bayuajitrasasongko</strong>
                <ArrowUpRight />
              </a>
              <a href="https://wa.me/6282223769735" target="_blank" rel="noreferrer">
                <small>WHATSAPP</small>
                <strong>+62 822 2376 9735</strong>
                <ArrowUpRight />
              </a>
              <div>
                <MapPin size={15} />
                <span>Semarang, Indonesia</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="fh-footer">
        <div className="fh-width">
          <span>Bayu Aji Trisasongko</span>
          <small>PERSONAL ENGINEERING PORTFOLIO / 2026</small>
          <a href="#top" onClick={event => { event.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>BACK TO TOP ↑</a>
        </div>
      </footer>

      {/* POPUP DOCUMENT / DIPLOMA / CV MODAL */}
      {activeDoc && <DocumentModal doc={activeDoc} onClose={() => setActiveDoc(null)} />}
    </>
  );
}

function App() {
  const slug = window.location.pathname.split('/').filter(Boolean).at(-1);
  if (slug === 'manipulator') {
    return (
      <>
        <FigmaHeader />
        <ManipulatorCaseStudy />
        <Footer />
      </>
    );
  }
  if (slug === 'solar-cooling') {
    return (
      <>
        <FigmaHeader />
        <SolarCoolingCaseStudy />
        <Footer />
      </>
    );
  }
  if (slug === 'krai-2025') {
    return (
      <>
        <FigmaHeader />
        <KRAICaseStudy />
        <Footer />
      </>
    );
  }
  const project = window.location.pathname.startsWith('/projects/') ? projects.find(item => item.slug === slug) : null;
  return project ? <Detail project={project} /> : <FigmaHome />;
}

createRoot(document.getElementById('root')).render(<App />);



