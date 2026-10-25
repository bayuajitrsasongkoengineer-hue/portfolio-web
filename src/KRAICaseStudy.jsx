import React, { useState } from 'react';
import { 
  ArrowLeft, ArrowRight, Award, Activity, Wrench, Layers, 
  Cpu, ZoomIn, Play, Crosshair, Gauge, Disc, ShieldAlert
} from 'lucide-react';
import ImageLightboxModal from './ImageLightboxModal';

export default function KRAICaseStudy() {
  const [modalData, setModalData] = useState(null);

  const openZoom = (image, title, subtitle) => {
    setModalData({ image, title, subtitle });
  };

  return (
    <article className="cs-container">
      {/* ── Top Bar & Back Link ── */}
      <div className="cs-top-bar">
        <a href="/#projects" className="cs-back-link">
          <ArrowLeft size={14} /> BACK TO ALL PROJECTS
        </a>
        <span className="cs-status-badge">KONTES ROBOT INDONESIA (KRAI 2025) · NATIONAL STAGE AT ITB JATINANGOR</span>
      </div>

      {/* ── Header ── */}
      <header className="cs-header">
        <h1 className="cs-title-single-line">
          Competition Basketball Robot: Dribble &amp; Shooter Mechanisms
        </h1>

        <div style={{ display: 'flex', gap: '36px', flexWrap: 'wrap', margin: '14px 0 24px', fontSize: '13px', color: '#475569' }}>
          <div>
            <strong style={{ display: 'block', color: '#0F172A', fontSize: '14px' }}>Bayu Aji Trisasongko</strong>
            <span>Lead Mechanical Designer &amp; Fabricator</span>
          </div>
          <div>
            <strong style={{ display: 'block', color: '#0F172A', fontSize: '14px' }}>Team ROOBICS</strong>
            <span>EIRRG · Telkom University</span>
          </div>
          <div>
            <strong style={{ display: 'block', color: '#0F172A', fontSize: '14px' }}>Competition Milestone</strong>
            <span>National Finalist (ITB Jatinangor)</span>
          </div>
        </div>

        {/* 50 / 50 Hero Split */}
        <div className="cs-hero-split-50" style={{ alignItems: 'flex-start' }}>
          <div className="cs-hero-split-left">
            <p className="cs-hero-desc-text" style={{ marginBottom: '16px' }}>
              Mechanical engineering and physical prototyping of an autonomous &amp; semi-autonomous mobile basketball robot for the national ABU Robocon Indonesia (KRAI 2025). Features high-pressure pneumatic bounce dribbling (5–6 bar), a multi-motor tri-roller flywheel shooter achieving 6–7 m launch distance, and a holonomic 3-wheel omni-directional drive base.
            </p>

            <div className="cs-metrics-grid-2x2">
              <div className="cs-metric-card-fit">
                <span className="cs-metric-num-fit">6–7 Meters</span>
                <span className="cs-metric-desc-fit">
                  Validated basketball shooting range to hoop
                </span>
              </div>
              <div className="cs-metric-card-fit">
                <span className="cs-metric-num-fit">5–6 Bar</span>
                <span className="cs-metric-desc-fit">
                  Pneumatic operating pressure for dribble &amp; feed
                </span>
              </div>
              <div className="cs-metric-card-fit">
                <span className="cs-metric-num-fit">3× RS775</span>
                <span className="cs-metric-desc-fit">
                  High-RPM pulley-coupled flywheel roller drive
                </span>
              </div>
              <div className="cs-metric-card-fit">
                <span className="cs-metric-num-fit">3-Wheel Omni</span>
                <span className="cs-metric-desc-fit">
                  Holonomic omnidirectional base agility
                </span>
              </div>
            </div>
          </div>

          <div className="cs-hero-split-right" style={{ alignSelf: 'center' }}>
            <img 
              src="/images/krai_robot_hero.png" 
              alt="Team ROOBICS Competition Basketball Robot Full Assembly"
              className="cs-hero-clean-photo"
              onClick={() => openZoom('/images/krai_robot_hero.png', 'Team ROOBICS Competition Basketball Robot', 'Physical competition robot with regulation FIBA basketball in possession, displaying dribbler assembly, pneumatic cylinders, air reservoirs, and circular 3-omni chassis')}
              title="Click to zoom in"
            />
          </div>
        </div>
      </header>

      {/* ── 01. Competition Challenge & Specifications ── */}
      <section className="cs-section">
        <div className="cs-section-header">
          <span className="cs-section-num">01 / COMPETITION MISSION &amp; SPECIFICATIONS</span>
          <h2 className="cs-section-title">The ABU Robocon 2025 Basketball Challenge</h2>
        </div>
        <div className="cs-two-col">
          <div className="cs-info-box">
            <h4><Crosshair size={18} color="#F05A22" /> Autonomous Basketball Challenge Context</h4>
            <p>
              Kontes Robot ABU Indonesia (KRAI) 2025 tasked university robotics teams with engineering high-speed robots capable of navigating a regulation-size basketball half-court. The robot must autonomously acquire regulation basketballs, maintain continuous physical control through compliant ball handling and dribbling, rapidly align with the basket rim, and accurately shoot from distances exceeding 6 meters under stringent match timing.
            </p>
            <p style={{ marginTop: '12px' }}>
              As the core mechanical designer for <strong>Team ROOBICS</strong> (EIRRG Telkom University), I took direct ownership of designing, machining, and field-calibrating the two mission-critical subsystems: the pneumatic dribble handler and the high-energy flywheel shooter mechanism.
            </p>
          </div>
          <div className="cs-info-box">
            <h4><Wrench size={18} color="#F05A22" /> Target Technical Specifications</h4>
            <ul className="cs-constraint-list">
              <li><strong>Launch Range Target:</strong> 6.0 m to 7.0 m to clear standard regulation hoop elevations.</li>
              <li><strong>Shooter Actuation:</strong> 3× RS775 DC motors with timing belt/pulley speed synchronization and absolute encoder speed tracking.</li>
              <li><strong>Ball Feeder:</strong> Dedicated high-flow pneumatic cylinder pushing balls into the spinning tri-roller pinch nip.</li>
              <li><strong>Pneumatic Dribble Subsystem:</strong> Dual-action pneumatic cylinder operating at <strong>5–6 bar</strong> for rapid cyclical vertical ball tapping.</li>
              <li><strong>Sensory Interlocks:</strong> Infrared (IR) reflective sensors detecting ball presence inside the gripper cup + industrial limit switches detecting dribbler carriage stroke limits.</li>
              <li><strong>Mobility:</strong> 3-wheel equilateral holonomic Omni-wheel drivetrain for omni-directional strafing and instant target orientation.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── 02. Subsystems Mechanical CAD & Kinematics ── */}
      <section className="cs-section">
        <div className="cs-section-header">
          <span className="cs-section-num">02 / MECHANICAL DESIGN &amp; CAD MODELING</span>
          <h2 className="cs-section-title">Dribbler, Shooter Tower, &amp; Holonomic Drivetrain</h2>
        </div>

        {/* 3 CAD Images Strip */}
        <div className="cs-cad-poses-strip" style={{ marginBottom: '24px' }}>
          <img 
            src="/images/krai_cad_mechanism_1.jpg" 
            alt="Shooter Tower Mechanical CAD" 
            style={{ height: '200px' }}
            onClick={() => openZoom('/images/krai_cad_mechanism_1.jpg', '3D CAD: Tri-Roller Flywheel Shooter Assembly', 'Parametric CAD design of the ball acceleration chamber, motor bracket mounts, and custom pulley reduction transmission')}
            title="Click to zoom"
          />
          <img 
            src="/images/krai_cad_mechanism_2.jpg" 
            alt="Dribbler & Feeder Mechanism CAD" 
            style={{ height: '200px' }}
            onClick={() => openZoom('/images/krai_cad_mechanism_2.jpg', '3D CAD: Compliant Dribble Gripper & Linkage', 'Pneumatic cylinder attachment with guide linear shafts, IR sensor housing, and ball containment geometry')}
            title="Click to zoom"
          />
          <img 
            src="/images/krai_cad_mechanism_3.jpg" 
            alt="Holonomic 3-Omni Base Chassis CAD" 
            style={{ height: '200px' }}
            onClick={() => openZoom('/images/krai_cad_mechanism_3.jpg', '3D CAD: 3-Wheel Omni-Directional Base Chassis', '120-degree symmetrically spaced high-traction omni-wheel pods, planetary gear motor mountings, and low-center-of-gravity structural plate')}
            title="Click to zoom"
          />
        </div>

        {/* Detailed Two-Col Engineering Breakdown */}
        <div className="cs-two-col" style={{ alignItems: 'stretch' }}>
          <div className="cs-info-box" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h4 style={{ color: '#0F172A', marginBottom: '10px' }}><Disc size={18} color="#F05A22" /> 1. Tri-Roller High-Velocity Shooter</h4>
              <p style={{ lineHeight: 1.65, fontSize: '13.5px', color: '#334155' }}>
                To achieve reliable 6–7 m parabolic trajectories, a <strong>3-roller flywheel configuration</strong> was engineered instead of a traditional dual-roller setup. Driven by <strong>three RS775 motors</strong> synchronized through timing pulleys, the three high-friction urethane rollers wrap around the circumference of the basketball, maximizing contact surface area and tangential kinetic transfer while eliminating ball slip.
              </p>
              <p style={{ lineHeight: 1.65, fontSize: '13.5px', color: '#334155', marginTop: '10px' }}>
                An <strong>absolute encoder</strong> monitors roller surface velocity, feeding data to the PID velocity loop. When nominal launch speed is achieved, a dedicated <strong>pneumatic feeder piston</strong> punches the ball directly into the roller pinch nip with millisecond timing precision.
              </p>
            </div>
          </div>

          <div className="cs-info-box" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h4 style={{ color: '#0F172A', marginBottom: '10px' }}><Gauge size={18} color="#F05A22" /> 2. Pneumatic Dribbler &amp; Ball Handling</h4>
              <p style={{ lineHeight: 1.65, fontSize: '13.5px', color: '#334155' }}>
                Under competition regulations, robots cannot permanently trap or travel with the ball clamped; it must be continuously bounced. We deployed a fast-acting dual-acting pneumatic cylinder regulated at <strong>5–6 bar (72–87 psi)</strong> through high-flow solenoid valves.
              </p>
              <p style={{ lineHeight: 1.65, fontSize: '13.5px', color: '#334155', marginTop: '10px' }}>
                <strong>Sensory interlocks</strong> ensure foolproof sequencing: an analog <strong>Infrared (IR) proximity sensor</strong> detects the ball entering the basket cup, immediately arming the pneumatic cycle. Mechanical <strong>limit switches</strong> at the cylinder stroke extremes detect full extension and retraction, preventing valve overlap and ensuring continuous dribble rhythms while the robot strafes.
              </p>
            </div>
          </div>
        </div>

        {/* Omnidirectional Base Details */}
        <div className="cs-card-container cs-preview-media" style={{ marginTop: '20px', flexDirection: 'column', padding: 0 }}>
          <div style={{ width: '100%', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF' }}>
            <img 
              src="/images/krai_base_omni_drive.jpeg" 
              alt="Fabricated 3-Wheel Omni Drivetrain" 
              style={{ maxHeight: '320px', objectFit: 'contain' }}
              onClick={() => openZoom('/images/krai_base_omni_drive.jpeg', 'Fabricated 3-Wheel Holonomic Omni Drivetrain', 'Physical chassis base displaying CNC aluminum plates, 120-degree high-traction omni-wheels, high-torque planetary DC gearmotors, and low-slung battery bay')}
              title="Click to zoom in"
            />
          </div>
          <div className="cs-media-label" style={{ width: '100%' }}>Physical 3-Wheel Omni-Directional Drivetrain Chassis Base Assembly</div>
        </div>
      </section>

      {/* ── 03. Live Video Validations & Field Testing ── */}
      <section className="cs-section">
        <div className="cs-section-header">
          <span className="cs-section-num">03 / TESTING, FIELD VALIDATION &amp; VIDEO LOGS</span>
          <h2 className="cs-section-title">Subsystem Prototyping &amp; Real-World Testing</h2>
        </div>
        <p style={{ color: '#64748B', fontSize: '13.5px', lineHeight: 1.7, marginBottom: '24px' }}>
          Real lab bench testing and regulation court shooting trials captured during development at the EIRRG laboratory and official KRAI practice grounds:
        </p>

        {/* 3 Video Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '24px' }}>
          {/* Video 1: Dribble Test */}
          <div className="cs-card-container" style={{ padding: '14px', background: '#FFFFFF', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <Play size={16} color="#F05A22" />
              <strong style={{ fontSize: '13px', color: '#0F172A' }}>Pneumatic Dribble Mechanism Test</strong>
            </div>
            <div style={{ borderRadius: '6px', overflow: 'hidden', background: '#000000', aspectRatio: '9/16', maxHeight: '360px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <video 
                src="/videos/krai_dribble_test.mp4" 
                controls 
                preload="metadata"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              >
                Your browser does not support HTML5 video.
              </video>
            </div>
            <p style={{ fontSize: '12px', color: '#64748B', marginTop: '10px', lineHeight: 1.5 }}>
              Active vertical ball tapping cycle at 5 bar with pneumatic cylinder actuated via high-speed solenoid valve and IR ball-presence trigger.
            </p>
          </div>

          {/* Video 2: Shooter Bench Test */}
          <div className="cs-card-container" style={{ padding: '14px', background: '#FFFFFF', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <Play size={16} color="#F05A22" />
              <strong style={{ fontSize: '13px', color: '#0F172A' }}>Tri-Roller High-RPM Bench Spinup</strong>
            </div>
            <div style={{ borderRadius: '6px', overflow: 'hidden', background: '#000000', aspectRatio: '9/16', maxHeight: '360px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <video 
                src="/videos/krai_shooter_bench_test.mp4" 
                controls 
                preload="metadata"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              >
                Your browser does not support HTML5 video.
              </video>
            </div>
            <p style={{ fontSize: '12px', color: '#64748B', marginTop: '10px', lineHeight: 1.5 }}>
              3× RS775 motor synchronization test through custom timing pulleys, verifying low vibration at maximum angular velocity and absolute encoder feedback.
            </p>
          </div>

          {/* Video 3: Full 6-7m Shooting Field Test */}
          <div className="cs-card-container" style={{ padding: '14px', background: '#FFFFFF', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <Play size={16} color="#F05A22" />
              <strong style={{ fontSize: '13px', color: '#0F172A' }}>Full 6–7m Long-Range Shooting Trial</strong>
            </div>
            <div style={{ borderRadius: '6px', overflow: 'hidden', background: '#000000', aspectRatio: '9/16', maxHeight: '360px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <video 
                src="/videos/krai_shooting_field_test.mp4" 
                controls 
                preload="metadata"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              >
                Your browser does not support HTML5 video.
              </video>
            </div>
            <p style={{ fontSize: '12px', color: '#64748B', marginTop: '10px', lineHeight: 1.5 }}>
              Regulation ball launch demonstrating high-energy parabolic trajectory, consistent 6–7 meter clearance, and pneumatic feeder punch actuation.
            </p>
          </div>
        </div>

        {/* Quantitative Test Matrix Table */}
        <div className="cs-table-card" style={{ marginBottom: '20px' }}>
          <table className="cs-data-table">
            <thead>
              <tr>
                <th>SUBSYSTEM PARAMETER</th>
                <th>DESIGN SPECIFICATION</th>
                <th>MEASURED BENCH RESULT</th>
                <th>COMPETITION FIELD STATUS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Shooting Distance Range</strong></td>
                <td>6.0 m – 7.0 m</td>
                <td><strong>6.8 m average trajectory</strong></td>
                <td><strong style={{ color: '#16A34A' }}>VERIFIED (Scored cleanly in practice)</strong></td>
              </tr>
              <tr>
                <td><strong>Shooter Drive Actuators</strong></td>
                <td>3× RS775 High-Torque Motors</td>
                <td>Synchronized via timing belt pulley</td>
                <td><strong style={{ color: '#16A34A' }}>STABLE (Zero ball stall observed)</strong></td>
              </tr>
              <tr>
                <td><strong>Ball Acceleration Mechanism</strong></td>
                <td>Tri-roller circumferential wrap</td>
                <td>3 urethane rollers + 1 pneumatic punch</td>
                <td><strong style={{ color: '#16A34A' }}>HIGH TRACTION (Eliminated slip)</strong></td>
              </tr>
              <tr>
                <td><strong>Pneumatic Dribble Pressure</strong></td>
                <td>5.0 – 6.0 Bar</td>
                <td>Maintained via onboard air reservoir</td>
                <td><strong style={{ color: '#16A34A' }}>STEADY (Instant stroke reversal)</strong></td>
              </tr>
              <tr>
                <td><strong>Sensory Ball Engagement</strong></td>
                <td>IR sensor + limit switches</td>
                <td>100% detection rate inside gripper cup</td>
                <td><strong style={{ color: '#16A34A' }}>FAILSAFE (Zero premature triggers)</strong></td>
              </tr>
              <tr>
                <td><strong>Drivetrain Kinematics</strong></td>
                <td>3-Wheel 120° Omni-Directional</td>
                <td>Full holonomic translation + rotation</td>
                <td><strong style={{ color: '#16A34A' }}>AGILE (Rapid alignment to basket)</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── 04. Competition Milestone & Pitstop Documentation ── */}
      <section className="cs-section">
        <div className="cs-section-header">
          <span className="cs-section-num">04 / COMPETITION EXECUTION &amp; OUTCOMES</span>
          <h2 className="cs-section-title">National Stage at ITB Jatinangor &amp; Verified Credential</h2>
        </div>

        <div className="cs-two-col" style={{ alignItems: 'stretch' }}>
          {/* Competition Pitstop Photo */}
          <div 
            className="cs-card-container cs-preview-media" 
            style={{ height: 'auto', minHeight: '340px', flexDirection: 'column', padding: 0 }}
            onClick={() => openZoom('/images/krai_pitstop_competition.jpeg', 'Team ROOBICS in KRAI Pitstop Area', 'Field maintenance and pre-match inspection: Tuning pneumatics, battery charging, and sensor calibration in the arena pitstop')}
            title="Click to zoom in"
          >
            <div style={{ flex: 1, width: '100%', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF' }}>
              <img src="/images/krai_pitstop_competition.jpeg" alt="KRAI Competition Pitstop Area" style={{ maxHeight: '280px', objectFit: 'contain' }} />
            </div>
            <div className="cs-media-label" style={{ width: '100%' }}>KRAI 2025 Arena Pitstop — On-Site Field Calibration</div>
          </div>

          {/* Official Certificate */}
          <div 
            className="cs-card-container cs-preview-media" 
            style={{ height: 'auto', minHeight: '340px', flexDirection: 'column', padding: 0 }}
            onClick={() => openZoom('/images/krai-cert-real.png', 'Official KRAI 2025 National Participant Certificate', 'Official certificate of participation: Bayu Aji Trisasongko — Team ROOBICS, Universitas Telkom')}
            title="Click to zoom in"
          >
            <div style={{ flex: 1, width: '100%', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF' }}>
              <img src="/images/krai-cert-real.png" alt="Official KRAI 2025 Certificate" style={{ maxHeight: '280px', objectFit: 'contain' }} />
            </div>
            <div className="cs-media-label" style={{ width: '100%' }}>Official National Certificate of Participation (ITB Jatinangor)</div>
          </div>
        </div>

        {/* Retrospective Engineering Cards */}
        <div className="cs-takeaways-grid" style={{ marginTop: '24px' }}>
          <div className="cs-takeaway-card">
            <h4>Bayu's Key Engineering Contributions</h4>
            <p>
              • <strong>Shooter Tower Prototyping:</strong> Computed launch velocity requirements, designed custom aluminum brackets, and tuned 3× RS775 motor-pulley ratios for 6–7 m basketball projection.<br />
              • <strong>Pneumatic Dribble Subsystem:</strong> Engineered the 5–6 bar dual-action cylinder assembly, guide linear rails, and calibrated mechanical limit switches for compliant ball bouncing.<br />
              • <strong>Chassis Machining &amp; Field Assembly:</strong> Fabricated aluminum structural links and assembled the 3-wheel holonomic omni-wheel base under high-pressure tournament timelines.
            </p>
          </div>
          <div className="cs-takeaway-card cs-card-future">
            <h4>Engineering Takeaways &amp; Future Iterations</h4>
            <p>
              • <strong>Dynamic Pressure Regulation:</strong> Adding digital electronic pressure regulators (EPR) to modulate cylinder stroke force on-the-fly based on ball internal pressure variations.<br />
              • <strong>Dual-Angle Adjustable Pitch:</strong> Designing an automated motorized lead-screw to adjust the shooter launch angle dynamically between 3-point range and close-range layups.<br />
              • <strong>Computer Vision Integration:</strong> Coupling real-time OpenCV color tracking with the 3-omni drivetrain to perform autonomous basket lock-on within &lt;500 ms.
            </p>
          </div>
        </div>
      </section>

      {/* ── Bottom Navigation ── */}
      <div className="cs-bottom-nav">
        <a href="/projects/solar-cooling" className="cs-nav-btn secondary">
          <ArrowLeft size={16} /> Previous: Solar Panel Cooling
        </a>
        <a href="/#projects" className="cs-nav-btn">
          Back to All Projects <ArrowRight size={16} />
        </a>
      </div>

      {/* Lightbox Modal */}
      {modalData && (
        <ImageLightboxModal 
          image={modalData.image}
          title={modalData.title}
          subtitle={modalData.subtitle}
          onClose={() => setModalData(null)}
        />
      )}
    </article>
  );
}
