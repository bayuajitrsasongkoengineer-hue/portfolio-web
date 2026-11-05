import React, { useState } from 'react';
import { 
  ArrowLeft, ArrowRight, Award, Activity, Wrench, Layers, 
  Cpu, ZoomIn, Eye, Bluetooth, ShieldAlert, Zap, Radio
} from 'lucide-react';
import ImageLightboxModal from './ImageLightboxModal';
import { useLang } from './translations';
import { caseStudiesTranslations } from './caseStudiesTranslations';

export default function SumoRobotCaseStudy() {
  const { lang } = useLang();
  const t = caseStudiesTranslations[lang]?.sumoRobot || caseStudiesTranslations.en.sumoRobot;
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
            <strong style={{ display: 'block', color: '#0F172A', fontSize: '14px' }}>{t.drivetrainName}</strong>
            <span>{t.drivetrainRole}</span>
          </div>
        </div>

        {/* 50 / 50 Hero Split */}
        <div className="cs-hero-split-50" style={{ alignItems: 'flex-start' }}>
          <div className="cs-hero-split-left">
            <p className="cs-hero-desc-text" style={{ marginBottom: '16px' }}>
              {t.heroDesc}
            </p>

            <div className="cs-highlights-card">
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '0 0 10px', fontSize: '13px', color: '#0F172A', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                <Zap size={15} color="#EA580C" /> {t.highlightsTitle}
              </h4>
              <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13px', color: '#334155', lineHeight: '1.6' }}>
                {t.highlights.map((h, idx) => (
                  <li key={idx}>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="cs-hero-split-right" style={{ alignSelf: 'center', width: '100%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <div 
              className="cs-media-card" 
              style={{ width: '100%', maxWidth: '440px', marginLeft: 'auto', height: 'auto', minHeight: '340px', flexDirection: 'column', padding: 0 }}
              onClick={() => openZoom(
                '/images/sumo_iso.png', 
                isId ? 'Desain CAD Isometrik Robot Sumo' : 'Sumo Robot CAD Isometric View', 
                isId ? 'Render isometrik robot tempur 20x20 cm 1 kg menampilkan sasis profil rendah, kisi pendingin, dan bilah baji serok depan' : 'Isometric render of the 20x20 cm 1 kg combat robot showing low-profile chassis, cooling vents, and front scooper'
              )}
              title={c.clickToZoom}
            >
              <div style={{ flex: 1, width: '100%', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF' }}>
                <img src="/images/sumo_iso.png" alt="Sumo Robot Isometric CAD Render" style={{ maxHeight: '280px', objectFit: 'contain' }} />
              </div>
              <div className="cs-media-label" style={{ width: '100%' }}>{isId ? 'Desain CAD Isometrik — Baji Depan & Enclosure Ventilasi Slotted (Klik untuk zoom)' : 'Isometric CAD Design — Front Wedge & Slotted Vented Enclosure (Click to zoom)'}</div>
            </div>
          </div>
        </div>
      </header>

      {/* ── Section 01: Engineering Challenge & Competition Constraints ── */}
      <section className="cs-section">
        <div className="cs-section-header">
          <span className="cs-section-num">{t.section01.num}</span>
          <h2>{t.section01.title}</h2>
        </div>
        <p>
          {t.section01.intro}
        </p>

        <div className="cs-table-wrapper" style={{ margin: '16px 0 24px' }}>
          <table className="cs-table">
            <thead>
              <tr>
                {t.section01.tableHeader.map((head, idx) => (
                  <th key={idx}>{head}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {t.section01.tableRows.map((row, idx) => (
                <tr key={idx}>
                  <td><strong>{row[0]}</strong></td>
                  <td>{row[1]}</td>
                  <td><strong>{row[2]}</strong></td>
                  <td>{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Section 02: CAD Design, Mechanical Architecture & Underside Drivetrain ── */}
      <section className="cs-section">
        <div className="cs-section-header">
          <span className="cs-section-num">{t.section02.num}</span>
          <h2>{t.section02.title}</h2>
        </div>
        <p>
          {t.section02.intro}
        </p>

        {/* 2-column CAD Media Grid */}
        <div className="cs-media-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', margin: '20px 0' }}>
          <div 
            className="cs-media-card" 
            style={{ height: 'auto', minHeight: '300px', flexDirection: 'column', padding: 0 }}
            onClick={() => openZoom(
              '/images/sumo_bottom.png', 
              isId ? 'Tampak Bawah Sasis Robot Sumo' : 'Sumo Robot Underside View', 
              isId ? 'Tampilan CAD sisi bawah menampakkan 4x motor planetary PG24, braket penahan tengah, dan roda karet beralur traksi tinggi' : 'Underside CAD view revealing 4x PG24 planetary motors, central mounting brackets, and wide ribbed traction wheels'
            )}
            title={c.clickToZoom}
          >
            <div style={{ flex: 1, width: '100%', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF' }}>
              <img src="/images/sumo_bottom.png" alt="Underside View Showing 4 PG24 Motors and Wheels" style={{ maxHeight: '240px', objectFit: 'contain' }} />
            </div>
            <div className="cs-media-label" style={{ width: '100%' }}>{isId ? 'Tampak Bawah: 4× Motor Planetary PG24 & Poros Penggerak Traksi Tinggi' : 'Underside View: 4× PG24 Planetary Motors & High-Traction Drive Axles'}</div>
          </div>

          <div 
            className="cs-media-card" 
            style={{ height: 'auto', minHeight: '300px', flexDirection: 'column', padding: 0 }}
            onClick={() => openZoom(
              '/images/sumo_side.png', 
              isId ? 'Profil Samping & Geometri Baji Robot Sumo' : 'Sumo Robot Side Profile & Wedge Geometry', 
              isId ? 'Profil samping memperlihatkan sudut kemiringan baji tajam untuk mengangkat lawan dan lubang ventilasi samping' : 'Side profile demonstrating the aggressive front wedge angle for lifting opposing robots and side ventilation slots'
            )}
            title={c.clickToZoom}
          >
            <div style={{ flex: 1, width: '100%', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF' }}>
              <img src="/images/sumo_side.png" alt="Side Profile Showing Wedge Angle" style={{ maxHeight: '240px', objectFit: 'contain' }} />
            </div>
            <div className="cs-media-label" style={{ width: '100%' }}>{isId ? 'Profil Samping: Sudut Baji Agresif (<25°) untuk Daya Ungkit Serok Bawah' : 'Side Profile: Aggressive Front Wedge Angle (<25°) for Under-Scoop Leverage'}</div>
          </div>
        </div>

        <div className="cs-analysis-2col" style={{ marginTop: '16px' }}>
          <div>
            <h4 style={{ fontSize: '14px', color: '#0F172A', marginBottom: '8px' }}>{t.section02.card1Title}</h4>
            <p style={{ fontSize: '13px', color: '#475569', lineHeight: '1.6' }}>
              {t.section02.card1Text}
            </p>
          </div>
          <div>
            <h4 style={{ fontSize: '14px', color: '#0F172A', marginBottom: '8px' }}>{t.section02.card2Title}</h4>
            <p style={{ fontSize: '13px', color: '#475569', lineHeight: '1.6' }}>
              {t.section02.card2Text}
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 03: Electrical & Embedded Control Architecture ── */}
      <section className="cs-section">
        <div className="cs-section-header">
          <span className="cs-section-num">{t.section03.num}</span>
          <h2>{t.section03.title}</h2>
        </div>
        <p>
          {t.section03.intro}
        </p>

        {/* 3 Blocks Architecture Grid */}
        <div className="cs-blocks-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', margin: '20px 0' }}>
          <div className="cs-block-card">
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0F172A', fontSize: '14px', marginBottom: '10px' }}>
              <Cpu size={16} color="#F05A22" /> {isId ? 'Mikrokontroler (Arduino Uno)' : 'Microcontroller (Arduino Uno)'}
            </h4>
            <p style={{ fontSize: '13px', color: '#475569', lineHeight: '1.6', margin: 0 }}>
              {isId ? 'Inti ATmega328P mem-parsing paket UART real-time dari modul HC-05, menerjemahkan vektor arah joystick menjadi sinyal PWM diferensial (0–255) untuk bank motor kiri dan kanan.' : 'The ATmega328P core handles real-time UART packet parsing from the HC-05 module, translating directional vectors into dual differential PWM duty cycles (0–255) to drive the left and right motor banks.'}
            </p>
          </div>

          <div className="cs-block-card">
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0F172A', fontSize: '14px', marginBottom: '10px' }}>
              <Radio size={16} color="#F05A22" /> {isId ? 'Telemetri Nirkabel (HC-05)' : 'Wireless Telemetry (HC-05)'}
            </h4>
            <p style={{ fontSize: '13px', color: '#475569', lineHeight: '1.6', margin: 0 }}>
              {isId ? 'Bekerja pada baudrate 9600/38400 via RF 2,4 GHz (profil Bluetooth SPP). Berkomunikasi dengan pengendali smartphone Android dengan latensi transmisi sangat rendah (~15–25 ms) untuk kemudi yang responsif.' : 'Operating at 9600/38400 baud over 2.4 GHz RF (Bluetooth SPP profile). Communicates with an Android smartphone controller with low command transmission latency (~15–25 ms) for responsive steering.'}
            </p>
          </div>

          <div className="cs-block-card">
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0F172A', fontSize: '14px', marginBottom: '10px' }}>
              <Zap size={16} color="#F05A22" /> {isId ? 'Distribusi Daya (LiPo 3S & L298N)' : 'Power Delivery (3S LiPo & L298N)'}
            </h4>
            <p style={{ fontSize: '13px', color: '#475569', lineHeight: '1.6', margin: 0 }}>
              {isId ? 'Baterai LiPo 3S menyalurkan tegangan motor langsung hingga 12,6V melalui kabel tembaga berpenampang tebal, menggerakkan dua modul H-bridge L298N dengan heatsink untuk mendisipasi panas saat kondisi motor stall.' : '3S LiPo battery delivers up to 12.6V direct motor rail voltage through heavy-gauge copper wiring, driving dual L298N H-bridge channels with heat sinks to dissipate heat under motor stall conditions.'}
            </p>
          </div>
        </div>

        {/* Technical Data Table */}
        <div className="cs-table-wrapper" style={{ marginTop: '20px' }}>
          <table className="cs-table">
            <thead>
              <tr>
                <th>{isId ? 'Komponen Subsistem' : 'Subsystem Component'}</th>
                <th>{isId ? 'Pilihan Hardware' : 'Hardware Selection'}</th>
                <th>{isId ? 'Tegangan Operasi / Spesifikasi' : 'Operational Voltage / Specs'}</th>
                <th>{isId ? 'Fungsi dalam Pertandingan' : 'Function in Combat Cycle'}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>{isId ? 'Kontroler Utama' : 'Main Controller'}</strong></td>
                <td>Arduino Uno (ATmega328P @ 16 MHz)</td>
                <td>{isId ? '5V teregulasi via buck converter onboard' : '5V regulated via onboard buck converter'}</td>
                <td>{isId ? 'Mem-parsing perintah joystick remote & menghasilkan sinyal PWM 490 Hz.' : 'Parses remote joystick commands & generates 490 Hz PWM signals.'}</td>
              </tr>
              <tr>
                <td><strong>{isId ? 'Transceiver RF' : 'RF Transceiver'}</strong></td>
                <td>HC-05 Bluetooth 2.0+EDR</td>
                <td>{isId ? 'Logika 3,3V (pembagi tegangan pada pin RX)' : '3.3V logic (voltage divider on RX)'}</td>
                <td>{isId ? 'Menerima instruksi navigasi nirkabel dari smartphone yang terhubung.' : 'Receives wireless navigation commands from paired smartphone.'}</td>
              </tr>
              <tr>
                <td><strong>{isId ? 'Unit Aktuator' : 'Actuation Units'}</strong></td>
                <td>4× {isId ? 'Motor Gearbox Planetary PG24' : 'PG24 Planetary Gearmotors'}</td>
                <td>12V DC nominal</td>
                <td>{isId ? 'Menghasilkan torsi dorong statis tinggi untuk menahan gaya dorong musuh.' : 'Provides high static torque to resist reverse push-out forces.'}</td>
              </tr>
              <tr>
                <td><strong>{isId ? 'Driver Motor' : 'Motor Driver'}</strong></td>
                <td>{isId ? 'Modul Dual H-Bridge L298N' : 'L298N Dual H-Bridge Module'}</td>
                <td>{isId ? 'Hingga 2A kontinu per channel, maks 46V' : 'Up to 2A continuous per channel, 46V max'}</td>
                <td>{isId ? 'Kendali kecepatan & arah putar motor diferensial dua arah.' : 'Bi-directional dual-bank motor speed & directional control.'}</td>
              </tr>
              <tr>
                <td><strong>{isId ? 'Paket Baterai' : 'Power Pack'}</strong></td>
                <td>LiPo 3-Sel (Lithium Polymer)</td>
                <td>11.1V nominal (12.6V penuh), debit 25C+</td>
                <td>{isId ? 'Arus debit kejut instan besar mencegah penurunan tegangan MCU saat motor stall.' : 'High burst current capability to prevent MCU brownouts under motor stall.'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Section 04: Retrospective & Future Iterations ── */}
      <section className="cs-section">
        <div className="cs-section-header">
          <span className="cs-section-num">{t.section04.num}</span>
          <h2>{t.section04.title}</h2>
        </div>

        <div className="cs-takeaways-grid" style={{ marginTop: '16px' }}>
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
        <a href="/projects/line-follower" className="cs-nav-btn secondary">
          <ArrowLeft size={16} /> {t.bottomNav.prev}
        </a>
        <a href="/#projects" className="cs-nav-btn">
          {t.bottomNav.backHome} <ArrowRight size={16} />
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
