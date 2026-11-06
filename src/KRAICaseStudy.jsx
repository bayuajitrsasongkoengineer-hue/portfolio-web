import React, { useState } from 'react';
import { 
  ArrowLeft, ArrowRight, Award, Activity, Wrench, Layers, 
  Cpu, ZoomIn, Play, Crosshair, Gauge, Disc, ShieldAlert
} from 'lucide-react';
import ImageLightboxModal from './ImageLightboxModal';
import { useLang } from './translations';
import { caseStudiesTranslations } from './caseStudiesTranslations';

export default function KRAICaseStudy() {
  const { lang } = useLang();
  const t = caseStudiesTranslations[lang]?.krai || caseStudiesTranslations.en.krai;
  const c = caseStudiesTranslations[lang]?.common || caseStudiesTranslations.en.common;

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
            <strong style={{ display: 'block', color: '#0F172A', fontSize: '14px' }}>{t.milestoneName}</strong>
            <span>{t.milestoneRole}</span>
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

          <div className="cs-hero-split-right" style={{ alignSelf: 'center', width: '100%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <img 
              src="/images/krai_robot_hero.png" 
              alt="Team ROOBICS Competition Basketball Robot Full Assembly"
              className="cs-hero-clean-photo"
              onClick={() => openZoom(
                '/images/krai_robot_hero.png', 
                lang === 'id' ? 'Robot Basket Kompetisi Tim ROOBICS' : 'Team ROOBICS Competition Basketball Robot', 
                lang === 'id' ? 'Robot kompetisi fisik saat memegang bola basket regulasi, menampilkan rakitan dribbler, silinder pneumatik, tabung udara, dan sasis 3 roda omni' : 'Physical competition robot with regulation basketball in possession, displaying dribbler assembly, pneumatic cylinders, air reservoirs, and 3-wheel omni chassis'
              )}
              title={c.clickToZoom}
            />
          </div>
        </div>
      </header>

      {/* ── 01. Competition Challenge & Specifications ── */}
      <section className="cs-section">
        <div className="cs-section-header">
          <span className="cs-section-num">{t.section01.num}</span>
          <h2 className="cs-section-title">{t.section01.title}</h2>
        </div>
        <div className="cs-two-col">
          <div className="cs-info-box">
            <h4><Crosshair size={18} color="#F05A22" /> {t.section01.col1Title}</h4>
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
                <li key={idx}>
                  {spec}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── 02. Subsystems Mechanical CAD & Kinematics ── */}
      <section className="cs-section">
        <div className="cs-section-header">
          <span className="cs-section-num">{t.section02.num}</span>
          <h2 className="cs-section-title">{t.section02.title}</h2>
        </div>

        {/* 3 CAD Images Strip */}
        <div className="cs-cad-poses-strip" style={{ marginBottom: '24px' }}>
          <img 
            src="/images/krai_cad_mechanism_1.jpg" 
            alt="Shooter Tower Mechanical CAD" 
            style={{ height: '200px' }}
            onClick={() => openZoom(
              '/images/krai_cad_mechanism_1.jpg', 
              t.section02.cadCaptions[0], 
              lang === 'id' ? 'Desain parametrik ruang akselerasi bola, dudukan motor, dan transmisi reduksi pulley custom' : 'Parametric CAD design of the ball acceleration chamber, motor bracket mounts, and custom pulley reduction transmission'
            )}
            title={c.clickToZoom}
          />
          <img 
            src="/images/krai_cad_mechanism_2.jpg" 
            alt="Dribbler & Feeder Mechanism CAD" 
            style={{ height: '200px' }}
            onClick={() => openZoom(
              '/images/krai_cad_mechanism_2.jpg', 
              t.section02.cadCaptions[1], 
              lang === 'id' ? 'Pemasangan silinder pneumatik dengan poros linier pemandu, housing sensor IR, dan geometri penahan bola' : 'Pneumatic cylinder attachment with guide linear shafts, IR sensor housing, and ball containment geometry'
            )}
            title={c.clickToZoom}
          />
          <img 
            src="/images/krai_cad_mechanism_3.jpg" 
            alt="Holonomic 3-Omni Base Chassis CAD" 
            style={{ height: '200px' }}
            onClick={() => openZoom(
              '/images/krai_cad_mechanism_3.jpg', 
              t.section02.cadCaptions[2], 
              lang === 'id' ? 'Pod roda omni 120 derajat simetris, dudukan motor planetary gear, dan pelat dasar struktural' : '120-degree symmetrically spaced omni-wheel pods, planetary gear motor mountings, and base structural plate'
            )}
            title={c.clickToZoom}
          />
        </div>

        {/* Detailed Two-Col Engineering Breakdown */}
        <div className="cs-two-col" style={{ alignItems: 'stretch' }}>
          <div className="cs-info-box" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h4 style={{ color: '#0F172A', marginBottom: '10px' }}><Disc size={18} color="#F05A22" /> {t.section02.card1Title}</h4>
              <p style={{ lineHeight: 1.65, fontSize: '13.5px', color: '#334155' }}>
                {t.section02.card1Text}
              </p>
              <p style={{ lineHeight: 1.65, fontSize: '13.5px', color: '#334155', marginTop: '10px' }}>
                {t.section02.card1Text2}
              </p>
            </div>
          </div>

          <div className="cs-info-box" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h4 style={{ color: '#0F172A', marginBottom: '10px' }}><Gauge size={18} color="#F05A22" /> {t.section02.card2Title}</h4>
              <p style={{ lineHeight: 1.65, fontSize: '13.5px', color: '#334155' }}>
                {t.section02.card2Text}
              </p>
              <p style={{ lineHeight: 1.65, fontSize: '13.5px', color: '#334155', marginTop: '10px' }}>
                {t.section02.card2Text2}
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
              onClick={() => openZoom(
                '/images/krai_base_omni_drive.jpeg', 
                lang === 'id' ? 'Drivetrain Fisik Roda Omni 3-Wheel Holonomic' : 'Fabricated 3-Wheel Holonomic Omni Drivetrain', 
                lang === 'id' ? 'Sasis fisik menampilkan pelat aluminium CNC, roda omni 120 derajat simetris, motor gear DC planetary, dan dudukan baterai' : 'Physical chassis base displaying CNC aluminum plates, 120-degree symmetrical omni-wheels, planetary DC gearmotors, and battery bay'
              )}
              title={c.clickToZoom}
            />
          </div>
          <div className="cs-media-label" style={{ width: '100%' }}>{t.section02.baseMediaLabel}</div>
        </div>
      </section>

      {/* ── 03. Live Video Validations & Field Testing ── */}
      <section className="cs-section">
        <div className="cs-section-header">
          <span className="cs-section-num">{t.section03.num}</span>
          <h2 className="cs-section-title">{t.section03.title}</h2>
        </div>
        <p style={{ color: '#64748B', fontSize: '13.5px', lineHeight: 1.7, marginBottom: '24px' }}>
          {t.section03.intro}
        </p>

        {/* 3 Video Grid - Clean Video Layout Without Black Bars */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '24px' }}>
          {/* Video 1: Dribble Test */}
          <div className="cs-card-container" style={{ padding: '14px', background: '#FFFFFF', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <Play size={16} color="#F05A22" />
              <strong style={{ fontSize: '13px', color: '#0F172A' }}>{t.section03.video1Title}</strong>
            </div>
            <div style={{ borderRadius: '6px', overflow: 'hidden', background: '#F8FAFC', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
              <video 
                src="/videos/krai_dribble_test.mp4" 
                controls 
                preload="metadata"
                style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '380px', display: 'block', borderRadius: '6px' }}
              >
                Your browser does not support HTML5 video.
              </video>
            </div>
            <p style={{ fontSize: '12px', color: '#64748B', marginTop: '10px', lineHeight: 1.5 }}>
              {t.section03.video1Desc}
            </p>
          </div>

          {/* Video 2: Shooter Bench Test */}
          <div className="cs-card-container" style={{ padding: '14px', background: '#FFFFFF', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <Play size={16} color="#F05A22" />
              <strong style={{ fontSize: '13px', color: '#0F172A' }}>{t.section03.video2Title}</strong>
            </div>
            <div style={{ borderRadius: '6px', overflow: 'hidden', background: '#F8FAFC', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
              <video 
                src="/videos/krai_shooter_bench_test.mp4" 
                controls 
                preload="metadata"
                style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '380px', display: 'block', borderRadius: '6px' }}
              >
                Your browser does not support HTML5 video.
              </video>
            </div>
            <p style={{ fontSize: '12px', color: '#64748B', marginTop: '10px', lineHeight: 1.5 }}>
              {t.section03.video2Desc}
            </p>
          </div>

          {/* Video 3: Full 6-7m Shooting Field Test */}
          <div className="cs-card-container" style={{ padding: '14px', background: '#FFFFFF', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <Play size={16} color="#F05A22" />
              <strong style={{ fontSize: '13px', color: '#0F172A' }}>{t.section03.video3Title}</strong>
            </div>
            <div style={{ borderRadius: '6px', overflow: 'hidden', background: '#F8FAFC', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
              <video 
                src="/videos/krai_shooting_field_test.mp4" 
                controls 
                preload="metadata"
                style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '380px', display: 'block', borderRadius: '6px' }}
              >
                Your browser does not support HTML5 video.
              </video>
            </div>
            <p style={{ fontSize: '12px', color: '#64748B', marginTop: '10px', lineHeight: 1.5 }}>
              {t.section03.video3Desc}
            </p>
          </div>
        </div>

        {/* Quantitative Test Matrix Table */}
        <div className="cs-table-card" style={{ marginBottom: '20px' }}>
          <table className="cs-data-table">
            <thead>
              <tr>
                {t.section03.testHeader.map((head, idx) => (
                  <th key={idx}>{head}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {t.section03.testRows.map((row, idx) => (
                <tr key={idx}>
                  <td><strong>{row[0]}</strong></td>
                  <td>{row[1]}</td>
                  <td><strong>{row[2]}</strong></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── 04. Competition Milestone & Pitstop Documentation ── */}
      <section className="cs-section">
        <div className="cs-section-header">
          <span className="cs-section-num">{t.section04.num}</span>
          <h2 className="cs-section-title">{t.section04.title}</h2>
        </div>

        <div className="cs-two-col" style={{ alignItems: 'stretch' }}>
          {/* Competition Pitstop Photo */}
          <div 
            className="cs-card-container cs-preview-media" 
            style={{ height: 'auto', minHeight: '340px', flexDirection: 'column', padding: 0 }}
            onClick={() => openZoom(
              '/images/krai_pitstop_competition.jpeg', 
              lang === 'id' ? 'Tim ROOBICS di Area Pitstop KRAI' : 'Team ROOBICS in KRAI Pitstop Area', 
              lang === 'id' ? 'Pemeliharaan lapangan dan inspeksi pra-tanding: Penyetelan pneumatik, pengisian daya baterai, dan kalibrasi sensor di pitstop arena' : 'Field maintenance and pre-match inspection: Tuning pneumatics, battery charging, and sensor calibration in the arena pitstop'
            )}
            title={c.clickToZoom}
          >
            <div style={{ flex: 1, width: '100%', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF' }}>
              <img src="/images/krai_pitstop_competition.jpeg" alt="KRAI Competition Pitstop Area" style={{ maxHeight: '280px', objectFit: 'contain' }} />
            </div>
            <div className="cs-media-label" style={{ width: '100%' }}>{t.section04.pitstopLabel}</div>
          </div>

          {/* Official Certificate - Accurate Finalis Tingkat Nasional Certificate */}
          <div 
            className="cs-card-container cs-preview-media" 
            style={{ height: 'auto', minHeight: '340px', flexDirection: 'column', padding: 0 }}
            onClick={() => openZoom(
              '/images/krai_cert_finalis_nasional.png', 
              lang === 'id' ? 'Sertifikat Penghargaan Finalis Tingkat Nasional KRAI 2025' : 'Official KRAI 2025 National Finalist Certificate', 
              lang === 'id' ? 'Sertifikat resmi peserta finalis nasional: Bayu Aji Trisasongko — Tim ROOBICS, Universitas Telkom' : 'Official certificate of national finalist: Bayu Aji Trisasongko — Team ROOBICS, Universitas Telkom'
            )}
            title={c.clickToZoom}
          >
            <div style={{ flex: 1, width: '100%', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF' }}>
              <img src="/images/krai_cert_finalis_nasional.png" alt="Official KRAI 2025 Certificate" style={{ maxHeight: '280px', objectFit: 'contain' }} />
            </div>
            <div className="cs-media-label" style={{ width: '100%' }}>{t.section04.certLabel}</div>
          </div>
        </div>

        {/* Retrospective Engineering Cards */}
        <div className="cs-takeaways-grid" style={{ marginTop: '24px' }}>
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
        <a href="/projects/solar-cooling" className="cs-nav-btn secondary">
          <ArrowLeft size={16} /> {t.bottomNav.prev}
        </a>
        <a href="/projects/line-follower" className="cs-nav-btn">
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
