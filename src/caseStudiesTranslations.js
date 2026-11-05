/**
 * caseStudiesTranslations.js
 * Technical bilingual translations (English & Bahasa Indonesia) for all 5 Case Study pages:
 * 1. ManipulatorCaseStudy (Final Project - 5-DOF Robotic Arm)
 * 2. SolarCoolingCaseStudy (Capstone IDP - Automated Solar Panel Cooling)
 * 3. KRAICaseStudy (ABU Robocon Indonesia - Basketball Robot Mechanisms)
 * 4. LineFollowerCaseStudy (Independent Embedded Build - Line Follower)
 * 5. SumoRobotCaseStudy (Independent Combat Robotics - 1 kg Bluetooth Sumo)
 * 
 * Standard Industrial & Academic Engineering Terminology:
 * PUEBI/EYD compliant · Natural maker-learner phrasing · Zero overclaim · Preserves exact metrics.
 */

export const caseStudiesTranslations = {
  en: {
    common: {
      backToProjects: 'BACK TO ALL PROJECTS',
      clickToZoom: 'Click to zoom in',
      previous: 'Previous',
      next: 'Next',
      modalClose: 'Close',
      modalSubtitle: 'Click and zoom to inspect details',
      modalBadge: 'TECHNICAL SPECIFICATION & VALIDATION EVIDENCE',
      modalOpenTab: 'Open Original in New Tab',
    },

    // ─────────────────────────────────────────────────────────────
    // 01. MANIPULATOR CASE STUDY
    // ─────────────────────────────────────────────────────────────
    manipulator: {
      statusBadge: 'BACHELOR THESIS · TELKOM UNIVERSITY (2026)',
      title: 'Design of a Manipulator Arm for a Patient Service Robot in a Hospital',
      authorName: 'Bayu Aji Trisasongko',
      authorRole: 'Author',
      degree: 'B.S. in Electrical Engineering',
      institution: 'Telkom University',
      timeline: 'January – August 2026',
      timelineLabel: 'Project Timeline',
      heroDesc: 'Design, mechanical fabrication, and embedded control of a 5-DOF articulated robotic arm utilizing 3D-printed PLA cycloidal gearboxes, closed-loop AS5600 magnetic position correction, and real-time analytical Inverse Kinematics on an STM32F411CEU6 microcontroller.',
      
      metrics: [
        { num: '79.8%', desc: 'Positional accuracy improvement via closed-loop correction (0.51° to 0.10°)' },
        { num: '250–1,000 g', desc: 'Stable validated payload range under continuous closed-loop control' },
        { num: '6.65 mm', desc: 'Average end-effector position error (2.03%) across IK testing' },
        { num: '1:50 & 1:25', desc: '3D-printed PLA cycloidal reduction ratios (J2 1:50, J1/J3/J4 1:25)' },
      ],

      section01: {
        num: '01 / BACKGROUND & SPECIFICATIONS',
        title: 'Project Background & Target Specifications',
        col1Title: 'Hospital Logistics Background',
        col1Text: 'Studies indicate hospital healthcare personnel spend 20–25% of their working hours managing routine logistics inventory, with nursing staff walking an average of up to 2.96 km per shift. Most hospital service robots currently in operation function solely as autonomous delivery carriers without the physical capability to load or retrieve items independently because they lack a robotic manipulator arm.',
        col1Text2: 'This undergraduate research addresses the logistics bottleneck by designing a modular, cost-efficient 5-DOF robotic manipulator arm explicitly dimensioned to handle routine hospital patient items (medication bottles, meal trays, sanitizers) ranging from 250 g to 1,000 g.',
        col2Title: 'Target Engineering Specifications',
        specs: [
          'Degrees of Freedom: 5-DOF (Waist Yaw, Shoulder Pitch, Elbow Pitch, Wrist Pitch, Wrist Roll) + parallel jaw gripper.',
          'Payload Capacity: 250 g nominal, validated up to 1,000 g peak with closed-loop compensation.',
          'Actuation & Transmission: NEMA 17 stepper motors paired with custom 3D-printed PLA cycloidal gearboxes (zero traditional planetary backlash).',
          'Sensing & Feedback: 12-bit magnetic rotary encoders (AS5600) via TCA9548A I2C multiplexer for absolute joint position monitoring.',
          'Controller: STM32F411CEU6 ARM Cortex-M4 (100 MHz, Hardware FPU) executing real-time geometric Inverse Kinematics.',
        ],
      },

      section02: {
        num: '02 / MECHANICAL TRANSMISSION & GEARBOX DESIGN',
        title: 'PLA 3D-Printed Cycloidal Speed Reducers',
        intro: 'To overcome the severe backlash (typically 1.5°–3.0°) and cost penalties of budget planetary or spur gearheads, custom cycloidal reducers were parametrically modeled in Onshape and 3D-printed using PLA with 100% infill on load-bearing components:',
        cadCaptions: [
          'CAD Pose 1: Home / Retracted Vertical Stance',
          'CAD Pose 2: Forward Reach at Nominal Extension',
          'CAD Pose 3: Floor/Tray Level Gripping Orientation',
        ],
        card1Title: 'Cycloidal Gearbox Architecture & Kinematics',
        card1Text: 'Cycloidal drives transmit torque via rolling contact between cycloidal disc lobes and stationary ring pins, distributing mechanical load across multiple simultaneous contact points. This virtually eliminates catastrophic tooth shearing and drastically minimizes mechanical backlash compared to spur gears.',
        card1Text2: 'Joint 2 (Shoulder Pitch) experiences the highest gravity moment when the arm is extended horizontally. With a 1:50 reduction ratio on the NEMA 17 stepper (0.40 Nm) and 50% baseline efficiency, theoretical output torque reaches 10.00 Nm. Subtracting arm gravity moment (4.102 Nm at 246 mm CoG) leaves 5.898 Nm of payload torque, achieving a theoretical payload capacity of 1.50 kg at 400 mm reach. Joints 1, 3, and 4 utilize 1:25 reduction units.',
        card2Title: '3D-Printed Transmission Fabrication & Mechanical Clearance',
        card2Text: 'The cycloidal drives were fabricated via FDM 3D printing using PLA filament with 100% dense infill for both cycloidal discs and pin rings. The rolling contact design distributes mechanical loads across multiple contact points simultaneously to prevent tooth shearing.',
        card2Text3: 'Assembly tolerance: Mechanical clearance between the lobed discs and ring pins was calibrated precisely to guarantee smooth rotation without binding while minimizing backlash.',
      },

      section03: {
        num: '03 / EMBEDDED ARCHITECTURE & CLOSED-LOOP CONTROL',
        title: 'STM32F411 MCU & Multi-Channel Magnetic Sensing',
        intro: 'Open-loop stepper systems suffer from cumulative step loss and elastic deflection when subjected to variable payloads. To ensure deterministic position control, a dual-layer closed-loop architecture was developed:',
        archTitle: 'Embedded Control System Architecture',
        archText: 'The STM32F411CEU6 "Black Pill" acts as the central real-time motion controller, communicating with TB6600 microstepping drivers via high-speed hardware PWM/timer pulses. Joint angles are read in real-time through an I2C multiplexer (TCA9548A), resolving the shared 0x36 bus address of the four AS5600 magnetic encoders positioned directly on the output shafts.',
        card1Title: 'Closed-Loop Correction Algorithm',
        card1Text: 'The controller continuously compares the commanded joint angle against the true shaft angle reported by the AS5600 encoder (12-bit resolution = 0.0878° per LSB). When structural deflection or gear compliance causes an angular error exceeding the threshold, proportional correction micro-steps are injected dynamically until the joint settles within ±0.10° of the setpoint.',
        card2Title: 'TCA9548A Bus Multiplexing',
        card2Text: 'Because the AS5600 magnetic encoder has a fixed hardware I2C address (0x36), direct multi-sensor connection on a single bus is impossible. A TCA9548A I2C multiplexer was integrated, enabling the STM32 to switch channels and read true joint angles sequentially across all four sensors over the shared I2C bus (PB8 SCL, PB9 SDA).',
      },

      section04: {
        num: '04 / KINEMATICS & WORKSPACE ANALYSIS',
        title: 'Analytical Geometric Inverse Kinematics',
        intro: 'To map cartesian target coordinates (X, Y, Z, Pitch) in the hospital operating environment to actuator joint space angles (θ1, θ2, θ3, θ4, θ5), an analytical geometric Inverse Kinematics (IK) solver was formulated and deployed in C firmware:',
        tableHeader: ['JOINT', 'MOTION AXIS', 'ACTUATOR & GEAR RATIO', 'ANGULAR RANGE', 'TRANSMISSION TYPE'],
        tableRows: [
          ['Joint 1 (Base / Waist)', 'Yaw (Z-axis rotation)', 'NEMA 17 + 1:25 Cycloidal', '-90° to +90° (180° total)', '3D PLA Cycloidal Reducer'],
          ['Joint 2 (Shoulder)', 'Pitch (Elevation)', 'NEMA 17 + 1:50 Dual-Disc', '-30° to +90° (120° total)', 'High-Torque 1:50 Balanced Cycloidal'],
          ['Joint 3 (Elbow)', 'Pitch (Forearm flex)', 'NEMA 17 + 1:25 Cycloidal', '-45° to +90° (135° total)', '3D PLA Cycloidal Reducer'],
          ['Joint 4 (Wrist Pitch)', 'Pitch (Orientation)', 'NEMA 17 + 1:25 Cycloidal', '-90° to +90° (180° total)', '3D PLA Cycloidal Reducer'],
          ['Joint 5 (Wrist Roll)', 'Roll (Tool axial twist)', 'NEMA 17 Direct Drive', '-180° to +180° (360° total)', 'Direct Shaft Coupling'],
        ],
      },

      section05: {
        num: '05 / EXPERIMENTAL VALIDATION & PERFORMANCE METRICS',
        title: 'Closed-Loop Quantitative Testing & Results',
        intro: 'Physical verification was conducted in the Electrical Engineering laboratory across multiple payload configurations (0 g, 250 g, 500 g, 750 g, 1,000 g) and 3D spatial target trajectories:',
        testHeader: ['TEST PARAMETER', 'OPEN-LOOP (BASELINE)', 'CLOSED-LOOP (AS5600)', 'IMPROVEMENT / STATUS'],
        testRows: [
          ['Joint Angular Error (No Load)', '0.51° avg error', '0.10° avg error', '79.8% reduction in joint error'],
          ['Joint Angular Error (500 g Load)', '1.42° avg error (backlash + compliance)', '0.29° avg error', '79.6% error compensation under load'],
          ['End-Effector Cartesian Error (IK)', '18.4 mm avg offset at reach limit', '6.65 mm avg offset (2.03% error)', '63.9% precision improvement in 3D reach'],
          ['Payload Capacity Range', 'Unreliable above 300 g (missed steps)', 'Validated stable: 250 g to 1,000 g', 'Successfully handled 1 kg bottle payload'],
          ['Cycloidal Backlash Measurement', '1.8°–2.4° in commercial spur/planetary', '<0.35° in 3D-printed cycloidal', 'Significant backlash mitigation at low cost'],
        ],
      },

      section06: {
        num: '06 / ENGINEERING RETROSPECTIVE & FUTURE ITERATIONS',
        title: 'Key Takeaways & Proposed System Enhancements',
        col1Title: "Bayu's Key Engineering Contributions",
        col1Text: '• Designed and 3D-printed custom cycloidal gearboxes (1:50 & 1:25 ratios) with zero reliance on costly industrial planetary drives.\n• Developed the real-time C firmware on STM32F411, implementing geometric Inverse Kinematics with hardware floating-point acceleration.\n• Solved I2C multi-sensor address collisions using TCA9548A multiplexing to achieve real-time closed-loop feedback across 4 joints.\n• Built the physical prototype and authored the comprehensive 100+ page bachelor thesis documentation.',
        col2Title: 'Identified Limitations & Future Work',
        col2Text: '• Material Creep under Continuous Load: Long-term thermal creep of PLA gear teeth under sustained 1 kg holding torque; future iteration will utilize carbon-fiber nylon (PA-CF) or resin SLA casting.\n• Dynamic Acceleration Profiling: Current S-curve profile is executed with fixed acceleration parameters; transitioning to dynamic jerk-limited trapezoidal trajectory generation will smooth high-speed transitions.\n• Gripper Force Sensing: Upgrading parallel jaws with thin-film piezoresistive pressure sensors for adaptive tactile grasp control of delicate medical vials.',
      },

      bottomNav: {
        next: 'Next: Solar Panel Cooling Method',
      },
    },

    // ─────────────────────────────────────────────────────────────
    // 02. SOLAR COOLING CASE STUDY
    // ─────────────────────────────────────────────────────────────
    solarCooling: {
      statusBadge: 'INTEGRATED DESIGN PROJECT (IDP) · TELKOM UNIVERSITY (2025–2026)',
      title: 'Solar Panel Cooling Method to Increase Efficiency at High Temperatures',
      authorName: 'Bayu Aji Trisasongko',
      authorRole: 'Hardware & Electrical Implementation Lead',
      teamName: 'IDP Team 6 (4 Members)',
      teamRole: 'B.S. Electrical Engineering · Telkom University',
      sdgName: 'SDG 7 Alignment',
      sdgRole: 'Affordable & Clean Energy',
      heroDesc: 'Development and outdoor deployment of an autonomous closed-loop water-spray cooling subsystem for photovoltaic panels. Operates based on real-time surface thermal monitoring with automatic threshold actuation (>30°C ON / <25°C OFF), off-grid battery autonomy, and IPX4 weatherproof ABS enclosure protection.',

      metrics: [
        { num: '>30°C / <25°C', desc: 'Autonomous closed-loop cooling threshold triggers' },
        { num: '4.02 L/min', desc: 'Precision water-spray delivery rate across solar cells' },
        { num: '4h 09m', desc: 'Continuous battery backup runtime (102 Wh @ >25W load)' },
        { num: 'IPX4 & MC4', desc: 'Full weatherproof enclosure and universal PV connector compatibility' },
      ],

      section01: {
        num: '01 / BACKGROUND & MOTIVATION',
        title: 'Thermal Degradation in Photovoltaic Energy Harvesting',
        col1Title: 'High-Temperature PV Efficiency Problem',
        col1Text: 'Commercial silicon photovoltaic (PV) modules exhibit a negative temperature coefficient (typically -0.4% to -0.5% electrical power output per 1°C increase above standard test conditions of 25°C). In tropical climates like Indonesia, uncooled PV surface temperatures regularly exceed 55°C–65°C during midday insolation, causing severe electrical generation loss (>15% power reduction) and accelerating cell degradation.',
        col1Text2: 'Our 4-member capstone engineering team (Team 6) tackled this issue by engineering a self-contained, automated closed-loop surface cooling subsystem capable of operating fully off-grid.',
        col2Title: 'Core Target Specifications',
        specs: [
          'Actuation Thresholds: Automatic pump ON at >30°C; automatic pump OFF at <25°C.',
          'Temperature Sensing Accuracy: High-precision waterproof probe calibrated within ±0.6°C against reference thermometer.',
          'Fluid Delivery: 12V DC submersible pump delivering 4.02 L/min uniform mist across PV surface.',
          'Autonomy & Power: Dedicated 12V 8.5Ah battery providing >4 hours continuous pump runtime without grid connection.',
          'Environmental Enclosure: Weatherproof ABS enclosure rated IPX4 with external MC4 quick-connect terminals.',
        ],
      },

      section02: {
        num: '02 / HARDWARE ARCHITECTURE & ELECTRICAL DESIGN',
        title: 'Circuit Schematic, Sensing, & Weatherproof Enclosure',
        intro: 'As the Hardware & Electrical Implementation Lead, I designed the electronic layout, component interconnections, power distribution, and enclosure packaging:',
        card1Title: 'Hardware Implementation & Schematic Details',
        card1Text: 'The subsystem is orchestrated by an Arduino Uno R3 powered through a dedicated 7805/buck voltage regulator. A calibrated waterproof RTD/NTC temperature probe feeds continuous surface thermal data. A 5V optocoupled relay module switches high-current DC power to the 12V submersible water pump, isolating sensitive digital logic from inductive motor spikes with reverse flywheel diode protection.',
        card2Title: 'Physical Wiring & Outdoor Packaging',
        card2Text: 'Housed in an IPX4-rated ABS electrical enclosure with rubber-gasket sealing and cable glands to prevent water ingress from mist spray. Real-time system status (Current Temp, Threshold Setpoints, Pump ON/OFF State) is displayed on an exterior 16×2 I2C LCD with backlight auto-timeout for power conservation.',
      },

      section03: {
        num: '03 / FIELD TESTING & EXPERIMENTAL RESULTS',
        title: 'Thermal Regulation & Fluid Performance Verification',
        intro: 'Comprehensive outdoor testing verified the thermal mitigation rate, flow volume, and electrical operating characteristics:',
        testHeader: ['TEST PARAMETER', 'SPECIFICATION TARGET', 'MEASURED EXPERIMENTAL RESULT'],
        testRows: [
          ['Sensor Accuracy vs Reference', 'Within ±1.0°C', '±0.6°C deviation verified'],
          ['Pump Flow Delivery Rate', '3.5 – 4.5 L/min', '4.02 L/min verified average'],
          ['Surface Temperature Reduction', '>15°C temperature drop', 'Cooled from >42°C down to 25°C'],
          ['Battery Autonomous Runtime', '>3.5 hours continuous', '4 hours 09 minutes verified runtime'],
          ['Enclosure Water Ingress Test', 'IPX4 Splashproof', 'Zero moisture penetration detected'],
        ],
      },

      section04: {
        num: '04 / ENGINEERING CONTRIBUTIONS & TAKEAWAYS',
        title: 'Team Dynamics & Industrial Engineering Takeaways',
        col1Title: "Bayu's Key Engineering Contributions",
        col1Text: '• Designed complete electronic circuit schematic, relay isolation stage, and power distribution bus.\n• Selected and calibrated waterproof temperature sensors, achieving ±0.6°C accuracy against certified digital thermometer.\n• Fabricated physical outdoor enclosure with IPX4 sealing, cable glands, and standardized MC4 terminals.\n• Led outdoor data collection, battery discharge profiling, and fluid flow rate measurement.',
        col2Title: 'Engineering Takeaways & Scalability',
        col2Text: '• Water Filtration & Recirculation: In practical remote deployments, closed-loop water recirculation with mechanical mesh filtration is necessary to prevent nozzle clogging from particulate buildup.\n• Predictive Thermal Control: Integrating solar irradiance sensing (pyranometer) with feed-forward thermal modeling could pre-empt temperature spikes before efficiency drops occur.\n• PV-Direct Powering: Future commercial iterations can run directly from module parasitic DC power via MPPT tap, eliminating battery maintenance.',
      },

      bottomNav: {
        prev: 'Previous: 5-DOF Manipulator Arm',
        next: 'Next: Basketball Robot (KRAI 2025)',
      },
    },

    // ─────────────────────────────────────────────────────────────
    // 03. KRAI CASE STUDY
    // ─────────────────────────────────────────────────────────────
    krai: {
      statusBadge: 'ABU ROBOCON INDONESIA (KRAI 2025) · NATIONAL STAGE AT ITB JATINANGOR',
      title: 'Competition Basketball Robot: Dribble & Shooter Mechanisms',
      authorName: 'Bayu Aji Trisasongko',
      authorRole: 'Lead Mechanical Designer & Fabricator',
      teamName: 'Team ROOBICS',
      teamRole: 'EIRRG · Telkom University',
      milestoneName: 'Competition Milestone',
      milestoneRole: 'National Finalist (ITB Jatinangor)',
      heroDesc: 'Mechanical engineering and physical prototyping of a semi-autonomous competition mobile basketball robot with automated sensor-pneumatic interlocks for the national ABU Robocon Indonesia (KRAI 2025). Features high-pressure pneumatic bounce dribbling (5–6 bar), a multi-motor tri-roller flywheel shooter achieving 6–7 m launch distance, and a holonomic 3-wheel omni-directional drive base.',

      metrics: [
        { num: '6–7 Meters', desc: 'Validated basketball shooting range to hoop' },
        { num: '5–6 Bar', desc: 'Pneumatic operating pressure for dribble & feed' },
        { num: '3× RS775', desc: 'High-RPM pulley-coupled flywheel roller drive' },
        { num: '3-Wheel Omni', desc: 'Holonomic omnidirectional base agility' },
      ],

      section01: {
        num: '01 / COMPETITION MISSION & SPECIFICATIONS',
        title: 'The ABU Robocon 2025 Basketball Challenge',
        col1Title: 'Autonomous Basketball Challenge Context',
        col1Text: 'Kontes Robot ABU Indonesia (KRAI) 2025 tasked university robotics teams with engineering high-speed robots capable of navigating a regulation-size basketball half-court. The robot must autonomously acquire regulation basketballs, maintain continuous physical control through compliant ball handling and dribbling, rapidly align with the basket rim, and accurately shoot from distances exceeding 6 meters under stringent match timing.',
        col1Text2: 'As the core mechanical designer for Team ROOBICS (EIRRG Telkom University), I took direct ownership of designing, machining, and field-calibrating the two mission-critical subsystems: the pneumatic dribble handler and the high-energy flywheel shooter mechanism.',
        col2Title: 'Target Technical Specifications',
        specs: [
          'Launch Range Target: 6.0 m to 7.0 m to clear standard regulation hoop elevations.',
          'Shooter Actuation: 3× RS775 DC motors with timing belt/pulley speed synchronization and absolute encoder speed tracking.',
          'Ball Feeder: Dedicated high-flow pneumatic cylinder pushing balls into the spinning tri-roller pinch nip.',
          'Pneumatic Dribble Subsystem: Dual-action pneumatic cylinder operating at 5–6 bar for rapid cyclical vertical ball tapping.',
          'Sensory Interlocks: Infrared (IR) reflective sensors detecting ball presence inside the gripper cup + industrial limit switches detecting dribbler carriage stroke limits.',
          'Mobility: 3-wheel equilateral holonomic Omni-wheel drivetrain for omni-directional strafing and instant target orientation.',
        ],
      },

      section02: {
        num: '02 / MECHANICAL DESIGN & CAD MODELING',
        title: 'Dribbler, Shooter Tower, & Holonomic Drivetrain',
        intro: 'To meet high-stress competition dynamics, the mechanical architecture was designed in Onshape CAD and fabricated using CNC-routed aluminum plate, 3D printing, and steel hardware:',
        cadCaptions: [
          '3D CAD: Tri-Roller Flywheel Shooter Assembly',
          '3D CAD: Compliant Dribble Gripper & Linkage',
          '3D CAD: 3-Wheel Omni-Directional Base Chassis',
        ],
        card1Title: '1. Tri-Roller High-Velocity Shooter',
        card1Text: 'To achieve reliable 6–7 m parabolic trajectories, a 3-roller flywheel configuration was engineered instead of a traditional dual-roller setup. Driven by three RS775 motors synchronized through timing pulleys, the three high-friction urethane rollers wrap around the circumference of the basketball, maximizing contact surface area and tangential kinetic transfer while eliminating ball slip.',
        card1Text2: 'An absolute encoder monitors roller surface velocity, feeding data to the PID velocity loop. When nominal launch speed is achieved, a dedicated pneumatic feeder piston punches the ball directly into the roller pinch nip with millisecond timing precision.',
        card2Title: '2. Pneumatic Dribbler & Ball Handling',
        card2Text: 'Under competition regulations, robots cannot permanently trap or travel with the ball clamped; it must be continuously bounced. We deployed a fast-acting dual-acting pneumatic cylinder regulated at 5–6 bar (72–87 psi) through high-flow solenoid valves.',
        card2Text2: 'Sensory interlocks provide deterministic sensor-actuator sequencing: an analog Infrared (IR) proximity sensor detects the ball entering the basket cup, immediately arming the pneumatic cycle. Mechanical limit switches at the cylinder stroke extremes detect full extension and retraction, preventing valve overlap and ensuring continuous dribble rhythms while the robot strafes.',
        baseMediaLabel: 'Physical 3-Wheel Omni-Directional Drivetrain Chassis Base Assembly',
      },

      section03: {
        num: '03 / TESTING, FIELD VALIDATION & VIDEO LOGS',
        title: 'Subsystem Prototyping & Real-World Testing',
        intro: 'Real lab bench testing and regulation court shooting trials captured during development at the EIRRG laboratory and official KRAI practice grounds:',
        video1Title: 'Pneumatic Dribble Mechanism Test',
        video1Desc: 'Active vertical ball tapping cycle at 5 bar with pneumatic cylinder actuated via high-speed solenoid valve and IR ball-presence trigger.',
        video2Title: 'Tri-Roller High-RPM Bench Spinup',
        video2Desc: '3× RS775 motor synchronization test through custom timing pulleys, verifying low vibration at maximum angular velocity and absolute encoder feedback.',
        video3Title: 'Full 6–7m Long-Range Shooting Trial',
        video3Desc: 'Regulation ball launch demonstrating high-energy parabolic trajectory, consistent 6–7 meter clearance, and pneumatic feeder punch actuation.',
        testHeader: ['SUBSYSTEM PARAMETER', 'DESIGN SPECIFICATION', 'MEASURED BENCH RESULT'],
        testRows: [
          ['Shooting Distance Range', '6.0 m – 7.0 m', '6.8 m average trajectory'],
          ['Shooter Drive Actuators', '3× RS775 High-Torque Motors', 'Synchronized via timing belt pulley'],
          ['Ball Acceleration Mechanism', 'Tri-roller circumferential wrap', '3 urethane rollers + 1 pneumatic puncher'],
          ['Pneumatic Dribble Pressure', '5.0 – 6.0 Bar', 'Maintained via onboard air reservoir'],
          ['Sensory Ball Engagement', 'IR sensor + limit switches', '100% detection rate inside gripper cup'],
          ['Drivetrain Kinematics', '3-Wheel 120° Omni-Directional', 'Full holonomic translation + rotation'],
        ],
      },

      section04: {
        num: '04 / COMPETITION EXECUTION & OUTCOMES',
        title: 'National Stage at ITB Jatinangor & Verified Credential',
        pitstopLabel: 'KRAI 2025 Arena Pitstop — On-Site Field Calibration',
        certLabel: 'Official National Certificate of Participation (ITB Jatinangor)',
        col1Title: "Bayu's Key Engineering Contributions",
        col1Text: '• Shooter Tower Prototyping: Computed launch velocity requirements, designed custom aluminum brackets, and tuned 3× RS775 motor-pulley ratios for 6–7 m basketball projection.\n• Pneumatic Dribble Subsystem: Engineered the 5–6 bar dual-action cylinder assembly, guide linear rails, and calibrated mechanical limit switches for compliant ball bouncing.\n• Chassis Machining & Field Assembly: Fabricated aluminum structural links and assembled the 3-wheel holonomic omni-wheel base under high-pressure tournament timelines.',
        col2Title: 'Engineering Takeaways & Future Iterations',
        col2Text: '• Dynamic Pressure Regulation: Adding digital electronic pressure regulators (EPR) to modulate cylinder stroke force on-the-fly based on ball internal pressure variations.\n• Dual-Angle Adjustable Pitch: Designing an automated motorized lead-screw to adjust the shooter launch angle dynamically between 3-point range and close-range layups.\n• Computer Vision Integration: Coupling real-time OpenCV color tracking with the 3-omni drivetrain to perform autonomous basket lock-on within <500 ms.',
      },

      bottomNav: {
        prev: 'Previous: Solar Panel Cooling',
        next: 'Next: Line Follower Robot',
      },
    },

    // ─────────────────────────────────────────────────────────────
    // 04. LINE FOLLOWER CASE STUDY
    // ─────────────────────────────────────────────────────────────
    lineFollower: {
      statusBadge: 'INDEPENDENT EMBEDDED BUILD · BANDUNG (2024)',
      title: 'Autonomous Line Follower Robot: 8-Channel Photodiode Array & PID Motion Control',
      authorName: 'Bayu Aji Trisasongko',
      authorRole: 'Hardware Designer & Embedded Firmware Engineer',
      scopeName: 'Project Scope',
      scopeRole: 'Independent Mobile Robotics Prototyping',
      controlName: 'Control Paradigm',
      controlRole: 'Closed-Loop PID Steering Algorithm',
      heroDesc: 'Design, hand-soldered hardware fabrication, and closed-loop motion tuning of an autonomous differential-drive line-tracking mobile robot. Integrates an 8-channel curved photodiode/LED sensor bar, real-time PID steering logic on an ATmega328P (Arduino Nano), dual-channel TB6612FNG MOSFET motor driver, I2C 128×64 OLED telemetry, and dual 18650 Li-ion battery power.',

      metrics: [
        { num: '8 Channels', desc: 'Curved photodiode + LED reflectance sensing array' },
        { num: 'Closed-Loop PID', desc: 'Proportional-Integral-Derivative steering algorithm' },
        { num: 'TB6612FNG', desc: 'Dual MOSFET H-bridge high-efficiency motor driver' },
        { num: '7.4V (2S Li-ion)', desc: 'Dual 18650 cell battery pack with I2C OLED telemetry' },
      ],

      section01: {
        num: '01 / PROBLEM STATEMENT & OBJECTIVES',
        title: 'High-Contrast Surface Tracking & Dynamic Steering',
        col1Title: 'Autonomous Navigation Challenge',
        col1Text: 'Line follower robots serve as the foundational testbed for mobile autonomous robotics, requiring tight integration of analog surface reflectance sensing, high-speed microcontroller sampling, closed-loop differential motor control, and low-inertia chassis mechanics to traverse sharp curves without derailing.',
        col1Text2: 'This independent build aimed to construct a highly reliable, responsive platform from discrete components, optimizing sensor layout geometry and firmware PID responsiveness.',
        col2Title: 'Target System Architecture',
        specs: [
          'Sensing Head: 8 paired high-output LEDs and photodiode receivers arranged in a curved arc for enhanced peripheral corner detection.',
          'Signal Conditioning: Multi-turn trimmer calibration feeding analog/digital threshold inputs to the microcontroller.',
          'Microcontroller Core: ATmega328P (Arduino Nano, 16 MHz) executing PID trajectory computation at 100 Hz.',
          'Motor Driver: TB6612FNG dual-channel MOSFET driver with low thermal dissipation and 1.2A continuous current capacity.',
          'Actuators: 2× Micro N20 high-torque all-metal gearmotors paired with high-traction silicone tires.',
          'Telemetry: 0.96" I2C OLED screen for real-time calibration feedback and battery voltage monitoring.',
        ],
      },

      section02: {
        num: '02 / SCHEMATIC, HARDWARE FABRICATION & ASSEMBLY',
        title: 'Sensor Array Layout, Drive Train, & Power Conditioning',
        intro: 'Hand-assembled and point-to-point soldered for rapid prototyping, robust mechanical stiffness, and easy field repair:',
        card1Title: 'Curved Sensor Bar Geometry',
        card1Text: 'Arranging the 8 photodiode pairs along a slight concave arc allows outer sensors to catch sharp 90-degree corners earlier than a straight bar, giving the PID controller critical advance warning to apply differential braking before the chassis leaves the track boundary.',
        card2Title: 'Power & Voltage Regulation',
        card2Text: 'Two 18650 Li-ion cells in series deliver 7.4V nominal (8.4V fully charged). A low-dropout linear regulator feeds stable 5V to the ATmega328P and sensor bar, while the motor driver runs directly off the unregulated battery rail for maximum torque responsiveness.',
      },

      section03: {
        num: '03 / PID ALGORITHM & FIRMWARE TUNING',
        title: 'Weighted Error Calculation & Closed-Loop Steering',
        intro: 'The robot computes line position error using weighted sensor sum values (-35 to +35), passed directly into a tuned PID controller:',
        tableHeader: ['PID PARAMETER', 'TUNED VALUE', 'SYSTEM BEHAVIOR & PURPOSE'],
        tableRows: [
          ['Kp (Proportional Gain)', '18.5', 'Provides immediate corrective steering proportional to instantaneous lateral displacement.'],
          ['Ki (Integral Gain)', '0.04', 'Eliminates persistent steady-state offset during long sweeping curves; kept low to prevent oscillation.'],
          ['Kd (Derivative Gain)', '12.0', 'Dampens overshoot and stabilizes the chassis during rapid straight-to-curve transitions.'],
        ],
      },

      section04: {
        num: '04 / RETROSPECTIVE & FUTURE ITERATIONS',
        title: 'Engineering Reflections & Scalability',
        col1Title: "Bayu's Key Engineering Contributions",
        col1Text: '• Designed and hand-soldered the 8-channel photodiode sensor array with individual sensitivity calibration trimmers.\n• Programmed the real-time closed-loop PID control firmware with weighted sensor positioning in C++.\n• Integrated I2C OLED display for on-board sensor threshold visualization and battery state monitoring.\n• Performed comprehensive field test runs across multi-radius track layouts to dial in PID parameters.',
        col2Title: 'Identified Enhancements for Future Builds',
        col2Text: '• Custom SMT PCB Design: Replacing perfboard wiring with a 2-layer integrated PCB to drastically reduce chassis mass and lower the center of gravity.\n• Magnetic Encoder Feedback: Adding dual rotary encoders to the N20 wheel shafts to achieve precise odometry and feed-forward velocity control.\n• Auto-Calibration Routine: Writing an automated sweep sequence that scans white and black surfaces upon startup to set dynamic comparator thresholds.',
      },

      bottomNav: {
        prev: 'Previous: Basketball Robot (KRAI 2025)',
        next: 'Next: Bluetooth Sumo Robot',
      },
    },

    // ─────────────────────────────────────────────────────────────
    // 05. SUMO ROBOT CASE STUDY
    // ─────────────────────────────────────────────────────────────
    sumoRobot: {
      statusBadge: 'INDEPENDENT COMBAT ROBOTICS · BANDUNG (2023)',
      title: 'Bluetooth Sumo Robot: 4WD High-Torque PG24 Drivetrain & Wedge Chassis',
      authorName: 'Bayu Aji Trisasongko',
      authorRole: 'Mechanical CAD Designer & Embedded Control Builder',
      scopeName: 'Project Scope',
      scopeRole: '1 kg Competition-Class Sumo Robot (20 × 20 cm)',
      drivetrainName: 'Drivetrain & Telemetry',
      drivetrainRole: '4WD PG24 Planetary Gearmotors · HC-05 Bluetooth UART',
      heroDesc: 'Full mechanical CAD design, low-ground-clearance wedge fabrication, and wireless embedded integration of a 1 kg competition-class RC Sumo Robot. Built inside strict 200 × 200 mm dimensional boundaries with 4-wheel independent planetary gearmotor drive (PG24), dual L298N H-bridge driver bridges, 3S LiPo battery (11.1V – 12.6V) power delivery, and real-time smartphone telemetry via HC-05 Bluetooth transceiver.',

      highlightsTitle: 'Verified Technical Highlights',
      highlights: [
        'Competition Form Factor: Strict 200 × 200 mm footprint compliant with standard 1 kg RC sumo regulations.',
        '4WD Planetary Transmission: 4× independent high-torque PG24 geared motors driving high-friction ribbed polyurethane/silicone wheels.',
        'Low-Angle Wedge Blade: Front stainless steel/acrylic scoop designed to breach opponent ground clearance and lift opposing traction wheels.',
        'Power & Driver Architecture: 3-cell LiPo battery (11.1V nominal) powering dual L298N H-bridges, managed by an ATmega328P (Arduino Uno).',
      ],

      section01: {
        num: '01 / CHALLENGE & CONSTRAINTS',
        title: 'The Engineering Challenge: Traction, Low Center of Gravity, & Torque',
        intro: 'In RC sumo robotics competitions, matches are decided in fractions of a second by two primary factors: ground traction (frictional force) and wedge leverage (scoop geometry). The engineering objective was to design a 1.0 kg combat vehicle that maximized pushing torque without exceeding tournament boundary regulations (200 mm × 200 mm footprint).',
        tableHeader: ['Design Parameter', 'Competition Rule Limit', 'Implemented Robot Specification', 'Engineering Justification'],
        tableRows: [
          ['Total Weight', 'Max 1,000 g (1.0 kg)', '985 g (with 3S LiPo installed)', 'Optimized for maximum allowable traction within a 15 g legal safety margin.'],
          ['Starting Dimensions', 'Max 200 mm (W) × 200 mm (L)', '192 mm (W) × 188 mm (L) footprint', 'Ensures instant pre-match alignment inside the Dohyo start boxes without disqualification.'],
          ['Height Limit', 'No restriction', '78 mm low-profile wedge silhouette', 'Minimizes overturning moments when rammed at high speed by opposing robots.'],
          ['Wireless Control', 'Standard 2.4 GHz RF / Bluetooth', 'HC-05 Bluetooth Transceiver (UART, 9600 baud)', 'Enables responsive smartphone joystick steering with zero packet interference.'],
        ],
      },

      section02: {
        num: '02 / 3D CAD & MECHANICAL WEDGE DESIGN',
        title: 'Parametric CAD Modeling & Structural Mass Budget',
        intro: 'The chassis was modeled from first principles in 3D CAD to evaluate center-of-mass placement and ensure rigid resistance against head-on collisions:',
        card1Title: '1. Front Wedge Incline & Ground Clearance',
        card1Text: 'A low-angle wedge blade (approx. 22 degrees) was engineered along the entire leading edge. By placing the leading edge razor-close to the ring surface, the robot slips underneath oncoming opponent bumpers, lifting their drive wheels off the floor and transferring their own weight onto our traction tires.',
        card2Title: '2. Low-Center-of-Gravity Acrylic Chassis',
        card2Text: 'The chassis plates were precision laser-cut from high-impact cast acrylic sheet. Heavy components (four metal planetary gearboxes and the 3S LiPo battery pack) were slung beneath the central midline to maximize tip-over resistance during sudden directional reversals.',
      },

      section03: {
        num: '03 / ELECTRICAL ARCHITECTURE & DRIVE ELECTRONICS',
        title: 'High-Current Motor Drivers, Power Delivery & RF Link',
        intro: 'To survive high-stall mechanical collisions without brownouts or thermal shutdowns, an over-engineered power bus was deployed:',
        card1Title: 'Drive Power Architecture',
        card1Text: 'Each side of the 4WD base pairs two PG24 planetary motors in parallel driven by dedicated L298N dual H-bridge channels. The 3S LiPo pack delivers high instantaneous burst currents (up to 20C) without voltage sag, ensuring maximum stall torque at the wheels.',
        card2Title: 'Bluetooth Telemetry & Safety Failsafe',
        card2Text: 'The HC-05 module interfaces with the ATmega328P hardware UART. The firmware includes a timeout watchdog: if the Bluetooth connection drops for more than 200 ms, PWM motor outputs are instantly forced low to avoid runaway vehicles.',
      },

      section04: {
        num: '04 / RETROSPECTIVE & ENGINEERING TAKEAWAYS',
        title: 'Match-Readiness Reflections & Iteration Roadmap',
        col1Title: "Bayu's Key Engineering Contributions",
        col1Text: '• Designed full 3D CAD assembly in Onshape, balancing weight distribution across all four drive wheels.\n• Fabricated low-profile acrylic chassis and assembled 4WD planetary drivetrain.\n• Programmed Arduino firmware featuring differential joystick kinematics and UART watchdog timeout failsafes.\n• Tuned high-traction silicone tires for reliable grip and consistent traction on regulation Dohyo surfaces.',
        col2Title: 'Identified Areas for Future Iteration',
        col2Text: '• MOSFET Driver Upgrade: Replacing older bipolar L298N drivers with high-efficiency MOSFET drivers (e.g. TB6612 or discrete FETs) to eliminate ~2V internal voltage drops and reduce heat.\n• Autonomous Sensor Expansion: Adding long-range ultrasonic/optical sharp distance sensors and ring-border line detectors to transition from RC control to fully autonomous combat mode.\n• Spring-Steel Scraper Blade: Swapping the rigid front acrylic scoop with a flexible ground-hugging spring steel blade that maintains surface contact regardless of minor ring irregularities.',
      },

      bottomNav: {
        prev: 'Previous: Line Follower Robot',
        backHome: 'Back to All Projects',
      },
    },
  },

  // ─────────────────────────────────────────────────────────────
  // BAHASA INDONESIA TRANSLATIONS
  // ─────────────────────────────────────────────────────────────
  id: {
    common: {
      backToProjects: 'KEMBALI KE SEMUA PROYEK',
      clickToZoom: 'Klik untuk memperbesar gambar',
      previous: 'Sebelumnya',
      next: 'Selanjutnya',
      modalClose: 'Tutup',
      modalSubtitle: 'Klik dan gunakan zoom untuk melihat detail teknis',
      modalBadge: 'BUKTI VALIDASI & SPESIFIKASI TEKNIS',
      modalOpenTab: 'Buka File Asli di Tab Baru',
    },

    // ─────────────────────────────────────────────────────────────
    // 01. MANIPULATOR CASE STUDY (ID)
    // ─────────────────────────────────────────────────────────────
    manipulator: {
      statusBadge: 'BUKU TUGAS AKHIR · S1 TEKNIK ELEKTRO UNIVERSITAS TELKOM (2026)',
      title: 'Perancangan Manipulator Arm untuk Robot Pelayanan Pasien di Rumah Sakit',
      authorName: 'Bayu Aji Trisasongko',
      authorRole: 'Penulis / Pengembang',
      degree: 'S1 Teknik Elektro',
      institution: 'Universitas Telkom',
      timeline: 'Januari – Agustus 2026',
      timelineLabel: 'Periode Proyek',
      heroDesc: 'Perancangan dan implementasi manipulator arm 5-DOF berbasis mikrokontroler STM32F411CEU6 sebagai komponen pendukung robot pelayanan pasien di rumah sakit. Dilengkapi transmisi Cycloidal Gearbox cetak 3D berbahan PLA, sistem kendali Closed Loop berbasis umpan balik sensor magnetic encoder AS5600 melalui multiplekser I2C TCA9548A, serta eksekusi perhitungan Inverse Kinematics analitis secara langsung di dalam mikrokontroler.',

      metrics: [
        { num: '79,8%', desc: 'Peningkatan akurasi sudut sendi melalui koreksi closed-loop (0,51° ke 0,10°)' },
        { num: '250–1.000 g', desc: 'Rentang beban uji (payload) tervalidasi stabil di bawah kendali closed-loop' },
        { num: '6,65 mm', desc: 'Rata-rata error posisi end-effector (2,03%) pada pengujian Inverse Kinematics' },
        { num: '1:50 & 1:25', desc: 'Rasio reduksi Cycloidal Gearbox 3D PLA (J2 1:50, J1/J3/J4 1:25)' },
      ],

      section01: {
        num: '01 / LATAR BELAKANG & SPESIFIKASI',
        title: 'Latar Belakang Proyek & Target Spesifikasi',
        col1Title: 'Efisiensi Pelayanan Logistik Rumah Sakit',
        col1Text: 'Efisiensi pelayanan logistik di rumah sakit merupakan faktor penting dalam mengurangi beban kerja tenaga kesehatan. Studi menunjukkan tenaga medis rumah sakit menghabiskan 20–25% jam kerja mereka untuk mengurus distribusi inventaris logistik rutin, dengan perawat berjalan kaki rata-rata hingga 2,96 km per giliran kerja (shift). Sebagian besar robot pelayanan yang beroperasi saat ini hanya berfungsi sebagai pengantar barang tanpa kemampuan manipulasi objek secara mandiri, sehingga masih memerlukan intervensi manusia untuk memuat dan mengambil barang.',
        col1Text2: 'Penelitian Tugas Akhir ini merancang dan mengimplementasikan manipulator arm 5-DOF sebagai komponen pendukung robot pelayanan pasien di rumah sakit, dengan target kapasitas beban 600 gram pada jangkauan kerja 400 mm untuk memegang benda rutin pasien (botol obat, baki makanan, dan cairan pembersih) berbobot 250 g hingga 1.000 g.',
        col2Title: 'Target Spesifikasi Teknis',
        specs: [
          'Target Jangkauan Kerja: Jangkauan radius horizontal 400 mm (Link a2 = 150 mm, Link a3 = 150 mm, Link d5 = 100 mm, Base d1 = 189 mm).',
          'Target Kapasitas Beban: Kapasitas nominal 600 gram pada jangkauan kerja 400 mm, tervalidasi stabil hingga 1.000 gram di bawah kendali closed-loop.',
          'Reduksi Transmisi: Transmisi Cycloidal Gearbox cetak 3D berbahan PLA dengan rasio 1:50 pada Joint 2 dan 1:25 pada Joint 1, 3, dan 4 untuk meminimalkan backlash.',
          'Sensing & Umpan Balik: Sensor magnetic encoder AS5600 12-bit via multiplekser I2C TCA9548A untuk membaca posisi aktual sendi secara real-time.',
          'Mikrokontroler & Kinematika: STM32F411CEU6 ARM Cortex-M4 mengeksekusi perhitungan Inverse Kinematics geometris secara analitis langsung di firmware.',
        ],
      },

      section02: {
        num: '02 / TRANSMISI MEKANIK & PERANCANGAN GEARBOX',
        title: 'Reduksi Roda Gigi Sikloidal (Cycloidal Gearbox) 3D PLA',
        intro: 'Sistem mekanik dirancang menggunakan transmisi Cycloidal Gearbox cetak 3D berbahan PLA pada setiap sendi dengan rasio reduksi 1:50 untuk Joint 2 dan 1:25 untuk Joint 1, 3, dan 4, guna menghasilkan torsi keluaran yang memadai sekaligus meminimalkan backlash:',
        cadCaptions: [
          'Pose CAD 1: Posisi Home / Siaga Vertikal',
          'Pose CAD 2: Jangkauan Depan pada Ekstensi Nominal',
          'Pose CAD 3: Orientasi Penjepit Sejajar Baki / Meja',
        ],
        card1Title: 'Arsitektur & Kinematika Cycloidal Gearbox',
        card1Text: 'Transmisi sikloidal mentransmisikan torsi melalui kontak gulir (rolling contact) antara tonjolan piringan sikloidal dan pin cincin stasioner, mendistribusikan beban mekanis ke banyak titik kontak secara bersamaan. Hal ini meniadakan risiko patahnya gigi transmisi dan meminimalkan backlash secara signifikan dibandingkan roda gigi spur.',
        card1Text2: 'Sendi 2 (Shoulder Pitch) menanggung momen gravitasi terbesar saat lengan terentang horizontal. Dengan rasio reduksi 1:50 pada motor NEMA 17 (0,40 Nm) dan asumsi efisiensi awal 50%, torsi keluaran teoretis mencapai 10,00 Nm. Setelah dikurangi momen gravitasi struktur lengan (4,102 Nm pada titik berat 246 mm), tersedia sisa torsi 5,898 Nm yang menghasilkan kapasitas angkat teoretis hingga 1,50 kg pada jangkauan 400 mm. Sendi 1, 3, dan 4 menggunakan modul reduksi 1:25.',
        card2Title: 'Fabrikasi Transmisi Cetak 3D & Penyesuaian Celah Mekanik',
        card2Text: 'Transmisi Cycloidal Gearbox difabrikasi menggunakan metode 3D printing FDM berbahan filamen PLA dengan infill padat 100% pada cakram sikloidal dan cincin pin. Desain kontak menggelinding mendistribusikan beban ke banyak titik kontak secara simultan untuk mencegah kerusakan gigi transmisi.',
        card2Text3: 'Toleransi perakitan: Celah mekanik (clearance) antara cakram berlobus dan cincin pin disesuaikan secara presisi agar transmisi dapat berputar mulus tanpa macet sekaligus meminimalkan celah bebas (backlash).',
      },

      section03: {
        num: '03 / ARSITEKTUR EMBEDDED & KONTROL CLOSED-LOOP',
        title: 'Mikrokontroler STM32F411 & Multi-Sensing Magnetik',
        intro: 'Untuk memastikan posisi sendi selalu sesuai target, diterapkan sistem kendali Closed Loop berbasis umpan balik sensor magnetic encoder AS5600 yang membaca posisi aktual sendi melalui multiplekser I2C TCA9548A:',
        archTitle: 'Arsitektur Sistem Kontrol Embedded',
        archText: 'STM32F411CEU6 "Black Pill" bertindak sebagai kontroler gerakan real-time utama, mengendalikan driver microstepping TB6600 melalui sinyal timer pulsa PWM frekuensi tinggi. Sudut sendi dibaca secara real-time melalui multiplekser I2C (TCA9548A), mengatasi alamat bus bersama (0x36) dari empat sensor magnetik AS5600 yang dipasang langsung pada poros output.',
        card1Title: 'Algoritma Koreksi Loop Tertutup (Closed-Loop)',
        card1Text: 'Kontroler secara kontinu membandingkan sudut sendi target dengan sudut nyata yang dibaca oleh sensor magnetik AS5600 (resolusi 12-bit = 0,0878° per LSB). Saat defleksi struktural atau kelonggaran mekanik menyebabkan error sudut melebihi ambang batas, mikro-langkah koreksi disuntikkan secara dinamis hingga posisi sendi stabil dalam toleransi ±0,10° dari target.',
        card2Title: 'Multipleksing Bus I2C dengan TCA9548A',
        card2Text: 'Karena sensor magnetik AS5600 memiliki alamat hardware I2C tetap (0x36), menghubungkan banyak sensor secara langsung pada satu bus tidak dimungkinkan. Chip multiplekser TCA9548A diintegrasikan, memungkinkan STM32 beralih antar-kanal dan membaca data sudut aktual dari keempat sensor sendi secara berurutan pada bus I2C (PB8 SCL, PB9 SDA).',
      },

      section04: {
        num: '04 / KINEMATIKA & ANALISIS RUANG KERJA (WORKSPACE)',
        title: 'Inverse Kinematics Geometris Analitis',
        intro: 'Perhitungan Inverse Kinematics geometris analitis dieksekusi langsung di dalam mikrokontroler STM32F411CEU6, memungkinkan sistem menerima perintah koordinat target (X, Y, Z, Pitch) dan menggerakkan lengan secara otomatis:',
        tableHeader: ['SENDI (JOINT)', 'SUMBU GERAK', 'AKTUATOR & RASIO GEAR', 'RENTANG SUDUT', 'TIPE TRANSMISI'],
        tableRows: [
          ['Sendi 1 (Base / Waist)', 'Yaw (Rotasi sumbu Z)', 'NEMA 17 + Cycloidal 1:25', '-90° hingga +90° (total 180°)', 'Reduksi Sikloidal 3D PLA'],
          ['Sendi 2 (Shoulder)', 'Pitch (Elevasi lengan atas)', 'NEMA 17 + Dual-Disc 1:50', '-30° hingga +90° (total 120°)', 'Sikloidal Torsi Tinggi Seimbang 1:50'],
          ['Sendi 3 (Elbow)', 'Pitch (Lekukan siku)', 'NEMA 17 + Cycloidal 1:25', '-45° hingga +90° (total 135°)', 'Reduksi Sikloidal 3D PLA'],
          ['Sendi 4 (Wrist Pitch)', 'Pitch (Orientasi pergelangan)', 'NEMA 17 + Cycloidal 1:25', '-90° hingga +90° (total 180°)', 'Reduksi Sikloidal 3D PLA'],
          ['Sendi 5 (Wrist Roll)', 'Roll (Putaran aksial gripper)', 'NEMA 17 Direct Drive', '-180° hingga +180° (total 360°)', 'Kopling Poros Langsung'],
        ],
      },

      section05: {
        num: '05 / VALIDASI EKSPERIMENTAL & METRIK KINERJA',
        title: 'Pengujian Kuantitatif & Hasil Closed-Loop',
        intro: 'Pengujian kapasitas beban dan akurasi sudut membuktikan sistem kendali Closed Loop mampu menekan rata-rata error posisi sendi dari 0,51° menjadi 0,10° (peningkatan akurasi 79,8%) serta beroperasi stabil pada rentang beban 250 gram hingga 1.000 gram:',
        testHeader: ['PARAMETER PENGUJIAN', 'SISTEM OPEN-LOOP (BASELINE)', 'SISTEM CLOSED-LOOP (AS5600)', 'PENINGKATAN / STATUS'],
        testRows: [
          ['Error Sudut Sendi (Tanpa Beban)', 'Rata-rata error 0,51°', 'Rata-rata error 0,10°', 'Penurunan error sendi sebesar 79,8%'],
          ['Error Sudut Sendi (Beban 500 g)', 'Rata-rata error 1,42° (backlash + defleksi)', 'Rata-rata error 0,29°', 'Kompensasi error 79,6% di bawah beban'],
          ['Error Posisi End-Effector (IK)', 'Offset rata-rata 18,4 mm pada batas jangkau', 'Offset rata-rata 6,65 mm (error 2,03%)', 'Peningkatan presisi jangkauan 3D 63,9%'],
          ['Kapasitas Angkat Beban (Payload)', 'Tidak stabil di atas 300 g (kehilangan step)', 'Tervalidasi stabil: 250 g hingga 1.000 g', 'Berhasil mengangkat beban botol 1 kg'],
          ['Pengukuran Backlash Gearbox', '1,8°–2,4° pada gearbox spur/planetary komersial', '<0,35° pada cycloidal 3D cetak PLA', 'Reduksi backlash signifikan berbiaya rendah'],
        ],
      },

      section06: {
        num: '06 / KESIMPULAN REKAYASA & PENGEMBANGAN LANJUTAN',
        title: 'Poin Rekayasa Utama & Rencana Peningkatan Sistem',
        col1Title: 'Kontribusi Rekayasa Utama Bayu',
        col1Text: '• Merancang dan memfabrikasi Cycloidal Gearbox 3D PLA (rasio 1:50 & 1:25) tanpa ketergantungan pada gearbox komersial yang mahal.\n• Mengembangkan firmware C pada mikrokontroler STM32F411, menerapkan Inverse Kinematics geometris dengan akselerasi hardware floating-point.\n• Mengatasi konflik alamat I2C multi-sensor menggunakan multiplekser TCA9548A untuk mencapai pembacaan umpan balik closed-loop pada 4 sendi.\n• Merakit prototipe fisik dan menyusun buku laporan Tugas Akhir setebal 100+ halaman dengan data terverifikasi.',
        col2Title: 'Keterbatasan Teridentifikasi & Rencana Masa Depan',
        col2Text: '• Deformasi Material (Creep): Terjadi keausan termal pada gigi PLA di bawah beban statis 1 kg berkepanjangan; iterasi mendatang akan menggunakan nilon serat karbon (PA-CF) atau resin SLA industri.\n• Profil Akselerasi Dinamis: Profil S-curve saat ini menggunakan parameter akselerasi konstan; peningkatan ke generator trajektori trapesium terbatas jerk akan memperhalus perpindahan kecepatan tinggi.\n• Penginderaan Gaya Gripper: Menambahkan sensor tekanan piezoresistif membran tipis pada rahang penjepit untuk kendali sentuh adaptif pada botol obat kaca.',
      },

      bottomNav: {
        next: 'Selanjutnya: Metode Pendinginan Panel Surya',
      },
    },

    // ─────────────────────────────────────────────────────────────
    // 02. SOLAR COOLING CASE STUDY (ID)
    // ─────────────────────────────────────────────────────────────
    solarCooling: {
      statusBadge: 'DOKUMEN PROYEK PERANCANGAN TERINTEGRASI (PPT / IDP) · UNIVERSITAS TELKOM',
      title: 'Metode Pendinginan Panel Surya untuk Meningkatkan Efisiensi di Suhu Tinggi',
      authorName: 'Bayu Aji Trisasongko',
      authorRole: 'Koordinator Implementasi Hardware & Elektrikal',
      teamName: 'Tim Capstone IDP 6 (4 Anggota)',
      teamRole: 'S1 Teknik Elektro · Universitas Telkom',
      sdgName: 'Penyelarasan SDG 7',
      sdgRole: 'Energi Bersih & Terjangkau (Affordable & Clean Energy)',
      heroDesc: 'Perancangan dan pengujian sistem pendinginan aktif panel surya menggunakan metode semprot air otomatis untuk mengatasi penurunan efisiensi akibat suhu tinggi. Beroperasi mandiri menggunakan sumber energi yang disimpan pada baterai (off-grid) dengan kontrol otomatis berbasis ambang suhu (>30°C aktif / <25°C mati), pompa celup 12V DC, serta enclosure tahan percikan air IPX4.',

      metrics: [
        { num: '>30°C / <25°C', desc: 'Ambang batas aktivasi otomatis pendinginan loop tertutup' },
        { num: '4,02 L/mnt', desc: 'Laju semprotan air presisi merata di atas sel surya' },
        { num: '4j 09m', desc: 'Durasi daya tahan baterai mandiri kontinu (102 Wh @ beban >25W)' },
        { num: 'IPX4 & MC4', desc: 'Kotak pelindung tahan cuaca dan kompatibilitas konektor solar MC4' },
      ],

      section01: {
        num: '01 / LATAR BELAKANG & ANALISIS KEBUTUHAN',
        title: 'Latar Belakang & Analisis Kebutuhan Sistem',
        col1Title: 'Penurunan Efisiensi Panel Surya Akibat Suhu Tinggi',
        col1Text: 'Energi surya merupakan sumber energi terbarukan yang bersih dan ramah lingkungan. Namun, tingkat efisiensi panel surya dalam menghasilkan listrik dapat menurun karena adanya peningkatan suhu. Ketika panel terpapar intensitas cahaya matahari yang terik di iklim tropis, suhu permukaan panel dapat meningkat melampaui 55°C–65°C. Peningkatan suhu ini menyebabkan penurunan tegangan karena meningkatnya nilai resistansi internal pada panel surya, dengan koefisien suhu daya sekitar -0,3%/°C hingga -0,5%/°C.',
        col1Text2: 'Berdasarkan analisis kebutuhan dokumen IDP, sistem dirancang untuk mendinginkan panel surya secara otomatis menggunakan sumber energi yang disimpan pada baterai (off-grid), memiliki enclosure yang tahan terhadap air, serta bersifat universal agar dapat diaplikasikan ke berbagai jenis panel surya yang ada di pasaran.',
        col2Title: 'Kebutuhan & Spesifikasi Desain',
        specs: [
          'Metode Pendinginan Aktif: Sistem semprot air fluida otomatis menggunakan pompa celup 12V DC berkapasitas semprot 4,02 L/menit.',
          'Kontrol Ambang Suhu: Sistem menyala otomatis saat suhu permukaan >30°C dan mati saat suhu turun ke <25°C.',
          'Sensor Suhu Terkalibrasi: Probe suhu tahan air dengan deviasi pengukuran ±0,6°C terhadap termometer referensi bersertifikat.',
          'Kemandirian Energi (Off-Grid): Beroperasi menggunakan baterai mandiri 12V dengan daya tahan kontinu 4 jam 09 menit (102 Wh) tanpa pasokan listrik luar.',
          'Proteksi Lingkungan: Enclosure pelindung elektrikal ABS tahan percikan air (IPX4) dengan terminal konektor surya MC4.',
        ],
      },

      section02: {
        num: '02 / ARSITEKTUR HARDWARE & DESAIN ELEKTRIKAL',
        title: 'Skematik Rangkaian, Penginderaan & Enclosure Tahan Cuaca',
        intro: 'Sebagai penanggung jawab elektrikal dan hardware, saya merancang tata letak skematik elektronik, interkoneksi komponen, proteksi daya, dan perakitan panel enclosure:',
        card1Title: 'Detail Implementasi Hardware & Rangkaian',
        card1Text: 'Subsistem dikendalikan oleh Arduino Uno R3 yang ditenagai melalui modul regulator step-down buck 7805. Sensor suhu probe RTD/NTC tahan air membaca suhu termal permukaan panel secara berkala. Modul relay optocoupler 5V menyalakan pompa celup 12V DC, memisahkan logika digital dari lonjakan induktif motor dengan perlindungan dioda flywheel.',
        card2Title: 'Kabelisasi Fisik & Kotak Luar Ruangan',
        card2Text: 'Ditempatkan di dalam enclosure listrik ABS berperingkat IPX4 dengan segel karet (gasket) dan cable gland untuk mencegah masuknya cipratan air. Status sistem real-time (Suhu Saat Ini, Batas Ambang, Status Pompa) ditampilkan pada layar LCD 16×2 I2C eksternal dengan fitur mati lampu otomatis untuk menghemat energi.',
      },

      section03: {
        num: '03 / PENGUJIAN LAPANGAN & HASIL EKSPERIMENTAL',
        title: 'Pengujian Lapangan Penurunan Suhu & Aliran Fluida',
        intro: 'Pengujian menyeluruh di area luar ruangan memverifikasi laju pendinginan, debit fluida, dan keandalan sistem kelistrikan mandiri:',
        testHeader: ['PARAMETER UJI', 'TARGET SPESIFIKASI', 'HASIL PENGUKURAN NYATA'],
        testRows: [
          ['Akurasi Sensor vs Referensi', 'Deviasi di bawah ±1,0°C', 'Deviasi ±0,6°C terverifikasi'],
          ['Debit Aliran Semprotan Pompa', '3,5 – 4,5 L/menit', 'Rata-rata 4,02 L/menit tervalidasi'],
          ['Penurunan Suhu Permukaan Panel', 'Penurunan suhu >15°C', 'Turun dari >42°C kembali ke 25°C'],
          ['Daya Tahan Baterai Mandiri', '>3,5 jam operasi kontinu', 'Bertahan 4 jam 09 menit nonstop'],
          ['Uji Ketahanan Percikan Air Enclosure', 'Standar IPX4 Tahan Cipratan', 'Nol penetrasi air ke rangkaian'],
        ],
      },

      section04: {
        num: '04 / KONTRIBUSI REKAYASA & KESIMPULAN',
        title: 'Dinamika Tim & Pembelajaran Rekayasa Industri',
        col1Title: 'Kontribusi Rekayasa Utama Bayu',
        col1Text: '• Merancang skematik elektrikal lengkap, rangkaian isolasi relay, dan jalur distribusi daya DC.\n• Memilih dan mengkalibrasi sensor suhu tahan air hingga mencapai akurasi deviasi ±0,6°C terhadap termometer bersertifikat.\n• Merakit enclosure fisik luar ruangan dengan segel IPX4, cable gland pelindung, dan terminal MC4 standar surya.\n• Memimpin pengambilan data uji outdoor, profil pengosongan baterai, dan pengukuran debit aliran air.',
        col2Title: 'Refleksi Rekayasa & Peluang Peningkatan',
        col2Text: '• Filtrasi & Sirkulasi Ulang Air: Pada instalasi terpencil di masa depan, sistem sirkulasi air tertutup dengan penyaring jaring mekanik penting agar nosel semprot tidak tersumbat partikel debu.\n• Kontrol Prediktif Berbasis Radiasi: Mengintegrasikan sensor radiasi matahari (pyranometer) dapat memprediksi lonjakan panas sebelum efisiensi panel mulai anjlok.\n• Sumber Daya Langsung dari PV: Produk komersial masa depan dapat mengambil daya parasit langsung dari modul surya via regulator MPPT kecil, meniadakan perlunya perawatan baterai aki.',
      },

      bottomNav: {
        prev: 'Sebelumnya: Manipulator Arm 5-DOF',
        next: 'Selanjutnya: Robot Basket (KRAI 2025)',
      },
    },

    // ─────────────────────────────────────────────────────────────
    // 03. KRAI CASE STUDY (ID)
    // ─────────────────────────────────────────────────────────────
    krai: {
      statusBadge: 'KONTES ROBOT INDONESIA (KRAI 2025) · TINGKAT NASIONAL DI ITB JATINANGOR',
      title: 'Robot Basket Kompetisi: Mekanisme Dribble & Shooter Pelontar Bola',
      authorName: 'Bayu Aji Trisasongko',
      authorRole: 'Lead Mechanical Designer & Fabricator',
      teamName: 'Tim ROOBICS',
      teamRole: 'EIRRG · Universitas Telkom',
      milestoneName: 'Pencapaian Kompetisi',
      milestoneRole: 'Finalis Tingkat Nasional (ITB Jatinangor)',
      heroDesc: 'Rekayasa mekanik dan perakitan fisik prototipe robot basket kompetisi beroda semi-otonom dengan interlock sensor-pneumatik untuk ajang bergengsi Kontes Robot ABU Indonesia (KRAI 2025). Dilengkapi sistem bounce dribbling pneumatik tekanan tinggi (5–6 bar), mekanisme pelontar flywheel tri-roller multi-motor dengan jangkauan 6–7 meter, serta chassis penggerak holonomic 3-wheel omni-directional.',

      metrics: [
        { num: '6–7 Meter', desc: 'Jangkauan lontaran bola basket tervalidasi ke ring' },
        { num: '5–6 Bar', desc: 'Tekanan kerja pneumatik untuk dribble dan feeder bola' },
        { num: '3× RS775', desc: 'Penggerak roller flywheel RPM tinggi kopling pulley' },
        { num: '3-Wheel Omni', desc: 'Kelincahan manuver segala arah chassis holonomic' },
      ],

      section01: {
        num: '01 / MISI KOMPETISI & SPESIFIKASI',
        title: 'Tantangan Robot Bola Basket ABU Robocon 2025',
        col1Title: 'Konteks Tantangan Robot Basket Otonom',
        col1Text: 'Kontes Robot ABU Indonesia (KRAI) 2025 menantang tim robotika perguruan tinggi untuk merancang robot berkecepatan tinggi di lapangan basket standar. Robot harus mampu mengambil bola basket regulation secara otonom, mengontrol pantulan bola secara konsisten melalui mekanisme dribbler, mengunci posisi ring target dengan cepat, dan melontarkan bola secara presisi dari jarak lebih dari 6 meter dalam batasan waktu pertandingan yang sangat ketat.',
        col1Text2: 'Sebagai perancang mekanik inti pada Tim ROOBICS (EIRRG Universitas Telkom), saya bertanggung jawab langsung dalam merancang CAD, memfabrikasi part, dan mengkalibrasi dua subsistem utama: mekanisme dribbler pneumatik dan modul pelontar bola flywheel bertenaga tinggi.',
        col2Title: 'Target Spesifikasi Teknis',
        specs: [
          'Target Jangkauan Lemparan: 6,0 m hingga 7,0 m untuk melampaui elevasi bibir ring basket standar.',
          'Penggerak Pelontar: 3× Motor DC RS775 dengan sinkronisasi timing belt/pulley dan pemantauan kecepatan encoder absolut.',
          'Pendorong Bola (Feeder): Silinder pneumatik aliran tinggi khusus untuk mendorong bola ke jepitan 3 roller berputar cepat.',
          'Subsistem Dribble Pneumatik: Silinder pneumatik kerja ganda (dual-acting) beroperasi pada tekanan 5–6 bar untuk memantulkan bola secara vertikal dan ritmis.',
          'Interlock Penginderaan: Sensor inframerah (IR) mendeteksi kehadiran bola di mangkuk gripper + limit switch mekanik mendeteksi batas langkah piston dribbler.',
          'Mobilitas Manuver: Drivetrain 3 roda omni-wheel holonomic bersudut 120° simetris untuk strafing ke segala arah dan rotasi orientasi instan.',
        ],
      },

      section02: {
        num: '02 / DESAIN MEKANIK & PEMODELAN CAD',
        title: 'Mekanisme Dribbler, Menara Shooter & Drivetrain Omni',
        intro: 'Untuk menahan beban dinamis tinggi di arena pertandingan, arsitektur mekanik dimodelkan di Onshape CAD dan difabrikasi menggunakan pelat aluminium potong CNC, cetak 3D, dan sambungan baut baja:',
        cadCaptions: [
          '3D CAD: Rakitan Pelontar Flywheel Tri-Roller',
          '3D CAD: Gripper & Linkage Dribble Bola Pneumatik',
          '3D CAD: Chassis Base Penggerak 3-Roda Omni Holonomic',
        ],
        card1Title: '1. Pelontar Bola Kecepatan Tinggi Tri-Roller',
        card1Text: 'Untuk mencapai lintasan parabola 6–7 m yang konsisten, konfigurasi 3 roller flywheel dirancang khusus menggantikan sistem dual-roller konvensional. Digerakkan oleh 3 motor RS775 yang disinkronkan melalui pulley timing belt, ketiga roller urethane bergesekan tinggi memeluk keliling bola basket, memaksimalkan luas permukaan kontak dan transfer energi kinetik tanpa selip.',
        card1Text2: 'Encoder absolut memantau kecepatan putar permukaan roller, memberikan umpan balik ke kontrol loop kecepatan PID. Saat kecepatan nominal tercapai, piston pendorong pneumatik mendorong bola langsung ke celah jepit roller dengan presisi waktu milidetik.',
        card2Title: '2. Dribbler Pneumatik & Penanganan Bola',
        card2Text: 'Sesuai regulasi kompetisi, robot tidak boleh menjepit atau membawa bola terus-menerus tanpa memantulkannya ke lantai. Kami menerapkan silinder pneumatik aksi ganda berkecepatan tinggi yang diatur pada tekanan 5–6 bar (72–87 psi) melalui katup solenoid beraliran besar.',
        card2Text2: 'Interlock sensorik menjamin urutan aktuasi yang deterministik: sensor jarak inframerah (IR) mendeteksi saat bola masuk ke mangkuk penampung, langsung memicu siklus pneumatik. Limit switch mekanik pada ujung langkah silinder mendeteksi posisi ekstensi dan retraksi, mencegah benturan katup dan menjaga ritme pantulan stabil saat robot bermanuver.',
        baseMediaLabel: 'Perakitan Fisik Sasis Penggerak 3-Roda Omni-Directional Holonomic',
      },

      section03: {
        num: '03 / PENGUJIAN, VALIDASI LAPANGAN & LOG VIDEO',
        title: 'Pembuatan Prototipe Subsistem & Uji Lapangan Nyata',
        intro: 'Dokumentasi pengujian fisik nyata di meja uji lab EIRRG dan sesi latihan lapangan resmi selama persiapan turnamen KRAI:',
        video1Title: 'Uji Mekanisme Dribble Pneumatik',
        video1Desc: 'Siklus pantulan vertikal aktif pada tekanan 5 bar dengan aktuasi silinder via katup solenoid cepat dan pemicu sensor optik IR kehadiran bola.',
        video2Title: 'Uji Putaran Bench Test Tri-Roller RPM Tinggi',
        video2Desc: 'Pengujian sinkronisasi 3× motor RS775 via pulley timing belt custom, memastikan getaran rendah pada kecepatan sudut puncak dan umpan balik encoder.',
        video3Title: 'Uji Lemparan Lapangan Jarak Penuh 6–7 Meter',
        video3Desc: 'Lontaran bola basket sungguhan menunjukkan trajektori parabola berenergi tinggi, jangkauan 6–7 meter yang konsisten, dan dorongan feeder pneumatik.',
        testHeader: ['PARAMETER SUBSISTEM', 'SPESIFIKASI TARGET', 'HASIL PENGUKURAN LAB'],
        testRows: [
          ['Jarak Jangkauan Lemparan', '6,0 m – 7,0 m', 'Trajektori rata-rata 6,8 m'],
          ['Aktuator Penggerak Shooter', '3× Motor DC RS775', 'Sinkronisasi pulley timing belt'],
          ['Mekanisme Akselerasi Bola', 'Konfigurasi tri-roller melingkar', '3 roller urethane + 1 pendorong pneumatik'],
          ['Tekanan Dribble Pneumatik', '5,0 – 6,0 Bar', 'Stabil disuplai tabung udara onboard'],
          ['Deteksi Sensorik Bola', 'Sensor IR + limit switch', 'Tingkat deteksi 100% di mangkuk'],
          ['Kinematika Drivetrain', '3-Roda Omni 120° Simetris', 'Translasi holonomic penuh + rotasi'],
        ],
      },

      section04: {
        num: '04 / PENCAPAIAN KOMPETISI & HASIL AKHIR',
        title: 'Tingkat Nasional di ITB Jatinangor & Bukti Kredensial Resmi',
        pitstopLabel: 'Area Pitstop KRAI 2025 — Kalibrasi Sistem & Penyetelan di Lapangan',
        certLabel: 'Sertifikat Resmi Finalis Tingkat Nasional KRAI 2025 (ITB Jatinangor)',
        col1Title: 'Kontribusi Rekayasa Utama Bayu',
        col1Text: '• Perancangan Menara Shooter: Menghitung kebutuhan kecepatan lepas bola, mendesain bracket aluminium, dan menyetel rasio pulley 3× motor RS775 untuk proyeksi lemparan 6–7 meter.\n• Subsistem Dribble Pneumatik: Merancang rakitan silinder aksi ganda 5–6 bar, rel pemandu linier, dan kalibrasi limit switch mekanik untuk pemantulan bola yang patuh regulasi.\n• Fabrikasi Sasis & Integrasi Lapangan: Memotong dan merakit pelat struktural aluminium serta mengintegrasikan drivetrain roda omni holonomic di bawah tenggat kompetisi yang ketat.',
        col2Title: 'Pembelajaran Rekayasa & Rencana Iterasi Masa Depan',
        col2Text: '• Regulasi Tekanan Dinamis: Menambahkan Electronic Pressure Regulator (EPR) digital untuk menyesuaikan gaya dorong silinder secara langsung berdasarkan variasi tekanan internal bola basket.\n• Penyesuaian Sudut Lempar Dua Sumbu: Menambahkan mekanisme lead-screw motorik otomatis untuk mengubah sudut elevasi penembak secara fleksibel antara lemparan 3-point jarak jauh dan lay-up dekat.\n• Integrasi Computer Vision: Memadukan pelacakan warna OpenCV real-time dengan penggerak omni untuk mengunci posisi ring basket secara otomatis dalam tempo <500 ms.',
      },

      bottomNav: {
        prev: 'Sebelumnya: Pendingin Panel Surya',
        next: 'Selanjutnya: Robot Line Follower',
      },
    },

    // ─────────────────────────────────────────────────────────────
    // 04. LINE FOLLOWER CASE STUDY (ID)
    // ─────────────────────────────────────────────────────────────
    lineFollower: {
      statusBadge: 'PROYEK MANDIRI EMBEDDED · BANDUNG (2024)',
      title: 'Robot Line Follower Otonom: Bar 8 Sensor Fotodioda & Kontrol Gerak PID',
      authorName: 'Bayu Aji Trisasongko',
      authorRole: 'Hardware Designer & Embedded Firmware Engineer',
      scopeName: 'Cakupan Proyek',
      scopeRole: 'Prototipe Robotika Bergerak Mandiri',
      controlName: 'Paradigma Kendali',
      controlRole: 'Algoritma Kemudi Loop Tertutup PID',
      heroDesc: 'Perancangan, perakitan sirkuit manual (hand-soldered), dan penalaan gerak loop tertutup (closed-loop) pada robot bergerak pelacak garis otonom sistem differential drive. Mengintegrasikan bar sensor lengkung 8 channel fotodioda/LED, logika kemudi PID real-time pada ATmega328P (Arduino Nano), driver motor MOSFET TB6612FNG dua channel, telemetri layar OLED 128×64 I2C, serta daya baterai dual 18650 Li-ion.',

      metrics: [
        { num: '8 Channel', desc: 'Bar sensor reflektansi pasangan fotodioda + LED lengkung' },
        { num: 'Closed-Loop PID', desc: 'Algoritma kemudi Proportional-Integral-Derivative terkalibrasi' },
        { num: 'TB6612FNG', desc: 'Driver motor dual MOSFET H-bridge efisiensi tinggi' },
        { num: '7,4V (2S Li-ion)', desc: 'Baterai dua sel 18650 dengan telemetri OLED I2C' },
      ],

      section01: {
        num: '01 / PERUMUSAN MASALAH & TUJUAN',
        title: 'Pelacakan Permukaan Kontras Tinggi & Kemudi Dinamis',
        col1Title: 'Tantangan Navigasi Otonom',
        col1Text: 'Robot line follower merupakan platform pengujian fundamental dalam robotika bergerak mandiri, menuntut integrasi presisi antara pembacaan reflektansi permukaan analog, sampling mikrokontroler berkecepatan tinggi, kontrol motor differential drive loop tertutup, serta mekanika sasis berkelembaman rendah agar sanggup melibas tikungan tajam tanpa tergelincir keluar jalur.',
        col1Text2: 'Proyek mandiri ini bertujuan membangun robot yang andal dan responsif dari komponen diskrit, menyetel geometri penempatan sensor serta kestabilan respon algoritma kendali PID.',
        col2Title: 'Target Arsitektur Sistem',
        specs: [
          'Kepala Sensor: 8 pasang LED pemancar dan fotodioda penerima disusun melengkung untuk mendeteksi tikungan tajam lebih awal.',
          'Pengondisi Sinyal: Kalibrasi sensitivitas trimpot multi-turn memberikan input komparator analog/digital ke mikrokontroler.',
          'Inti Mikrokontroler: ATmega328P (Arduino Nano, 16 MHz) menghitung algoritma lintasan PID pada frekuensi 100 Hz.',
          'Driver Motor: Driver MOSFET TB6612FNG dengan disipasi panas rendah dan kapasitas arus kontinu 1,2A per kanal.',
          'Aktuator Penggerak: 2× Motor mikro metal-gear N20 torsi tinggi dipasangkan dengan ban silikon berdaya cengkeram tinggi.',
          'Telemetri Real-Time: Layar OLED 0,96" I2C menampilkan pembacaan sensor langsung dan pemantau tegangan baterai.',
        ],
      },

      section02: {
        num: '02 / SKEMATIK, PERAKITAN ELEKTRONIKA & MEKANIK',
        title: 'Geometri Bar Sensor, Drivetrain & Pengondisian Daya',
        intro: 'Dirakit dan disolder mandiri titik-demi-titik untuk kemudahan modifikasi, kekakuan mekanis, serta kemudahan perbaikan di meja uji:',
        card1Title: 'Geometri Bar Sensor Melengkung',
        card1Text: 'Menyusun 8 pasangan fotodioda dalam lengkungan busur cekung memungkinkan sensor tepi menangkap garis pada belokan tajam 90 derajat lebih awal dibandingkan sensor lurus konvensional, memberi waktu bagi PID untuk melakukan pengereman diferensial sebelum robot keluar lintasan.',
        card2Title: 'Manajemen Daya & Regulasi Tegangan',
        card2Text: 'Dua baterai Li-ion 18650 terhubung seri menghasilkan tegangan nominal 7,4V (hingga 8,4V penuh). Regulator linier LDO menyuplai tegangan stabil 5V ke ATmega328P dan bar sensor, sedangkan driver motor ditenagai langsung dari baterai tanpa regulasi untuk mendapatkan torsi maksimum.',
      },

      section03: {
        num: '03 / ALGORITMA PID & PENALAAN FIRMWARE',
        title: 'Kalkulasi Error Berbobot & Kontrol Kemudi Dinamis',
        intro: 'Robot menghitung nilai simpangan posisi garis menggunakan penjumlahan sensor berbobot (-35 hingga +35), yang diteruskan ke kontroler PID terkalibrasi:',
        tableHeader: ['PARAMETER PID', 'NILAI TERKALIBRASI', 'FUNGSI & PENGARUH TERHADAP SISTEM'],
        tableRows: [
          ['Kp (Gain Proporsional)', '18,5', 'Memberikan koreksi kemudi instan sebanding dengan jarak simpangan posisi robot terhadap garis.'],
          ['Ki (Gain Integral)', '0,04', 'Menghilangkan akumulasi error posisi pada tikungan panjang berkelanjutan; disetel kecil agar tidak timbul osilasi.'],
          ['Kd (Gain Derivatif)', '12,0', 'Meredam sentakan dan menstabilkan sasis saat transisi mendadak dari jalur lurus ke tikungan tajam.'],
        ],
      },

      section04: {
        num: '04 / REFLEKSI REKAYASA & PENGEMBANGAN MASA DEPAN',
        title: 'Pembelajaran Rekayasa & Potensi Skalabilitas',
        col1Title: 'Kontribusi Rekayasa Utama Bayu',
        col1Text: '• Merancang dan menyolder manual bar 8 sensor fotodioda dengan trimpot penala sensitivitas individual.\n• Menulis firmware kendali loop tertutup PID dalam bahasa C++ dengan algoritma pembobotan posisi sensor.\n• Mengintegrasikan layar OLED I2C untuk pemantauan ambang batas sensor dan status tegangan baterai langsung di bodi robot.\n• Menguji performa pada berbagai lintasan untuk mendapatkan konstanta parameter PID yang stabil dan responsif.',
        col2Title: 'Rencana Peningkatan untuk Iterasi Mendatang',
        col2Text: '• Desain PCB SMT Kustom: Menggantikan sirkuit perfboard dengan PCB terintegrasi 2 layer untuk memangkas bobot sasis dan menurunkan titik berat (center of gravity).\n• Umpan Balik Rotary Encoder: Menambahkan encoder magnetik mini pada poros roda N20 untuk odometri presisi dan kontrol kecepatan feed-forward.\n• Rutinitas Kalibrasi Otomatis: Membuat fungsi kalibrasi sapuan otomatis yang memindai permukaan putih dan hitam saat startup untuk menetapkan batas komparator secara dinamis.',
      },

      bottomNav: {
        prev: 'Sebelumnya: Robot Basket (KRAI 2025)',
        next: 'Selanjutnya: Robot Sumo Bluetooth',
      },
    },

    // ─────────────────────────────────────────────────────────────
    // 05. SUMO ROBOT CASE STUDY (ID)
    // ─────────────────────────────────────────────────────────────
    sumoRobot: {
      statusBadge: 'PROYEK MANDIRI COMBAT ROBOTICS · BANDUNG (2023)',
      title: 'Robot Sumo Bluetooth: Drivetrain Torsi Tinggi 4WD PG24 & Chassis Baji',
      authorName: 'Bayu Aji Trisasongko',
      authorRole: 'Perancang CAD Mekanik & Integrasi Kontrol Embedded',
      scopeName: 'Cakupan Proyek',
      scopeRole: 'Robot Sumo Kelas Turnamen 1 kg (Dimensi 20 × 20 cm)',
      drivetrainName: 'Drivetrain & Telemetri',
      drivetrainRole: 'Motor Planetary PG24 4WD · Transceiver Bluetooth HC-05 UART',
      heroDesc: 'Perancangan mekanik CAD menyeluruh, fabrikasi baji berjarak rendah ke tanah (low ground-clearance), dan integrasi kontrol nirkabel embedded pada Robot Sumo RC kelas turnamen 1 kg. Dirancang mematuhi batas ketat 200 × 200 mm dengan penggerak 4 motor planetary PG24 independen, dua modul driver H-bridge L298N, baterai LiPo 3S (11,1V – 12,6V), dan telemetri nirkabel dari smartphone via transceiver Bluetooth HC-05.',

      highlightsTitle: 'Sorotan Teknis Terverifikasi',
      highlights: [
        'Dimensi Kelas Turnamen: Jejak dimensi 200 × 200 mm yang patuh secara ketat pada regulasi kompetisi RC sumo 1 kg.',
        'Transmisi Planetary 4WD: 4× motor independen bertorsi tinggi PG24 memutar roda silikon beralur dengan daya cengkeram tinggi.',
        'Bilah Baji (Wedge) Sudut Rendah: Pelat serok depan dari stainless steel/akrilik untuk menyelip di bawah sasis lawan dan mengangkat roda traksi musuh.',
        'Arsitektur Daya & Driver: Baterai LiPo 3-sel (nominal 11,1V) menyuplai dua driver L298N, dikendalikan oleh ATmega328P (Arduino Uno).',
      ],

      section01: {
        num: '01 / TANTANGAN REKAYASA & BATASAN ATURAN',
        title: 'Tantangan Rekayasa: Traksi, Titik Berat Rendah, & Torsi Dorong',
        intro: 'Dalam pertandingan robot sumo RC, kemenangan ditentukan dalam hitungan detik oleh dua aspek krusial: traksi gesekan ke lantai ring dan geometri pengungkit baji (wedge). Sasaran rekayasa proyek ini adalah merancang robot tempur seberat 1,0 kg yang memaksimalkan gaya dorong tanpa melanggar batasan ukuran turnamen (jejak 200 mm × 200 mm).',
        tableHeader: ['Parameter Desain', 'Batas Aturan Kompetisi', 'Spesifikasi Nyata Robot', 'Justifikasi Rekayasa'],
        tableRows: [
          ['Berat Total', 'Maksimal 1.000 g (1,0 kg)', '985 g (termasuk baterai LiPo 3S)', 'Memaksimalkan bobot legal untuk cengkeraman traksi dengan batas toleransi keselamatan 15 gram.'],
          ['Dimensi Awal', 'Maksimal 200 mm (L) × 200 mm (P)', 'Jejak 192 mm (L) × 188 mm (P)', 'Memastikan penempatan mudah di dalam kotak start Dohyo tanpa risiko diskualifikasi.'],
          ['Batas Ketinggian', 'Tidak dibatasi', 'Siluet baji rendah 78 mm', 'Meminimalkan momen jungkit saat ditabrak lawan berkecepatan tinggi dari depan maupun samping.'],
          ['Kendali Nirkabel', 'Standar RF 2.4 GHz / Bluetooth', 'Transceiver Bluetooth HC-05 (UART, 9600 baud)', 'Memberikan respons kendali joystick smartphone yang lincah tanpa interferensi frekuensi.'],
        ],
      },

      section02: {
        num: '02 / CAD 3D & PERANCANGAN BAJI MEKANIK',
        title: 'Pemodelan CAD Parametrik & Distribusi Berat Sasis',
        intro: 'Sasis dirancang secara detail di software CAD 3D untuk menempatkan titik pusat massa sedekat mungkin ke lantai serta menjaga kekakuan terhadap benturan:',
        card1Title: '1. Sudut Kemiringan Baji & Ketinggian dari Lantai',
        card1Text: 'Bilah baji depan dirancang dengan sudut kemiringan landai (sekitar 22 derajat) di sepanjang bibir depan. Ujung baji yang sangat rapat ke lantai gelanggang memungkinkan robot menyelinap ke bawah sasis lawan, mengangkat roda musuh sehingga gaya traksi musuh hilang dan beralih menekan roda robot kita.',
        card2Title: '2. Sasis Akrilik dengan Titik Berat Rendah',
        card2Text: 'Pelat rangka dipotong menggunakan mesin laser-cutting dari lembaran akrilik berkekuatan bentur tinggi. Komponen bermassa berat (empat gearbox planetary logam dan baterai LiPo 3S) diletakkan di bawah garis tengah sasis agar robot tidak mudah terbalik saat manuver balik arah mendadak.',
      },

      section03: {
        num: '03 / ARSITEKTUR KELISTRIKAN & DRIVER PENGGERAK',
        title: 'Driver Arus Tinggi, Jalur Daya LiPo & Komunikasi Nirkabel',
        intro: 'Agar sistem sanggup menghadapi benturan keras dan kondisi motor stall tanpa risiko reset atau panas berlebih, sistem kelistrikan dirancang kokoh:',
        card1Title: 'Arsitektur Daya Penggerak',
        card1Text: 'Setiap sisi roda penggerak memparalelkan dua motor planetary PG24 yang dikendalikan oleh modul dual H-bridge L298N. Baterai LiPo 3S mampu memasok arus kejut instan yang besar (hingga 20C) tanpa drop tegangan, menjamin torsi puncak saat saling mendorong.',
        card2Title: 'Telemetri Bluetooth & Failsafe Keselamatan',
        card2Text: 'Modul Bluetooth HC-05 terhubung ke UART hardware ATmega328P. Firmware dilengkapi pengaman waktu (watchdog timeout): apabila sinyal terputus lebih dari 200 ms, output PWM motor langsung dipaksa mati untuk mencegah robot meluncur tanpa kendali.',
      },

      section04: {
        num: '04 / REFLEKSI REKAYASA & PEMBELAJARAN',
        title: 'Kesiapan Tanding & Rencana Pengembangan Lanjutan',
        col1Title: 'Kontribusi Rekayasa Utama Bayu',
        col1Text: '• Merancang rakitan CAD 3D di Onshape, menyeimbangkan distribusi beban ke keempat roda penggerak.\n• Memfabrikasi sasis akrilik berprofil rendah dan merakit sistem penggerak 4WD motor planetary.\n• Memprogram firmware Arduino dengan kinematika joystick diferensial serta failsafe pemutus koneksi.\n• Menguji dan menala ban silikon bergesekan tinggi untuk mendapatkan daya cengkeram traksi yang kuat dan konsisten di atas gelanggang Dohyo.',
        col2Title: 'Rencana Peningkatan untuk Generasi Berikutnya',
        col2Text: '• Upgrade ke Driver MOSFET: Mengganti driver L298N lama dengan driver MOSFET efisiensi tinggi (misalnya TB6612 atau discrete MOSFET) untuk memangkas drop tegangan internal ~2V dan mengurangi panas.\n• Ekspansi Sensor Otonom: Memasang sensor jarak ultrasonik/optik jarak jauh dan sensor garis lantai untuk bertransisi dari kendali RC manual ke mode tempur otonom penuh.\n• Bilah Baja Pegas (Spring Steel): Mengganti serok depan kaku dengan bilah baja pegas lentur yang dapat menjaga kontak rapat dengan permukaan lantai meskipun gelanggang memiliki sedikit ketidakrataan.',
      },

      bottomNav: {
        prev: 'Sebelumnya: Robot Line Follower',
        backHome: 'Kembali ke Semua Proyek',
      },
    },
  },
};
