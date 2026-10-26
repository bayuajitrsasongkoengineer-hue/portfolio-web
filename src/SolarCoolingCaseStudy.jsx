import React, { useState } from 'react';
import { 
  ArrowLeft, ArrowRight, Award, Activity, Wrench, Layers, 
  Cpu, ZoomIn, ShieldCheck, BatteryCharging, Droplets, Sun
} from 'lucide-react';
import ImageLightboxModal from './ImageLightboxModal';

export default function SolarCoolingCaseStudy() {
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
        <span className="cs-status-badge">INTEGRATED DESIGN PROJECT (IDP) · TELKOM UNIVERSITY (2025–2026)</span>
      </div>

      {/* ── Header ── */}
      <header className="cs-header">
        <h1 className="cs-title-single-line">
          Automated Solar Panel Cooling System for High-Temperature Efficiency
        </h1>

        <div style={{ display: 'flex', gap: '36px', flexWrap: 'wrap', margin: '14px 0 24px', fontSize: '13px', color: '#475569' }}>
          <div>
            <strong style={{ display: 'block', color: '#0F172A', fontSize: '14px' }}>Bayu Aji Trisasongko</strong>
            <span>Hardware &amp; Electrical Implementation Lead</span>
          </div>
          <div>
            <strong style={{ display: 'block', color: '#0F172A', fontSize: '14px' }}>IDP Team 6 (4 Members)</strong>
            <span>B.S. Electrical Engineering · Telkom University</span>
          </div>
          <div>
            <strong style={{ display: 'block', color: '#0F172A', fontSize: '14px' }}>SDG 7 Alignment</strong>
            <span>Affordable &amp; Clean Energy</span>
          </div>
        </div>

        {/* Hero 50/50 Split */}
        <div className="cs-hero-split-50" style={{ alignItems: 'flex-start' }}>
          <div className="cs-hero-split-left">
            <p className="cs-hero-desc-text" style={{ marginBottom: '16px' }}>
              Development and outdoor deployment of an autonomous closed-loop water-spray cooling subsystem for photovoltaic panels. Operates based on real-time surface thermal monitoring with automatic threshold actuation (&gt;30°C ON / &lt;25°C OFF), off-grid battery autonomy, and IPX4 weatherproof ABS enclosure protection.
            </p>

            <div className="cs-metrics-grid-2x2">
              <div className="cs-metric-card-fit">
                <span className="cs-metric-num-fit">&gt;30°C / &lt;25°C</span>
                <span className="cs-metric-desc-fit">
                  Autonomous closed-loop cooling threshold triggers
                </span>
              </div>
              <div className="cs-metric-card-fit">
                <span className="cs-metric-num-fit">4.02 L/min</span>
                <span className="cs-metric-desc-fit">
                  Precision water-spray delivery rate across solar cells
                </span>
              </div>
              <div className="cs-metric-card-fit">
                <span className="cs-metric-num-fit">4h 09m</span>
                <span className="cs-metric-desc-fit">
                  Continuous battery backup runtime (102 Wh @ &gt;25W load)
                </span>
              </div>
              <div className="cs-metric-card-fit">
                <span className="cs-metric-num-fit">IPX4 &amp; MC4</span>
                <span className="cs-metric-desc-fit">
                  Full weatherproof enclosure and universal PV connector compatibility
                </span>
              </div>
            </div>
          </div>

          <div className="cs-hero-split-right" style={{ alignSelf: 'center' }}>
            <img 
              src="/images/solar_cooling_hardware_real.jpeg" 
              alt="Assembled Solar Panel Automated Cooling Test Rig"
              className="cs-hero-clean-photo"
              onClick={() => openZoom('/images/solar_cooling_hardware_real.jpeg', 'Assembled Solar Panel Cooling Apparatus', 'Full test apparatus: (a) Control center with Arduino & relay, (b) Water outlet tube, (c) 12V DC water pump, (d) Temperature probe, (e) Water inlet suction hose')}
              title="Click to zoom in"
            />
          </div>
        </div>
      </header>

      {/* ── 01. Problem Statement & Motivation ── */}
      <section className="cs-section">
        <div className="cs-section-header">
          <span className="cs-section-num">01 / BACKGROUND &amp; MOTIVATION</span>
          <h2 className="cs-section-title">Thermal Degradation in Photovoltaic Energy Harvesting</h2>
        </div>
        <div className="cs-two-col">
          <div className="cs-info-box">
            <h4><Sun size={18} color="#F05A22" /> High-Temperature Solar Efficiency Loss</h4>
            <p>
              In tropical climates like Indonesia, intense solar irradiance routinely elevates photovoltaic panel surface temperatures beyond <strong>45°C to 50°C</strong>. For every 1°C increase above the standard testing condition (25°C), crystalline silicon solar cells suffer an efficiency decline of approximately <strong>0.3% to 0.5%</strong>, resulting in over 10% lost power generation during peak irradiance hours (11:00–15:00).
            </p>
            <p style={{ marginTop: '12px' }}>
              Prolonged exposure to elevated thermal stress also induces silicon layer degradation and thermal micro-cracking, shortening panel operational longevity.
            </p>
          </div>
          <div className="cs-info-box">
            <h4><Wrench size={18} color="#F05A22" /> Engineering Objective &amp; Requirements</h4>
            <ul className="cs-constraint-list">
              <li><strong>Autonomous Closed-Loop Control:</strong> Activate cooling pump when surface temperature exceeds 30°C and deactivate once lowered to 25°C.</li>
              <li><strong>Active Water-Spray Mechanism:</strong> Deliver uniform water distribution via a high heat-capacity coolant (4,186 J/kg·°C) at a regulated ~4 L/min flow rate.</li>
              <li><strong>Off-Grid Power Resilience:</strong> Powered independently by an onboard 12V 10Ah battery capable of sustaining continuous cooling for &gt;4 hours.</li>
              <li><strong>Universal Compatibility:</strong> Compatible with Monocrystalline, Polycrystalline, and Thin-Film panels using standard MC4 electrical interfaces.</li>
              <li><strong>Weatherproof Reliability:</strong> ABS enclosure meeting IPX4 multi-directional spray-proof standards.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── 02. System Architecture & Solved Concept ── */}
      <section className="cs-section">
        <div className="cs-section-header">
          <span className="cs-section-num">02 / SYSTEM ARCHITECTURE</span>
          <h2 className="cs-section-title">Cooling Cycle Architecture &amp; Control Logic</h2>
        </div>

        <div className="cs-two-col" style={{ alignItems: 'stretch' }}>
          <div 
            className="cs-card-container cs-preview-media" 
            style={{ height: 'auto', minHeight: '300px', flexDirection: 'column', padding: 0 }}
            onClick={() => openZoom('/images/solar_cooling_architecture.jpeg', 'Solar Panel Cooling Physical Layout', 'Schematic diagram illustrating (1) Solar panel, (2) Temperature sensor probe, (3) Microcontroller & relay box, (4) Submersible water pump, (5) Reservoir tank, (6) Perforated spray manifold, (7) LCD display')}
            title="Click to zoom in"
          >
            <div style={{ flex: 1, width: '100%', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF' }}>
              <img src="/images/solar_cooling_architecture.jpeg" alt="Solar Cooling Physical Layout Diagram" style={{ maxHeight: '260px' }} />
            </div>
            <div className="cs-media-label" style={{ width: '100%' }}>Physical Layout &amp; Plumbing Distribution Scheme</div>
          </div>

          <div 
            className="cs-card-container cs-preview-media" 
            style={{ height: 'auto', minHeight: '300px', flexDirection: 'column', padding: 0 }}
            onClick={() => openZoom('/images/solar_cooling_flowchart.jpeg', 'Microcontroller Execution Flowchart', 'Logic flowchart: Initialization → Read surface temperature & PV output → Decision (T > 30°C?) → Activate 12V pump → Temperature falls to < 25°C → Deactivate pump → Display live metrics on 16x2 LCD')}
            title="Click to zoom in"
          >
            <div style={{ flex: 1, width: '100%', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF' }}>
              <img src="/images/solar_cooling_flowchart.jpeg" alt="Control Execution Flowchart" style={{ maxHeight: '260px' }} />
            </div>
            <div className="cs-media-label" style={{ width: '100%' }}>Closed-Loop Microcontroller Flowchart (30°C ON / 25°C OFF)</div>
          </div>
        </div>

        <div className="cs-two-col" style={{ marginTop: '20px' }}>
          <div className="cs-info-box">
            <h4><Droplets size={18} color="#F05A22" /> Thermodynamic Cooling Strategy</h4>
            <p>
              The system utilizes a top-mounted perforated manifold pipe that deposits a thin, laminar water film across the panel face. By exploiting the high specific heat capacity of water, surface thermal energy is rapidly conducted away without obstructing incident solar rays during active daytime generation.
            </p>
          </div>
          <div className="cs-info-box">
            <h4><Cpu size={18} color="#F05A22" /> Embedded Controller Integration</h4>
            <p>
              An <strong>Arduino UNO R3</strong> monitors the surface RTD temperature sensor in real time. Hysteresis switching logic (turn-on at 30°C, turn-off at 25°C) prevents relay chatter and conserves both pump energy and water consumption. Live system status and surface temperatures are rendered on an I2C 16×2 LCD screen.
            </p>
          </div>
        </div>
      </section>

      {/* ── 03. Testing & Experimental Validation ── */}
      <section className="cs-section">
        <div className="cs-section-header">
          <span className="cs-section-num">03 / TESTING &amp; VALIDATION</span>
          <h2 className="cs-section-title">System Performance &amp; Hardware Test Results</h2>
        </div>
        <p style={{ color: '#64748B', fontSize: '13.5px', lineHeight: 1.7, marginBottom: '28px' }}>
          Validation was conducted across five critical specifications: automated temperature threshold response, spray delivery flowrate, off-grid battery autonomy, IPX4 water ingress resistance, and universal PV mechanical mounting.
        </p>

        {/* ─── BLOCK A: Temperature Threshold & Cooling Rate ─── */}
        <div className="cs-validation-block">
          <div className="cs-validation-label">A — Automated Threshold Actuation &amp; Thermal Reduction</div>
          <p className="cs-validation-desc">
            Evaluated across 3 full heating-cooling cycles under ambient tropical sunlight. Validates automatic pump trigger at &gt;30°C and return to baseline &le;25°C.
          </p>

          <div className="cs-table-wrapper">
            <table className="cs-data-table">
              <thead>
                <tr>
                  <th>TRIAL ITERATION</th>
                  <th>INITIAL PRE-COOL TEMP (°C)</th>
                  <th>ACTIVATION TEMP TRIGGER</th>
                  <th>TIME TO REACH 25°C</th>
                  <th>DEACTIVATION TEMP</th>
                  <th>RESPONSE RELIABILITY</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Trial 1</strong></td>
                  <td>41.2°C</td>
                  <td>30.1°C (±0.2)</td>
                  <td>9.0 minutes</td>
                  <td>25.2°C</td>
                  <td><strong style={{ color: '#16A34A' }}>Verified Autonomous</strong></td>
                </tr>
                <tr>
                  <td><strong>Trial 2</strong></td>
                  <td>40.5°C</td>
                  <td>30.3°C</td>
                  <td>10.0 minutes</td>
                  <td>25.1°C</td>
                  <td><strong style={{ color: '#16A34A' }}>Verified Autonomous</strong></td>
                </tr>
                <tr>
                  <td><strong>Trial 3</strong></td>
                  <td>42.1°C</td>
                  <td>30.2°C</td>
                  <td>9.5 minutes</td>
                  <td>25.0°C</td>
                  <td><strong style={{ color: '#16A34A' }}>Verified Autonomous</strong></td>
                </tr>
                <tr className="cs-table-highlight">
                  <td><strong>AVERAGE</strong></td>
                  <td><strong>41.3°C</strong></td>
                  <td><strong>30.2°C (±0.3°C dev)</strong></td>
                  <td><strong>9.5 minutes (~1.7°C/min drop)</strong></td>
                  <td><strong>25.1°C</strong></td>
                  <td><strong>Repeatable Cycle Response</strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="cs-two-col" style={{ marginTop: '16px' }}>
            <div className="cs-info-box">
              <h4><Award size={16} color="#F05A22" /> Thermal Regulation Finding</h4>
              <p>The cooling mechanism reduced panel surface temperature by over <strong>16°C</strong> (from ~41.3°C down to 25.1°C) within an average duration of 9.5 minutes. Operating the panel within this optimal 25–30°C thermal envelope yields an estimated <strong>theoretical recovery of 6% to 8% in electrical power output</strong> based on standard silicon thermal coefficients (−0.4%/°C) compared to uncooled stagnation states.</p>
            </div>
            <div className="cs-info-box">
              <h4><Activity size={16} color="#F05A22" /> Trigger Consistency</h4>
              <p>The sensor-relay control loop maintained consistent repeatability with activation trigger deviation kept within <strong>±0.3°C</strong> across trials. Subsystem calibration verified temperature probe measurement accuracy within <strong>±0.6°C</strong> against a reference calibrated thermometer.</p>
            </div>
          </div>
        </div>

        <div className="cs-validation-divider" />

        {/* ─── BLOCK B: Spray Flow Rate & Water Economy ─── */}
        <div className="cs-validation-block">
          <div className="cs-validation-label">B — Spray Flowrate &amp; Reservoir Water Budget</div>
          <p className="cs-validation-desc">
            3 flowrate trials measuring water consumption over 1-minute intervals to balance heat dissipation against conservation in closed-reservoir setups.
          </p>

          <div className="cs-table-wrapper">
            <table className="cs-data-table">
              <thead>
                <tr>
                  <th>TRIAL ITERATION</th>
                  <th>INITIAL TEMP</th>
                  <th>DISPENSE RATE (L/MIN)</th>
                  <th>CYCLE DURATION</th>
                  <th>TOTAL WATER USED / CYCLE</th>
                  <th>RESERVOIR CAPACITY (20L)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Trial 1</strong></td>
                  <td>41.0°C</td>
                  <td>4.05 L/min</td>
                  <td>±2.5 min</td>
                  <td>10.0 L</td>
                  <td>Sustains 2 Full Cycles</td>
                </tr>
                <tr>
                  <td><strong>Trial 2</strong></td>
                  <td>40.5°C</td>
                  <td>4.02 L/min</td>
                  <td>±2.4 min</td>
                  <td>9.8 L</td>
                  <td>Sustains 2 Full Cycles</td>
                </tr>
                <tr>
                  <td><strong>Trial 3</strong></td>
                  <td>42.1°C</td>
                  <td>3.98 L/min</td>
                  <td>±2.6 min</td>
                  <td>10.2 L</td>
                  <td>Sustains 2 Full Cycles</td>
                </tr>
                <tr className="cs-table-highlight">
                  <td><strong>AVERAGE</strong></td>
                  <td><strong>41.2°C</strong></td>
                  <td><strong>4.02 L/min</strong></td>
                  <td><strong>2.5 minutes active</strong></td>
                  <td><strong>10.0 Liters</strong></td>
                  <td><strong>Autonomous Daily Buffer</strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="cs-two-col" style={{ marginTop: '16px' }}>
            <div className="cs-info-box">
              <h4><Droplets size={16} color="#F05A22" /> Flowrate Optimization</h4>
              <p>The delivered flowrate of <strong>4.02 L/min</strong> matches theoretical heat absorption requirements for 150–200 Wp panel surface areas. Water is pumped in short 2.5-minute bursts rather than continuous flushing, achieving substantial energy gains while minimizing water usage.</p>
            </div>
            <div className="cs-info-box">
              <h4><Layers size={16} color="#F05A22" /> Closed-Loop Recirculation Feasibility</h4>
              <p>A compact 20-liter tank provides complete autonomy for two standard peak-noon cooling cycles. In production installations, integrating a bottom rainwater catchment gutter enables continuous circular re-filtration with zero municipal water dependence.</p>
            </div>
          </div>
        </div>

        <div className="cs-validation-divider" />

        {/* ─── BLOCK C: Battery Runtime & System Robustness ─── */}
        <div className="cs-validation-block">
          <div className="cs-validation-label">C — Energy Autonomy &amp; Environmental Ingress Protection</div>
          <p className="cs-validation-desc">
            Continuous electrical load discharge testing over the 11:00–15:00 peak solar radiation window, paired with IPX4 multi-directional spray tests and MC4 electrical verification.
          </p>

          <div className="cs-table-wrapper">
            <table className="cs-data-table">
              <thead>
                <tr>
                  <th>VERIFICATION CRITERIA</th>
                  <th>MEASURED METRIC</th>
                  <th>TEST PARAMETERS</th>
                  <th>PASS / FAIL STATUS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Battery Operational Endurance</strong></td>
                  <td><strong>4 hours 09 minutes</strong></td>
                  <td>12V 10Ah battery powering &gt;25W load (pump + MCU + sensors)</td>
                  <td><strong style={{ color: '#16A34A' }}>PASS — 102 Wh Delivered</strong></td>
                </tr>
                <tr>
                  <td><strong>Peak Solar Window Coverage</strong></td>
                  <td><strong>100% Uninterrupted</strong></td>
                  <td>Continuous operation from 11:00 to 15:00 without mains connection</td>
                  <td><strong style={{ color: '#16A34A' }}>PASS — Fully Off-Grid</strong></td>
                </tr>
                <tr>
                  <td><strong>IPX4 Enclosure Waterproofing</strong></td>
                  <td><strong>Zero Ingress / Dry</strong></td>
                  <td>5-min continuous high-volume spray from 4 directions on ABS casing</td>
                  <td><strong style={{ color: '#16A34A' }}>PASS — No Moisture Ingress</strong></td>
                </tr>
                <tr>
                  <td><strong>Universal MC4 Electrical Interface</strong></td>
                  <td><strong>100% Continuity</strong></td>
                  <td>Tested on Monocrystalline, Polycrystalline, and Flexible PV arrays</td>
                  <td><strong style={{ color: '#16A34A' }}>PASS — Zero Drop</strong></td>
                </tr>
                <tr>
                  <td><strong>Structural Mounting Stability</strong></td>
                  <td><strong>Zero Displacement</strong></td>
                  <td>Simulated 60 km/h wind shear blower test on concrete/tilt mounts</td>
                  <td><strong style={{ color: '#16A34A' }}>PASS — Rigid Anchor</strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="cs-two-col" style={{ marginTop: '16px' }}>
            <div className="cs-info-box">
              <h4><BatteryCharging size={16} color="#F05A22" /> Complete Energy Self-Sufficiency</h4>
              <p>The subsystem operated stably throughout the entire 4-hour peak irradiance window without voltage collapse, drawing ~25.2W and consuming a total of 102 Wh. The battery can be replenished directly via an auxiliary branch from the solar charge controller (SCC).</p>
            </div>
            <div className="cs-info-box">
              <h4><ShieldCheck size={16} color="#F05A22" /> Environmental Durability Compliance</h4>
              <p>Direct spray testing confirmed IPX4 ingress protection on the ABS electrical housing. All internal electronics, terminals, and sensor interfaces remained moisture-free, validating field survivability under harsh tropical rain events.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 04. Role & Team Engineering Execution ── */}
      <section className="cs-section">
        <div className="cs-section-header">
          <span className="cs-section-num">04 / PROJECT OUTCOMES &amp; ROLE</span>
          <h2 className="cs-section-title">Individual Contribution &amp; Key Takeaways</h2>
        </div>
        <div className="cs-takeaways-grid">
          <div className="cs-takeaway-card">
            <h4>Bayu's Engineering Responsibility</h4>
            <p>
              • <strong>Hardware &amp; Electrical Architecture:</strong> Led the integration of the 12V DC power bus, relay switching circuits, Arduino controller, and I2C LCD diagnostic telemetry.<br />
              • <strong>Plumbing &amp; Actuation Assembly:</strong> Built and calibrated the water distribution manifold, pump sizing, and outdoor plumbing line integration.<br />
              • <strong>Experimental Field Trials:</strong> Managed outdoor thermal logging, sensor calibration, battery load discharge profiling, and IPX4 ingress testing.
            </p>
          </div>
          <div className="cs-takeaway-card cs-card-future">
            <h4>Scalability &amp; Next Engineering Iterations</h4>
            <p>
              • <strong>Smart Variable-Frequency Pumping:</strong> Replacing bang-bang relay control with PWM flowrate modulation proportional to temperature delta.<br />
              • <strong>Closed-Loop Greywater Filtration:</strong> Adding an automated mesh and sediment filter to recirculate runoff water continuously.<br />
              • <strong>IoT Cloud Telemetry:</strong> Equipping the unit with ESP32 Wi-Fi/LoRa connectivity to transmit surface thermal health to plant management dashboards.
            </p>
          </div>
        </div>
      </section>

      {/* ── Bottom Navigation ── */}
      <div className="cs-bottom-nav">
        <a href="/projects/manipulator" className="cs-nav-btn secondary">
          <ArrowLeft size={16} /> Previous: 5-DOF Manipulator Arm
        </a>
        <a href="/projects/krai-2025" className="cs-nav-btn">
          Next Project: KRAI Robot Basketball <ArrowRight size={16} />
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
