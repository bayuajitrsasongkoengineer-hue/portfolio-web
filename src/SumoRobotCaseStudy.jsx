import React, { useState } from 'react';
import { 
  ArrowLeft, ArrowRight, Award, Activity, Wrench, Layers, 
  Cpu, ZoomIn, Eye, Bluetooth, ShieldAlert, Zap, Radio
} from 'lucide-react';
import ImageLightboxModal from './ImageLightboxModal';

export default function SumoRobotCaseStudy() {
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
        <span className="cs-status-badge">INDEPENDENT COMBAT ROBOTICS · BANDUNG (2023)</span>
      </div>

      {/* ── Header ── */}
      <header className="cs-header">
        <h1 className="cs-title-single-line">
          Bluetooth Sumo Robot: 4WD High-Torque PG24 Drivetrain &amp; Wedge Chassis
        </h1>

        <div style={{ display: 'flex', gap: '36px', flexWrap: 'wrap', margin: '14px 0 24px', fontSize: '13px', color: '#475569' }}>
          <div>
            <strong style={{ display: 'block', color: '#0F172A', fontSize: '14px' }}>Bayu Aji Trisasongko</strong>
            <span>Mechanical CAD Designer &amp; Embedded Control Builder</span>
          </div>
          <div>
            <strong style={{ display: 'block', color: '#0F172A', fontSize: '14px' }}>Project Scope</strong>
            <span>1 kg Competition-Class Sumo Robot (20 × 20 cm)</span>
          </div>
          <div>
            <strong style={{ display: 'block', color: '#0F172A', fontSize: '14px' }}>Drivetrain &amp; Telemetry</strong>
            <span>4WD PG24 Planetary Gearmotors · HC-05 Bluetooth UART</span>
          </div>
        </div>

        {/* 50 / 50 Hero Split */}
        <div className="cs-hero-split-50" style={{ alignItems: 'flex-start' }}>
          <div className="cs-hero-split-left">
            <p className="cs-hero-desc-text" style={{ marginBottom: '16px' }}>
              Full mechanical CAD design, low-ground-clearance wedge fabrication, and wireless embedded integration of a 1 kg competition-class RC Sumo Robot. Built inside strict 200 × 200 mm dimensional boundaries with 4-wheel independent planetary gearmotor drive (PG24), dual L298N H-bridge driver bridges, 3S LiPo battery (11.1V – 12.6V) power delivery, and real-time smartphone telemetry via HC-05 Bluetooth transceiver.
            </p>

            <div className="cs-highlights-card">
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '0 0 10px', fontSize: '13px', color: '#0F172A', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                <Zap size={15} color="#EA580C" /> Verified Technical Highlights
              </h4>
              <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13px', color: '#334155', lineHeight: '1.6' }}>
                <li><strong>Competition Form Factor:</strong> Strict 200 × 200 mm footprint compliant with standard 1 kg RC sumo regulations.</li>
                <li><strong>4WD Planetary Transmission:</strong> 4× independent high-torque PG24 geared motors driving high-friction ribbed polyurethane/silicone wheels.</li>
                <li><strong>Low-Angle Wedge Blade:</strong> Front stainless steel/acrylic scoop designed to breach opponent ground clearance and lift opposing traction wheels.</li>
                <li><strong>Power &amp; Driver Architecture:</strong> 3-cell LiPo battery (11.1V nominal) powering dual L298N H-bridges, managed by an ATmega328P (Arduino Uno).</li>
              </ul>
            </div>
          </div>

          <div className="cs-hero-split-right">
            <div 
              className="cs-media-card" 
              style={{ height: 'auto', minHeight: '340px', flexDirection: 'column', padding: 0 }}
              onClick={() => openZoom('/images/sumo_iso.png', 'Sumo Robot CAD Isometric View', 'Isometric render of the 20x20 cm 1 kg combat robot showing low-profile chassis, cooling vents, and front scooper')}
              title="Click to zoom in"
            >
              <div style={{ flex: 1, width: '100%', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF' }}>
                <img src="/images/sumo_iso.png" alt="Sumo Robot Isometric CAD Render" style={{ maxHeight: '280px', objectFit: 'contain' }} />
              </div>
              <div className="cs-media-label" style={{ width: '100%' }}>Isometric CAD Design — Front Wedge &amp; Slotted Vented Enclosure (Click to zoom)</div>
            </div>
          </div>
        </div>
      </header>

      {/* ── Section 01: Engineering Challenge & Competition Constraints ── */}
      <section className="cs-section">
        <div className="cs-section-header">
          <span className="cs-section-num">01 / CHALLENGE &amp; CONSTRAINTS</span>
          <h2>The Engineering Challenge: Traction, Low Center of Gravity, &amp; Torque</h2>
        </div>
        <p>
          In RC sumo robotics competitions, matches are decided in fractions of a second by two primary factors: <strong>ground traction (frictional force)</strong> and <strong>wedge leverage (scoop geometry)</strong>. The engineering objective was to design a 1.0 kg combat vehicle that maximized pushing torque without exceeding tournament boundary regulations (200 mm × 200 mm footprint).
        </p>

        <div className="cs-table-wrapper" style={{ margin: '16px 0 24px' }}>
          <table className="cs-table">
            <thead>
              <tr>
                <th>Design Parameter</th>
                <th>Competition Rule Limit</th>
                <th>Implemented Robot Specification</th>
                <th>Engineering Justification</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Chassis Dimensions</strong></td>
                <td>Max 200 mm × 200 mm</td>
                <td><strong>&lt;200 mm × 200 mm Boundary Limit</strong></td>
                <td>Designed within standard 1 kg RC sumo boundaries while maximizing wheel track width for roll stability.</td>
              </tr>
              <tr>
                <td><strong>Combat Mass</strong></td>
                <td>Maximum 1,000 g (1 kg)</td>
                <td><strong>Target &le;1,000 g Ready-to-Fight</strong></td>
                <td>Mass centered low across the 4 planetary drive axles to maintain maximum tire traction during push contests.</td>
              </tr>
              <tr>
                <td><strong>Drivetrain Layout</strong></td>
                <td>Unrestricted</td>
                <td><strong>4-Wheel Drive (4WD) Independent PG24</strong></td>
                <td>Ensures continuous 4-point ground contact even if the robot is tilted up to 15° by an opponent.</td>
              </tr>
              <tr>
                <td><strong>Power Source</strong></td>
                <td>DC Battery onboard</td>
                <td><strong>3S LiPo (11.1V nominal, 12.6V peak)</strong></td>
                <td>Provides instantaneous high discharge current (C-rating) to supply stall currents during pushing contests.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Section 02: CAD Design, Mechanical Architecture & Underside Drivetrain ── */}
      <section className="cs-section">
        <div className="cs-section-header">
          <span className="cs-section-num">02 / CAD DESIGN &amp; MECHANICAL STRUCTURE</span>
          <h2>Mechanical CAD Design &amp; 4WD Underside Geometry</h2>
        </div>
        <p>
          The chassis was designed from the ground up in 3D CAD to accommodate 4 high-torque PG24 planetary gearmotors within the tight 20 × 20 cm envelope. The side walls feature diagonal heat dissipation slots to ventilate the internal motor drivers and high-discharge battery pack during sustained pushing stalls.
        </p>

        {/* 2-column CAD Media Grid */}
        <div className="cs-media-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', margin: '20px 0' }}>
          <div 
            className="cs-media-card" 
            style={{ height: 'auto', minHeight: '300px', flexDirection: 'column', padding: 0 }}
            onClick={() => openZoom('/images/sumo_bottom.png', 'Sumo Robot Underside View', 'Underside CAD view revealing 4x PG24 planetary motors, central mounting brackets, and wide ribbed traction wheels')}
            title="Click to zoom in"
          >
            <div style={{ flex: 1, width: '100%', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF' }}>
              <img src="/images/sumo_bottom.png" alt="Underside View Showing 4 PG24 Motors and Wheels" style={{ maxHeight: '240px', objectFit: 'contain' }} />
            </div>
            <div className="cs-media-label" style={{ width: '100%' }}>Underside View: 4× PG24 Planetary Motors &amp; High-Traction Drive Axles</div>
          </div>

          <div 
            className="cs-media-card" 
            style={{ height: 'auto', minHeight: '300px', flexDirection: 'column', padding: 0 }}
            onClick={() => openZoom('/images/sumo_side.png', 'Sumo Robot Side Profile & Wedge Geometry', 'Side profile demonstrating the aggressive front wedge angle for lifting opposing robots and side ventilation slots')}
            title="Click to zoom in"
          >
            <div style={{ flex: 1, width: '100%', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF' }}>
              <img src="/images/sumo_side.png" alt="Side Profile Showing Wedge Angle" style={{ maxHeight: '240px', objectFit: 'contain' }} />
            </div>
            <div className="cs-media-label" style={{ width: '100%' }}>Side Profile: Aggressive Front Wedge Angle (&lt;25°) for Under-Scoop Leverage</div>
          </div>
        </div>

        <div className="cs-analysis-2col" style={{ marginTop: '16px' }}>
          <div>
            <h4 style={{ fontSize: '14px', color: '#0F172A', marginBottom: '8px' }}>Wedge Physics &amp; Normal Force Transfer</h4>
            <p style={{ fontSize: '13px', color: '#475569', lineHeight: '1.6' }}>
              The acute inclined front wedge is engineered to slip beneath the opposing robot's skirt. When the opponent rides up onto the incline, its weight (m &middot; g) transfers directly onto our front drive wheels, effectively transferring opposing mass to increase our normal force (N) and maximum pushing friction (F_friction = &mu; &middot; N) while breaking the opponent's traction with the dohyo surface.
            </p>
          </div>
          <div>
            <h4 style={{ fontSize: '14px', color: '#0F172A', marginBottom: '8px' }}>Planetary Gearbox Advantage (PG24)</h4>
            <p style={{ fontSize: '13px', color: '#475569', lineHeight: '1.6' }}>
              Unlike spur gearboxes that can strip teeth under sudden reverse-shock loads during head-on collisions, PG24 planetary gear sets distribute torsional load across multiple planet gears simultaneously. This provides robust torque transfer and significantly reduces gear tooth shearing risk during heavy pushing stalls.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 03: Electrical & Embedded Control Architecture ── */}
      <section className="cs-section">
        <div className="cs-section-header">
          <span className="cs-section-num">03 / ELECTRICAL &amp; CONTROL SYSTEM</span>
          <h2>Electrical Power Distribution &amp; Embedded Telemetry System</h2>
        </div>
        <p>
          The electrical system is architected to handle the peak surge currents demanded by four simultaneous DC motors under heavy combat pushing loads, while isolating sensitive logic components from inductive voltage spikes.
        </p>

        {/* 3 Blocks Architecture Grid */}
        <div className="cs-blocks-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', margin: '20px 0' }}>
          <div className="cs-block-card">
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0F172A', fontSize: '14px', marginBottom: '10px' }}>
              <Cpu size={16} color="#F05A22" /> Microcontroller (Arduino Uno)
            </h4>
            <p style={{ fontSize: '13px', color: '#475569', lineHeight: '1.6', margin: 0 }}>
              The ATmega328P core handles real-time UART packet parsing from the HC-05 module, translating directional vectors into dual differential PWM duty cycles (0–255) to drive the left and right motor banks.
            </p>
          </div>

          <div className="cs-block-card">
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0F172A', fontSize: '14px', marginBottom: '10px' }}>
              <Radio size={16} color="#F05A22" /> Wireless Telemetry (HC-05)
            </h4>
            <p style={{ fontSize: '13px', color: '#475569', lineHeight: '1.6', margin: 0 }}>
              Operating at 9600/38400 baud over 2.4 GHz RF (Bluetooth SPP profile). Communicates with an Android smartphone controller with low command transmission latency (~15–25 ms) for responsive steering.
            </p>
          </div>

          <div className="cs-block-card">
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0F172A', fontSize: '14px', marginBottom: '10px' }}>
              <Zap size={16} color="#F05A22" /> Power Delivery (3S LiPo &amp; L298N)
            </h4>
            <p style={{ fontSize: '13px', color: '#475569', lineHeight: '1.6', margin: 0 }}>
              3S LiPo battery delivers up to 12.6V direct motor rail voltage through heavy-gauge copper wiring, driving dual L298N H-bridge channels with heat sinks to dissipate stall heat dissipation.
            </p>
          </div>
        </div>

        {/* Technical Data Table */}
        <div className="cs-table-wrapper" style={{ marginTop: '20px' }}>
          <table className="cs-table">
            <thead>
              <tr>
                <th>Subsystem Component</th>
                <th>Hardware Selection</th>
                <th>Operational Voltage / Specs</th>
                <th>Function in Combat Cycle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Main Controller</strong></td>
                <td>Arduino Uno (ATmega328P @ 16 MHz)</td>
                <td>5V regulated via onboard buck converter</td>
                <td>Parses remote joystick commands &amp; generates 490 Hz PWM signals.</td>
              </tr>
              <tr>
                <td><strong>RF Transceiver</strong></td>
                <td>HC-05 Bluetooth 2.0+EDR</td>
                <td>3.3V logic (voltage divider on RX)</td>
                <td>Receives wireless navigation commands from paired smartphone.</td>
              </tr>
              <tr>
                <td><strong>Actuation Units</strong></td>
                <td>4× PG24 Planetary Gearmotors</td>
                <td>12V DC nominal</td>
                <td>Provides high static torque to resist reverse push-out forces.</td>
              </tr>
              <tr>
                <td><strong>Motor Driver</strong></td>
                <td>L298N Dual H-Bridge Module</td>
                <td>Up to 2A continuous per channel, 46V max</td>
                <td>Bi-directional dual-bank motor speed &amp; directional control.</td>
              </tr>
              <tr>
                <td><strong>Power Pack</strong></td>
                <td>3-Cell LiPo (Lithium Polymer)</td>
                <td>11.1V nominal (12.6V full charge), 25C+ discharge</td>
                <td>High burst current capability to prevent MCU brownouts under motor stall.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Section 04: Retrospective & Future Iterations ── */}
      <section className="cs-section">
        <div className="cs-section-header">
          <span className="cs-section-num">04 / RETROSPECTIVE &amp; ITERATIONS</span>
          <h2>Retrospective Engineering &amp; Future Iterations</h2>
        </div>

        <div className="cs-takeaways-grid" style={{ marginTop: '16px' }}>
          <div className="cs-takeaway-card">
            <h4>Key Engineering Takeaways</h4>
            <p>
              • <strong>Traction-to-Weight Optimization:</strong> Validated that 4-wheel independent planetary drive maintains superior traction and ground contact stability over 2-wheel configurations on high-friction dohyo rings.<br />
              • <strong>Wedge Ground Contact:</strong> Identified that ground clearance at the tip of the scoop blade must remain strictly &lt;0.5 mm to prevent opposing blades from getting underneath.<br />
              • <strong>Driver Thermal Headroom:</strong> Recognized the necessity of MOSFET-based drivers (such as BTS7960) for future builds to eliminate the 1.5–2.0V bipolar junction voltage drop inherent to older L298N ICs.
            </p>
          </div>
          <div className="cs-takeaway-card cs-card-future">
            <h4>Next Engineering Iterations</h4>
            <p>
              • <strong>BTS7960 / High-Current MOSFET Drivers:</strong> Upgrading from L298N to dual BTS7960 43A MOSFET H-bridges for near-zero voltage drop and up to 10× stall current headroom.<br />
              • <strong>Autonomous Dual-Mode:</strong> Integrating Omron E3Z infrared boundary sensors and front distance lasers to enable autonomous searching and target lock-on.<br />
              • <strong>Neodymium Magnetic Downforce:</strong> Mounting rare-earth N52 magnets on the bottom chassis deck to magnetically clamp the robot onto steel dohyo rings, artificially multiplying traction by 3×.
            </p>
          </div>
        </div>
      </section>

      {/* ── Bottom Navigation ── */}
      <div className="cs-bottom-nav">
        <a href="/projects/line-follower" className="cs-nav-btn secondary">
          <ArrowLeft size={16} /> Previous: Line Follower Robot
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
