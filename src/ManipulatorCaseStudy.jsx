import React, { useState } from 'react';
import { 
  ArrowLeft, ArrowRight, Award, Activity, Wrench, Layers, 
  Cpu, ZoomIn, Compass, Sliders 
} from 'lucide-react';
import ImageLightboxModal from './ImageLightboxModal';
import { useLang } from './translations';
import { caseStudiesTranslations } from './caseStudiesTranslations';

export default function ManipulatorCaseStudy() {
  const { lang } = useLang();
  const t = caseStudiesTranslations[lang]?.manipulator || caseStudiesTranslations.en.manipulator;
  const c = caseStudiesTranslations[lang]?.common || caseStudiesTranslations.en.common;
  const isId = lang === 'id';

  const [modalData, setModalData] = useState(null);

  const openZoom = (image, title, subtitle) => {
    setModalData({ image, title, subtitle });
  };

  return (
    <article className="cs-container">
      {/* ── Top Bar & Back Link ── */}
      <div className="cs-top-bar">
        <a href="/#projects" className="cs-back-link">
          <ArrowLeft size={14} /> {c.backToProjects}
        </a>
        <span className="cs-status-badge">{t.statusBadge}</span>
      </div>

      {/* ── Header ── */}
      <header className="cs-header">
        <h1 className="cs-title-single-line">
          {t.title}
        </h1>

        {/* Author / Metadata Bar */}
        <div style={{ display: 'flex', gap: '36px', flexWrap: 'wrap', margin: '14px 0 24px', fontSize: '13px', color: '#475569' }}>
          <div>
            <strong style={{ display: 'block', color: '#0F172A', fontSize: '14px' }}>{t.authorName}</strong>
            <span>{t.authorRole}</span>
          </div>
          <div>
            <strong style={{ display: 'block', color: '#0F172A', fontSize: '14px' }}>{t.degree}</strong>
            <span>{t.institution}</span>
          </div>
          <div>
            <strong style={{ display: 'block', color: '#0F172A', fontSize: '14px' }}>{t.timeline}</strong>
            <span>{t.timelineLabel}</span>
          </div>
        </div>

        {/* 50 / 50 Hero Split: Left Text & Metrics 2x2, Right Video Without Black Bars */}
        <div className="cs-hero-split-50" style={{ alignItems: 'flex-start' }}>
          <div className="cs-hero-split-left">
            <p className="cs-hero-desc-text" style={{ marginBottom: '16px' }}>
              {t.heroDesc}
            </p>

            {/* 4 Metrics in 2x2 Grid */}
            <div className="cs-metrics-grid-2x2">
              {t.metrics.map((m, idx) => (
                <div key={idx} className="cs-metric-card-fit">
                  <span className="cs-metric-num-fit">{m.num}</span>
                  <span className="cs-metric-desc-fit">{m.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Physical Testing Video Without Black Bars */}
          <div className="cs-hero-split-right" style={{ alignSelf: 'center', width: '100%', maxWidth: '380px', display: 'flex', justifyContent: 'center' }}>
            <div style={{ borderRadius: '8px', overflow: 'hidden', background: 'transparent', boxShadow: '0 8px 24px rgba(0,0,0,0.08)', width: '100%', maxWidth: '380px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <video 
                src="/videos/manipulator_arm_test.mp4" 
                controls 
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                style={{ width: '100%', height: 'auto', aspectRatio: '1 / 1', objectFit: 'cover', display: 'block', borderRadius: '8px', backgroundColor: 'transparent' }}
              >
                Your browser does not support HTML5 video.
              </video>
            </div>
          </div>
        </div>
      </header>

      {/* ── 01. Problem Statement & Scope Boundary ── */}
      <section className="cs-section">
        <div className="cs-section-header">
          <span className="cs-section-num">{t.section01.num}</span>
          <h2 className="cs-section-title">{t.section01.title}</h2>
        </div>
        <div className="cs-two-col">
          <div className="cs-info-box">
            <h4><Activity size={18} color="#F05A22" /> {t.section01.col1Title}</h4>
            <p>
              {t.section01.col1Text}
            </p>
            <p style={{ marginTop: '12px' }}>
              {t.section01.col1Text2}
            </p>
          </div>
          <div className="cs-info-box">
            <h4><Wrench size={18} color="#F05A22" /> {t.section01.col2Title}</h4>
            <ul className="cs-constraint-list">
              {t.section01.specs.map((spec, idx) => (
                <li key={idx}>{spec}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── 02. Architecture & Methodology ── */}
      <section className="cs-section">
        <div className="cs-section-header">
          <span className="cs-section-num">{isId ? '02 / ARSITEKTUR SISTEM' : '02 / SYSTEM ARCHITECTURE'}</span>
          <h2 className="cs-section-title">{isId ? 'Arsitektur Hardware & Alur Kontrol' : 'Hardware Architecture & Control Workflow'}</h2>
        </div>
        <div className="cs-two-col" style={{ alignItems: 'center' }}>
          <div 
            className="cs-preview-media"
            style={{ height: '320px', padding: '12px', background: '#FFFFFF' }}
            onClick={() => openZoom(
              '/images/manipulator_block_diagram_hd.png', 
              isId ? 'Diagram Arsitektur Hardware & Alur Kontrol' : 'Hardware Architecture & Control Workflow Diagram', 
              isId ? 'Diagram blok sistem menghubungkan STM32, TB6600, NEMA17, AS5600, TCA9548A, dan jalur daya' : 'Full system block diagram connecting STM32, TB6600, NEMA17, AS5600, TCA9548A, and Power rail'
            )}
            title={c.clickToZoom}
          >
            <img 
              src="/images/manipulator_block_diagram_hd.png" 
              alt="Hardware Architecture & Control Workflow" 
            />
          </div>

          <div className="cs-info-box" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p style={{ lineHeight: 1.7, fontSize: '14px', color: '#334155' }}>
              {isId ? (
                <>Alur kontrol berawal saat koordinat target kartesian (X, Y, Z) diterima oleh mikrokontroler melalui serial UART (115200 bps). Mikrokontroler <strong>STM32F411CEU6</strong> memproses persamaan Inverse Kinematics analitis dan menghasilkan sinyal step dan arah (direction) ke lima driver motor stepper <strong>TB6600</strong> menggunakan <strong>profil kecepatan S-Curve</strong> untuk meminimalkan hentakan mekanik (jerk). Sensor encoder magnetik nirsentuh <strong>AS5600</strong> pada sendi J1–J4 mengirimkan data posisi sudut kontinu melalui multiplexer I2C 8-channel <strong>TCA9548A</strong> untuk menjalankan koreksi loop tertutup secara real-time.</>
              ) : (
                <>The control workflow begins when target Cartesian coordinates (X, Y, Z) are received by the microcontroller via serial UART (115200 bps). The <strong>STM32F411CEU6</strong> microcontroller processes the analytical Inverse Kinematics equations and outputs step and direction signals to five <strong>TB6600</strong> stepper drivers using an <strong>S-Curve velocity profile</strong> to minimize mechanical jerk. Contactless <strong>AS5600</strong> magnetic encoders on joints J1–J4 continuously stream angular feedback through an 8-channel <strong>TCA9548A</strong> I2C multiplexer to execute real-time closed-loop position corrections.</>
              )}
            </p>
          </div>
        </div>
      </section>

      {/* ── 03. Design 3D & Link Dimensions ── */}
      <section className="cs-section">
        <div className="cs-section-header">
          <span className="cs-section-num">{isId ? '03 / CAD MEKANIK & STRUKTUR' : '03 / MECHANICAL CAD & STRUCTURE'}</span>
          <h2 className="cs-section-title">{isId ? 'Pemodelan CAD 3D & Dimensi Sambungan Link' : '3D CAD Modeling & Link Dimensions'}</h2>
        </div>

        {/* 4 CAD poses strip */}
        <div className="cs-cad-poses-strip">
          <img 
            src="/images/manipulator_cad_side_hd.png" 
            alt="3D CAD Side View Render" 
            style={{ height: '185px' }}
            onClick={() => openZoom(
              '/images/manipulator_cad_side_hd.png', 
              isId ? 'Model CAD Parametrik 3D — Profil Tampak Samping' : '3D CAD Parametric Model — Articulated Side Profile', 
              isId ? 'Render 3D CAD parametrik resolusi tinggi lengan manipulator 5-DOF posisi samping' : 'High-resolution parametric 3D CAD render of the 5-DOF manipulator arm in articulated side posture'
            )}
            title={c.clickToZoom}
          />
          <img 
            src="/images/manipulator_cad_iso_hd.png" 
            alt="3D CAD Isometric Render" 
            style={{ height: '175px' }}
            onClick={() => openZoom(
              '/images/manipulator_cad_iso_hd.png', 
              isId ? 'Model CAD Parametrik 3D — Tampilan Isometrik' : '3D CAD Parametric Model — Isometric View', 
              isId ? 'Render CAD isometrik resolusi tinggi menampilkan casing sendi, housing cycloidal, dan dudukan end-effector' : 'High-resolution isometric CAD render displaying joint casings, cycloidal gearbox housings, and end-effector mount'
            )}
            title={c.clickToZoom}
          />
          <img 
            src="/images/manipulator_cad_wireframe_hd.png" 
            alt="3D CAD Orthographic Wireframe Assembly" 
            style={{ height: '185px' }}
            onClick={() => openZoom(
              '/images/manipulator_cad_wireframe_hd.png', 
              isId ? 'Wireframe Perakitan CAD 3D & Tata Letak Internal' : '3D CAD Wireframe Assembly & Internal Layout', 
              isId ? 'Potongan penampang kawat mekanik internal menampilkan bantalan (bearing), dudukan motor stepper, dan roda gigi sikloidal' : 'Internal mechanical CAD wireframe cross-section showing bearings, stepper motor mountings, and cycloidal gear drives'
            )}
            title={c.clickToZoom}
          />
          <img 
            src="/images/manipulator_cad_sweep_hd.png" 
            alt="Arm Angular Sweep & Payload Operational Range" 
            style={{ height: '175px' }}
            onClick={() => openZoom(
              '/images/manipulator_cad_sweep_hd.png', 
              isId ? 'Rentang Sudut Sapuan Sendi & Batas Beban (±90°)' : 'Joint Angular Sweep Range & Payload Boundary (±90°)', 
              isId ? 'Skematik multi-sudut mengilustrasikan sudut sapuan Sendi 2 (0°, ±30°, ±60°, ±90°) di bawah uji beban 250–1.250 g' : 'Multi-exposure schematic illustrating Joint 2 sweep angles (0°, ±30°, ±60°, ±90°) under 250–1,250 g operational testing'
            )}
            title={c.clickToZoom}
          />
        </div>

        {/* Dimensions row */}
        <div className="cs-two-col" style={{ alignItems: 'stretch' }}>
          <div 
            className="cs-card-container cs-preview-media" 
            style={{ height: 'auto', minHeight: '260px', flexDirection: 'column', padding: 0 }}
            onClick={() => openZoom(
              '/images/manipulator_arm_link_dimensions_hd.png', 
              isId ? 'Skematik Dimensi Sambungan Lengan Manipulator' : 'Manipulator Arm Link Dimensions Schematic', 
              isId ? 'Skema mekanik ortografis: Tinggi base d1 (189 mm), link a2 & a3 (150 mm), offset d5 (100 mm), jangkauan total L (400 mm)' : 'Orthographic mechanical schema: Base height d1 (189 mm), links a2 & a3 (150 mm), offset d5 (100 mm), total reach L (400 mm)'
            )}
            title={c.clickToZoom}
          >
            <div style={{ flex: 1, width: '100%', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF' }}>
              <img src="/images/manipulator_arm_link_dimensions_hd.png" alt="Manipulator Arm Link Dimensions" style={{ maxHeight: '220px' }} />
            </div>
            <div className="cs-media-label" style={{ width: '100%' }}>{isId ? 'DIMENSI (Skema Link Mekanik)' : 'DIMENSIONS (Link Schema)'}</div>
          </div>

          <div className="cs-card-container" style={{ padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{ fontSize: '11px', fontFamily: 'DM Mono', fontWeight: 700, color: '#EA580C', letterSpacing: '0.08em', marginBottom: '8px', display: 'block' }}>
              {isId ? 'TABEL DIMENSI LINK' : 'DIMENSIONS'}
            </span>
            <div className="cs-table-wrapper" style={{ margin: 0 }}>
              <table className="cs-data-table">
                <thead>
                  <tr>
                    <th>{isId ? 'SIMBOL' : 'SYMBOL'}</th>
                    <th>{isId ? 'DIMENSI (MM)' : 'DIMENSION (MM)'}</th>
                    <th>{isId ? 'KETERANGAN' : 'DESCRIPTION'}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>d₁</code></td>
                    <td><strong>189 mm</strong></td>
                    <td>{isId ? 'Jarak vertikal dari plat dasar ke poros putar Sendi 2' : 'Distance from mounting base to Joint 2 pivot axis'}</td>
                  </tr>
                  <tr>
                    <td><code>a₂</code></td>
                    <td><strong>150.00 mm</strong></td>
                    <td>{isId ? 'Panjang link lengan atas antara Sendi 2 dan Sendi 3' : 'Link length between Joint 2 and Joint 3 (Upper Arm)'}</td>
                  </tr>
                  <tr>
                    <td><code>a₃</code></td>
                    <td><strong>150.00 mm</strong></td>
                    <td>{isId ? 'Panjang link lengan bawah antara Sendi 3 dan Sendi 4' : 'Link length between Joint 3 and Joint 4 (Forearm)'}</td>
                  </tr>
                  <tr>
                    <td><code>d₅</code></td>
                    <td><strong>100.00 mm</strong></td>
                    <td>{isId ? 'Jarak offset dari sumbu Sendi 4 ke ujung penjepit Sendi 5' : 'Offset from Joint 4 axis to Joint 5 end-effector tip'}</td>
                  </tr>
                  <tr className="cs-table-highlight">
                    <td><code>L</code></td>
                    <td><strong>400.00 mm</strong></td>
                    <td><strong>{isId ? 'Total jangkauan kerja horizontal maksimum dari sumbu Sendi 2' : 'Total maximum horizontal working reach from Joint 2 axis'}</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── 04. 3D-Printed PLA Cycloidal Gearboxes ── */}
      <section className="cs-section">
        <div className="cs-section-header">
          <span className="cs-section-num">{t.section02.num}</span>
          <h2 className="cs-section-title">{t.section02.title}</h2>
        </div>

        <div className="cs-two-col" style={{ alignItems: 'stretch' }}>
          <div className="cs-info-box" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <p style={{ lineHeight: 1.6, marginBottom: '16px', fontSize: '14px' }}>
                {t.section02.intro}
              </p>
            </div>
            <div className="cs-deepdive-specs" style={{ margin: 0 }}>
              <span><strong>{isId ? 'Rasio Sendi 2:' : 'Joint 2 Ratio:'}</strong> {isId ? 'Reduksi Sikloidal 1:50' : '1:50 Cycloidal Reduction'}</span>
              <span><strong>{isId ? 'Rasio Sendi 1, 3, 4:' : 'Joint 1, 3, 4 Ratio:'}</strong> {isId ? 'Reduksi Sikloidal 1:25' : '1:25 Cycloidal Reduction'}</span>
              <span><strong>{isId ? 'Material:' : 'Material:'}</strong> {isId ? '3D-Printed PLA Infill 100%' : '3D-Printed PLA'}</span>
              <span><strong>{isId ? 'Torsi Output Teoritis:' : 'Theoretical Output Torque:'}</strong> 10.0 Nm ({isId ? 'Sendi 2' : 'Joint 2'})</span>
              <span><strong>{isId ? 'Kapasitas Angkat Maksimal:' : 'Theoretical Max Payload:'}</strong> 1.50 kg ({isId ? 'jangkauan 400 mm' : 'at 400 mm reach'})</span>
              <span><strong>{isId ? 'Efisiensi Transmisi Nyata:' : 'Actual Transmission Efficiency:'}</strong> 40.1% ({isId ? 'dari uji empiris beban' : 'empirically derived from load trials'})</span>
            </div>
          </div>

          {/* Right: 3 Cycloidal Images */}
          <div className="cs-gearbox-asymmetric-grid">
            <div 
              className="cs-gearbox-tall-left"
              onClick={() => openZoom(
                '/images/manipulator_cycloidal_exploded_hd.png', 
                isId ? 'Diagram Perakitan Exploded: Reduksi Sikloidal Cetak 3D' : 'Exploded Assembly Diagram: 3D-Printed Cycloidal Speed Reducer', 
                isId ? 'Rincian komponen exploded CAD: Housing atas, bearing atas, dual disc seimbang, ring pin luar, poros eksentrik, housing tengah, motor NEMA17, dan dudukan dasar' : 'Detailed exploded CAD breakdown: Top housing, top bearing, dual disc balancing, outer ring pins, eccentric shaft, mid housing, NEMA17 stepper, and bottom mounting'
              )}
              title={c.clickToZoom}
            >
              <img src="/images/manipulator_cycloidal_exploded_hd.png" alt="Exploded Cycloidal Gearbox Assembly" />
            </div>

            <div className="cs-gearbox-top-right">
              <img 
                src="/images/cycloidal_red_top_white_clean.png" 
                alt="Fabricated Cycloidal Gearbox" 
              />
            </div>

            <div 
              className="cs-gearbox-bottom-right"
              onClick={() => openZoom(
                '/images/manipulator_cycloidal_discs_hd.png', 
                isId ? 'Geometri Piringan Sikloidal Parametrik (Rasio 1:50 vs 1:25)' : 'Parametric Cycloidal Disc Geometry (1:50 vs 1:25 Transmission Ratios)', 
                isId ? 'Perbandingan profil gigi dan meshing pin antara piringan torsi tinggi 1:50 sendi shoulder dan piringan kompak 1:25' : 'Tooth profile and pin mesh comparison between 1:50 high-torque shoulder joint reduction disc and 1:25 compact joint reduction disc'
              )}
              title={c.clickToZoom}
            >
              <img src="/images/manipulator_cycloidal_discs_hd.png" alt="Parametric Cycloidal Disc Profiles 1:50 and 1:25" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 05. Electronics & Sensing ── */}
      <section className="cs-section">
        <div className="cs-section-header">
          <span className="cs-section-num">{t.section03.num}</span>
          <h2 className="cs-section-title">{t.section03.title}</h2>
        </div>

        <div className="cs-info-box" style={{ marginBottom: '20px' }}>
          <h4 style={{ color: '#0F172A', marginBottom: '8px' }}>{t.section03.archTitle}</h4>
          <p style={{ lineHeight: 1.6, fontSize: '14px' }}>
            {t.section03.archText}
          </p>
        </div>

        {/* Wiring Diagram + STM32 Pinout Table */}
        <div className="cs-electronics-hero">
          <div 
            className="cs-card-container cs-preview-media"
            style={{ height: 'auto', minHeight: '340px', flexDirection: 'column', padding: 0 }}
            onClick={() => openZoom(
              '/images/manipulator_wiring_interconnect_hd.png', 
              isId ? 'Diagram Interkoneksi Pengkabelan Elektrikal Hardware' : 'Hardware Electrical Wiring Interconnect Diagram', 
              isId ? 'Skematik pengkabelan lengkap: PSU 24V, driver TB6600, motor NEMA17, encoder AS5600, switch TCA9548A, dan STM32' : 'Full interconnect schematic showing 24V PSU, TB6600 drivers, NEMA17 motors, AS5600 encoders, TCA9548A switch, and STM32'
            )}
            title={c.clickToZoom}
          >
            <div style={{ flex: 1, width: '100%', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF' }}>
              <img src="/images/manipulator_wiring_interconnect_hd.png" alt="Hardware Electrical Wiring Interconnect" style={{ maxHeight: '280px' }} />
            </div>
            <div className="cs-media-label" style={{ width: '100%' }}>{isId ? 'Diagram Skematik Pengkabelan Sistem' : 'System Wiring Interconnect Diagram'}</div>
          </div>

          <div className="cs-card-container" style={{ padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{ fontSize: '11px', fontFamily: 'DM Mono', fontWeight: 700, color: '#EA580C', letterSpacing: '0.08em', marginBottom: '8px', display: 'block' }}>
              {isId ? 'ALOKASI PIN GPIO STM32F411 KONTROL STEPPER 5-SUMBU' : 'STM32F411 GPIO PIN ALLOCATION FOR 5-AXIS STEPPER CONTROL'}
            </span>
            <div className="cs-table-wrapper" style={{ margin: 0 }}>
              <table className="cs-data-table">
                <thead>
                  <tr>
                    <th>MOTOR</th>
                    <th>PULSE</th>
                    <th>DIR</th>
                    <th>EN</th>
                    <th>{isId ? 'FUNGSI' : 'PURPOSE'}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>M1 (J1)</strong></td>
                    <td><code>PA5</code></td>
                    <td><code>PB3</code></td>
                    <td><code>PA4</code></td>
                    <td>{isId ? 'Rotasi Base Yaw' : 'Base Yaw Rotation'}</td>
                  </tr>
                  <tr>
                    <td><strong>M2 (J2)</strong></td>
                    <td><code>PB0</code></td>
                    <td><code>PB1</code></td>
                    <td><code>PB2</code></td>
                    <td>{isId ? 'Elevasi Shoulder Pitch (1:50)' : 'Shoulder Pitch (1:50)'}</td>
                  </tr>
                  <tr>
                    <td><strong>M3 (J3)</strong></td>
                    <td><code>PA6</code></td>
                    <td><code>PA7</code></td>
                    <td><code>PA3</code></td>
                    <td>{isId ? 'Siku Elbow Pitch (1:25)' : 'Elbow Pitch (1:25)'}</td>
                  </tr>
                  <tr>
                    <td><strong>M4 (J4)</strong></td>
                    <td><code>PA1</code></td>
                    <td><code>PA2</code></td>
                    <td><code>PC15</code></td>
                    <td>{isId ? 'Pergelangan Wrist Pitch (1:25)' : 'Wrist Pitch (1:25)'}</td>
                  </tr>
                  <tr>
                    <td><strong>M5 (J5)</strong></td>
                    <td><code>PB10</code></td>
                    <td><code>PB6</code></td>
                    <td><code>PB5</code></td>
                    <td>{isId ? 'Penjepit Gripper End-Effector' : 'End-Effector Gripper'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Custom PCB EDA Layout */}
        <div className="cs-pcb-static-wrap">
          <img src="/images/manipulator_pcb_eda_combined.png" alt="RABA Custom Shield PCB Layout" />
          <div className="cs-pcb-static-label">
            {isId ? 'PCB SHIELD KUSTOM (RABA SHIELD)' : 'CUSTOM SHIELD PCB'}
          </div>
        </div>
      </section>

      {/* ── 06. Firmware Flowchart ── */}
      <section className="cs-section">
        <div className="cs-section-header">
          <span className="cs-section-num">{isId ? '06 / ARSITEKTUR FIRMWARE' : '06 / FIRMWARE ARCHITECTURE'}</span>
          <h2 className="cs-section-title">{isId ? 'Flowchart Algoritma Kontrol Loop Tertutup' : 'Closed-Loop Control Flowchart'}</h2>
        </div>
        <div className="cs-flowchart-centered">
          <div 
            className="cs-card-container cs-preview-media"
            style={{ flexDirection: 'column', padding: 0 }}
            onClick={() => openZoom(
              '/images/manipulator_firmware_flowchart_full_hd.png', 
              isId ? 'Alur Kontrol Firmware Closed-Loop STM32' : 'STM32 Closed-Loop Firmware Control Flow', 
              isId ? 'Mesin status: Inisialisasi peripheral → parsing koordinat IK → pemeriksaan solusi → pembangkitan pulsa step → perbandingan umpan balik encoder AS5600 dengan ambang batas konvergensi <0,2°' : 'State machine: Peripheral init → IK coordinate parsing → solvability check → step pulse generation → AS5600 encoder feedback comparison with <0.2° convergence threshold'
            )}
            title={c.clickToZoom}
          >
            <div style={{ padding: '20px', background: '#FFFFFF', display: 'flex', justifyContent: 'center' }}>
              <img src="/images/manipulator_firmware_flowchart_full_hd.png" alt="Firmware Flowchart" />
            </div>
            <div className="cs-media-label" style={{ width: '100%' }}>{isId ? 'Diagram Alur Eksekusi Firmware Closed-Loop STM32 — Klik untuk Perbesar' : 'STM32 Closed-Loop Firmware Execution State Flow — Click to Zoom'}</div>
          </div>
        </div>
      </section>

      {/* ── 07. System Validation & Test Results ── */}
      <section className="cs-section">
        <div className="cs-section-header">
          <span className="cs-section-num">{t.section05.num}</span>
          <h2 className="cs-section-title">{t.section05.title}</h2>
        </div>
        <p style={{ color: '#64748B', fontSize: '13.5px', lineHeight: 1.7, marginBottom: '28px' }}>
          {t.section05.intro}
        </p>

        {/* ─── BLOCK A: Joint Angular Accuracy ─── */}
        <div className="cs-validation-block">
          <div className="cs-validation-label">{isId ? 'A — Akurasi Sudut Sendi: Open-Loop vs Closed-Loop' : 'A — Joint Angular Accuracy: Open-Loop vs Closed-Loop'}</div>
          <p className="cs-validation-desc">
            {isId ? '280 titik pengukuran pada J1–J4, 7 target sudut × 5 pengulangan × 2 kondisi (Open-Loop dan Closed-Loop). Membuktikan efektivitas umpan balik encoder AS5600 dalam mengompensasi kehilangan langkah motor stepper.' : '280 measurements across J1–J4, 7 target angles × 5 repetitions × 2 conditions (Open-Loop and Closed-Loop). Quantifies AS5600 encoder feedback effectiveness in correcting stepper motor step-loss.'}
          </p>

          <div className="cs-table-wrapper">
            <table className="cs-data-table">
              <thead>
                <tr>
                  <th>{isId ? 'SENDI (JOINT)' : 'JOINT'}</th>
                  <th>{isId ? 'OPEN-LOOP MAE (°)' : 'OPEN-LOOP MAE (°)'}</th>
                  <th>{isId ? 'CLOSED-LOOP MAE (°)' : 'CLOSED-LOOP MAE (°)'}</th>
                  <th>{isId ? 'PENINGKATAN' : 'IMPROVEMENT'}</th>
                  <th>{isId ? 'RASIO GEARBOX' : 'GEARBOX RATIO'}</th>
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
                  <td><strong>{isId ? 'RATA-RATA KESELURUHAN' : 'OVERALL AVERAGE'}</strong></td>
                  <td><strong>0.51°</strong></td>
                  <td><strong>0.10°</strong></td>
                  <td><strong>79.8%</strong></td>
                  <td><strong>{isId ? 'Closed-Loop Terkonfirmasi' : 'Closed-Loop Confirmed'}</strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div
            className="cs-card-container cs-preview-media cs-validation-chart"
            onClick={() => openZoom(
              '/images/ta_accuracy_chart.png', 
              isId ? 'Akurasi Sudut Sendi — Open-Loop vs Closed-Loop' : 'Joint Angular Accuracy — Open-Loop vs Closed-Loop', 
              isId ? 'Perbandingan error absolut rata-rata per sendi (J1–J4). Koreksi closed-loop memangkas MAE keseluruhan dari 0,51° menjadi 0,10°, peningkatan sebesar 79,8%.' : 'Average absolute error comparison per joint (J1–J4). Closed-loop correction reduces overall MAE from 0.51° to 0.10°, a 79.8% improvement.'
            )}
            title={c.clickToZoom}
          >
            <div style={{ width: '100%', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF' }}>
              <img src="/images/ta_accuracy_chart.png" alt="Joint Accuracy Open-Loop vs Closed-Loop Bar Chart" style={{ maxHeight: '300px', objectFit: 'contain' }} />
            </div>
            <div className="cs-media-label" style={{ width: '100%' }}>{isId ? 'Gbr A — Rata-Rata Error Absolut per Sendi: Open-Loop vs Closed-Loop (derajat)' : 'Fig A — Average Absolute Error per Joint: Open-Loop vs Closed-Loop (degrees)'}</div>
          </div>
        </div>

        {/* ─── DIVIDER ─── */}
        <div className="cs-validation-divider" />

        {/* ─── BLOCK B: Payload Capacity ─── */}
        <div className="cs-validation-block">
          <div className="cs-validation-label">{isId ? 'B — Kapasitas Beban (Payload) & Batas Ketahanan Struktural' : 'B — Payload Capacity & Structural Failure Threshold'}</div>
          <p className="cs-validation-desc">
            {isId ? '175 titik uji pada J2 (sendi penahan beban utama), 5 varian beban (250–1.250 g) × 7 sudut sapuan × 5 pengulangan dengan koreksi Closed-Loop aktif. Menetapkan batas beban operasi yang aman.' : '175 measurements on J2 (primary load-bearing joint), 5 load variants (250–1,250 g) × 7 sweep angles × 5 repetitions, with Closed-Loop correction active. Establishes safe operational payload boundary.'}
          </p>

          <div className="cs-table-wrapper">
            <table className="cs-data-table">
              <thead>
                <tr>
                  <th>{isId ? 'BEBAN (PAYLOAD)' : 'PAYLOAD'}</th>
                  <th>{isId ? 'RATA-RATA ERROR (°)' : 'AVG POSITION ERROR (°)'}</th>
                  <th>{isId ? 'ERROR MAKSIMUM (°)' : 'MAX ERROR (°)'}</th>
                  <th>{isId ? 'KONDISI OPERASI' : 'OPERATIONAL CONDITION'}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>250 g</strong></td>
                  <td>0.09°</td>
                  <td>0.20°</td>
                  <td>{isId ? 'Stabil & Konsisten' : 'Stable & Consistent'}</td>
                </tr>
                <tr>
                  <td><strong>500 g</strong></td>
                  <td>0.08°</td>
                  <td>0.20°</td>
                  <td>{isId ? 'Stabil & Konsisten' : 'Stable & Consistent'}</td>
                </tr>
                <tr>
                  <td><strong>750 g</strong></td>
                  <td>0.07°</td>
                  <td>0.30°</td>
                  <td>{isId ? 'Stabil & Konsisten' : 'Stable & Consistent'}</td>
                </tr>
                <tr>
                  <td><strong>1,000 g</strong></td>
                  <td>0.07°</td>
                  <td>0.30°</td>
                  <td>{isId ? 'Batas Beban Aman Operasi' : 'Maximum Safe Operating Load'}</td>
                </tr>
                <tr className="cs-table-highlight">
                  <td><strong>1,250 g</strong></td>
                  <td colSpan={3}><strong>{isId ? 'Defleksi struktural material PLA — Batas beban mekanis terlampaui' : 'Structural deflection of PLA material — Mechanical load limit exceeded'}</strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div
            className="cs-card-container cs-preview-media cs-validation-chart"
            onClick={() => openZoom(
              '/images/ta_payload_chart.png', 
              isId ? 'Kapasitas Beban — Kurva Error & Batas Kegagalan' : 'Payload Capacity — Error Curve & Failure Threshold', 
              isId ? 'Error posisi rata-rata dan maksimum Sendi 2 pada varian beban 250–1.000 g dengan batas deformasi mekanis pada 1.250 g.' : 'Joint 2 average and maximum position error across payload variants 250–1,000 g with mechanical failure at 1,250 g.'
            )}
            title={c.clickToZoom}
          >
            <div style={{ width: '100%', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF' }}>
              <img src="/images/ta_payload_chart.png" alt="Payload Error Curve and Failure Boundary Chart" style={{ maxHeight: '300px', objectFit: 'contain' }} />
            </div>
            <div className="cs-media-label" style={{ width: '100%' }}>{isId ? 'Gbr B — Error Posisi J2 vs Bobot Beban dengan Batas Deformasi Mekanis pada 1.250 g' : 'Fig B — J2 Position Error vs Payload Weight with Mechanical Failure Boundary at 1,250 g'}</div>
          </div>
        </div>

        {/* ─── DIVIDER ─── */}
        <div className="cs-validation-divider" />

        {/* ─── BLOCK C: Cartesian IK Positioning ─── */}
        <div className="cs-validation-block">
          <div className="cs-validation-label">{isId ? 'C — Posisi Kartesian End-Effector melalui Inverse Kinematics Geometris' : 'C — Cartesian End-Effector Positioning via Geometric Inverse Kinematics'}</div>
          <p className="cs-validation-desc">
            {isId ? '5 titik target koordinat ruang kerja (P1–P5), 5 kali pengulangan tiap titik. IK geometris dihitung langsung pada STM32F411 secara real-time; posisi end-effector diukur fisik terhadap datum kisi penggaris kalibrasi.' : '5 target Cartesian workspace points (P1–P5), 5 repetitions each. Geometric IK solved on STM32F411 in real-time; end-effector position measured physically with a ruler grid datum. Validates full-system integration: IK algorithm → joint control → mechanical execution.'}
          </p>

          <div className="cs-table-wrapper">
            <table className="cs-data-table">
              <thead>
                <tr>
                  <th>{isId ? 'TITIK' : 'POINT'}</th>
                  <th>{isId ? 'TARGET (X, Y, Z) mm' : 'TARGET (X, Y, Z) mm'}</th>
                  <th>{isId ? 'TERUKUR (X, Y, Z) mm' : 'ACTUAL (X, Y, Z) mm'}</th>
                  <th>{isId ? 'RATA-RATA ERROR (mm)' : 'AVG ERROR (mm)'}</th>
                  <th>{isId ? 'ERROR (%)' : 'ERROR (%)'}</th>
                  <th>{isId ? 'ERROR MAKS (mm)' : 'MAX ERROR (mm)'}</th>
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
                  <td><strong>{isId ? 'KESELURUHAN' : 'OVERALL'}</strong></td>
                  <td colSpan={2}><strong>{isId ? 'Sapuan 5 titik ruang kerja multi-sumbu' : '5-point multi-axis workspace sweep'}</strong></td>
                  <td><strong>6.65 mm</strong></td>
                  <td><strong>2.03%</strong></td>
                  <td><strong>9.43 mm</strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div
            className="cs-card-container cs-preview-media cs-validation-chart"
            onClick={() => openZoom(
              '/images/ta_kinematics_page_chart.png', 
              isId ? 'Error Posisi End-Effector IK — Titik P1 hingga P5' : 'IK End-Effector Positioning Error — P1 to P5', 
              isId ? 'Rata-rata dan maksimum error posisi kartesian (mm) pada 5 target koordinat ruang kerja. Rata-rata error keseluruhan 2,03% berbanding batas kriteria <5%.' : 'Average and maximum Cartesian position error (mm) across 5 target workspace coordinates. Overall 2.03% error rate vs < 5% design criterion.'
            )}
            title={c.clickToZoom}
          >
            <div style={{ width: '100%', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF' }}>
              <img src="/images/ta_kinematics_page_chart.png" alt="IK Positioning Error Distribution Chart" style={{ maxHeight: '300px', objectFit: 'contain' }} />
            </div>
            <div className="cs-media-label" style={{ width: '100%' }}>{isId ? 'Gbr C — Distribusi Error End-Effector Kartesian di 5 Titik Target Ruang Kerja (mm)' : 'Fig C — Cartesian End-Effector Error Distribution Across 5 Workspace Target Points (mm)'}</div>
          </div>
        </div>
      </section>

      {/* ── 08. Conclusions & Takeaways ── */}
      <section className="cs-section">
        <div className="cs-section-header">
          <span className="cs-section-num">{t.section06.num}</span>
          <h2 className="cs-section-title">{t.section06.title}</h2>
        </div>
        <div className="cs-takeaways-grid">
          <div className="cs-takeaway-card">
            <h4>{t.section06.col1Title}</h4>
            <p style={{ whiteSpace: 'pre-line' }}>
              {t.section06.col1Text}
            </p>
          </div>
          <div className="cs-takeaway-card cs-card-future">
            <h4>{t.section06.col2Title}</h4>
            <p style={{ whiteSpace: 'pre-line' }}>
              {t.section06.col2Text}
            </p>
          </div>
        </div>
      </section>

      {/* ── Bottom Navigation ── */}
      <div className="cs-bottom-nav">
        <a href="/#projects" className="cs-nav-btn secondary">
          <ArrowLeft size={16} /> {c.backToProjects}
        </a>
        <a href="/projects/solar-cooling" className="cs-nav-btn">
          {t.bottomNav.next} <ArrowRight size={16} />
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
