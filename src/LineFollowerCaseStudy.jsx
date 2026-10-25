import React, { useState } from 'react';
import { 
  ArrowLeft, ArrowRight, Award, Activity, Wrench, Layers, 
  Cpu, ZoomIn, Eye, Sliders, BatteryCharging, Gauge, CheckCircle2
} from 'lucide-react';
import ImageLightboxModal from './ImageLightboxModal';

export default function LineFollowerCaseStudy() {
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
        <span className="cs-status-badge">INDEPENDENT EMBEDDED BUILD · BANDUNG (2024)</span>
      </div>

      {/* ── Header ── */}
      <header className="cs-header">
        <h1 className="cs-title-single-line">
          Autonomous Line Follower Robot: 8-Channel Photodiode Array &amp; PID Motion Control
        </h1>

        <div style={{ display: 'flex', gap: '36px', flexWrap: 'wrap', margin: '14px 0 24px', fontSize: '13px', color: '#475569' }}>
          <div>
            <strong style={{ display: 'block', color: '#0F172A', fontSize: '14px' }}>Bayu Aji Trisasongko</strong>
            <span>Hardware Designer &amp; Embedded Firmware Engineer</span>
          </div>
          <div>
            <strong style={{ display: 'block', color: '#0F172A', fontSize: '14px' }}>Project Scope</strong>
            <span>Independent Mobile Robotics Prototyping</span>
          </div>
          <div>
            <strong style={{ display: 'block', color: '#0F172A', fontSize: '14px' }}>Control Paradigm</strong>
            <span>Closed-Loop PID Steering Algorithm</span>
          </div>
        </div>

        {/* 50 / 50 Hero Split */}
        <div className="cs-hero-split-50" style={{ alignItems: 'flex-start' }}>
          <div className="cs-hero-split-left">
            <p className="cs-hero-desc-text" style={{ marginBottom: '16px' }}>
              Design, hand-soldered hardware fabrication, and closed-loop motion tuning of an autonomous differential-drive line-tracking mobile robot. Integrates an 8-channel curved photodiode/LED sensor bar, real-time PID steering logic on an ATmega328P (Arduino Nano), dual-channel TB6612FNG MOSFET motor driver, I2C 128×64 OLED telemetry, and dual 18650 Li-ion battery power.
            </p>

            <div className="cs-metrics-grid-2x2">
              <div className="cs-metric-card-fit">
                <span className="cs-metric-num-fit">8 Channels</span>
                <span className="cs-metric-desc-fit">
                  Curved photodiode + LED reflectance sensing array
                </span>
              </div>
              <div className="cs-metric-card-fit">
                <span className="cs-metric-num-fit">Closed-Loop PID</span>
                <span className="cs-metric-desc-fit">
                  Proportional-Integral-Derivative steering algorithm
                </span>
              </div>
              <div className="cs-metric-card-fit">
                <span className="cs-metric-num-fit">TB6612FNG</span>
                <span className="cs-metric-desc-fit">
                  Dual MOSFET H-bridge high-efficiency motor driver
                </span>
              </div>
              <div className="cs-metric-card-fit">
                <span className="cs-metric-num-fit">7.4V (2S Li-ion)</span>
                <span className="cs-metric-desc-fit">
                  Dual 18650 cell battery pack with I2C OLED telemetry
                </span>
              </div>
            </div>
          </div>

          <div className="cs-hero-split-right" style={{ alignSelf: 'center' }}>
            <img 
              src="/images/line_follower_real.png" 
              alt="Autonomous Line Follower Robot Hand-Built Prototype"
              className="cs-hero-clean-photo"
              onClick={() => openZoom('/images/line_follower_real.png', 'Autonomous Line Follower Robot Hardware Prototype', 'Top view showing curved 8-channel photodiode sensor bar, Arduino Nano core, I2C OLED display, tactile pushbuttons, dual 18650 battery pack, and N20 gear motors')}
              title="Click to zoom in"
            />
          </div>
        </div>
      </header>

      {/* ── 01. Problem Statement & Architecture ── */}
      <section className="cs-section">
        <div className="cs-section-header">
          <span className="cs-section-num">01 / PROBLEM STATEMENT &amp; OBJECTIVES</span>
          <h2 className="cs-section-title">High-Contrast Surface Tracking &amp; Dynamic Steering</h2>
        </div>
        <div className="cs-two-col">
          <div className="cs-info-box">
            <h4><Activity size={18} color="#F05A22" /> The Mobile Tracking Challenge</h4>
            <p>
              Autonomous line-tracking vehicles in industrial logistics (AGVs) require stable trajectory retention when navigating sharp corners, crossing intersections, and adapting to variable ambient lighting. Simple bang-bang (on/off) threshold steering induces excessive mechanical oscillation and motor wear, which destabilizes high-speed transit.
            </p>
            <p style={{ marginTop: '12px' }}>
              The engineering objective of this build was to design and hand-wire a compact mobile robotic platform capable of executing <strong>continuous closed-loop PID control</strong> using an 8-channel optical sensor bar, paired with on-chassis OLED parameter tuning without relying on an external computer during field runs.
            </p>
          </div>
          <div className="cs-info-box">
            <h4><Wrench size={18} color="#F05A22" /> Target Technical Specifications</h4>
            <ul className="cs-constraint-list">
              <li><strong>Optical Sensor Geometry:</strong> 8-pair photodiode and LED reflectance arrangement configured in a forward-extended parabolic curve to anticipate heading changes.</li>
              <li><strong>Processing Microcontroller:</strong> Arduino Nano (ATmega328P @ 16 MHz) reading sensor channels directly into analog ADC inputs.</li>
              <li><strong>Actuator &amp; Driver:</strong> Micro N20 metal gearmotors driven by a high-efficiency dual MOSFET <strong>TB6612FNG</strong> motor driver (1.2A continuous / 3.2A peak).</li>
              <li><strong>Motion Control Algorithm:</strong> Real-time PID error computation with dynamic differential PWM motor output.</li>
              <li><strong>HMI Telemetry:</strong> 0.96-inch I2C OLED display (128×64) + dual tactile pushbuttons for sensor calibration, threshold inspection, and live error display.</li>
              <li><strong>Power Bus:</strong> 2S 18650 Li-ion battery pack (7.4V nominal) with mechanical rocker power switch and regulated 5V logic supply.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── 02. Hardware Architecture & Sensing Subsystem ── */}
      <section className="cs-section">
        <div className="cs-section-header">
          <span className="cs-section-num">02 / HARDWARE ARCHITECTURE &amp; SENSING</span>
          <h2 className="cs-section-title">Optical Array Geometry &amp; Electrical Architecture</h2>
        </div>

        <div className="cs-two-col" style={{ alignItems: 'stretch' }}>
          <div className="cs-info-box" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h4 style={{ color: '#0F172A', marginBottom: '10px' }}><Eye size={18} color="#F05A22" /> Curved 8-Channel Photodiode Sensor Bar</h4>
              <p style={{ lineHeight: 1.65, fontSize: '13.5px', color: '#334155' }}>
                The forward sensor array utilizes 8 pairs of infrared photodiodes and high-intensity emitter LEDs arranged across a custom-profiled curved perfboard. Unlike a standard linear bar, the curved profile places outer sensor pairs slightly further back, providing progressive angle anticipation when transitioning into high-radius bends.
              </p>
              <p style={{ lineHeight: 1.65, fontSize: '13.5px', color: '#334155', marginTop: '10px' }}>
                Each photodiode is directly connected to the Arduino Nano analog inputs, converting reflected optical intensity into 10-bit digital values (0–1023). This enables proportional weighted average position calculations:
              </p>
              <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '10px 14px', borderRadius: '4px', fontFamily: 'DM Mono', fontSize: '11px', color: '#0F172A', margin: '10px 0' }}>
                Position = Σ (Sensor[i] × Weight[i]) / Σ Sensor[i]
              </div>
              <p style={{ lineHeight: 1.65, fontSize: '13px', color: '#64748B' }}>
                Sensor weights are normalized from −3500 (far left) to +3500 (far right) with center aligned at 0.
              </p>
            </div>
          </div>

          <div className="cs-info-box" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h4 style={{ color: '#0F172A', marginBottom: '10px' }}><Cpu size={18} color="#F05A22" /> TB6612FNG Power &amp; Drive Subsystem</h4>
              <p style={{ lineHeight: 1.65, fontSize: '13.5px', color: '#334155' }}>
                Motor driving is handled by a <strong>TB6612FNG</strong> dual MOSFET H-bridge driver rather than older BJT-based chips (like L298N). The low internal on-resistance of MOSFETs eliminates thermal heatsinking requirements and drastically reduces voltage drops, delivering maximum battery power to the N20 gear motors.
              </p>
              <p style={{ lineHeight: 1.65, fontSize: '13.5px', color: '#334155', marginTop: '10px' }}>
                The motors are housed inside custom 3D-printed mounting brackets that provide rigid alignment for high-traction silicone-rubber wheel rims, ensuring zero backlash and high grip against competition tile surfaces.
              </p>
            </div>
          </div>
        </div>

        {/* Pinout & Interconnect Table */}
        <div className="cs-table-card" style={{ marginTop: '24px' }}>
          <table className="cs-data-table">
            <thead>
              <tr>
                <th>SUB-SYSTEM</th>
                <th>COMPONENT</th>
                <th>INTERFACE / PINS</th>
                <th>ENGINEERING FUNCTION</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Processing Core</strong></td>
                <td>Arduino Nano (ATmega328P)</td>
                <td>16 MHz, 32 KB Flash, 5V Logic</td>
                <td>ADC sensor sampling, PID error processing, PWM generation</td>
              </tr>
              <tr>
                <td><strong>Sensor Bar</strong></td>
                <td>8× Photodiode + LED pairs</td>
                <td>Analog Pins A0 – A7</td>
                <td>Real-time reflectance acquisition with weighted position output</td>
              </tr>
              <tr>
                <td><strong>Motor Driver</strong></td>
                <td>Toshiba TB6612FNG</td>
                <td>D5, D6 (PWM), D7, D8, D9, D10 (DIR)</td>
                <td>Dual-channel MOSFET bidirectional differential motor drive</td>
              </tr>
              <tr>
                <td><strong>HMI Display</strong></td>
                <td>0.96" OLED 128×64</td>
                <td>I2C Bus (A4/SDA, A5/SCL)</td>
                <td>On-chassis live threshold display and menu navigation</td>
              </tr>
              <tr>
                <td><strong>Operator Controls</strong></td>
                <td>2× Tactile Pushbuttons</td>
                <td>Digital Inputs D2, D3 (Internal Pullup)</td>
                <td>Start/Stop trigger &amp; sensor calibration sequence selection</td>
              </tr>
              <tr>
                <td><strong>Power Supply</strong></td>
                <td>2S 18650 Li-ion Cells (7.4V)</td>
                <td>Regulated step-down to 5V MCU</td>
                <td>High-discharge energy density for consistent motor torque</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── 03. Control Algorithm & PID Firmware ── */}
      <section className="cs-section">
        <div className="cs-section-header">
          <span className="cs-section-num">03 / CONTROL FIRMWARE &amp; PID LOGIC</span>
          <h2 className="cs-section-title">Closed-Loop PID Steering &amp; Calibration State Machine</h2>
        </div>

        <div className="cs-two-col" style={{ alignItems: 'stretch' }}>
          <div className="cs-info-box">
            <h4><Sliders size={18} color="#F05A22" /> PID Controller Tuning</h4>
            <p style={{ lineHeight: 1.65, fontSize: '13.5px', color: '#334155' }}>
              The robot executes a discrete PID feedback loop updating every 5 milliseconds:
            </p>
            <ul className="cs-constraint-list" style={{ marginTop: '10px' }}>
              <li><strong>Proportional Term (Kp):</strong> Generates corrective differential torque directly proportional to the current distance of the line from center.</li>
              <li><strong>Integral Term (Ki):</strong> Accumulates minor steady-state positional biases to maintain exact centering on gentle arc segments.</li>
              <li><strong>Derivative Term (Kd):</strong> Predicts rapid rate-of-change, dampening overshoot and preventing oscillatory wobbling when transitioning into tight 90° hairpins.</li>
            </ul>
            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '12px', borderRadius: '4px', fontFamily: 'DM Mono', fontSize: '11px', color: '#EA580C', marginTop: '14px' }}>
              PWM_Left  = BaseSpeed + (Kp·e + Ki·∫e dt + Kd·Δe/Δt)<br />
              PWM_Right = BaseSpeed − (Kp·e + Ki·∫e dt + Kd·Δe/Δt)
            </div>
          </div>

          <div className="cs-info-box">
            <h4><CheckCircle2 size={18} color="#F05A22" /> Autonomous Calibration Routine</h4>
            <p style={{ lineHeight: 1.65, fontSize: '13.5px', color: '#334155' }}>
              To ensure reliability across diverse track floor textures, an automated calibration routine is programmed into the Arduino firmware:
            </p>
            <p style={{ lineHeight: 1.65, fontSize: '13.5px', color: '#334155', marginTop: '8px' }}>
              1. Upon pressing the blue pushbutton, the robot gently pivots across the line for 3 seconds.<br />
              2. Minimum (white surface) and maximum (black line) reflectance values are logged for each of the 8 individual sensor channels.<br />
              3. Dynamic threshold offsets are computed and saved in runtime memory.<br />
              4. Successful calibration state and battery cell voltages are verified on the OLED display before commencing autonomous navigation.
            </p>
          </div>
        </div>
      </section>

      {/* ── 04. Key Engineering Takeaways ── */}
      <section className="cs-section">
        <div className="cs-section-header">
          <span className="cs-section-num">04 / PROJECT OUTCOMES &amp; TAKEAWAYS</span>
          <h2 className="cs-section-title">Performance Summary &amp; Engineering Iterations</h2>
        </div>
        <div className="cs-takeaways-grid">
          <div className="cs-takeaway-card">
            <h4>Technical Achievements</h4>
            <p>
              • <strong>Smooth Line Tracking:</strong> PID damping completely eliminated the abrupt zig-zag motion common in basic comparator line followers, enabling higher average sprint speeds.<br />
              • <strong>Rapid Diagnostics:</strong> Onboard I2C OLED display allowed instantaneous verification of sensor pin status, battery level, and calibration values without tethering a PC.<br />
              • <strong>Electrical Efficiency:</strong> Deploying the TB6612FNG MOSFET driver and 7.4V Li-ion battery provided responsive acceleration with minimal thermal dissipation.
            </p>
          </div>
          <div className="cs-takeaway-card cs-card-future">
            <h4>Next Engineering Iterations</h4>
            <p>
              • <strong>Custom Printed Circuit Board (PCB):</strong> Migrating from hand-routed perfboard to a 2-layer SMD PCB to reduce deadweight and lower the center of gravity.<br />
              • <strong>Magnetic Encoder Feedback:</strong> Equipping N20 gear motors with quadrature magnetic encoders to implement true dual-loop velocity-position tracking.<br />
              • <strong>Track Memory &amp; Mapping:</strong> Utilizing EEPROM storage to log track intersection sequences for autonomous shortest-path grid solving.
            </p>
          </div>
        </div>
      </section>

      {/* ── Bottom Navigation ── */}
      <div className="cs-bottom-nav">
        <a href="/projects/krai-2025" className="cs-nav-btn secondary">
          <ArrowLeft size={16} /> Previous: KRAI Robot Basketball
        </a>
        <a href="/projects/sumo-robot" className="cs-nav-btn">
          Next: Bluetooth Sumo Robot <ArrowRight size={16} />
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
