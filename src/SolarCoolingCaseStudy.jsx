import React, { useState } from 'react';
import { 
  ArrowLeft, ArrowRight, Award, Activity, Wrench, Layers, 
  Cpu, ZoomIn, ShieldCheck, BatteryCharging, Droplets, Sun
} from 'lucide-react';
import ImageLightboxModal from './ImageLightboxModal';
import { useLang } from './translations';
import { caseStudiesTranslations } from './caseStudiesTranslations';

export default function SolarCoolingCaseStudy() {
  const { lang } = useLang();
  const t = caseStudiesTranslations[lang]?.solarCooling || caseStudiesTranslations.en.solarCooling;
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
            <strong style={{ display: 'block', color: '#0F172A', fontSize: '14px' }}>{t.teamName}</strong>
            <span>{t.teamRole}</span>
          </div>
          <div>
            <strong style={{ display: 'block', color: '#0F172A', fontSize: '14px' }}>{t.sdgName}</strong>
            <span>{t.sdgRole}</span>
          </div>
        </div>

        {/* Hero 50/50 Split */}
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
              src="/images/solar_cooling_hardware_real.jpeg" 
              alt="Assembled Solar Panel Automated Cooling Test Rig"
              className="cs-hero-clean-photo"
              onClick={() => openZoom(
                '/images/solar_cooling_hardware_real.jpeg', 
                isId ? 'Rig Pengujian Alat Pendingin Panel Surya Otomatis' : 'Assembled Solar Panel Cooling Apparatus', 
                isId ? 'Peralatan pengujian lengkap: (a) Kotak kontrol Arduino & relay, (b) Pipa penyalur keluar, (c) Pompa celup DC 12V, (d) Probe sensor suhu, (e) Selang hisap inlet' : 'Full test apparatus: (a) Control center with Arduino & relay, (b) Water outlet tube, (c) 12V DC water pump, (d) Temperature probe, (e) Water inlet suction hose'
              )}
              title={c.clickToZoom}
            />
          </div>
        </div>
      </header>

      {/* ── 01. Problem Statement & Motivation ── */}
      <section className="cs-section">
        <div className="cs-section-header">
          <span className="cs-section-num">{t.section01.num}</span>
          <h2 className="cs-section-title">{t.section01.title}</h2>
        </div>
        <div className="cs-two-col">
          <div className="cs-info-box">
            <h4><Sun size={18} color="#F05A22" /> {t.section01.col1Title}</h4>
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

      {/* ── 02. System Architecture & Solved Concept ── */}
      <section className="cs-section">
        <div className="cs-section-header">
          <span className="cs-section-num">{isId ? '02 / ARSITEKTUR SISTEM' : '02 / SYSTEM ARCHITECTURE'}</span>
          <h2 className="cs-section-title">{isId ? 'Arsitektur Siklus Pendinginan & Logika Kontrol' : 'Cooling Cycle Architecture & Control Logic'}</h2>
        </div>

        <div className="cs-two-col" style={{ alignItems: 'stretch' }}>
          <div 
            className="cs-card-container cs-preview-media" 
            style={{ height: 'auto', minHeight: '300px', flexDirection: 'column', padding: 0 }}
            onClick={() => openZoom(
              '/images/solar_cooling_architecture.jpeg', 
              isId ? 'Tata Letak Fisik Sistem Pendingin Panel Surya' : 'Solar Panel Cooling Physical Layout', 
              isId ? 'Diagram skematik: (1) Panel surya, (2) Probe sensor suhu, (3) Kotak mikrokontroler & relay, (4) Pompa air celup, (5) Tangki penampung, (6) Pipa manifold semprot, (7) Layar LCD' : 'Schematic diagram illustrating (1) Solar panel, (2) Temperature sensor probe, (3) Microcontroller & relay box, (4) Submersible water pump, (5) Reservoir tank, (6) Perforated spray manifold, (7) LCD display'
            )}
            title={c.clickToZoom}
          >
            <div style={{ flex: 1, width: '100%', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF' }}>
              <img src="/images/solar_cooling_architecture.jpeg" alt="Solar Cooling Physical Layout Diagram" style={{ maxHeight: '260px' }} />
            </div>
            <div className="cs-media-label" style={{ width: '100%' }}>{isId ? 'Skema Tata Letak Fisik & Distribusi Perpipaan' : 'Physical Layout & Plumbing Distribution Scheme'}</div>
          </div>

          <div 
            className="cs-card-container cs-preview-media" 
            style={{ height: 'auto', minHeight: '300px', flexDirection: 'column', padding: 0 }}
            onClick={() => openZoom(
              '/images/solar_cooling_flowchart.jpeg', 
              isId ? 'Flowchart Eksekusi Program Mikrokontroler' : 'Microcontroller Execution Flowchart', 
              isId ? 'Flowchart logika: Inisialisasi → Baca suhu permukaan & output PV → Keputusan (Suhu > 30°C?) → Nyalakan pompa 12V → Suhu turun hingga < 25°C → Matikan pompa → Tampilkan parameter pada LCD 16x2' : 'Logic flowchart: Initialization → Read surface temperature & PV output → Decision (T > 30°C?) → Activate 12V pump → Temperature falls to < 25°C → Deactivate pump → Display live metrics on 16x2 LCD'
            )}
            title={c.clickToZoom}
          >
            <div style={{ flex: 1, width: '100%', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF' }}>
              <img src="/images/solar_cooling_flowchart.jpeg" alt="Control Execution Flowchart" style={{ maxHeight: '260px' }} />
            </div>
            <div className="cs-media-label" style={{ width: '100%' }}>{isId ? 'Flowchart Kontrol Closed-Loop Arduino (30°C NYALA / 25°C MATI)' : 'Closed-Loop Microcontroller Flowchart (30°C ON / 25°C OFF)'}</div>
          </div>
        </div>

        <div className="cs-two-col" style={{ marginTop: '20px' }}>
          <div className="cs-info-box">
            <h4><Droplets size={18} color="#F05A22" /> {isId ? 'Strategi Pendinginan Termodinamika' : 'Thermodynamic Cooling Strategy'}</h4>
            <p>
              {isId ? 'Sistem memanfaatkan pipa manifold berlubang di sisi atas yang mendistribusikan lapisan tipis air secara merata di sepanjang permukaan panel. Dengan memanfaatkan kapasitas kalor jenis air yang tinggi (4.186 J/kg·°C), energi panas permukaan diserap secara cepat tanpa menghalangi sinar matahari saat siang hari.' : 'The system utilizes a top-mounted perforated manifold pipe that deposits a thin, laminar water film across the panel face. By exploiting the high specific heat capacity of water, surface thermal energy is rapidly conducted away without obstructing incident solar rays during active daytime generation.'}
            </p>
          </div>
          <div className="cs-info-box">
            <h4><Cpu size={18} color="#F05A22" /> {isId ? 'Integrasi Kontroler Embedded' : 'Embedded Controller Integration'}</h4>
            <p>
              {isId ? 'Sebuah Arduino UNO R3 memantau sensor suhu RTD permukaan secara real-time. Logika histeresis (nyala pada 30°C, mati pada 25°C) mencegah saklar relay bolak-balik berlebihan serta menghemat konsumsi daya pompa dan air. Status sistem real-time ditampilkan pada layar LCD 16×2 I2C.' : 'An Arduino UNO R3 monitors the surface RTD temperature sensor in real time. Hysteresis switching logic (turn-on at 30°C, turn-off at 25°C) prevents relay chatter and conserves both pump energy and water consumption. Live system status and surface temperatures are rendered on an I2C 16×2 LCD screen.'}
            </p>
          </div>
        </div>
      </section>

      {/* ── 03. Testing & Experimental Validation ── */}
      <section className="cs-section">
        <div className="cs-section-header">
          <span className="cs-section-num">{t.section03.num}</span>
          <h2 className="cs-section-title">{t.section03.title}</h2>
        </div>
        <p style={{ color: '#64748B', fontSize: '13.5px', lineHeight: 1.7, marginBottom: '28px' }}>
          {t.section03.intro}
        </p>

        {/* ─── BLOCK A: Temperature Threshold & Cooling Rate ─── */}
        <div className="cs-validation-block">
          <div className="cs-validation-label">{isId ? 'A — Ambang Batas Otomatis & Penurunan Suhu Termal' : 'A — Automated Threshold Actuation & Thermal Reduction'}</div>
          <p className="cs-validation-desc">
            {isId ? 'Dievaluasi melalui 3 siklus lengkap pemanasan-pendinginan di bawah sinar matahari tropis. Memvalidasi pemicu otomatis pompa saat >30°C dan kembali ke kondisi dasar ≤25°C.' : 'Evaluated across 3 full heating-cooling cycles under ambient tropical sunlight. Validates automatic pump trigger at >30°C and return to baseline ≤25°C.'}
          </p>

          <div className="cs-table-wrapper">
            <table className="cs-data-table">
              <thead>
                <tr>
                  <th>{isId ? 'ITERASI UJI' : 'TRIAL ITERATION'}</th>
                  <th>{isId ? 'SUHU AWAL (°C)' : 'INITIAL PRE-COOL TEMP (°C)'}</th>
                  <th>{isId ? 'SUHU PEMICU NYALA' : 'ACTIVATION TEMP TRIGGER'}</th>
                  <th>{isId ? 'WAKTU MENUJU 25°C' : 'TIME TO REACH 25°C'}</th>
                  <th>{isId ? 'SUHU PEMICU MATI' : 'DEACTIVATION TEMP'}</th>
                  <th>{isId ? 'KEANDALAN RESPON' : 'RESPONSE RELIABILITY'}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>{isId ? 'Uji 1' : 'Trial 1'}</strong></td>
                  <td>41.2°C</td>
                  <td>30.1°C (±0.2)</td>
                  <td>9.0 {isId ? 'menit' : 'minutes'}</td>
                  <td>25.2°C</td>
                  <td><strong style={{ color: '#16A34A' }}>{isId ? 'Otonom Terverifikasi' : 'Verified Autonomous'}</strong></td>
                </tr>
                <tr>
                  <td><strong>{isId ? 'Uji 2' : 'Trial 2'}</strong></td>
                  <td>40.5°C</td>
                  <td>30.3°C</td>
                  <td>10.0 {isId ? 'menit' : 'minutes'}</td>
                  <td>25.1°C</td>
                  <td><strong style={{ color: '#16A34A' }}>{isId ? 'Otonom Terverifikasi' : 'Verified Autonomous'}</strong></td>
                </tr>
                <tr>
                  <td><strong>{isId ? 'Uji 3' : 'Trial 3'}</strong></td>
                  <td>42.1°C</td>
                  <td>30.2°C</td>
                  <td>9.5 {isId ? 'menit' : 'minutes'}</td>
                  <td>25.0°C</td>
                  <td><strong style={{ color: '#16A34A' }}>{isId ? 'Otonom Terverifikasi' : 'Verified Autonomous'}</strong></td>
                </tr>
                <tr className="cs-table-highlight">
                  <td><strong>{isId ? 'RATA-RATA' : 'AVERAGE'}</strong></td>
                  <td><strong>41.3°C</strong></td>
                  <td><strong>30.2°C (±0.3°C dev)</strong></td>
                  <td><strong>9.5 {isId ? 'menit (~turun 1,7°C/mnt)' : 'minutes (~1.7°C/min drop)'}</strong></td>
                  <td><strong>25.1°C</strong></td>
                  <td><strong>{isId ? 'Siklus Berulang Konsisten' : 'Repeatable Cycle Response'}</strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="cs-two-col" style={{ marginTop: '16px' }}>
            <div className="cs-info-box">
              <h4><Award size={16} color="#F05A22" /> {isId ? 'Temuan Regulasi Termal' : 'Thermal Regulation Finding'}</h4>
              <p>{isId ? 'Mekanisme pendingin menurunkan suhu permukaan panel hingga lebih dari 16°C (dari ~41,3°C menjadi 25,1°C) dalam durasi rata-rata 9,5 menit. Menjaga panel di rentang suhu optimal 25–30°C ini memulihkan estimasi output daya listrik 6% hingga 8% berdasarkan koefisien termal silikon standar (-0,4%/°C).' : 'The cooling mechanism reduced panel surface temperature by over 16°C (from ~41.3°C down to 25.1°C) within an average duration of 9.5 minutes. Operating the panel within this optimal 25–30°C thermal envelope yields an estimated theoretical recovery of 6% to 8% in electrical power output based on standard silicon thermal coefficients (−0.4%/°C) compared to uncooled stagnation states.'}</p>
            </div>
            <div className="cs-info-box">
              <h4><Activity size={16} color="#F05A22" /> {isId ? 'Konsistensi Pemicuan' : 'Trigger Consistency'}</h4>
              <p>{isId ? 'Loop kontrol sensor-relay mempertahankan pengulangan yang konsisten dengan deviasi pemicu aktivasi hanya ±0,3°C antar pengujian. Kalibrasi subsistem membuktikan akurasi pengukuran sensor berada dalam rentang deviasi ±0,6°C terhadap termometer referensi bersertifikat.' : 'The sensor-relay control loop maintained consistent repeatability with activation trigger deviation kept within ±0.3°C across trials. Subsystem calibration verified temperature probe measurement accuracy within ±0.6°C against a reference calibrated thermometer.'}</p>
            </div>
          </div>
        </div>

        <div className="cs-validation-divider" />

        {/* ─── BLOCK B: Spray Flow Rate & Water Economy ─── */}
        <div className="cs-validation-block">
          <div className="cs-validation-label">{isId ? 'B — Debit Semprotan & Neraca Air Tangki' : 'B — Spray Flowrate & Reservoir Water Budget'}</div>
          <p className="cs-validation-desc">
            {isId ? '3 pengujian debit mengukur konsumsi air per interval 1 menit untuk menyeimbangkan disipasi panas dengan konservasi air pada instalasi tangki tertutup.' : '3 flowrate trials measuring water consumption over 1-minute intervals to balance heat dissipation against conservation in closed-reservoir setups.'}
          </p>

          <div className="cs-table-wrapper">
            <table className="cs-data-table">
              <thead>
                <tr>
                  <th>{isId ? 'ITERASI UJI' : 'TRIAL ITERATION'}</th>
                  <th>{isId ? 'SUHU AWAL' : 'INITIAL TEMP'}</th>
                  <th>{isId ? 'DEBIT SEMPROT (L/MNT)' : 'DISPENSE RATE (L/MIN)'}</th>
                  <th>{isId ? 'DURASI SIKLUS' : 'CYCLE DURATION'}</th>
                  <th>{isId ? 'AIR TERPAKAI / SIKLUS' : 'TOTAL WATER USED / CYCLE'}</th>
                  <th>{isId ? 'KAPASITAS TANGKI (20L)' : 'RESERVOIR CAPACITY (20L)'}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>{isId ? 'Uji 1' : 'Trial 1'}</strong></td>
                  <td>41.0°C</td>
                  <td>4.05 L/min</td>
                  <td>±2.5 {isId ? 'mnt' : 'min'}</td>
                  <td>10.0 L</td>
                  <td>{isId ? 'Cukup untuk 2 Siklus Penuh' : 'Sustains 2 Full Cycles'}</td>
                </tr>
                <tr>
                  <td><strong>{isId ? 'Uji 2' : 'Trial 2'}</strong></td>
                  <td>40.5°C</td>
                  <td>4.02 L/min</td>
                  <td>±2.4 {isId ? 'mnt' : 'min'}</td>
                  <td>9.8 L</td>
                  <td>{isId ? 'Cukup untuk 2 Siklus Penuh' : 'Sustains 2 Full Cycles'}</td>
                </tr>
                <tr>
                  <td><strong>{isId ? 'Uji 3' : 'Trial 3'}</strong></td>
                  <td>42.1°C</td>
                  <td>3.98 L/min</td>
                  <td>±2.6 {isId ? 'mnt' : 'min'}</td>
                  <td>10.2 L</td>
                  <td>{isId ? 'Cukup untuk 2 Siklus Penuh' : 'Sustains 2 Full Cycles'}</td>
                </tr>
                <tr className="cs-table-highlight">
                  <td><strong>{isId ? 'RATA-RATA' : 'AVERAGE'}</strong></td>
                  <td><strong>41.2°C</strong></td>
                  <td><strong>4.02 L/min</strong></td>
                  <td><strong>2.5 {isId ? 'menit aktif' : 'minutes active'}</strong></td>
                  <td><strong>10.0 {isId ? 'Liter' : 'Liters'}</strong></td>
                  <td><strong>{isId ? 'Buffer Otonom Harian' : 'Autonomous Daily Buffer'}</strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="cs-two-col" style={{ marginTop: '16px' }}>
            <div className="cs-info-box">
              <h4><Droplets size={16} color="#F05A22" /> {isId ? 'Optimasi Debit Aliran' : 'Flowrate Optimization'}</h4>
              <p>{isId ? 'Debit aliran 4,02 L/menit sesuai dengan kebutuhan penyerapan panas teoritis untuk bidang panel 150–200 Wp. Air dipompa dalam hembusan singkat 2,5 menit daripada pengaliran nonstop, memberikan pendinginan optimal sekaligus menghemat penggunaan air.' : 'The delivered flowrate of 4.02 L/min matches theoretical heat absorption requirements for 150–200 Wp panel surface areas. Water is pumped in short 2.5-minute bursts rather than continuous flushing, achieving substantial energy gains while minimizing water usage.'}</p>
            </div>
            <div className="cs-info-box">
              <h4><Layers size={16} color="#F05A22" /> {isId ? 'Kelayakan Sirkulasi Ulang Tertutup' : 'Closed-Loop Recirculation Feasibility'}</h4>
              <p>{isId ? 'Tangki kompak 20 liter memberikan kemandirian penuh untuk dua siklus pendinginan terik siang hari. Pada instalasi industri, penambahan talang penampung air di bagian bawah panel memungkinkan resirkulasi melingkar terus-menerus tanpa bergantung pasokan air luar.' : 'A compact 20-liter tank provides complete autonomy for two standard peak-noon cooling cycles. In production installations, integrating a bottom rainwater catchment gutter enables continuous circular re-filtration with zero municipal water dependence.'}</p>
            </div>
          </div>
        </div>

        <div className="cs-validation-divider" />

        {/* ─── BLOCK C: Battery Runtime & System Robustness ─── */}
        <div className="cs-validation-block">
          <div className="cs-validation-label">{isId ? 'C — Kemandirian Energi & Proteksi Cuaca' : 'C — Energy Autonomy & Environmental Ingress Protection'}</div>
          <p className="cs-validation-desc">
            {isId ? 'Uji pengosongan beban listrik kontinu selama jendela radiasi puncak 11:00–15:00, dipadukan dengan pengujian semprotan multi-arah IPX4 dan verifikasi konektor MC4.' : 'Continuous electrical load discharge testing over the 11:00–15:00 peak solar radiation window, paired with IPX4 multi-directional spray tests and MC4 electrical verification.'}
          </p>

          <div className="cs-table-wrapper">
            <table className="cs-data-table">
              <thead>
                <tr>
                  <th>{isId ? 'KRITERIA VERIFIKASI' : 'VERIFICATION CRITERIA'}</th>
                  <th>{isId ? 'METRIK TERUKUR' : 'MEASURED METRIC'}</th>
                  <th>{isId ? 'PARAMETER PENGUJIAN' : 'TEST PARAMETERS'}</th>
                  <th>{isId ? 'STATUS LULUS / GAGAL' : 'PASS / FAIL STATUS'}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>{isId ? 'Ketahanan Operasi Baterai' : 'Battery Operational Endurance'}</strong></td>
                  <td><strong>4 {isId ? 'jam' : 'hours'} 09 {isId ? 'menit' : 'minutes'}</strong></td>
                  <td>{isId ? 'Baterai 12V 10Ah menyuplai beban >25W (pompa + MCU + sensor)' : '12V 10Ah battery powering >25W load (pump + MCU + sensors)'}</td>
                  <td><strong style={{ color: '#16A34A' }}>{isId ? 'LULUS — 102 Wh Tersalurkan' : 'PASS — 102 Wh Delivered'}</strong></td>
                </tr>
                <tr>
                  <td><strong>{isId ? 'Cakupan Jendela Surya Puncak' : 'Peak Solar Window Coverage'}</strong></td>
                  <td><strong>100% {isId ? 'Tanpa Putus' : 'Uninterrupted'}</strong></td>
                  <td>{isId ? 'Operasi kontinu dari 11:00 hingga 15:00 tanpa listrik PLN' : 'Continuous operation from 11:00 to 15:00 without mains connection'}</td>
                  <td><strong style={{ color: '#16A34A' }}>{isId ? 'LULUS — Off-Grid Mandiri' : 'PASS — Fully Off-Grid'}</strong></td>
                </tr>
                <tr>
                  <td><strong>{isId ? 'Ketahanan Air Enclosure IPX4' : 'IPX4 Enclosure Waterproofing'}</strong></td>
                  <td><strong>{isId ? 'Nol Penetrasi / Kering' : 'Zero Ingress / Dry'}</strong></td>
                  <td>{isId ? 'Uji semprot 5 menit volume tinggi dari 4 arah pada bodi ABS' : '5-min continuous high-volume spray from 4 directions on ABS casing'}</td>
                  <td><strong style={{ color: '#16A34A' }}>{isId ? 'LULUS — Rangkaian Terlindungi' : 'PASS — No Moisture Ingress'}</strong></td>
                </tr>
                <tr>
                  <td><strong>{isId ? 'Antarmuka Elektrikal Standar MC4' : 'Universal MC4 Electrical Interface'}</strong></td>
                  <td><strong>100% {isId ? 'Kontinuitas' : 'Continuity'}</strong></td>
                  <td>{isId ? 'Diuji pada panel Monokristalin, Polikristalin, dan Fleksibel' : 'Tested on Monocrystalline, Polycrystalline, and Flexible PV arrays'}</td>
                  <td><strong style={{ color: '#16A34A' }}>{isId ? 'LULUS — Arus Lancar' : 'PASS — Zero Drop'}</strong></td>
                </tr>
                <tr>
                  <td><strong>{isId ? 'Kekokohan Pemasangan Struktur' : 'Structural Mounting Stability'}</strong></td>
                  <td><strong>{isId ? 'Nol Pergeseran' : 'Zero Displacement'}</strong></td>
                  <td>{isId ? 'Simulasi terpaan angin blower 60 km/jam pada dudukan beton' : 'Simulated 60 km/h wind shear blower test on concrete/tilt mounts'}</td>
                  <td><strong style={{ color: '#16A34A' }}>{isId ? 'LULUS — Angker Kokoh' : 'PASS — Rigid Anchor'}</strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="cs-two-col" style={{ marginTop: '16px' }}>
            <div className="cs-info-box">
              <h4><BatteryCharging size={16} color="#F05A22" /> {isId ? 'Kemandirian Energi Penuh' : 'Complete Energy Self-Sufficiency'}</h4>
              <p>{isId ? 'Subsistem beroperasi stabil sepanjang 4 jam jendela penyinaran puncak tanpa penurunan tegangan, menarik daya rata-rata ~25,2W dengan konsumsi energi total 102 Wh. Baterai dapat diisi ulang secara mandiri melalui cabang bantu pengontrol muatan surya (SCC).' : 'The subsystem operated stably throughout the entire 4-hour peak irradiance window without voltage collapse, drawing ~25.2W and consuming a total of 102 Wh. The battery can be replenished directly via an auxiliary branch from the solar charge controller (SCC).'}</p>
            </div>
            <div className="cs-info-box">
              <h4><ShieldCheck size={16} color="#F05A22" /> {isId ? 'Kepatuhan Ketahanan Lingkungan' : 'Environmental Durability Compliance'}</h4>
              <p>{isId ? 'Pengujian semprotan langsung membuktikan proteksi IPX4 pada kotak enclosure ABS. Seluruh komponen elektronika internal, terminal, dan soket sensor tetap kering bebas kelembapan, menjamin ketahanan terhadap hujan deras tropis.' : 'Direct spray testing confirmed IPX4 ingress protection on the ABS electrical housing. All internal electronics, terminals, and sensor interfaces remained moisture-free, validating field survivability under harsh tropical rain events.'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 04. Role & Team Engineering Execution ── */}
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
        <a href="/projects/manipulator" className="cs-nav-btn secondary">
          <ArrowLeft size={16} /> {t.bottomNav.prev}
        </a>
        <a href="/projects/krai-2025" className="cs-nav-btn">
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
