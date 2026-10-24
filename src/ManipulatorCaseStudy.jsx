import React, { useState } from 'react';
import { 
  ArrowLeft, ArrowRight, Award, Activity, Wrench, Layers, 
  Cpu, ZoomIn, Compass, Sliders 
} from 'lucide-react';
import ImageLightboxModal from './ImageLightboxModal';

export default function ManipulatorCaseStudy() {
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
        <span className="cs-status-badge">BACHELOR THESIS · TELKOM UNIVERSITY (2026)</span>
      </div>

      {/* ── Header (Exact 1-Line Title, 50-50 Hero Split, Balanced Metrics) ── */}
      <header className="cs-header">
        {/* Full-width 1-line Title */}
        <h1 className="cs-title-single-line">
          Design of a Manipulator Arm for a Patient Service Robot in a Hospital
        </h1>

        {/* Author / Metadata Bar */}
        <div style={{ display: 'flex', gap: '36px', flexWrap: 'wrap', margin: '14px 0 24px', fontSize: '13px', color: '#475569' }}>
          <div>
            <strong style={{ display: 'block', color: '#0F172A', fontSize: '14px' }}>Bayu Aji Trisasongko</strong>
            <span>Author</span>
          </div>
          <div>
            <strong style={{ display: 'block', color: '#0F172A', fontSize: '14px' }}>B.S. in Electrical Engineering</strong>
            <span>Telkom University</span>
          </div>
          <div>
            <strong style={{ display: 'block', color: '#0F172A', fontSize: '14px' }}>January – August 2026</strong>
            <span>Project Timeline</span>
          </div>
        </div>

        {/* 50 / 50 Hero Split: Left Text & Metrics 2x2, Right Large Photo */}
        <div className="cs-hero-split-50" style={{ alignItems: 'flex-start' }}>
          {/* Left Column: Summary Text on Top + 4 Metrics in 2x2 Grid Below */}
          <div className="cs-hero-split-left">
            <p className="cs-hero-desc-text" style={{ marginBottom: '16px' }}>
              Design, mechanical fabrication, and embedded control of a 5-DOF articulated robotic arm utilizing 3D-printed PLA cycloidal gearboxes, closed-loop AS5600 magnetic position correction, and real-time analytical Inverse Kinematics on an STM32F411CEU6 microcontroller.
            </p>

            {/* 4 Metrics in 2x2 Grid (2 Columns x 2 Rows) */}
            <div className="cs-metrics-grid-2x2">
              <div className="cs-metric-card-fit">
                <span className="cs-metric-num-fit">79.8%</span>
                <span className="cs-metric-desc-fit">
                  Positional accuracy improvement via closed-loop correction (0.51° to 0.10°)
                </span>
              </div>
              <div className="cs-metric-card-fit">
                <span className="cs-metric-num-fit">250–1,000 g</span>
                <span className="cs-metric-desc-fit">
                  Stable validated payload range under continuous closed-loop control
                </span>
              </div>
              <div className="cs-metric-card-fit">
                <span className="cs-metric-num-fit">6.65 mm</span>
                <span className="cs-metric-desc-fit">
                  Average end-effector position error (2.03%) across IK testing
                </span>
              </div>
              <div className="cs-metric-card-fit">
                <span className="cs-metric-num-fit">1:50 &amp; 1:25</span>
                <span className="cs-metric-desc-fit">
                  3D-printed PLA cycloidal reduction ratios (J2 1:50, J1/J3/J4 1:25)
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Large Photo */}
          <div className="cs-hero-split-right" style={{ alignSelf: 'center' }}>
            <img 
              src="/images/manipulator_hero_triptych.png" 
              alt="Physical Manipulator Arm Multi-Angle Operational Test"
              className="cs-hero-clean-photo"
              onClick={() => openZoom('/images/manipulator_hero_triptych.png', 'Physical Manipulator Arm — Multi-Angle Payload Testing', 'Assembled 5-DOF manipulator arm undergoing payload range validation trials across multiple arm configurations')}
              title="Click to zoom in"
            />
          </div>
        </div>
      </header>

      {/* ── 01. Problem Statement & Scope Boundary ── */}
      <section className="cs-section">
        <div className="cs-section-header">
          <span className="cs-section-num">01 / BACKGROUND &amp; SPECIFICATIONS</span>
          <h2 className="cs-section-title">Project Background &amp; Target Specifications</h2>
        </div>
        <div className="cs-two-col">
          <div className="cs-info-box">
            <h4><Activity size={18} color="#F05A22" /> Hospital Logistics Background</h4>
            <p>
              Studies indicate hospital healthcare personnel spend 20–25% of their working hours managing routine logistics inventory, with nursing staff walking an average of up to 2.96 km per shift. Most hospital service robots currently in operation function solely as autonomous delivery carriers without the physical capability to load or retrieve items independently because they lack a robotic manipulator arm.
            </p>
            <p style={{ marginTop: '12px' }}>
              This project designed, fabricated, and validated a <strong>5-DOF articulated manipulator arm</strong> as a supporting component for hospital patient service robots. The system is engineered to grasp and transport lightweight patient necessities, such as packaged medications or bottled beverages, with a target payload of 600 grams across a 400 mm working reach.
            </p>
          </div>
          <div className="cs-info-box">
            <h4><Wrench size={18} color="#F05A22" /> Target Specifications &amp; Project Scope</h4>
            <ul className="cs-constraint-list">
              <li><strong>Arm Configuration:</strong> 5 Degree of Freedom (DOF) articulated manipulator arm.</li>
              <li><strong>Working Reach:</strong> Arm operational reach envelope of ±400 mm.</li>
              <li><strong>Joint Operational Range:</strong> −90° to +90° across each active joint axis.</li>
              <li><strong>Target Payload Capacity:</strong> 600 grams target specification (stably verified up to 1,000 grams).</li>
              <li><strong>Joint Transmission:</strong> Custom 3D-printed PLA Cycloidal Gearboxes (1:25 and 1:50 gear ratios).</li>
              <li><strong>Control Methodology:</strong> Real-time Closed-Loop position feedback with target angular error &lt;1°.</li>
              <li><strong>Scope Boundary:</strong> The manipulator arm is tested on a stationary test bench; mobile platform navigation and active end-effector gripper design are reserved for subsequent integration.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── 02. Architecture & Methodology (Exact PDF Section 02) ── */}
      <section className="cs-section">
        <div className="cs-section-header">
          <span className="cs-section-num">02 / SYSTEM ARCHITECTURE</span>
          <h2 className="cs-section-title">Hardware Architecture &amp; Control Workflow</h2>
        </div>
        <div className="cs-two-col" style={{ alignItems: 'center' }}>
          {/* Exact block diagram from PDF */}
          <div 
            className="cs-preview-media"
            style={{ height: '320px', padding: '12px', background: '#FFFFFF' }}
            onClick={() => openZoom('/images/manipulator_block_diagram_hd.png', 'Hardware Architecture & Control Workflow Diagram', 'Full system block diagram connecting STM32, TB6600, NEMA17, AS5600, TCA9548A, and Power rail')}
            title="Click to zoom in"
          >
            <img 
              src="/images/manipulator_block_diagram_hd.png" 
              alt="Hardware Architecture & Control Workflow" 
            />
          </div>

          {/* Exact text from PDF */}
          <div className="cs-info-box" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p style={{ lineHeight: 1.7, fontSize: '14px', color: '#334155' }}>
              The control workflow begins when target Cartesian coordinates (X, Y, Z) are received by the microcontroller via serial UART (115200 bps). The <strong>STM32F411CEU6</strong> microcontroller processes the analytical Inverse Kinematics equations and outputs step and direction signals to five <strong>TB6600</strong> stepper drivers using an <strong>S-Curve velocity profile</strong> to minimize mechanical jerk. Contactless <strong>AS5600</strong> magnetic encoders on joints J1–J4 continuously stream angular feedback through an 8-channel <strong>TCA9548A</strong> I2C multiplexer to execute real-time closed-loop position corrections.
            </p>
          </div>
        </div>
      </section>

      {/* ── 03. Design 3D (Exact PDF Design 3D Strip + Dimensions) ── */}
      <section className="cs-section">
        <div className="cs-section-header">
          <span className="cs-section-num">03 / MECHANICAL CAD &amp; STRUCTURE</span>
          <h2 className="cs-section-title">3D CAD Modeling &amp; Link Dimensions</h2>
        </div>

        {/* 4 CAD poses strip — Updated with Clean HD Renders */}
        <div className="cs-cad-poses-strip">
          <img 
            src="/images/manipulator_cad_side_hd.png" 
            alt="3D CAD Side View Render" 
            style={{ height: '185px' }}
            onClick={() => openZoom('/images/manipulator_cad_side_hd.png', '3D CAD Parametric Model — Articulated Side Profile', 'High-resolution parametric 3D CAD render of the 5-DOF manipulator arm in articulated side posture')}
            title="Click to zoom"
          />
          <img 
            src="/images/manipulator_cad_iso_hd.png" 
            alt="3D CAD Isometric Render" 
            style={{ height: '175px' }}
            onClick={() => openZoom('/images/manipulator_cad_iso_hd.png', '3D CAD Parametric Model — Isometric View', 'High-resolution isometric CAD render displaying joint casings, cycloidal gearbox housings, and end-effector mount')}
            title="Click to zoom"
          />
          <img 
            src="/images/manipulator_cad_wireframe_hd.png" 
            alt="3D CAD Orthographic Wireframe Assembly" 
            style={{ height: '185px' }}
            onClick={() => openZoom('/images/manipulator_cad_wireframe_hd.png', '3D CAD Wireframe Assembly & Internal Layout', 'Internal mechanical CAD wireframe cross-section showing bearings, stepper motor mountings, and cycloidal gear drives')}
            title="Click to zoom"
          />
          <img 
            src="/images/manipulator_cad_sweep_hd.png" 
            alt="Arm Angular Sweep & Payload Operational Range" 
            style={{ height: '175px' }}
            onClick={() => openZoom('/images/manipulator_cad_sweep_hd.png', 'Joint Angular Sweep Range & Payload Boundary (±90°)', 'Multi-exposure schematic illustrating Joint 2 sweep angles (0°, ±30°, ±60°, ±90°) under 250–1,250 g operational testing')}
            title="Click to zoom"
          />
        </div>

        {/* Dimensions row: drawing on left, table on right */}
        <div className="cs-two-col" style={{ alignItems: 'stretch' }}>
          <div 
            className="cs-card-container cs-preview-media" 
            style={{ height: 'auto', minHeight: '260px', flexDirection: 'column', padding: 0 }}
            onClick={() => openZoom('/images/manipulator_arm_link_dimensions_hd.png', 'Manipulator Arm Link Dimensions Schematic', 'Orthographic mechanical schema: Base height d1 (189 mm), links a2 & a3 (150 mm), offset d5 (100 mm), total reach L (400 mm)')}
            title="Click to zoom in"
          >
            <div style={{ flex: 1, width: '100%', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF' }}>
              <img src="/images/manipulator_arm_link_dimensions_hd.png" alt="Manipulator Arm Link Dimensions" style={{ maxHeight: '220px' }} />
            </div>
            <div className="cs-media-label" style={{ width: '100%' }}>DIMENSIONS (Link Schema)</div>
          </div>

          {/* Exact HTML Dimensions Table matching PDF */}
          <div className="cs-card-container" style={{ padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{ fontSize: '11px', fontFamily: 'DM Mono', fontWeight: 700, color: '#EA580C', letterSpacing: '0.08em', marginBottom: '8px', display: 'block' }}>
              DIMENSIONS
            </span>
            <div className="cs-table-wrapper" style={{ margin: 0 }}>
              <table className="cs-data-table">
                <thead>
                  <tr>
                    <th>SIMBOL</th>
                    <th>DIMENSI (MM)</th>
                    <th>KETERANGAN</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>d₁</code></td>
                    <td><strong>189 mm</strong></td>
                    <td>Distance from mounting base to Joint 2 pivot axis</td>
                  </tr>
                  <tr>
                    <td><code>a₂</code></td>
                    <td><strong>150.00 mm</strong></td>
                    <td>Link length between Joint 2 and Joint 3 (Upper Arm)</td>
                  </tr>
                  <tr>
                    <td><code>a₃</code></td>
                    <td><strong>150.00 mm</strong></td>
                    <td>Link length between Joint 3 and Joint 4 (Forearm)</td>
                  </tr>
                  <tr>
                    <td><code>d₅</code></td>
                    <td><strong>100.00 mm</strong></td>
                    <td>Offset from Joint 4 axis to Joint 5 end-effector tip</td>
                  </tr>
                  <tr className="cs-table-highlight">
                    <td><code>L</code></td>
                    <td><strong>400.00 mm</strong></td>
                    <td><strong>Total maximum horizontal working reach from Joint 2 axis</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── 04. 3D-Printed PLA Cycloidal Gearboxes (Exact PDF layout) ── */}
      <section className="cs-section">
        <div className="cs-section-header">
          <span className="cs-section-num">04 / TRANSMISSION MECHANISM</span>
          <h2 className="cs-section-title">Cycloidal Gearbox Mechanism</h2>
        </div>

        <div className="cs-two-col" style={{ alignItems: 'stretch' }}>
          {/* Left: Text specs matching PDF */}
          <div className="cs-info-box" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <p style={{ lineHeight: 1.6, marginBottom: '16px', fontSize: '14px' }}>
                Cycloidal reduction was selected to amplify stepper motor torque while substantially mitigating mechanical backlash. A <strong>1:50 gear ratio</strong> was deployed on Joint 2 (subject to maximum static gravitational torque), while <strong>1:25 ratios</strong> were implemented on Joints 1, 3, and 4.
              </p>
            </div>
            <div className="cs-deepdive-specs" style={{ margin: 0 }}>
              <span><strong>Joint 2 Ratio:</strong> 1:50 Cycloidal Reduction</span>
              <span><strong>Joint 1, 3, 4 Ratio:</strong> 1:25 Cycloidal Reduction</span>
              <span><strong>Material:</strong> 3D-Printed PLA</span>
              <span><strong>Theoretical Output Torque:</strong> 10.0 Nm at Joint 2</span>
              <span><strong>Theoretical Max Payload:</strong> 1.50 kg at 400 mm reach</span>
              <span><strong>Actual Transmission Efficiency:</strong> 40.1% (empirically derived from load trials)</span>
            </div>
          </div>

          {/* Right: 3 Cycloidal Images — Optimized Asymmetric Layout */}
          <div className="cs-gearbox-asymmetric-grid">
            {/* Left: Exploded CAD breakdown (Tall spanning 2 rows) */}
            <div 
              className="cs-gearbox-tall-left"
              onClick={() => openZoom('/images/manipulator_cycloidal_exploded_hd.png', 'Exploded Assembly Diagram: 3D-Printed Cycloidal Speed Reducer', 'Detailed exploded CAD breakdown: Top housing, top bearing, dual disc balancing, outer ring pins, eccentric shaft, mid housing, NEMA17 stepper, and bottom mounting')}
              title="Click to zoom in"
            >
              <img src="/images/manipulator_cycloidal_exploded_hd.png" alt="Exploded Cycloidal Gearbox Assembly" />
            </div>

            {/* Top Right: Red Cycloidal Real Gearbox (Static non-button) */}
            <div className="cs-gearbox-top-right">
              <img 
                src="/images/cycloidal_red_top_white_clean.png" 
                alt="Fabricated Cycloidal Gearbox" 
              />
            </div>

            {/* Bottom Right: Cycloidal Disc Profiles (1:50 vs 1:25) */}
            <div 
              className="cs-gearbox-bottom-right"
              onClick={() => openZoom('/images/manipulator_cycloidal_discs_hd.png', 'Parametric Cycloidal Disc Geometry (1:50 vs 1:25 Transmission Ratios)', 'Tooth profile and pin mesh comparison between 1:50 high-torque shoulder joint reduction disc and 1:25 compact joint reduction disc')}
              title="Click to zoom in"
            >
              <img src="/images/manipulator_cycloidal_discs_hd.png" alt="Parametric Cycloidal Disc Profiles 1:50 and 1:25" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 05. Electronics (Exact PDF layout: Wiring + Pinout + PCBs) ── */}
      <section className="cs-section">
        <div className="cs-section-header">
          <span className="cs-section-num">05 / ELECTRONICS &amp; SENSING</span>
          <h2 className="cs-section-title">Electrical Interconnect &amp; Power Distribution</h2>
        </div>

        {/* Electronics Explanatory Banner matching PDF label "PENJELASAN ELECTRONICS KOMPONEN PAKE APA AJA" */}
        <div className="cs-info-box" style={{ marginBottom: '20px' }}>
          <h4 style={{ color: '#0F172A', marginBottom: '8px' }}>Hardware Component Specification &amp; Power Architecture</h4>
          <p style={{ lineHeight: 1.6, fontSize: '14px' }}>
            The electronic subsystem centers around an <strong>STM32F411CEU6</strong> microcontroller (ARM Cortex-M4 @ 100 MHz) acting as the master motion controller. Five bipolar <strong>NEMA17</strong> stepper motors (17HS4401) are driven by dedicated <strong>TB6600</strong> microstepping drivers powered by a regulated <strong>24V 5A (120W)</strong> industrial power supply. Closed-loop angular position feedback is acquired in real-time via four contactless <strong>AS5600</strong> 12-bit magnetic rotary encoders routed through an 8-channel <strong>TCA9548A</strong> I2C multiplexer to eliminate bus address collisions.
          </p>
        </div>

        {/* Wiring Diagram + STM32 Pinout Table */}
        <div className="cs-electronics-hero">
          {/* Exact Wiring Handdrawn/Schematic from PDF */}
          <div 
            className="cs-card-container cs-preview-media"
            style={{ height: 'auto', minHeight: '340px', flexDirection: 'column', padding: 0 }}
            onClick={() => openZoom('/images/manipulator_wiring_interconnect_hd.png', 'Hardware Electrical Wiring Interconnect Diagram', 'Full interconnect schematic showing 24V PSU, TB6600 drivers, NEMA17 motors, AS5600 encoders, TCA9548A switch, and STM32')}
            title="Click to zoom in"
          >
            <div style={{ flex: 1, width: '100%', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF' }}>
              <img src="/images/manipulator_wiring_interconnect_hd.png" alt="Hardware Electrical Wiring Interconnect" style={{ maxHeight: '280px' }} />
            </div>
            <div className="cs-media-label" style={{ width: '100%' }}>System Wiring Interconnect Diagram</div>
          </div>

          {/* Pinout Table matching PDF */}
          <div className="cs-card-container" style={{ padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{ fontSize: '11px', fontFamily: 'DM Mono', fontWeight: 700, color: '#EA580C', letterSpacing: '0.08em', marginBottom: '8px', display: 'block' }}>
              STM32F411 GPIO PIN ALLOCATION FOR 5-AXIS STEPPER CONTROL
            </span>
            <div className="cs-table-wrapper" style={{ margin: 0 }}>
              <table className="cs-data-table">
                <thead>
                  <tr>
                    <th>MOTOR</th>
                    <th>PULSE</th>
                    <th>DIR</th>
                    <th>EN</th>
                    <th>PURPOSE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>M1 (J1)</strong></td>
                    <td><code>PA5</code></td>
                    <td><code>PB3</code></td>
                    <td><code>PA4</code></td>
                    <td>Base Yaw Rotation</td>
                  </tr>
                  <tr>
                    <td><strong>M2 (J2)</strong></td>
                    <td><code>PB0</code></td>
                    <td><code>PB1</code></td>
                    <td><code>PB2</code></td>
                    <td>Shoulder Pitch (1:50)</td>
                  </tr>
                  <tr>
                    <td><strong>M3 (J3)</strong></td>
                    <td><code>PA6</code></td>
                    <td><code>PA7</code></td>
                    <td><code>PA3</code></td>
                    <td>Elbow Pitch (1:25)</td>
                  </tr>
                  <tr>
                    <td><strong>M4 (J4)</strong></td>
                    <td><code>PA1</code></td>
                    <td><code>PA2</code></td>
                    <td><code>PC15</code></td>
                    <td>Wrist Pitch (1:25)</td>
                  </tr>
                  <tr>
                    <td><strong>M5 (J5)</strong></td>
                    <td><code>PB10</code></td>
                    <td><code>PB6</code></td>
                    <td><code>PB5</code></td>
                    <td>End-Effector Gripper</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Custom PCB EDA Layout — Static Display (Non-button) */}
        <div className="cs-pcb-static-wrap">
          <img src="/images/manipulator_pcb_eda_combined.png" alt="RABA Custom Shield PCB Layout" />
          <div className="cs-pcb-static-label">
            CUSTOM SHIELD PCB
          </div>
        </div>
      </section>

      {/* ── 06. Firmware Flowchart (Exact PDF Page 2 Top) ── */}
      <section className="cs-section">
        <div className="cs-section-header">
          <span className="cs-section-num">06 / FIRMWARE ARCHITECTURE</span>
          <h2 className="cs-section-title">Closed-Loop Control Flowchart</h2>
        </div>
        <div className="cs-flowchart-centered">
          <div 
            className="cs-card-container cs-preview-media"
            style={{ flexDirection: 'column', padding: 0 }}
            onClick={() => openZoom('/images/manipulator_firmware_flowchart_full_hd.png', 'STM32 Closed-Loop Firmware Control Flow', 'State machine: Peripheral init → IK coordinate parsing → solvability check → step pulse generation → AS5600 encoder feedback comparison with <0.2° convergence threshold')}
            title="Click to zoom in"
          >
            <div style={{ padding: '20px', background: '#FFFFFF', display: 'flex', justifyContent: 'center' }}>
              <img src="/images/manipulator_firmware_flowchart_full_hd.png" alt="Firmware Flowchart" />
            </div>
            <div className="cs-media-label" style={{ width: '100%' }}>STM32 Closed-Loop Firmware Execution State Flow — Click to Zoom</div>
          </div>
        </div>
      </section>

      {/* ── 07. System Validation & Test Results ── */}
      <section className="cs-section">
        <div className="cs-section-header">
          <span className="cs-section-num">07 / TESTING &amp; VALIDATION</span>
          <h2 className="cs-section-title">System Validation &amp; Test Results</h2>
        </div>
        <p style={{ color: '#64748B', fontSize: '13.5px', lineHeight: 1.7, marginBottom: '28px' }}>
          Three independent validation experiments were conducted on the 5-DOF manipulator prototype: joint angular accuracy (280 data points), payload capacity (175 data points), and Cartesian end-effector positioning via geometric inverse kinematics (25 data points across 5 workspace targets).
        </p>

        {/* ─── BLOCK A: Joint Angular Accuracy ─── */}
        <div className="cs-validation-block">
          <div className="cs-validation-label">A — Joint Angular Accuracy: Open-Loop vs Closed-Loop</div>
          <p className="cs-validation-desc">
            280 measurements across J1–J4, 7 target angles × 5 repetitions × 2 conditions (Open-Loop and Closed-Loop). Quantifies AS5600 encoder feedback effectiveness in correcting stepper motor step-loss.
          </p>

          <div className="cs-table-wrapper">
            <table className="cs-data-table">
              <thead>
                <tr>
                  <th>JOINT</th>
                  <th>OPEN-LOOP MAE (°)</th>
                  <th>CLOSED-LOOP MAE (°)</th>
                  <th>IMPROVEMENT</th>
                  <th>GEARBOX RATIO</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>J1 — Base Yaw</strong></td>
                  <td>0.39°</td>
                  <td>0.11°</td>
                  <td><strong>71.8%</strong></td>
                  <td>1:25 Cycloidal PLA</td>
                </tr>
                <tr>
                  <td><strong>J2 — Shoulder Pitch</strong></td>
                  <td>0.21°</td>
                  <td>0.06°</td>
                  <td><strong>71.4%</strong></td>
                  <td>1:50 Cycloidal PLA</td>
                </tr>
                <tr>
                  <td><strong>J3 — Elbow Pitch</strong></td>
                  <td>0.54°</td>
                  <td>0.09°</td>
                  <td><strong>83.3%</strong></td>
                  <td>1:25 Cycloidal PLA</td>
                </tr>
                <tr>
                  <td><strong>J4 — Wrist Pitch</strong></td>
                  <td>0.89°</td>
                  <td>0.15°</td>
                  <td><strong>83.1%</strong></td>
                  <td>1:25 Cycloidal PLA</td>
                </tr>
                <tr className="cs-table-highlight">
                  <td><strong>OVERALL AVERAGE</strong></td>
                  <td><strong>0.51°</strong></td>
                  <td><strong>0.10°</strong></td>
                  <td><strong>79.8%</strong></td>
                  <td><strong>Closed-Loop Confirmed</strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div
            className="cs-card-container cs-preview-media cs-validation-chart"
            onClick={() => openZoom('/images/ta_accuracy_chart.png', 'Joint Angular Accuracy — Open-Loop vs Closed-Loop', 'Average absolute error comparison per joint (J1–J4). Closed-loop correction reduces overall MAE from 0.51° to 0.10°, a 79.8% improvement.')}
            title="Click to zoom in"
          >
            <div style={{ width: '100%', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF' }}>
              <img src="/images/ta_accuracy_chart.png" alt="Joint Accuracy Open-Loop vs Closed-Loop Bar Chart" style={{ maxHeight: '300px', objectFit: 'contain' }} />
            </div>
            <div className="cs-media-label" style={{ width: '100%' }}>Fig A — Average Absolute Error per Joint: Open-Loop vs Closed-Loop (degrees)</div>
          </div>

          <div className="cs-two-col" style={{ marginTop: '16px' }}>
            <div className="cs-info-box">
              <h4><Award size={16} color="#F05A22" /> Closed-Loop Effectiveness</h4>
              <p>The AS5600 magnetic encoder feedback loop reduced the system-wide average error from 0.51° to 0.10°, an overall improvement of 79.8%. Joints 3 and 4 benefited most (83%), as they are exposed to the highest gravitational loading moment during operation and are most prone to stepper step-loss without feedback correction.</p>
            </div>
            <div className="cs-info-box">
              <h4><Wrench size={16} color="#F05A22" /> Design Threshold Confirmation</h4>
              <p>All joints achieved a maximum observed error of ≤ 0.20° under closed-loop control, well within the 1° angular accuracy design criterion. The J1 base yaw axis, which drives the largest inertial load, settled within 0.11° — confirming the 1:25 cycloidal PLA transmission provides sufficient torque multiplication and positional resolution at 1/8 microstepping.</p>
            </div>
          </div>
        </div>

        {/* ─── DIVIDER ─── */}
        <div className="cs-validation-divider" />

        {/* ─── BLOCK B: Payload Capacity ─── */}
        <div className="cs-validation-block">
          <div className="cs-validation-label">B — Payload Capacity &amp; Structural Failure Threshold</div>
          <p className="cs-validation-desc">
            175 measurements on J2 (primary load-bearing joint), 5 load variants (250–1,250 g) × 7 sweep angles × 5 repetitions, with Closed-Loop correction active. Establishes safe operational payload boundary.
          </p>

          <div className="cs-table-wrapper">
            <table className="cs-data-table">
              <thead>
                <tr>
                  <th>PAYLOAD</th>
                  <th>AVG POSITION ERROR (°)</th>
                  <th>MAX ERROR (°)</th>
                  <th>STABILITY</th>
                  <th>STATUS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>250 g</strong></td>
                  <td>0.09°</td>
                  <td>0.20°</td>
                  <td>Consistent</td>
                  <td><strong style={{ color: '#16A34A' }}>STABLE</strong></td>
                </tr>
                <tr>
                  <td><strong>500 g</strong></td>
                  <td>0.08°</td>
                  <td>0.20°</td>
                  <td>Consistent</td>
                  <td><strong style={{ color: '#16A34A' }}>STABLE</strong></td>
                </tr>
                <tr>
                  <td><strong>750 g</strong></td>
                  <td>0.07°</td>
                  <td>0.30°</td>
                  <td>Consistent</td>
                  <td><strong style={{ color: '#16A34A' }}>STABLE</strong></td>
                </tr>
                <tr>
                  <td><strong>1,000 g</strong></td>
                  <td>0.07°</td>
                  <td>0.30°</td>
                  <td>Consistent</td>
                  <td><strong style={{ color: '#D97706' }}>STABLE — MAX SAFE</strong></td>
                </tr>
                <tr className="cs-table-highlight">
                  <td><strong>1,250 g</strong></td>
                  <td colSpan={3}><strong>Structural deformation (PLA thermal softening) — Test aborted</strong></td>
                  <td><strong style={{ color: '#DC2626' }}>FAILURE</strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div
            className="cs-card-container cs-preview-media cs-validation-chart"
            onClick={() => openZoom('/images/ta_payload_chart.png', 'Payload Capacity — Error Curve & Failure Threshold', 'Joint 2 average and maximum position error across payload variants 250–1,000 g with mechanical failure at 1,250 g.')}
            title="Click to zoom in"
          >
            <div style={{ width: '100%', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF' }}>
              <img src="/images/ta_payload_chart.png" alt="Payload Error Curve and Failure Boundary Chart" style={{ maxHeight: '300px', objectFit: 'contain' }} />
            </div>
            <div className="cs-media-label" style={{ width: '100%' }}>Fig B — J2 Position Error vs Payload Weight with Mechanical Failure Boundary at 1,250 g</div>
          </div>

          <div className="cs-two-col" style={{ marginTop: '16px' }}>
            <div className="cs-info-box">
              <h4><Layers size={16} color="#F05A22" /> Safe Operating Envelope</h4>
              <p>Joint 2 maintained consistent angular accuracy (0.07°–0.09° MAE) across the full 250–1,000 g test range with no degradation trend, confirming that the 1:50 cycloidal gearbox provides sufficient mechanical advantage across all evaluated sweep angles. The 1,000 g safe boundary comfortably covers the 600 g hospital logistics application requirement with a 66% margin.</p>
            </div>
            <div className="cs-info-box">
              <h4><Activity size={16} color="#F05A22" /> Failure Mechanism at 1,250 g</h4>
              <p>At 1,250 g, the NEMA17 motor body generated sufficient heat to exceed the PLA heat deflection temperature (~55°C), causing the gearbox housing and motor mount to soften and deform — leading to structural collapse. The root failure is therefore thermal-mechanical (PLA material limit), not a torque saturation of the motor itself. Improved enclosure ventilation slots were subsequently added as a mitigation measure.</p>
            </div>
          </div>
        </div>

        {/* ─── DIVIDER ─── */}
        <div className="cs-validation-divider" />

        {/* ─── BLOCK C: Cartesian IK Positioning ─── */}
        <div className="cs-validation-block">
          <div className="cs-validation-label">C — Cartesian End-Effector Positioning via Geometric Inverse Kinematics</div>
          <p className="cs-validation-desc">
            5 target Cartesian workspace points (P1–P5), 5 repetitions each. Geometric IK solved on STM32F411 in real-time; end-effector position measured physically with a ruler grid datum. Validates full-system integration: IK algorithm → joint control → mechanical execution.
          </p>

          <div className="cs-table-wrapper">
            <table className="cs-data-table">
              <thead>
                <tr>
                  <th>POINT</th>
                  <th>TARGET (X, Y, Z) mm</th>
                  <th>ACTUAL (X, Y, Z) mm</th>
                  <th>AVG ERROR (mm)</th>
                  <th>ERROR (%)</th>
                  <th>MAX ERROR (mm)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>P1</strong></td>
                  <td>(275, 75, 50)</td>
                  <td>(279.8, 75.8, 45.6)</td>
                  <td>6.98</td>
                  <td><strong>2.41%</strong></td>
                  <td>9.43</td>
                </tr>
                <tr>
                  <td><strong>P2</strong></td>
                  <td>(275, 175, 100)</td>
                  <td>(278.6, 172.1, 96.2)</td>
                  <td>6.12</td>
                  <td><strong>1.79%</strong></td>
                  <td>6.40</td>
                </tr>
                <tr>
                  <td><strong>P3</strong></td>
                  <td>(275, 275, 150)</td>
                  <td>(280.3, 272.6, 146.6)</td>
                  <td>6.76</td>
                  <td><strong>1.62%</strong></td>
                  <td>7.23</td>
                </tr>
                <tr>
                  <td><strong>P4</strong></td>
                  <td>(175, 275, 100)</td>
                  <td>(176.8, 273.0, 96.6)</td>
                  <td>5.38</td>
                  <td><strong>1.58%</strong></td>
                  <td>7.00</td>
                </tr>
                <tr>
                  <td><strong>P5</strong></td>
                  <td>(75, 275, 50)</td>
                  <td>(80.0, 275.2, 43.8)</td>
                  <td>8.01</td>
                  <td><strong>2.77%</strong></td>
                  <td>9.12</td>
                </tr>
                <tr className="cs-table-highlight">
                  <td><strong>OVERALL</strong></td>
                  <td colSpan={2}><strong>5-point multi-axis workspace sweep</strong></td>
                  <td><strong>6.65 mm</strong></td>
                  <td><strong>2.03%</strong></td>
                  <td><strong>9.43 mm</strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div
            className="cs-card-container cs-preview-media cs-validation-chart"
            onClick={() => openZoom('/images/ta_kinematics_page_chart.png', 'IK End-Effector Positioning Error — P1 to P5', 'Average and maximum Cartesian position error (mm) across 5 target workspace coordinates. Overall 2.03% error rate vs < 5% design criterion.')}
            title="Click to zoom in"
          >
            <div style={{ width: '100%', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF' }}>
              <img src="/images/ta_kinematics_page_chart.png" alt="IK Positioning Error Distribution Chart" style={{ maxHeight: '300px', objectFit: 'contain' }} />
            </div>
            <div className="cs-media-label" style={{ width: '100%' }}>Fig C — Cartesian End-Effector Error Distribution Across 5 Workspace Target Points (mm)</div>
          </div>

          <div className="cs-two-col" style={{ marginTop: '16px' }}>
            <div className="cs-info-box">
              <h4><Compass size={16} color="#F05A22" /> IK Algorithm Validation</h4>
              <p>Real-time geometric inverse kinematics execution on the STM32F411 microcontroller achieved an average Cartesian tracking error of <strong>6.65 mm (2.03%)</strong>, beating the &lt;5% design threshold across all five test targets. The most precise result (P4: 5.38 mm, 1.58%) occurred at a moderate-reach symmetric pose, while the largest error (P5: 8.01 mm, 2.77%) arose at a near-boundary low-Z configuration where small joint angle deviations amplify to larger Cartesian displacement.</p>
            </div>
            <div className="cs-info-box">
              <h4><Sliders size={16} color="#F05A22" /> Error Source Attribution</h4>
              <p>Control loop angular error (MAE 0.10°) contributes only <strong>0.99 mm</strong> (~13%) of total Cartesian error via root-sum-of-squares propagation analysis. The dominant sources are: J5 motor shaft axial play (±1.7 mm measured, contributing ~3.4 mm), 3D-print dimensional tolerance (~0.2 mm per link cumulative), and physical measurement parallax from manual ruler grid positioning — all inherent prototype fabrication limitations rather than algorithmic deficiencies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 08. Conclusions & Future Recommendations (Exact PDF Page 2 Bottom) ── */}
      <section className="cs-section">
        <div className="cs-section-header">
          <span className="cs-section-num">08 / PROJECT OUTCOMES</span>
          <h2 className="cs-section-title">Key Takeaways &amp; Next Engineering Iterations</h2>
        </div>
        <div className="cs-takeaways-grid">
          <div className="cs-takeaway-card">
            <h4>Key Project Outcomes</h4>
            <p>
              • <strong>Payload Target Exceeded:</strong> The 5-DOF arm operated stably under 250–1,000 g loads with an average joint error of 0.08°, comfortably surpassing the 600 g target specification.<br />
              • <strong>Closed-Loop Repeatability:</strong> Joint error was compressed from 0.51° to 0.10° (a 79.8% accuracy gain) with maximum error peaking at only 0.20°.<br />
              • <strong>Kinematics Validation:</strong> Inverse Kinematics testing delivered a mean end-effector positional error of 6.65 mm (2.03% error percentage), staying well inside the 5% tolerance target.
            </p>
          </div>
          <div className="cs-takeaway-card cs-card-future">
            <h4>Future Engineering Iterations</h4>
            <p>
              • <strong>Active End-Effector:</strong> Designing and fabricating an active motorized gripper on Joint 5 to execute autonomous physical pick-and-place routines.<br />
              • <strong>Thermal Management:</strong> Adding cooling heatsinks or forced ventilation to motor mountings to prevent long-duration thermal softening of PLA structural components.<br />
              • <strong>Material Upgrade:</strong> Upgrading cycloid discs and primary structural brackets from 3D-printed PLA to CNC-machined aluminum for enhanced structural rigidity and thermal resistance.<br />
              • <strong>Mobile Base &amp; Vision:</strong> Integrating the manipulator onto an autonomous mobile robot chassis with computer vision for automatic object coordinate detection.
            </p>
          </div>
        </div>
      </section>

      {/* ── Bottom Navigation ── */}
      <div className="cs-bottom-nav">
        <a href="/#projects" className="cs-nav-btn secondary">
          <ArrowLeft size={16} /> Back to Selected Work
        </a>
        <a href="/projects/solar-cooling" className="cs-nav-btn">
          Next Project: Solar Panel Cooling <ArrowRight size={16} />
        </a>
      </div>

      {/* ── Image Lightbox Modal ── */}
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
