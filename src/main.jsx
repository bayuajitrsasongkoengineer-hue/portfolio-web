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
import LineFollowerCaseStudy from './LineFollowerCaseStudy';
import SumoRobotCaseStudy from './SumoRobotCaseStudy';
import { LanguageProvider, useLang, translations } from './translations';

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
    const handleScroll = () => {
      if (window.scrollY < 120) {
        setActive(ids[0]);
        return;
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80) {
        setActive(ids[ids.length - 1]);
        return;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-25% 0px -50% 0px', threshold: 0 }
    );
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      io.disconnect();
    };
  }, [ids.join(',')]);
  return active;
}

const SECTION_IDS = ['hero', 'projects', 'experience', 'skills', 'certifications', 'education', 'organizations', 'contact'];

const SIDE_NAV_ITEMS = [
  { id: 'hero', en: 'Home', idText: 'Beranda' },
  { id: 'projects', en: 'Projects', idText: 'Proyek' },
  { id: 'experience', en: 'Experience', idText: 'Pengalaman' },
  { id: 'skills', en: 'Skills', idText: 'Keahlian' },
  { id: 'certifications', en: 'Certifications', idText: 'Sertifikasi' },
  { id: 'education', en: 'Education', idText: 'Pendidikan' },
  { id: 'organizations', en: 'Organizations', idText: 'Organisasi' },
  { id: 'contact', en: 'Contact', idText: 'Kontak' },
];

function SideDotNav({ activeSection }) {
  const { lang } = useLang();
  const [hoveredId, setHoveredId] = useState(null);

  const handleClick = (e, id) => {
    e.preventDefault();
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fh-side-dots" aria-label="Section Navigation">
      {SIDE_NAV_ITEMS.map((item) => {
        const isActive = activeSection === item.id;
        const isHovered = hoveredId === item.id;
        const showLabel = isHovered;
        const label = lang === 'id' ? item.idText : item.en;

        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`fh-side-dot-item ${isActive ? 'is-active' : ''}`}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={(e) => handleClick(e, item.id)}
            aria-label={label}
            aria-current={isActive ? 'true' : undefined}
          >
            <span className={`fh-side-dot-label ${showLabel ? 'is-visible' : ''}`}>
              {label}
            </span>
            <span className="fh-side-dot-bullet">
              <span className="fh-side-dot-circle" />
            </span>
          </a>
        );
      })}
    </nav>
  );
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
      ['250–1,000 g', 'Stable validated payload range under closed-loop control'],
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
    test: 'Subsystem verified with temperature sensor accuracy within ±0.6°C against calibrated reference thermometer. Automated cooling duty cycle reduced surface temperature by >16°C back to 25°C.',
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
    summary: "Mechanical team member on Team ROOBICS (Telkom University) designing the pneumatic dribble and 3-roller shooting mechanisms, advancing to the National KRAI Stage at ITB Jatinangor.",
    tags: ['Mechanism Design', 'Pneumatics', 'Robotics Competition'],
    image: 'krai_robot_hero.png',
    detailBanner: 'krai_robot_hero.png',
    subtitle: 'Team ROOBICS — Mechanical contribution to ABU Robocon Indonesia (KRAI 2025).',
    label: 'NATIONAL COMPETITION · ROBOT BASKETBALL MECHANISMS',
    problem: 'Build a mobile robot mechanism capable of handling and shooting a regulation basketball within tournament rules and match constraints.',
    design: 'Designed a pneumatic dribbler (1 vertical pusher + 2 gripper cylinders) and a 3-roller flywheel shooter powered by RS775 DC motors via timing pulleys.',
    prototype: 'Fabricated aluminum structures, assembled pneumatic components, and conducted workshop and court testing with Team ROOBICS.',
    test: 'Team ROOBICS successfully qualified through regional preliminaries and advanced to the National KRAI 2025 stage at ITB Jatinangor.',
    metrics: [
      ['3 ROLLERS', 'Flywheel shooter powered by RS775 motors'],
      ['5–6 BAR', 'Pneumatic dribble working pressure'],
      ['3 CYLINDERS', '1 pusher + 2 gripper actuators'],
      ['NATIONAL', 'Advanced to National Stage at ITB Jatinangor']
    ],
    note: 'Verified from official KRAI 2025 National Finalist Certificate & Team ROOBICS documentation.'
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
      ['4× PG24 MOTORS', 'Independent planetary high-torque drive axles'],
      ['3S LIPO / L298N', '11.1V high-current motor power delivery'],
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
    title: 'CAD Modeling & Fabrication',
    color: '#F05A22',
    skills: [
      '3D parametric CAD modeling, assemblies & engineering drawings',
      'Mechanical transmission & custom Cycloidal Gearbox design',
      'Rapid mechanical prototyping & FDM 3D printing workflows',
      'Workshop bench fabrication, manual hand tools & power tools',
    ],
    tools: [
      { name: 'Onshape', logo: '/images/onshape-official.png' },
      { name: 'Fusion 360', logo: '/images/fusion360-official.png' },
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
    title: 'PCB Design & Wiring',
    color: '#F05A22',
    skills: [
      'Schematic capture design & multilayer PCB routing layout',
      'Electronic circuit simulation & virtual instrument testing',
      'Wiring harness layout, sensor cabling & pinout integration',
      'SMT line workflows (solder stencil, pick-and-place & reflow)',
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
    label: '03 / EMBEDDED SYSTEMS',
    title: 'Firmware & Control',
    color: '#F05A22',
    skills: [
      'Microcontroller firmware programming (STM32, ESP32, Arduino)',
      'Real-time closed-loop control systems & sensor feedback',
      'Serial communication protocols & I2C bus multiplexing',
      'Analytical kinematics modeling & motion trajectory planning',
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
    label: '04 / ENGINEERING PRODUCTIVITY',
    title: 'Collaboration & Documentation',
    color: '#F05A22',
    skills: [
      'Technical documentation authoring, test reports & thesis book',
      'Engineering data analysis, calculation sheets & sensor test logs',
      'System workflow modeling (flowcharts & engineering blocks)',
      'Standardized production documents (SOP & Work Instructions)',
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
  const { lang, t } = useLang();
  const isCv = doc.isCv === true;
  const isPdf = isCv ? true : doc.type === 'pdf';
  
  // CV Language & Format Switcher state - defaults to current portfolio language!
  const [cvLang, setCvLang] = useState(lang === 'id' ? 'id' : 'en'); // 'en' | 'id'
  const [cvFormat, setCvFormat] = useState('pdf'); // 'pdf' | 'docx'

  const cvFiles = {
    en: {
      pdf: '/CV_Bayu_Aji_Trisasongko_EN.pdf',
      docx: '/CV_Bayu_Aji_Trisasongko_EN.docx',
      downloadPdf: 'CV_Bayu_Aji_Trisasongko_EN.pdf',
      downloadDocx: 'CV_Bayu_Aji_Trisasongko_EN.docx',
    },
    id: {
      pdf: '/CV_Bayu_Aji_Trisasongko_ID.pdf',
      docx: '/CV_Bayu_Aji_Trisasongko_ID.docx',
      downloadPdf: 'CV_Bayu_Aji_Trisasongko_ID.pdf',
      downloadDocx: 'CV_Bayu_Aji_Trisasongko_ID.docx',
    }
  };

  const activePdfUrl = isCv ? cvFiles[cvLang].pdf : doc.file;
  const activeDownloadUrl = isCv 
    ? (cvFormat === 'docx' ? cvFiles[cvLang].docx : cvFiles[cvLang].pdf) 
    : doc.downloadUrl;
  const activeDownloadName = isCv 
    ? (cvFormat === 'docx' ? cvFiles[cvLang].downloadDocx : cvFiles[cvLang].downloadPdf) 
    : (doc.downloadName || true);

  const [zoom, setZoom] = useState(1);

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.25, 0.75));
  const handleResetZoom = () => setZoom(1);

  // Lock scroll: overflow hidden on html+body
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
            <ArrowLeft size={16} /> {lang === 'id' ? 'Tutup' : 'Close'}
          </button>
          
          <div className="fh-modal-title">
            <strong>{doc.title}</strong>
            <small>{doc.subtitle}</small>
          </div>

          {/* CV Language Switcher in Header */}
          {isCv && (
            <div style={{ display: 'inline-flex', background: '#F1F5F9', padding: '3px', borderRadius: '6px', border: '1px solid #E2E8F0', gap: '3px' }}>
              <button 
                type="button"
                onClick={() => setCvLang('en')} 
                style={{ 
                  padding: '5px 12px', 
                  fontSize: '11px', 
                  fontFamily: 'DM Mono, monospace', 
                  fontWeight: 600, 
                  border: 'none', 
                  borderRadius: '4px', 
                  cursor: 'pointer',
                  background: cvLang === 'en' ? '#F05A22' : 'transparent',
                  color: cvLang === 'en' ? '#FFFFFF' : '#475569',
                  transition: 'all 0.15s ease'
                }}
              >
                EN (English ATS)
              </button>
              <button 
                type="button"
                onClick={() => setCvLang('id')} 
                style={{ 
                  padding: '5px 12px', 
                  fontSize: '11px', 
                  fontFamily: 'DM Mono, monospace', 
                  fontWeight: 600, 
                  border: 'none', 
                  borderRadius: '4px', 
                  cursor: 'pointer',
                  background: cvLang === 'id' ? '#F05A22' : 'transparent',
                  color: cvLang === 'id' ? '#FFFFFF' : '#475569',
                  transition: 'all 0.15s ease'
                }}
              >
                ID (Bahasa Indonesia)
              </button>
            </div>
          )}
          
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
              key={activePdfUrl}
              src={`${activePdfUrl}#view=FitH`} 
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
          <div className="fh-modal-actions" style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            {isCv ? (
              <>
                <div style={{ display: 'inline-flex', background: '#F1F5F9', padding: '2px', borderRadius: '4px', border: '1px solid #E2E8F0', gap: '2px', marginRight: '6px' }}>
                  <button 
                    type="button"
                    onClick={() => setCvFormat('pdf')} 
                    style={{ 
                      padding: '4px 8px', 
                      fontSize: '10.5px', 
                      fontFamily: 'DM Mono, monospace', 
                      fontWeight: 600, 
                      border: 'none', 
                      borderRadius: '3px', 
                      cursor: 'pointer',
                      background: cvFormat === 'pdf' ? '#0F172A' : 'transparent',
                      color: cvFormat === 'pdf' ? '#FFFFFF' : '#475569'
                    }}
                  >
                    PDF
                  </button>
                  <button 
                    type="button"
                    onClick={() => setCvFormat('docx')} 
                    style={{ 
                      padding: '4px 8px', 
                      fontSize: '10.5px', 
                      fontFamily: 'DM Mono, monospace', 
                      fontWeight: 600, 
                      border: 'none', 
                      borderRadius: '3px', 
                      cursor: 'pointer',
                      background: cvFormat === 'docx' ? '#0F172A' : 'transparent',
                      color: cvFormat === 'docx' ? '#FFFFFF' : '#475569'
                    }}
                  >
                    DOCX (Word)
                  </button>
                </div>
                <a 
                  className="fh-button fh-primary" 
                  href={activeDownloadUrl} 
                  download={activeDownloadName}
                >
                  <Download size={14} /> {lang === 'id' ? 'Unduh CV' : 'Download CV'} ({cvLang.toUpperCase()} · {cvFormat.toUpperCase()})
                </a>
                <a 
                  className="fh-button" 
                  href={activePdfUrl} 
                  target="_blank" 
                  rel="noreferrer"
                >
                  {lang === 'id' ? 'Buka di Tab Baru' : 'Open in New Tab'} <ExternalLink size={14} />
                </a>
              </>
            ) : (
              <>
                {doc.downloadUrl && (
                  <a 
                    className="fh-button fh-primary" 
                    href={doc.downloadUrl} 
                    download={doc.downloadName || true}
                  >
                    <Download size={14} /> {lang === 'id' ? 'Unduh Dokumen' : 'Download Document'}
                  </a>
                )}
                <a 
                  className="fh-button" 
                  href={isPdf ? doc.file : doc.image} 
                  target="_blank" 
                  rel="noreferrer"
                >
                  {lang === 'id' ? 'Buka di Tab Baru' : 'Open in New Tab'} <ExternalLink size={14} />
                </a>
              </>
            )}
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
  return <header className="site-header"><a href="/" className="brand"><img src="/favicon.png" alt="Manipulator Arm Logo" style={{ width: "32px", height: "32px", borderRadius: "6px", objectFit: "contain" }} /><span className="brand-name">Bayu Aji Trisasongko<small>Electrical engineering · Robotics</small></span></a><button className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button><nav className={open ? 'navigation is-open' : 'navigation'}>{links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}<span className="location">SEMARANG, ID</span></nav></header>;
}

function ProjectCard({ project }) {
  return <a className="project-card" href={`/projects/${project.slug}`}><div className="project-image"><img src={`/images/${project.image}`} alt={`${project.title} illustrative project visual`} loading="lazy" /><span className="image-stamp">ILLUSTRATIVE<br />PROJECT VISUAL</span><span className="card-index">{project.number}</span></div><div className="project-meta">{project.category}</div><div className="project-title-row"><h3>{project.title}</h3><ArrowUpRight size={18} strokeWidth={1.6} /></div><p>{project.summary}</p><div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></a>;
}

function Footer() {
  const { t } = useLang();
  return <footer className="site-footer"><div className="page-width footer-inner"><a href="/" className="footer-brand">Bayu Aji Trisasongko</a><span className="mono">{t.footer.label}</span><a href="#top" onClick={event => { event.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>{t.footer.backToTop}</a></div></footer>;
}

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
  const { lang, setLang, t } = useLang();
  const isSubpage = typeof window !== 'undefined' && window.location.pathname !== '/' && window.location.pathname !== '';

  return (
    <header className="fh-header">
      <a href="/" className="fh-brand">
        <img 
          src="/images/profile.png" 
          alt="Bayu Aji Trisasongko" 
          className="fh-mark fh-brand-avatar" 
        />
        <span className="fh-identity">
          <strong>Bayu Aji Trisasongko</strong>
          <small>{t.nav.location || (lang === 'id' ? 'SEMARANG, JAWA TENGAH' : 'SEMARANG, CENTRAL JAVA')}</small>
        </span>
      </a>

      <div className="fh-header-right">
        <nav className={open ? 'fh-nav is-open' : 'fh-nav'}>
          {t.nav.links.map(([id, label]) => (
            <a 
              key={id} 
              href={isSubpage ? `/#${id}` : `#${id}`} 
              onClick={() => setOpen(false)} 
              className={activeSection === id ? 'is-active' : ''}
            >
              {label}
            </a>
          ))}
          <span><i /> {t.nav.available}</span>
        </nav>

        <div className="fh-lang-toggle" role="group" aria-label="Language Selector">
          <button 
            type="button" 
            className={`fh-lang-btn ${lang === 'id' ? 'is-active' : ''}`}
            onClick={() => setLang('id')}
            aria-label="Bahasa Indonesia"
            title="Bahasa Indonesia"
          >
            ID
          </button>
          <button 
            type="button" 
            className={`fh-lang-btn ${lang === 'en' ? 'is-active' : ''}`}
            onClick={() => setLang('en')}
            aria-label="English"
            title="English"
          >
            EN
          </button>
        </div>

        <button 
          className="fh-menu" 
          aria-label={open ? 'Close navigation' : 'Open navigation'} 
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
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
  const { lang, t } = useLang();
  useScrollReveal();
  const profileRef = useParallax(16);
  const activeSection = useScrollSpy(SECTION_IDS);

  const disciplines = [
    [Boxes, 'Mechanical', '3D CAD modeling, mechanism design, and fabrication.'],
    [CircuitBoard, 'Electronics', 'Schematic design, circuit wiring, and hardware assembly.'],
    [Cpu, 'Embedded Control', 'Microcontrollers, sensors, and actuator integration.'],
    [Wrench, 'Prototyping', 'Physical build, functional testing, and validation workflows.'],
  ];

  return (
    <>
      <FigmaHeader activeSection={activeSection} />
      <SideDotNav activeSection={activeSection} />
      <main className="fh-main">
        {/* SECTION: INTRODUCTION / HERO */}
        <section className="fh-intro" id="hero">
          <div className="fh-hero">
            <div className="fh-copy">
              <h1>{t.hero?.portfolioTitle || (lang === 'id' ? 'PORTOFOLIO' : 'PORTFOLIO')}</h1>

              {/* BIO / INTRODUCTION TEXT */}
              <div className="fh-bio-link" style={{ cursor: 'default' }}>
                <h2>BAYU AJI TRISASONGKO</h2>
                <div className="fh-subtitle">Electrical Engineering Graduate | Mechanical Design, Electronics, Mechatronics &amp; Robotics</div>
                <p>Bringing mechanical design, electronics, and control together to turn engineering ideas into tangible prototypes. An electrical engineering graduate with a solid hands-on foundation in mechatronics, component fabrication, and rapid prototyping. Eager to contribute and learn within engineering teams developing robotics, automation, and precision mechanical systems.</p>
              </div>

              {/* ACTION BUTTONS (DEFAULT WHITE, HOVER BECOMES COLOR) */}
              <div className="fh-actions">
                <a className="fh-button" href="#projects">
                  {t.hero?.viewProjects || (lang === 'id' ? 'Lihat Proyek' : 'View Projects')} <ArrowUpRight size={15} />
                </a>

                {/* CV BUTTON OPENS POPUP VIEWER WITH DOWNLOAD OPTION */}
                <button 
                  className="fh-button" 
                  onClick={() => setActiveDoc({
                    isCv: true,
                    type: 'pdf',
                    title: 'Curriculum Vitae · Bayu Aji Trisasongko',
                    subtitle: 'Electrical Engineering Graduate · Telkom University 2026',
                    institution: 'Telkom University & Formulatrix Alum',
                    period: 'Updated October 2026'
                  })}
                >
                  <span>Curriculum Vitae</span>
                  <Eye size={15} />
                </button>

                <a className="fh-button fh-small" href="mailto:bayuajitrisasongko26@gmail.com">
                  <span>Email</span><Mail size={15} />
                </a>

                <a className="fh-button fh-small" href="https://linkedin.com/in/bayuajitrisasongko" target="_blank" rel="noreferrer">
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
              <div className="fh-eyebrow"><span>01 /</span> {lang === 'id' ? 'PROYEK' : 'PROJECTS'}</div>
              <h2>{t.projectsSection.title}</h2>
            </div>
            <p>{t.projectsSection.subtitle}</p>
          </div>
          <div className="fh-project-grid stagger">
            {projects.map((project, idx) => {
              const tp = t.projects[idx] || project;
              return (
                <a className="fh-card" key={project.slug} href={`/projects/${project.slug}`} {...tilt(6)}>
                  <div className="fh-card-meta">
                    <span>{project.number} / {tp.label}</span>
                  </div>
                  <img src={`/images/${project.image}`} alt={`${tp.title} illustrative project drawing`} />
                  <div className="fh-card-title">
                    <h3>{tp.title}</h3>
                    <ArrowUpRight />
                  </div>
                  <p>{tp.summary}</p>
                  <div className="fh-tags">
                    {tp.tags.map(tag => <span key={tag}>{tag}</span>)}
                  </div>
                  <div className="fh-card-detail-cta">
                    <Eye size={13} />
                    <span>{lang === 'id' ? 'Klik untuk melihat detail' : 'Click to view details'}</span>
                  </div>
                </a>
              );
            })}
          </div>
          {t.projectsSection.footnote ? <div className="fh-note">{t.projectsSection.footnote}</div> : null}
        </section>

        {/* SECTION 02: INDUSTRY EXPERIENCE (Formulatrix) */}
        {/* CARDS ARE INTERACTIVE BUTTONS THEMSELVES */}
        <section className="fh-experience" id="experience">
          <div className="fh-width fh-section">
            <div className="fh-section-heading reveal">
              <div>
                <div className="fh-eyebrow"><span>02 /</span> {lang === 'id' ? 'PENGALAMAN MAGANG' : 'EXPERIENCE'}</div>
                <h2>Hands-on practice in<br />manufacturing environments.</h2>
              </div>
              <p>{t.experienceSection.subtitle}</p>
            </div>
            <div className="fh-experience-grid">
              <div className="fh-company reveal">
                <div className="fh-company-brand">
                  <img src="/images/formulatrix-logo-official.png" alt="Formulatrix" className="fh-company-logo" />
                </div>
                <h3>PT Promanufacture Indonesia</h3>
                <p>
                  {lang === 'id' 
                    ? 'Pemodelan CAD mekanik, proses fabrikasi bengkel, dan dokumentasi teknis perakitan di fasilitas manufaktur.'
                    : 'Hands-on CAD modeling, workshop fabrication, and assembly technical documentation in a manufacturing environment.'
                  }
                </p>
              </div>

              <div className="fh-roles stagger">
                {/* PROCESS ENGINEERING CARD AS DIRECT BUTTON */}
                <article 
                  className="fh-role-card fh-clickable-card" {...tilt(5)}
                  onClick={() => setActiveDoc({
                    title: lang === 'id' ? 'Surat Keterangan Kerja · Process Engineering' : 'Letter of Work Certificate · Process Engineering',
                    subtitle: 'PT Promanufacture Indonesia (Formulatrix)',
                    image: '/images/letter-work-process-clean.png',
                    institution: 'PT Promanufacture Indonesia',
                    period: t.experienceSection.roles[0].date,
                    downloadUrl: '/LETTER_OF_WORK_CERTIFICATE_FORMULATRIX_2025_PROCESS_ENGINEERING.pdf',
                    downloadName: 'LETTER_OF_WORK_CERTIFICATE_FORMULATRIX_2025_PROCESS_ENGINEERING.pdf'
                  })}
                  title={lang === 'id' ? 'Klik untuk melihat sertifikat Process Engineering' : 'Click to view Process Engineering certificate'}
                >
                  <div className="fh-role-head">
                    <div className="fh-role-meta">
                      <h3>{t.experienceSection.roles[0].title}</h3>
                      <span className="fh-mono">{lang === 'id' ? 'SALATIGA, JAWA TENGAH' : 'SALATIGA, CENTRAL JAVA'}</span>
                    </div>
                    <div className="fh-role-right">
                      <span className="fh-role-date">{t.experienceSection.roles[0].date}</span>
                    </div>
                  </div>
                  <ul>
                    {t.experienceSection.roles[0].bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                </article>

                {/* MECHANICAL ENGINEERING CARD AS DIRECT BUTTON */}
                <article 
                  className="fh-role-card fh-clickable-card" {...tilt(5)}
                  onClick={() => setActiveDoc({
                    title: lang === 'id' ? 'Surat Keterangan Kerja · Mechanical Engineering' : 'Letter of Work Certificate · Mechanical Engineering',
                    subtitle: 'PT Promanufacture Indonesia (Formulatrix)',
                    image: '/images/letter-work-mechanical-clean.png',
                    institution: 'PT Promanufacture Indonesia',
                    period: t.experienceSection.roles[1].date,
                    downloadUrl: '/LETTER_OF_WORK_CERTIFICATE_FORMULATRIX_2021_MECHANICAL_ENGINEERING.pdf',
                    downloadName: 'LETTER_OF_WORK_CERTIFICATE_FORMULATRIX_2021_MECHANICAL_ENGINEERING.pdf'
                  })}
                  title={lang === 'id' ? 'Klik untuk melihat sertifikat Mechanical Engineering' : 'Click to view Mechanical Engineering certificate'}
                >
                  <div className="fh-role-head">
                    <div className="fh-role-meta">
                      <h3>{t.experienceSection.roles[1].title}</h3>
                      <span className="fh-mono">{lang === 'id' ? 'SEMARANG, JAWA TENGAH' : 'SEMARANG, CENTRAL JAVA'}</span>
                    </div>
                    <div className="fh-role-right">
                      <span className="fh-role-date">{t.experienceSection.roles[1].date}</span>
                    </div>
                  </div>
                  <ul>
                    {t.experienceSection.roles[1].bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 03: SKILLS / KEAHLIAN */}
        <section className="fh-skills" id="skills">
          <div className="fh-width fh-section">

            <div className="fh-section-heading reveal">
              <div>
                <div className="fh-eyebrow"><span>03 /</span> {lang === 'id' ? 'KEAHLIAN' : 'SKILLS'}</div>
                <h2>{lang === 'id' ? <>Keahlian teknis &amp;<br />perangkat kerja.</> : <>Technical skills &amp;<br />engineering tools.</>}</h2>
              </div>
              <p>{t.skillsSection.subtitle}</p>
            </div>

            {/* DISCIPLINES — 3-column grid */}
            <div className="fh-stack-grid stagger">
              {(t.skillsSection.disciplines || engineeringDisciplines).map(disc => {
                const baseDisc = engineeringDisciplines.find(d => d.id === disc.id) || disc;
                const tools = baseDisc.tools || [];
                const color = baseDisc.color || '#F05A22';
                return (
                  <article key={disc.id} className="fh-stack-card" {...tilt(4)}>
                    <div className="fh-stack-card-header" style={{ borderLeftColor: color }}>
                      <span className="fh-stack-label" style={{ color: color }}>{disc.label}</span>
                      <h3 className="fh-stack-title">{disc.title}</h3>
                    </div>

                    <ul className="fh-stack-skills">
                      {disc.skills.map((s, i) => (
                        <li key={i}>{s}</li>
                      ))}
                    </ul>

                    <div className="fh-stack-tools">
                      <span className="fh-stack-tools-label">{lang === 'id' ? 'SOFTWARE & ALAT KERJA' : 'SOFTWARE & TOOLS'}</span>
                      <div className="fh-stack-tool-chips">
                        {tools.map(tool => (
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
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 04: CERTIFICATIONS & CREDENTIALS */}
        <section className="fh-certifications-section" id="certifications">
          <div className="fh-width fh-section">
            <div className="fh-section-heading reveal">
              <div>
                <div className="fh-eyebrow"><span>04 /</span> {lang === 'id' ? 'SERTIFIKASI & KREDENSIAL' : 'CERTIFICATIONS & CREDENTIALS'}</div>
                <h2>{t.certsSection.title}</h2>
              </div>
              <p>{t.certsSection.subtitle}</p>
            </div>

            <div className="fh-cert-grid stagger">
              {/* CERT 1: TÜV RHEINLAND & FESTO */}
              <article 
                className="fh-stack-card fh-clickable-card" {...tilt(4)}
                onClick={() => setActiveDoc({
                  title: 'Pneumatic System Maintenance Technician',
                  subtitle: 'TÜV Rheinland Group & FESTO Didactic',
                  image: '/images/cert_festo.png',
                  institution: 'TÜV Rheinland Group',
                  period: t.certsSection.cert1.period,
                  downloadUrl: '/Sertifikat_FESTO_TUV_Rheinland.pdf',
                  downloadName: 'Sertifikat_FESTO_TUV_Rheinland.pdf'
                })}
                style={{ padding: '24px 22px', borderRadius: '6px', cursor: 'pointer' }}
                title={lang === 'id' ? 'Klik untuk melihat Sertifikat TÜV Rheinland & FESTO' : 'Click to view TÜV Rheinland & FESTO Certificate'}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span className="fh-stack-label" style={{ color: '#0284C7', marginBottom: 0 }}>{t.certsSection.cert1.label}</span>
                  <span className="fh-role-date">{t.certsSection.cert1.period.split(' · ')[0]}</span>
                </div>
                <div className="fh-cert-thumb-box">
                  <img src="/images/cert_festo.png" alt="Sertifikat FESTO & TÜV Rheinland" className="fh-cert-thumb-img" loading="lazy" />
                </div>
                <h3 style={{ margin: '0 0 6px', fontSize: '18px', fontWeight: 700, color: '#111827', minHeight: '48px', display: 'flex', alignItems: 'center' }}>{t.certsSection.cert1.title}</h3>
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#4B5563', marginBottom: '10px' }}>
                  Credential ID: 62372/21/1185 · {lang === 'id' ? 'Masa Berlaku Tanpa Batas' : 'Unlimited Validity'}
                </div>
                <p style={{ margin: 0, fontSize: '13.5px', color: '#4B5563', lineHeight: 1.6 }}>
                  {t.certsSection.cert1.desc}
                </p>
                <div style={{ marginTop: 'auto', paddingTop: '16px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 600, color: '#0284C7' }}>
                  <Eye size={13} /> {t.certsSection.cert1.cta}
                </div>
              </article>

              {/* CERT 2: KRAI 2025 ROBOCON */}
              <article 
                className="fh-stack-card fh-clickable-card" {...tilt(4)}
                onClick={() => setActiveDoc({
                  title: lang === 'id' ? 'Sertifikat Finalis Tingkat Nasional - KRAI 2025' : 'National Finalist Certificate - KRAI 2025',
                  subtitle: 'Belmawa Kemdiktisaintek & ITB · No: 5468HK/IT1.B04.4/KM/2025',
                  image: '/images/krai_cert_finalis_nasional.png',
                  institution: 'Belmawa Kemdiktisaintek & ITB',
                  period: t.certsSection.cert2.period,
                  downloadUrl: '/Sertifikat_KRAI_2025_Bayu_Aji.pdf',
                  downloadName: 'Sertifikat_KRAI_2025_Finalis_Nasional_Bayu_Aji.pdf'
                })}
                style={{ padding: '24px 22px', borderRadius: '6px', cursor: 'pointer' }}
                title={lang === 'id' ? 'Klik untuk melihat Sertifikat Finalis KRAI 2025' : 'Click to view KRAI 2025 Finalist Certificate'}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span className="fh-stack-label" style={{ color: '#D97706', marginBottom: 0 }}>{t.certsSection.cert2.label}</span>
                  <span className="fh-role-date">{t.certsSection.cert2.period}</span>
                </div>
                <div className="fh-cert-thumb-box">
                  <img src="/images/krai_cert_finalis_nasional.png" alt="Sertifikat Finalis KRAI 2025" className="fh-cert-thumb-img" loading="lazy" />
                </div>
                <h3 style={{ margin: '0 0 6px', fontSize: '18px', fontWeight: 700, color: '#111827', minHeight: '48px', display: 'flex', alignItems: 'center' }}>{t.certsSection.cert2.title}</h3>
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#4B5563', marginBottom: '10px' }}>
                  Belmawa Kemdiktisaintek &amp; ITB · Team ROOBICS
                </div>
                <p style={{ margin: 0, fontSize: '13.5px', color: '#4B5563', lineHeight: 1.6 }}>
                  {t.certsSection.cert2.desc}
                </p>
                <div style={{ marginTop: 'auto', paddingTop: '16px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 600, color: '#D97706' }}>
                  <Eye size={13} /> {t.certsSection.cert2.cta}
                </div>
              </article>

              {/* CERT 3: ENGLISH PROFICIENCY TEST */}
              <article 
                className="fh-stack-card fh-clickable-card" {...tilt(4)}
                onClick={() => setActiveDoc({
                  title: 'English Proficiency Test (EPrT) - Score 450',
                  subtitle: 'Telkom University Language Center',
                  image: '/images/eprt-cert.png',
                  institution: 'Telkom University Language Center',
                  period: 'June 2026 · Valid until June 2028',
                  downloadUrl: '/EPRT_Telkom_University.pdf',
                  downloadName: 'EPRT_Telkom_University_Bayu_Aji.pdf'
                })}
                style={{ padding: '24px 22px', borderRadius: '6px', cursor: 'pointer' }}
                title={lang === 'id' ? 'Klik untuk melihat Sertifikat EPrT' : 'Click to view EPrT Certificate'}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span className="fh-stack-label" style={{ color: '#B91C1C', marginBottom: 0 }}>{t.certsSection.cert3.label}</span>
                  <span className="fh-role-date">{t.certsSection.cert3.period}</span>
                </div>
                <div className="fh-cert-thumb-box">
                  <img src="/images/eprt-cert.png" alt="Sertifikat EPrT Telkom University" className="fh-cert-thumb-img" loading="lazy" />
                </div>
                <h3 style={{ margin: '0 0 6px', fontSize: '18px', fontWeight: 700, color: '#111827', minHeight: '48px', display: 'flex', alignItems: 'center' }}>{t.certsSection.cert3.title}</h3>
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#4B5563', marginBottom: '10px' }}>
                  {lang === 'id' ? 'Skor Total: 450 (Listening: 47, Grammar: 41, Reading: 47)' : 'Total Score: 450 (Listening: 47, Grammar: 41, Reading: 47)'}
                </div>
                <p style={{ margin: 0, fontSize: '13.5px', color: '#4B5563', lineHeight: 1.6 }}>
                  {t.certsSection.cert3.desc}
                </p>
                <div style={{ marginTop: 'auto', paddingTop: '16px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 600, color: '#B91C1C' }}>
                  <Eye size={13} /> {t.certsSection.cert3.cta}
                </div>
              </article>

              {/* CERT 4: TEL-U CAREER COACH (STAR) - INTRAPRENEURSHIP */}
              <article 
                className="fh-stack-card fh-clickable-card" {...tilt(4)}
                onClick={() => setActiveDoc({
                  title: 'Tel-U Career Coach (STAR) - Intrapreneurship',
                  subtitle: lang === 'id' ? 'Direktorat Kemahasiswaan, Karier, dan Alumni · Universitas Telkom' : 'Directorate of Student Affairs, Career & Alumni · Telkom University',
                  image: '/images/cert_career_coach.png',
                  institution: 'Universitas Telkom',
                  period: t.certsSection.cert4.period,
                  downloadUrl: '/SERTIFIKAT_TEL-U_CAREER_COACH_-_INTRAPRENEUR.pdf',
                  downloadName: 'SERTIFIKAT_TEL-U_CAREER_COACH_-_INTRAPRENEUR.pdf'
                })}
                style={{ padding: '24px 22px', borderRadius: '6px', cursor: 'pointer' }}
                title={lang === 'id' ? 'Klik untuk melihat Sertifikat Career Coach Telkom University' : 'Click to view Career Coach Telkom University Certificate'}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span className="fh-stack-label" style={{ color: '#8B5CF6', marginBottom: 0 }}>{t.certsSection.cert4.label}</span>
                  <span className="fh-role-date">2025</span>
                </div>
                <div className="fh-cert-thumb-box">
                  <img src="/images/cert_career_coach.png" alt="Sertifikat Career Coach Telkom University" className="fh-cert-thumb-img" loading="lazy" />
                </div>
                <h3 style={{ margin: '0 0 6px', fontSize: '18px', fontWeight: 700, color: '#111827', minHeight: '48px', display: 'flex', alignItems: 'center' }}>{t.certsSection.cert4.title}</h3>
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#4B5563', marginBottom: '10px' }}>
                  {t.certsSection.cert4.issuer}
                </div>
                <p style={{ margin: 0, fontSize: '13.5px', color: '#4B5563', lineHeight: 1.6 }}>
                  {t.certsSection.cert4.desc}
                </p>
                <div style={{ marginTop: 'auto', paddingTop: '16px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 600, color: '#8B5CF6' }}>
                  <Eye size={13} /> {t.certsSection.cert4.cta}
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* SECTION 05: EDUCATION (CARDS ARE DIRECT BUTTONS) */}
        <section className="fh-education-section" id="education">
          <div className="fh-width fh-section">
            <div className="fh-section-heading reveal">
              <div>
                <div className="fh-eyebrow"><span>05 /</span> {lang === 'id' ? 'PENDIDIKAN' : 'EDUCATION'}</div>
                <h2>{t.educationSection.title}</h2>
              </div>
              <p>{t.educationSection.subtitle}</p>
            </div>

            <div className="fh-edu-grid stagger">
              {/* TELKOM UNIVERSITY CARD */}
              <article 
                className="fh-edu-card fh-clickable-card fh-edu-card-centered" {...tilt(4)}
                onClick={() => setActiveDoc({
                  title: lang === 'id' ? 'Surat Keterangan Lulus (SKL) · Teknik Elektro' : 'Graduation Certificate (SKL) · Electrical Engineering',
                  subtitle: 'Telkom University · Bandung, Indonesia',
                  image: '/images/skl-telkom.jpeg',
                  institution: 'Telkom University',
                  period: t.educationSection.telkom.period,
                  downloadUrl: '/images/skl-telkom.jpeg',
                  downloadName: 'SKL_Telkom_University_Bayu_Aji.jpeg'
                })}
                title={lang === 'id' ? 'Klik untuk melihat Surat Keterangan Lulus (SKL)' : 'Click to view Bachelor Graduation Certificate (SKL)'}
              >
                <div className="fh-edu-center-header">
                  <div className="fh-edu-logo-wrapper">
                    <img src="/images/logo-telkom-shield.png" alt="Telkom University" className="fh-edu-center-logo" />
                  </div>
                  <h3>Telkom University</h3>
                  <strong className="fh-edu-major">{t.educationSection.telkom.degree}</strong>
                  <div className="fh-edu-badge-row">
                    <span className="fh-edu-badge"><GraduationCap size={13} /> {lang === 'id' ? 'PROGRAM SARJANA (S1)' : 'UNDERGRADUATE DEGREE'}</span>
                    <span className="fh-edu-date">{t.educationSection.telkom.period}</span>
                  </div>
                </div>

                <p>{t.educationSection.telkom.desc}</p>

                <div className="fh-edu-metrics">
                  <div className="fh-edu-metric-item">
                    <span className="fh-edu-metric-label">{t.educationSection.telkom.gpaLabel}</span>
                    <StatNum target={3.32} decimals={2} suffix=" / 4.00" />
                  </div>
                  <div className="fh-edu-metric-item">
                    <span className="fh-edu-metric-label">{lang === 'id' ? 'AKREDITASI PRODI' : 'ACCREDITATION'}</span>
                    <strong className="fh-edu-metric-val">Unggul (BAN-PT) · IABEE</strong>
                  </div>
                  <div className="fh-edu-metric-item">
                    <span className="fh-edu-metric-label">{lang === 'id' ? 'TOTAL SKS' : 'TOTAL CREDITS'}</span>
                    <strong className="fh-edu-metric-val">{lang === 'id' ? '154 SKS Lulus' : '154 SKS Passed'}</strong>
                  </div>
                </div>
              </article>

              {/* SMK NEGERI 7 SEMARANG CARD */}
              <article 
                className="fh-edu-card fh-clickable-card fh-edu-card-centered" {...tilt(4)}
                onClick={() => setActiveDoc({
                  title: lang === 'id' ? 'Ijazah & Surat Keterangan Lulus (SKL) Resmi' : 'Official Diploma & Certificate of Graduation (SKL)',
                  subtitle: 'SMK Negeri 7 Semarang · Mechatronics Engineering',
                  image: '/images/ijazah-smk.jpeg',
                  institution: 'SMK Negeri 7 Semarang',
                  period: t.educationSection.smk.period,
                  downloadUrl: '/images/ijazah-smk.jpeg',
                  downloadName: 'Ijazah_SMK_7_Semarang_Bayu_Aji.jpeg'
                })}
                title={lang === 'id' ? 'Klik untuk melihat Ijazah & SKL SMK' : 'Click to view High School Diploma & Graduation Certificate'}
              >
                <div className="fh-edu-center-header">
                  <div className="fh-edu-logo-wrapper">
                    <img src="/images/logo-smkn7-clean.png" alt="SMK Negeri 7 Semarang" className="fh-edu-center-logo fh-edu-center-logo-smk" />
                  </div>
                  <h3>SMK Negeri 7 Semarang</h3>
                  <strong className="fh-edu-major">{t.educationSection.smk.degree}</strong>
                  <div className="fh-edu-badge-row">
                    <span className="fh-edu-badge"><Award size={13} /> {lang === 'id' ? 'PROGRAM 4 TAHUN' : '4-YEAR PROGRAM'}</span>
                    <span className="fh-edu-date">{t.educationSection.smk.period}</span>
                  </div>
                </div>

                <p>{t.educationSection.smk.desc}</p>

                <div className="fh-edu-metrics fh-edu-metrics-2">
                  <div className="fh-edu-metric-item">
                    <span className="fh-edu-metric-label">{lang === 'id' ? 'NILAI KELULUSAN' : 'GRADUATION SCORE'}</span>
                    <StatNum target={90.00} decimals={2} suffix=" / 100" />
                  </div>
                  <div className="fh-edu-metric-item">
                    <span className="fh-edu-metric-label">{lang === 'id' ? 'AKREDITASI SEKOLAH' : 'ACCREDITATION'}</span>
                    <strong className="fh-edu-metric-val">{lang === 'id' ? 'Terakreditasi "A" (BAN-S/M)' : 'Accredited "A" (BAN-S/M)'}</strong>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* SECTION 06: ORGANIZATIONS */}
        <section className="fh-organizations-section" id="organizations">
          <div className="fh-width fh-section">
            <div className="fh-section-heading reveal">
              <div>
                <div className="fh-eyebrow"><span>06 /</span> {lang === 'id' ? 'ORGANISASI' : 'ORGANIZATIONS'}</div>
                <h2>{t.orgsSection.title}</h2>
              </div>
              <p>{t.orgsSection.subtitle}</p>
            </div>

            <div className="fh-org-grid stagger">
              {/* ORG 1: ROOBICS KRAI */}
              <article className="fh-stack-card" {...tilt(4)} style={{ padding: '24px 22px', borderRadius: '6px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span className="fh-stack-label" style={{ color: '#F05A22' }}>{t.orgsSection.org1.label}</span>
                  <span className="fh-role-date">{t.orgsSection.org1.date}</span>
                </div>
                <div className="fh-org-logo-wrapper">
                  <img src="/images/logo-eirrg.png" alt="EIRRG Logo" className="fh-org-logo" />
                </div>
                <h3 className="fh-org-title">{t.orgsSection.org1.name}</h3>
                <div className="fh-org-role" style={{ color: '#F05A22' }}>
                  {t.orgsSection.org1.role}
                </div>
                <p className="fh-org-desc">
                  {t.orgsSection.org1.desc}
                </p>
              </article>

              {/* ORG 2: PKKMB DMT */}
              <article className="fh-stack-card" {...tilt(4)} style={{ padding: '24px 22px', borderRadius: '6px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span className="fh-stack-label" style={{ color: '#DC2626' }}>{t.orgsSection.org2.label}</span>
                  <span className="fh-role-date">{t.orgsSection.org2.date}</span>
                </div>
                <div className="fh-org-logo-wrapper">
                  <img src="/images/logo-pkkmb.png" alt="PKKMB Telkom University Logo" className="fh-org-logo" />
                </div>
                <h3 className="fh-org-title">{t.orgsSection.org2.name}</h3>
                <div className="fh-org-role" style={{ color: '#DC2626' }}>
                  {t.orgsSection.org2.role}
                </div>
                <p className="fh-org-desc">
                  {t.orgsSection.org2.desc}
                </p>
              </article>

              {/* ORG 3: KMTE MENTOR */}
              <article className="fh-stack-card" {...tilt(4)} style={{ padding: '24px 22px', borderRadius: '6px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span className="fh-stack-label" style={{ color: '#0284C7' }}>{t.orgsSection.org3.label}</span>
                  <span className="fh-role-date">{t.orgsSection.org3.date}</span>
                </div>
                <div className="fh-org-logo-wrapper">
                  <img src="/images/logo-kmte.png" alt="KMTE Telkom University Logo" className="fh-org-logo" />
                </div>
                <h3 className="fh-org-title">{t.orgsSection.org3.name}</h3>
                <div className="fh-org-role" style={{ color: '#0284C7' }}>
                  {t.orgsSection.org3.role}
                </div>
                <p className="fh-org-desc">
                  {t.orgsSection.org3.desc}
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* SECTION 07: GET IN TOUCH */}
        <section className="fh-contact" id="contact">
          <div className="fh-width fh-contact-grid reveal">
            <div>
              <div className="fh-eyebrow"><span>07 /</span> {lang === 'id' ? 'KONTAK' : 'GET IN TOUCH'}</div>
              <h2>{lang === 'id' ? <>Senang belajar,<br />siap berkontribusi.</> : <>Eager to learn,<br />ready to contribute.</>}</h2>
              <p>{t.contactSection.desc}</p>
              <button 
                className="fh-button" 
                onClick={() => setActiveDoc({
                  isCv: true,
                  type: 'pdf',
                  title: 'Curriculum Vitae · Bayu Aji Trisasongko',
                  subtitle: 'Electrical Engineering Graduate · Telkom University 2026',
                  institution: 'Telkom University & Formulatrix Alum',
                  period: lang === 'id' ? 'Diperbarui Oktober 2026' : 'Updated October 2026'
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
              <a href="https://linkedin.com/in/bayuajitrisasongko" target="_blank" rel="noreferrer">
                <small>LINKEDIN</small>
                <strong>linkedin.com/in/bayuajitrisasongko</strong>
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
          <small>{t.footer.label}</small>
          <a href="#top" onClick={event => { event.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>{t.footer.backToTop}</a>
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
  if (slug === 'line-follower') {
    return (
      <>
        <FigmaHeader />
        <LineFollowerCaseStudy />
        <Footer />
      </>
    );
  }
  if (slug === 'sumo-robot') {
    return (
      <>
        <FigmaHeader />
        <SumoRobotCaseStudy />
        <Footer />
      </>
    );
  }
  const project = window.location.pathname.startsWith('/projects/') ? projects.find(item => item.slug === slug) : null;
  return project ? <Detail project={project} /> : <FigmaHome />;
}

createRoot(document.getElementById('root')).render(
  <LanguageProvider>
    <App />
  </LanguageProvider>
);



