/**
 * translations.js
 * Translation dictionary for Bayu Aji Trisasongko's Portfolio Website.
 * Contains original concise, honest, and grounded engineering descriptions in English & Indonesian.
 * Zero overclaim · Authentic personal maker & learner story.
 */
import React, { createContext, useContext, useState, useEffect } from 'react';

export const translations = {
  en: {
    nav: {
      links: [
        ['projects', 'Projects'],
        ['experience', 'Experience'],
        ['skills', 'Skills'],
        ['education', 'Education'],
        ['contact', 'Contact'],
      ],
      available: 'AVAILABLE FOR WORK',
    },
    hero: {
      viewProjects: 'View Projects',
      cv: 'Curriculum Vitae',
    },
    projectsSection: {
      eyebrow: '01 / SELECTED WORK',
      title: 'Tangible prototypes, competition systems & university projects.',
      subtitle: 'A collection of 5 projects built across my final project, national competition, capstone design, and independent builds.',
      footnote: 'Engineering documentation backed by official Telkom University thesis (Buku TA), Capstone design, and national robotics competition records.',
      exploreMore: 'Explore more projects',
      viewCaseStudy: 'View Case Study',
    },
    projects: [
      {
        slug: 'manipulator',
        number: '01',
        label: 'FINAL PROJECT · 5-DOF ROBOTIC MANIPULATOR',
        title: '5-DOF Robotic Manipulator Arm',
        summary: '5-DOF arm prototype with custom 3D-printed PLA cycloidal gearboxes (1:50 & 1:25), AS5600 closed-loop magnetic sensing (0.088°), and analytical inverse kinematics on STM32F411.',
        tags: ['Robotics', 'Cycloidal Gearbox', 'Closed-Loop Control', 'STM32', '3D Printing PLA'],
        metrics: [
          ['79.8%', 'Joint Accuracy Improvement'],
          ['250–1,000 g', 'Validated Payload Range'],
          ['5-DOF', 'Degrees of Freedom'],
        ],
        foot: 'Telkom University Final Project · 2026',
      },
      {
        slug: 'solar-cooling',
        number: '02',
        label: 'CAPSTONE DESIGN · PV THERMAL REGULATION',
        title: 'Automatic Solar Panel Cooling System',
        summary: 'Automated thermal regulation prototype for solar panels. Features threshold-based pump control activating above 30°C and deactivating below 25°C, with 4.02 L/min spray delivery.',
        tags: ['Thermal Regulation', 'Embedded Electronics', 'Sensor Interfacing', 'Relay Control'],
        metrics: [
          ['>30°C / <25°C', 'Pump Trigger Threshold'],
          ['±0.6°C', 'Sensor Measurement Accuracy'],
          ['4 Members', 'Capstone IDP Team 6'],
        ],
        foot: 'Telkom University · Capstone Design (IDP)',
      },
      {
        slug: 'krai-2025',
        number: '03',
        label: 'NATIONAL COMPETITION · KRAI 2025',
        title: 'Robot Basketball Mechanisms',
        summary: 'Designed precision dribble and pneumatic shooting mechanisms as a mechanical team member for Team ROOBICS (EIRRG Telkom University), advancing to the National Stage at ITB Jatinangor.',
        tags: ['Mechanism Design', 'Pneumatics', 'Robotics Competition', 'CAD Modeling'],
        metrics: [
          ['Pneumatic', 'Shooting Mechanism'],
          ['National Stage', 'ITB Jatinangor Selection'],
          ['Team ROOBICS', 'Mechanical Sub-Team'],
        ],
        foot: 'Mechanical Team · ROOBICS (KRAI 2025)',
      },
      {
        slug: 'line-follower',
        number: '04',
        label: 'INDEPENDENT BUILD · EMBEDDED CONTROL',
        title: 'Autonomous Line Follower Robot',
        summary: 'Autonomous line-tracking mobile robot featuring an 8-channel photodiode + LED sensor array, real-time threshold comparator circuitry, and differential drive steering logic.',
        tags: ['Photodiode Array', 'Differential Drive', 'Comparator Circuit', 'Hardware Tuning'],
        metrics: [
          ['8-Channel', 'Photodiode Sensor Bar'],
          ['Comparator', 'Line Detection Logic'],
          ['Dual DC', 'Drive Motors'],
        ],
        foot: 'Independent Project · 2024',
      },
      {
        slug: 'sumo-robot',
        number: '05',
        label: 'INDEPENDENT BUILD · COMPETITIVE ROBOTICS',
        title: 'Bluetooth Sumo Robot',
        summary: '1 kg competition-class sumo robot (20 × 20 cm) built on an acrylic chassis with 4 high-torque geared DC motors controlled wirelessly via smartphone Bluetooth.',
        tags: ['Acrylic Chassis', '4WD Geared Motors', 'Bluetooth Serial', 'Mobile Control'],
        metrics: [
          ['1 kg / 20×20 cm', 'Competition Class Limit'],
          ['4WD', 'Independent Geared Motors'],
          ['Bluetooth', 'Wireless Smartphone Control'],
        ],
        foot: 'Independent Project · 2023',
      },
    ],
    experienceSection: {
      eyebrow: '02 / INDUSTRIAL INTERNSHIPS',
      title: 'Practical experience in production environments.',
      subtitle: 'Internship roles at PT Promanufacture Indonesia (Formulatrix), contributing to technical documentation, CAD modeling, and hands-on workshop fabrication.',
      roles: [
        {
          id: 'process-engineering',
          label: 'INTERNSHIP ROLE · SALATIGA',
          title: 'Process Engineering Intern',
          company: 'PT Promanufacture Indonesia (Formulatrix)',
          date: 'Jul 2025 – Sep 2025 · 3 mos',
          location: 'Salatiga, Central Java, Indonesia',
          bullets: [
            'Gained familiarity with SMT line workflows and prepared assembly and wiring Work Instructions (WI) for the production team.',
            'Designed PCB solder paste stencil panels in Easy-PC and exported Gerber files for vendor tooling.',
            'Designed production support brackets in Onshape and fabricated parts using 3D printing.',
          ],
          cta: 'View Letter of Work Certificate',
        },
        {
          id: 'mechanical-engineering',
          label: 'INTERNSHIP ROLE · SEMARANG',
          title: 'Mechanical Engineering Intern',
          company: 'PT Promanufacture Indonesia (Formulatrix)',
          date: 'May 2021 – Oct 2021 · 6 mos',
          location: 'Semarang, Central Java, Indonesia',
          bullets: [
            'Designed 3D components in Onshape for laboratory automation equipment in compliance with workshop manufacturing requirements.',
            'Prepared CNC machining toolpaths using OneCNC software.',
            'Executed hands-on fabrication and assembly: 3D printing, deburring, filing, grinding, sheet metal bending, and mechanical assembly.',
          ],
          cta: 'View Letter of Work Certificate',
        },
      ],
    },
    educationSection: {
      eyebrow: '04 / ACADEMIC BACKGROUND',
      title: 'Vocational mechatronics foundation & electrical engineering degree.',
      subtitle: 'Combining hands-on workshop training from vocational high school with electrical engineering and robotics fundamentals from university.',
      telkom: {
        degree: 'Bachelor of Science in Electrical Engineering · Telkom University',
        period: 'Sep 2022 - Aug 2026 · Bandung, Indonesia',
        desc: 'Focus on Robotics, Mechatronics, and Control Systems. Completed Undergraduate Final Project on a 5-DOF robotic manipulator arm prototype utilizing 3D-printed PLA cycloidal gearboxes and closed-loop magnetic sensing.',
        gpaLabel: 'CUMULATIVE GPA',
        gpaSub: 'OUT OF 4.00 SCALE',
        courseworkLabel: 'Relevant Engineering Coursework:',
        verifiedNote: 'Verified from Official Transcript & Certificate of Graduation (SKL)',
        cta: 'View Certificate of Graduation (SKL)',
      },
      smk: {
        degree: 'Vocational High School in Mechatronics Engineering (4-Year Program) · SMKN 7 Semarang',
        period: 'Jul 2018 - Jul 2022 · Semarang, Indonesia',
        desc: '4-year technical mechatronics program covering industrial pneumatics, electro-pneumatic circuits, basic PLC automation, and mechanical fabrication. Built an electro-pneumatic training kit as final vocational project.',
        metricVal: '4-YEAR',
        metricLabel: 'VOCATIONAL DIPLOMA',
        metricSub: 'MECHATRONICS SPECIALIST',
        curriculumNote: '4-Year Vocational Curriculum including 6 months Industrial Internship (Prakerin/PKL)',
        cta: 'View Official Diploma (Ijazah)',
      },
    },
    orgsSection: {
      title: 'Engineering Teams & Student Activities',
      subtitle: 'Collaborative team experiences in national robotics competition and student mentoring.',
      org1: {
        label: 'ROBOTICS RESEARCH GROUP',
        name: 'Electronics and Intelligence Robotic Research Group (EIRRG)',
        date: '2024 - 2025',
        role: 'Mechanical Division · Team ROOBICS (Telkom University)',
        desc: 'Core mechanical team member helping design and fabricate robot mechanical systems for Kontes Robot ABU Indonesia (KRAI 2025), contributing to team preparation and qualifying for the National Finals at ITB Jatinangor.',
      },
      org2: {
        label: 'STUDENT ORIENTATION COMMITTEE',
        name: 'Panitia PKKMB Universitas Telkom',
        date: '2024',
        role: 'Discipline and Motivation Team (DMT) · Telkom University',
        desc: 'Assisted in maintaining student orientation protocol, participant order, and campus mobilization during new freshmen orientation events.',
      },
      org3: {
        label: 'DEPARTMENT STUDENT GUILD',
        name: 'Keluarga Mahasiswa Teknik Elektro (KMTE)',
        date: '2023 - 2024',
        role: 'Mentor Division · QUOTE 2023 (Telkom University)',
        desc: 'Served as student mentor helping incoming Electrical Engineering freshmen with academic adaptation and departmental orientation.',
      },
    },
    certsSection: {
      eyebrow: '04.1 / CERTIFICATIONS & CREDENTIALS',
      title: 'Verified Qualifications & Certificates',
      subtitle: 'Official competency certificates and tournament records.',
      cert1: {
        label: 'INDUSTRY CERTIFICATION',
        title: 'Pneumatic System Maintenance Technician',
        issuer: 'TÜV Rheinland Group & FESTO Didactic',
        period: 'Nov 2021 · Unlimited Validity',
        desc: 'Competency certificate from PersCert TÜV and FESTO Didactic validating technical skills in industrial pneumatic maintenance, valve circuits, and electro-pneumatic systems.',
        cta: 'Click to view certificate',
      },
      cert2: {
        label: 'NATIONAL ROBOTICS TOURNAMENT',
        title: 'Contestant - ABU Robocon Indonesia (KRAI 2025)',
        issuer: 'Belmawa Kemdiktisaintek & ITB · Team ROOBICS',
        period: 'Jul 2025',
        desc: 'Official contestant certificate representing Telkom University in the National Selection stage of Kontes Robot ABU Indonesia 2025.',
        cta: 'Click to view certificate',
      },
      cert3: {
        label: 'ENGLISH PROFICIENCY',
        title: 'English Proficiency Test (EPrT)',
        issuer: 'Total Score: 450 (Listening: 47, Grammar: 41, Reading: 47)',
        period: 'Jun 2026',
        desc: 'English proficiency certificate issued by Telkom University Language Center validating working technical comprehension.',
        cta: 'Click to view certificate',
      },
    },
    skillsSection: {
      eyebrow: '03 / CAPABILITIES & TOOLS',
      title: 'Tools & technical disciplines.',
      subtitle: 'Hands-on tools and software used across thesis research, Formulatrix internships, and personal robotics builds. Only confirmed tools are listed.',
    },
    contactSection: {
      eyebrow: '05 / GET IN TOUCH',
      title: 'Eager to learn, ready to contribute.',
      desc: 'As a fresh electrical engineering graduate with a practical mechatronics background, I bring hands-on experience in prototyping and fabrication. I am eager to learn, adapt quickly, and be mentored by experienced engineering teams. Open to entry-level and internship engineering roles.',
      cvButton: 'Curriculum Vitae',
      channels: {
        email: 'EMAIL',
        linkedin: 'LINKEDIN',
        whatsapp: 'WHATSAPP',
        location: 'Semarang, Indonesia',
      },
    },
    footer: {
      title: 'Bayu Aji Trisasongko',
      label: 'PERSONAL ENGINEERING PORTFOLIO / 2026',
      backToTop: 'BACK TO TOP ↑',
    },
    modal: {
      close: 'Close',
      download: 'Download Document',
    },
  },

  id: {
    nav: {
      links: [
        ['projects', 'Proyek'],
        ['experience', 'Pengalaman'],
        ['skills', 'Keahlian'],
        ['education', 'Pendidikan'],
        ['contact', 'Kontak'],
      ],
      available: 'OPEN TO WORK',
    },
    hero: {
      viewProjects: 'Lihat Proyek',
      cv: 'Curriculum Vitae',
    },
    projectsSection: {
      eyebrow: '01 / PROYEK PILIHAN',
      title: 'Prototipe fisik, robotika kompetisi & tugas akhir.',
      subtitle: 'Koleksi 5 proyek yang saya rancang dan rakit langsung selama masa kuliah dan belajar mandiri.',
      footnote: 'Dokumentasi rekayasa didukung data asli Buku Tugas Akhir Universitas Telkom, laporan Capstone, dan catatan kompetisi robotika nasional.',
      exploreMore: 'Lihat proyek lainnya',
      viewCaseStudy: 'Lihat Studi Kasus',
    },
    projects: [
      {
        slug: 'manipulator',
        number: '01',
        label: 'TUGAS AKHIR SARJANA · ROBOT MANIPULATOR 5-DOF',
        title: 'Robot Manipulator 5-DOF',
        summary: 'Prototipe lengan robot 5-DOF menggunakan cycloidal gearbox berbahan 3D-printed PLA dan mikrokontroler STM32F411. Menggunakan sensor magnetik AS5600 (closed-loop) untuk menekan celah gerak (backlash), dengan akurasi posisi mencapai 79,8% pada rentang beban 250–1.000 gram.',
        tags: ['Robotika', 'Cycloidal Gearbox', 'Closed-Loop Control', 'STM32', '3D Printing PLA'],
        metrics: [
          ['79.8%', 'Peningkatan Akurasi Sendi'],
          ['250–1.000 g', 'Rentang Beban Uji'],
          ['5-DOF', 'Derajat Kebebasan Sendi'],
        ],
        foot: 'Tugas Akhir S1 · Jan - Agu 2026',
      },
      {
        slug: 'solar-cooling',
        number: '02',
        label: 'CAPSTONE DESIGN · TIM 6 IDP',
        title: 'Sistem Pendingin Otomatis Panel Surya',
        summary: 'Prototipe semprotan air otomatis untuk mendinginkan permukaan panel surya. Menggunakan sensor suhu dan kontrol relay yang menyalakan pompa saat suhu panel mencapai >30°C dan mati saat kembali ke <25°C.',
        tags: ['Kendali Termal', 'Elektronika Tertanam', 'Sensor Suhu', 'Kontrol Relay'],
        metrics: [
          ['>30°C / <25°C', 'Batas Kerja Pompa'],
          ['±0.6°C', 'Akurasi Pembacaan Sensor'],
          ['4 Anggota', 'Tim Capstone IDP'],
        ],
        foot: 'Universitas Telkom · Proyek Capstone (IDP)',
      },
      {
        slug: 'krai-2025',
        number: '03',
        label: 'KOMPETISI ROBOTIKA NASIONAL · TIM ROOBICS',
        title: 'Mekanisme Robot Basket KRAI 2025',
        summary: 'Merancang mekanisme penggiring bola (dribble) dan pelontar pneumatik (shooter) sebagai anggota tim mekanik ROOBICS Universitas Telkom, berhasil lolos hingga Babak Seleksi Nasional di ITB Jatinangor.',
        tags: ['Desain Mekanisme', 'Pneumatik', 'Kompetisi Robotika', 'CAD Modeling'],
        metrics: [
          ['Pneumatik', 'Sistem Pelontar Bola'],
          ['Babak Nasional', 'ITB Jatinangor'],
          ['Tim ROOBICS', 'Divisi Mekanik'],
        ],
        foot: 'Tim Mekanik · ROOBICS (KRAI 2025)',
      },
      {
        slug: 'line-follower',
        number: '04',
        label: 'PROYEK MANDIRI · ELEKTRONIKA & KONTROL',
        title: 'Robot Line Follower',
        summary: 'Robot pelacak garis otomatis yang menggunakan 8 sensor fotodioda + LED, rangkaian komparator pembaca garis, dan motor penggerak differential drive.',
        tags: ['Sensor Fotodioda', 'Differential Drive', 'Rangkaian Komparator', 'Tuning Hardware'],
        metrics: [
          ['8 Sensor', 'Array Fotodioda'],
          ['Komparator', 'Pembaca Jalur Garis'],
          ['Dual Motor DC', 'Penggerak Roda'],
        ],
        foot: 'Proyek Mandiri · 2024',
      },
      {
        slug: 'sumo-robot',
        number: '05',
        label: 'PROYEK MANDIRI · ROBOTIKA KOMPETISI',
        title: 'Robot Sumo Bluetooth',
        summary: 'Robot sumo kelas 1 kg (ukuran 20×20 cm) dengan rangka akrilik dan 4 motor penggerak torsi tinggi, dikendalikan via smartphone melalui koneksi Bluetooth.',
        tags: ['Rangka Akrilik', '4WD Geared Motor', 'Bluetooth Serial', 'Kendali Smartphone'],
        metrics: [
          ['1 kg / 20×20 cm', 'Ukuran Kelas Kompetisi'],
          ['4WD', 'Motor DC Penggerak Roda'],
          ['Bluetooth', 'Kendali Nirkabel'],
        ],
        foot: 'Proyek Mandiri · 2023',
      },
    ],
    experienceSection: {
      eyebrow: '02 / PENGALAMAN MAGANG',
      title: 'Pengalaman belajar dan bekerja di pabrik.',
      subtitle: 'Pengalaman magang industri di PT Promanufacture Indonesia (Formulatrix), belajar langsung di lini produksi elektronika dan bengkel manufaktur.',
      roles: [
        {
          id: 'process-engineering',
          label: 'MAGANG INDUSTRI · SALATIGA',
          title: 'Process Engineering Intern',
          company: 'PT Promanufacture Indonesia (Formulatrix)',
          date: 'Jul 2025 – Sep 2025 · 3 bln',
          location: 'Salatiga, Jawa Tengah, Indonesia',
          bullets: [
            'Mengenal alur kerja lini SMT (Surface Mount Technology) dan menyusun dokumen Work Instruction (WI) untuk perakitan serta wiring kabel.',
            'Mendesain panel stensil PCB menggunakan Easy-PC dan mengekspor file Gerber untuk pembuatan stensil.',
            'Mendesain bracket penunjang produksi menggunakan Onshape dan mencetak part-nya dengan 3D printer.',
          ],
          cta: 'Lihat Surat Keterangan Kerja',
        },
        {
          id: 'mechanical-engineering',
          label: 'MAGANG INDUSTRI · SEMARANG',
          title: 'Mechanical Engineering Intern',
          company: 'PT Promanufacture Indonesia (Formulatrix)',
          date: 'Mei 2021 – Okt 2021 · 6 bln',
          location: 'Semarang, Jawa Tengah, Indonesia',
          bullets: [
            'Mendesain komponen 3D menggunakan Onshape untuk kebutuhan sistem otomasi peralatan laboratorium.',
            'Membuat program toolpath menggunakan OneCNC untuk persiapan proses permesinan CNC.',
            'Membantu pengerjaan fabrikasi langsung di bengkel: 3D printing, deburring, mengikir, menggerinda, bending plat, dan perakitan mekanik.',
          ],
          cta: 'Lihat Surat Keterangan Kerja',
        },
      ],
    },
    educationSection: {
      eyebrow: '04 / PENDIDIKAN',
      title: 'Latar belakang vokasi mekatronika & sarjana teknik elektro.',
      subtitle: 'Menggabungkan keterampilan praktis perbengkelan dari SMK dengan dasar teori kelistrikan dan kontrol dari universitas.',
      telkom: {
        degree: 'Sarjana Teknik Elektro (S.T.) · Universitas Telkom',
        period: 'Sep 2022 - Agu 2026 · Bandung, Indonesia',
        desc: 'Fokus pada Robotika, Mekatronika, dan Sistem Kendali. Mengerjakan Tugas Akhir perancangan prototipe lengan robot manipulator 5-DOF menggunakan cycloidal gearbox berbahan 3D-printed PLA dan sensor closed-loop AS5600.',
        gpaLabel: 'IPK KUMULATIF',
        gpaSub: 'DARI SKALA 4.00',
        courseworkLabel: 'Mata Kuliah Rekayasa Terkait:',
        verifiedNote: 'Terverifikasi dari Transkrip Nilai Resmi & Surat Keterangan Lulus (SKL)',
        cta: 'Lihat Surat Keterangan Lulus (SKL)',
      },
      smk: {
        degree: 'Pendidikan Vokasi Teknik Mekatronika (Program 4 Tahun) · SMKN 7 Semarang',
        period: 'Jul 2018 - Jul 2022 · Semarang, Indonesia',
        desc: 'Pendidikan vokasi teknik 4 tahun dengan fokus pada pneumatik industri, kontrol elektro-pneumatik, dasar otomasi PLC, dan fabrikasi mekanik. Merakit trainer kit elektro-pneumatik sebagai proyek tugas akhir kelulusan.',
        metricVal: '4 TAHUN',
        metricLabel: 'PROGRAM VOKASI',
        metricSub: 'SPESIALISASI MEKATRONIKA',
        curriculumNote: 'Kurikulum Vokasi 4 Tahun termasuk 6 Bulan Praktik Kerja Industri (Prakerin/PKL)',
        cta: 'Lihat Ijazah Resmi (SMK)',
      },
    },
    orgsSection: {
      title: 'Tim Rekayasa & Kegiatan Mahasiswa',
      subtitle: 'Pengalaman kerja tim dalam kompetisi robotika nasional dan pendampingan mahasiswa baru.',
      org1: {
        label: 'ROBOTICS RESEARCH GROUP',
        name: 'Electronics and Intelligence Robotic Research Group (EIRRG)',
        date: '2024 - 2025',
        role: 'Divisi Mekanikal · Tim ROOBICS (Universitas Telkom)',
        desc: 'Anggota tim mekanik ROOBICS yang membantu merancang dan merakit sistem mekanik robot untuk Kontes Robot ABU Indonesia (KRAI 2025), berkontribusi hingga tahap nasional di ITB Jatinangor.',
      },
      org2: {
        label: 'KEPANITIAAN KAMPUS',
        name: 'Panitia PKKMB Universitas Telkom',
        date: '2024',
        role: 'Discipline and Motivation Team (DMT) · Universitas Telkom',
        desc: 'Membantu penegakan tata tertib orientasi, keamanan, dan pengaturan barisan peserta mahasiswa baru selama kegiatan pengenalan kampus.',
      },
      org3: {
        label: 'HIMPUNAN MAHASISWA',
        name: 'Keluarga Mahasiswa Teknik Elektro (KMTE)',
        date: '2023 - 2024',
        role: 'Divisi Mentor · QUOTE 2023 (Universitas Telkom)',
        desc: 'Menjadi mentor pendamping bagi mahasiswa baru Teknik Elektro dalam mengenalkan lingkungan perkuliahan dan adaptasi akademik.',
      },
    },
    certsSection: {
      eyebrow: '04.1 / SERTIFIKASI & KREDENSIAL',
      title: 'Kualifikasi & Sertifikat Resmi',
      subtitle: 'Sertifikat kompetensi resmi dan catatan partisipasi kompetisi.',
      cert1: {
        label: 'SERTIFIKASI INDUSTRI',
        title: 'Pneumatic System Maintenance Technician',
        issuer: 'TÜV Rheinland Group & FESTO Didactic',
        period: 'Nov 2021 · Masa Berlaku Seumur Hidup',
        desc: 'Sertifikat kompetensi dari PersCert TÜV dan FESTO Didactic yang menguji keterampilan teknis dalam perawatan sistem pneumatik industri, rangkaian katup, dan elektro-pneumatik.',
        cta: 'Klik untuk melihat sertifikat resmi',
      },
      cert2: {
        label: 'KOMPETISI ROBOTIKA NASIONAL',
        title: 'Peserta - ABU Robocon Indonesia (KRAI 2025)',
        issuer: 'Belmawa Kemdiktisaintek & ITB · Tim ROOBICS',
        period: 'Jul 2025',
        desc: 'Sertifikat peserta resmi mewakili Universitas Telkom (Tim ROOBICS) pada Babak Seleksi Nasional Kontes Robot ABU Indonesia 2025.',
        cta: 'Klik untuk melihat sertifikat resmi',
      },
      cert3: {
        label: 'KEMAHIRAN BAHASA INGGRIS',
        title: 'English Proficiency Test (EPrT)',
        issuer: 'Skor Total: 450 (Listening: 47, Grammar: 41, Reading: 47)',
        period: 'Jun 2026',
        desc: 'Sertifikat kemahiran bahasa Inggris dari Pusat Bahasa Universitas Telkom untuk pemahaman teknis.',
        cta: 'Klik untuk melihat sertifikat resmi',
      },
    },
    skillsSection: {
      eyebrow: '03 / ALAT & DISIPLIN',
      title: 'Software & alat kerja teknis.',
      subtitle: 'Alat dan software yang pernah saya gunakan langsung saat riset tugas akhir, magang di Formulatrix, dan proyek robotika. Hanya alat yang terkonfirmasi yang dicantumkan.',
    },
    contactSection: {
      eyebrow: '05 / KONTAK',
      title: 'Senang belajar, siap berkontribusi.',
      desc: 'Sebagai lulusan baru Teknik Elektro dengan dasar praktis mekatronika dari SMK, saya memiliki pengalaman merakit langsung berbagai prototipe fisik. Saya siap bekerja keras, cepat belajar hal baru, dan sangat terbuka untuk dibimbing oleh rekan kerja yang lebih berpengalaman.',
      cvButton: 'Curriculum Vitae',
      channels: {
        email: 'EMAIL',
        linkedin: 'LINKEDIN',
        whatsapp: 'WHATSAPP',
        location: 'Semarang, Indonesia',
      },
    },
    footer: {
      title: 'Bayu Aji Trisasongko',
      label: 'PORTOFOLIO PRIBADI / 2026',
      backToTop: 'KEMBALI KE ATAS ↑',
    },
    modal: {
      close: 'Tutup',
      download: 'Unduh Dokumen',
    },
  },
};

const LanguageContext = createContext({
  lang: 'en',
  setLang: () => {},
  t: translations.en,
});

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    try {
      const saved = localStorage.getItem('portfolio_lang');
      if (saved === 'id' || saved === 'en') return saved;
    } catch (e) {
      // ignore
    }
    return 'en';
  });

  const setLang = (nextLang) => {
    setLangState(nextLang);
    try {
      localStorage.setItem('portfolio_lang', nextLang);
    } catch (e) {
      // ignore
    }
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const t = translations[lang] || translations.en;

  return React.createElement(LanguageContext.Provider, { value: { lang, setLang, t } }, children);
}

export function useLang() {
  const context = useContext(LanguageContext);
  if (!context) {
    return { lang: 'en', setLang: () => {}, t: translations.en };
  }
  return context;
}
