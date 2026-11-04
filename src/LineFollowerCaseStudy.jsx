import React, { useState } from 'react';
import { 
  ArrowLeft, ArrowRight, Award, Activity, Wrench, Layers, 
  Cpu, ZoomIn, Eye, Sliders, BatteryCharging, Gauge, CheckCircle2
} from 'lucide-react';
import ImageLightboxModal from './ImageLightboxModal';
import { useLang } from './translations';
import { caseStudiesTranslations } from './caseStudiesTranslations';

export default function LineFollowerCaseStudy() {
  const { lang } = useLang();
  const t = caseStudiesTranslations[lang]?.lineFollower || caseStudiesTranslations.en.lineFollower;
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

        <div style={{ display: 'flex', gap: '36px', flexWrap: 'wrap', margin: '14px 0 24px', fontSize: '13px', color: '#475569' }}>
          <div>
            <strong style={{ display: 'block', color: '#0F172A', fontSize: '14px' }}>{t.authorName}</strong>
            <span>{t.authorRole}</span>
          </div>
          <div>
            <strong style={{ display: 'block', color: '#0F172A', fontSize: '14px' }}>{t.scopeName}</strong>
            <span>{t.scopeRole}</span>
          </div>
          <div>
            <strong style={{ display: 'block', color: '#0F172A', fontSize: '14px' }}>{t.controlName}</strong>
            <span>{t.controlRole}</span>
          </div>
        </div>

        {/* 50 / 50 Hero Split */}
        <div className="cs-hero-split-50" style={{ alignItems: 'flex-start' }}>
          <div className="cs-hero-split-left">
            <p className="cs-hero-desc-text" style={{ marginBottom: '16px' }}>
              {t.heroDesc}
            </p>

            <div className="cs-metrics-grid-2x2">
              {t.metrics.map((m, idx) => (
                <div key={idx} className="cs-metric-card-fit">
                  <span className="cs-metric-num-fit">{m.num}</span>
                  <span className="cs-metric-desc-fit">{m.desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="cs-hero-split-right" style={{ alignSelf: 'center' }}>
            <img 
              src="/images/line_follower_real.png" 
              alt="Autonomous Line Follower Robot Hand-Built Prototype"
              className="cs-hero-clean-photo"
              onClick={() => openZoom(
                '/images/line_follower_real.png', 
                isId ? 'Prototipe Fisik Robot Line Follower Otonom' : 'Autonomous Line Follower Robot Hardware Prototype', 
                isId ? 'Tampak atas menampilkan bar sensor lengkung 8 channel fotodioda, modul Arduino Nano, layar OLED I2C, tombol taktil, baterai 18650, dan motor gear N20' : 'Top view showing curved 8-channel photodiode sensor bar, Arduino Nano core, I2C OLED display, tactile pushbuttons, dual 18650 battery pack, and N20 gear motors'
              )}
              title={c.clickToZoom}
            />
          </div>
        </div>
      </header>

      {/* ── 01. Problem Statement & Architecture ── */}
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

      {/* ── 02. Hardware Architecture & Sensing Subsystem ── */}
      <section className="cs-section">
        <div className="cs-section-header">
          <span className="cs-section-num">{t.section02.num}</span>
          <h2 className="cs-section-title">{t.section02.title}</h2>
        </div>

        <div className="cs-two-col" style={{ alignItems: 'stretch' }}>
          <div className="cs-info-box" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h4 style={{ color: '#0F172A', marginBottom: '10px' }}><Eye size={18} color="#F05A22" /> {t.section02.card1Title}</h4>
              <p style={{ lineHeight: 1.65, fontSize: '13.5px', color: '#334155' }}>
                {t.section02.card1Text}
              </p>
              <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '10px 14px', borderRadius: '4px', fontFamily: 'DM Mono', fontSize: '11px', color: '#0F172A', margin: '10px 0' }}>
                Position Error (e) = Σ (Sensor[i] × Weight[i]) / Σ Sensor[i]
              </div>
              <p style={{ lineHeight: 1.65, fontSize: '13px', color: '#64748B' }}>
                {isId ? 'Bobot sensor diindeks simetris dari kiri (−) ke kanan (+) dengan nilai tengah 0.' : 'Sensor weights are symmetrically indexed from left (−) to right (+) with center set to 0.'}
              </p>
            </div>
          </div>

          <div className="cs-info-box" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h4 style={{ color: '#0F172A', marginBottom: '10px' }}><Cpu size={18} color="#F05A22" /> {t.section02.card2Title}</h4>
              <p style={{ lineHeight: 1.65, fontSize: '13.5px', color: '#334155' }}>
                {t.section02.card2Text}
              </p>
              <p style={{ lineHeight: 1.65, fontSize: '13.5px', color: '#334155', marginTop: '10px' }}>
                {isId ? 'Motor dipasang di dalam braket cetak 3D yang memberikan kesejajaran kaku untuk velg karet silikon berdaya cengkeram tinggi pada permukaan uji lintasan.' : 'The motors are housed inside custom 3D-printed mounting brackets that provide rigid alignment for high-traction silicone-rubber wheel rims, ensuring rigid motor mounting and stable surface grip on test track surfaces.'}
              </p>
            </div>
          </div>
        </div>

        {/* Pinout & Interconnect Table */}
        <div className="cs-table-card" style={{ marginTop: '24px' }}>
          <table className="cs-data-table">
            <thead>
              <tr>
                <th>{isId ? 'SUBSISTEM' : 'SUB-SYSTEM'}</th>
                <th>{isId ? 'KOMPONEN' : 'COMPONENT'}</th>
                <th>{isId ? 'ANTARMUKA / PIN' : 'INTERFACE / PINS'}</th>
                <th>{isId ? 'FUNGSI REKAYASA' : 'ENGINEERING FUNCTION'}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>{isId ? 'Inti Pemroses' : 'Processing Core'}</strong></td>
                <td>Arduino Nano (ATmega328P)</td>
                <td>16 MHz, 32 KB Flash, 5V Logic</td>
                <td>{isId ? 'Sampling ADC sensor, kalkulasi PID, pembangkitan PWM' : 'ADC sensor sampling, PID error processing, PWM generation'}</td>
              </tr>
              <tr>
                <td><strong>{isId ? 'Bar Sensor' : 'Sensor Bar'}</strong></td>
                <td>8× {isId ? 'Pasangan Fotodioda + LED' : 'Photodiode + LED pairs'}</td>
                <td>Analog Pins A0 – A7</td>
                <td>{isId ? 'Pembacaan reflektansi real-time dengan kalkulasi bobot posisi' : 'Real-time reflectance acquisition with weighted position output'}</td>
              </tr>
              <tr>
                <td><strong>{isId ? 'Driver Motor' : 'Motor Driver'}</strong></td>
                <td>Toshiba TB6612FNG</td>
                <td>D5, D6 (PWM), D7, D8, D9, D10 (DIR)</td>
                <td>{isId ? 'Driver motor diferensial dua arah MOSFET kanal ganda' : 'Dual-channel MOSFET bidirectional differential motor drive'}</td>
              </tr>
              <tr>
                <td><strong>{isId ? 'Layar Telemetri' : 'HMI Display'}</strong></td>
                <td>0.96" OLED 128×64</td>
                <td>I2C Bus (A4/SDA, A5/SCL)</td>
                <td>{isId ? 'Menampilkan nilai ambang batas real-time dan navigasi menu' : 'On-chassis live threshold display and menu navigation'}</td>
              </tr>
              <tr>
                <td><strong>{isId ? 'Kendali Operator' : 'Operator Controls'}</strong></td>
                <td>2× Tactile Pushbuttons</td>
                <td>Digital Inputs D2, D3 (Internal Pullup)</td>
                <td>{isId ? 'Pemicu Start/Stop & pemilihan urutan kalibrasi sensor' : 'Start/Stop trigger & sensor calibration sequence selection'}</td>
              </tr>
              <tr>
                <td><strong>{isId ? 'Catu Daya' : 'Power Supply'}</strong></td>
                <td>2S 18650 Li-ion Cells (7.4V)</td>
                <td>Regulated step-down to 5V MCU</td>
                <td>{isId ? 'Densitas energi debit tinggi untuk torsi motor konsisten' : 'High-discharge energy density for consistent motor torque'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── 03. Control Algorithm & PID Firmware ── */}
      <section className="cs-section">
        <div className="cs-section-header">
          <span className="cs-section-num">{t.section03.num}</span>
          <h2 className="cs-section-title">{t.section03.title}</h2>
        </div>

        <div className="cs-two-col" style={{ alignItems: 'stretch' }}>
          <div className="cs-info-box">
            <h4><Sliders size={18} color="#F05A22" /> {isId ? 'Penalaan Kontroler PID' : 'PID Controller Tuning'}</h4>
            <p style={{ lineHeight: 1.65, fontSize: '13.5px', color: '#334155' }}>
              {isId ? 'Robot menjalankan loop umpan balik PID diskrit berkala (diperbarui setiap ~5–10 ms):' : 'The robot executes a periodic discrete PID feedback loop (updating every ~5–10 ms):'}
            </p>
            <div className="cs-table-wrapper" style={{ margin: '12px 0' }}>
              <table className="cs-data-table">
                <thead>
                  <tr>
                    {t.section03.tableHeader.map((head, idx) => (
                      <th key={idx}>{head}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {t.section03.tableRows.map((row, idx) => (
                    <tr key={idx}>
                      <td><strong>{row[0]}</strong></td>
                      <td><code>{row[1]}</code></td>
                      <td>{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '12px', borderRadius: '4px', fontFamily: 'DM Mono', fontSize: '11px', color: '#EA580C', marginTop: '14px' }}>
              PWM_Left  = BaseSpeed + (Kp·e + Ki·∫e dt + Kd·Δe/Δt)<br />
              PWM_Right = BaseSpeed − (Kp·e + Ki·∫e dt + Kd·Δe/Δt)
            </div>
          </div>

          <div className="cs-info-box">
            <h4><CheckCircle2 size={18} color="#F05A22" /> {isId ? 'Rutinitas Kalibrasi Otomatis' : 'Autonomous Calibration Routine'}</h4>
            <p style={{ lineHeight: 1.65, fontSize: '13.5px', color: '#334155' }}>
              {isId ? 'Untuk memastikan keandalan pada berbagai tekstur lintasan, prosedur kalibrasi otomatis diprogram di firmware:' : 'To ensure reliability across diverse track floor textures, an automated calibration routine is programmed into the Arduino firmware:'}
            </p>
            <p style={{ lineHeight: 1.65, fontSize: '13.5px', color: '#334155', marginTop: '8px' }}>
              {isId ? (
                <>
                  1. Menekan tombol push-button membuat robot berputar perlahan melintasi garis selama 3 detik.<br />
                  2. Nilai pantulan minimum (permukaan putih) dan maksimum (garis hitam) disimpan untuk ke-8 sensor.<br />
                  3. Ambang batas komparator dinamis dihitung dan disimpan di memori runtime.<br />
                  4. Status kalibrasi dan level tegangan baterai ditampilkan di layar OLED sebelum robot mulai meluncur mandiri.
                </>
              ) : (
                <>
                  1. Upon pressing the blue pushbutton, the robot gently pivots across the line for 3 seconds.<br />
                  2. Minimum (white surface) and maximum (black line) reflectance values are logged for each of the 8 individual sensor channels.<br />
                  3. Dynamic threshold offsets are computed and saved in runtime memory.<br />
                  4. Successful calibration state and battery cell voltages are verified on the OLED display before commencing autonomous navigation.
                </>
              )}
            </p>
          </div>
        </div>
      </section>

      {/* ── 04. Key Engineering Takeaways ── */}
      <section className="cs-section">
        <div className="cs-section-header">
          <span className="cs-section-num">{t.section04.num}</span>
          <h2 className="cs-section-title">{t.section04.title}</h2>
        </div>
        <div className="cs-takeaways-grid">
          <div className="cs-takeaway-card">
            <h4>{t.section04.col1Title}</h4>
            <p style={{ whiteSpace: 'pre-line' }}>
              {t.section04.col1Text}
            </p>
          </div>
          <div className="cs-takeaway-card cs-card-future">
            <h4>{t.section04.col2Title}</h4>
            <p style={{ whiteSpace: 'pre-line' }}>
              {t.section04.col2Text}
            </p>
          </div>
        </div>
      </section>

      {/* ── Bottom Navigation ── */}
      <div className="cs-bottom-nav">
        <a href="/projects/krai-2025" className="cs-nav-btn secondary">
          <ArrowLeft size={16} /> {t.bottomNav.prev}
        </a>
        <a href="/projects/sumo-robot" className="cs-nav-btn">
          {t.bottomNav.next} <ArrowRight size={16} />
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
