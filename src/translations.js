/**
 * translations.js
 * Master translation dictionary for Bayu Aji Trisasongko's Portfolio Website.
 * Contains authentic, natural, professional English and Indonesian engineering translations.
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
      title: 'Tangible prototypes, competition systems & research engineering.',
      subtitle: 'A collection of 5 projects, covering my final project, national competition, capstone design, and independent builds.',
      footnote: 'Engineering documentation backed by official Telkom University thesis (Buku TA), Capstone design, and national robotics competition records.',
      exploreMore: 'Explore more projects',
      viewCaseStudy: 'View Case Study',
    },
    projects: [
      {
        slug: 'manipulator',
        number: '01',
        label: 'FINAL CAPSTONE THESIS · 5-DOF ROBOTIC MANIPULATOR',
        title: '5-DOF Robotic Manipulator Arm with Closed-Loop Control',
        summary: 'Designed and built an articulated arm for hospital patient services using custom PLA 3D-printed cycloidal gearboxes and STM32F411 microcontroller. Integrated AS5600 magnetic encoders for closed-loop control to eliminate joint backlash.',
        tags: ['Onshape CAD', 'STM32F411', 'Cycloidal Gearbox', 'Closed-Loop Control', '3D Printing PLA', 'Inverse Kinematics'],
        metrics: [
          ['79.8%', 'Accuracy Improvement'],
          ['250-1000g', 'Rated Payload'],
          ['5-DOF', 'Freedom Axes'],
        ],
        foot: 'Telkom University · Jan - Aug 2026',
      },
      {
        slug: 'solar-cooling',
        number: '02',
        label: 'CAPSTONE DESIGN · AUTOMATION & THERMAL CONTROL',
        title: 'Automatic Solar Panel Cooling System',
        summary: 'Automated cooling setup to maintain photovoltaic panels below 30°C. Engineered sensor instrumentation and relay control logic to prevent thermal efficiency degradation.',
        tags: ['Embedded Control', 'Sensor Interfacing', 'Relay Switching', 'Thermal Automation', 'Data Acquisition', 'Electronics'],
        metrics: [
          ['>30°C / <25°C', 'Trigger Threshold'],
          ['±0.6°C', 'Sensor Accuracy'],
          ['4 Members', 'IDP Team 6'],
        ],
        foot: 'Telkom University · Capstone Design',
      },
      {
        slug: 'krai-2025',
        number: '03',
        label: 'NATIONAL ROBOTICS COMPETITION · KRAI 2025',
        title: 'Basketball Competition Robot Mechanisms',
        summary: 'Engineered pneumatic shooting and precision dribble mechanisms for Team ROOBICS representing Telkom University, successfully advancing to the National Stage at ITB Jatinangor.',
        tags: ['Pneumatic Actuation', 'CAD Mechanism Design', 'Tournament Prototyping', 'EIRRG Telkom', 'Rapid Fabrication'],
        metrics: [
          ['100%', 'Pneumatics Actuation'],
          ['National Stage', 'ITB Jatinangor'],
          ['EIRRG', 'Research Lab'],
        ],
        foot: 'Mechanical Team · ROOBICS (KRAI 2025)',
      },
      {
        slug: 'line-follower',
        number: '04',
        label: 'AUTONOMOUS ROBOTICS · EMBEDDED CONTROL',
        title: 'Autonomous Line Follower Robot',
        summary: 'Built an autonomous line-tracking robot featuring an 8-channel photodiode sensor bar and differential drive for fast, accurate track following.',
        tags: ['Photodiode Array', 'Differential Drive', 'PID Control Logic', 'Hardware Tuning', 'Embedded Systems'],
        metrics: [
          ['8-Channel', 'Photodiode Array'],
          ['PID', 'Control Loop'],
          ['Dual DC', 'High-Speed Motors'],
        ],
        foot: 'Independent Project · 2024',
      },
      {
        slug: 'sumo-robot',
        number: '05',
        label: 'COMPETITIVE ROBOTICS · HIGH-TORQUE 4WD',
        title: 'Bluetooth-Controlled Sumo Robot',
        summary: 'Constructed a 1 kg competitive sumo robot with a custom acrylic wedge chassis and 4 high-torque geared DC motors controlled wirelessly via smartphone.',
        tags: ['Acrylic Wedge Chassis', '4WD Geared Motors', 'Bluetooth Serial', 'Power Delivery', 'Mobile Control'],
        metrics: [
          ['1 kg / 20cm', 'RC Class Limit'],
          ['4WD', 'Planetary Geared'],
          ['Bluetooth', 'Wireless Control'],
        ],
        foot: 'Independent Project · 2023',
      },
    ],
    experienceSection: {
      eyebrow: '02 / INDUSTRIAL EXPERIENCE',
      title: 'Hands-on work in production environments.',
      subtitle: 'Internship roles at PT Promanufacture Indonesia (Formulatrix), contributing to precision hardware, manufacturing documentation, and electronics assembly.',
      roles: [
        {
          id: 'process-engineering',
          label: 'INTERNSHIP ROLE · SALATIGA',
          title: 'Process Engineering Intern',
          company: 'PT Promanufacture Indonesia (Formulatrix)',
          date: 'Jul 2025 – Sep 2025 · 3 mos',
          location: 'Salatiga, Central Java, Indonesia',
          bullets: [
            'Supported SMT (Surface Mount Technology) line operations: Stencil printing, Pick and Place, Reflow soldering, and Optical Inspection.',
            'Drafted and updated Work Instructions (WI) for assembly and wiring procedures to establish standardized manufacturing guidelines.',
            'Designed PCB stencil panels in Easy-PC and exported Gerber files for vendor fabrication.',
            'Designed production brackets in Onshape and produced 3D-printed parts.',
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
            'Designed Onshape components for automated laboratory machinery complying with industrial manufacturing standards.',
            'Generated CNC toolpaths using OneCNC for machining operations.',
            'Hands-on fabrication: 3D printing, sheet metal bending, deburring, and mechanical assembly.',
          ],
          cta: 'View Letter of Work Certificate',
        },
      ],
    },
    educationSection: {
      eyebrow: '04 / ACADEMIC CREDENTIALS & EDUCATION',
      title: 'Strong vocational foundation & university engineering degree.',
      subtitle: 'Combines practical mechatronics trade skills with rigorous electrical engineering and robotics theory.',
      telkom: {
        degree: 'Bachelor of Science in Electrical Engineering · Telkom University',
        period: 'Sep 2022 - Aug 2026 · Bandung, Indonesia',
        desc: 'Specialization in Robotics, Mechatronics & Embedded Control Systems. Completed Final Capstone Thesis on a 5-DOF Robotic Manipulator Arm with PLA 3D-printed cycloidal gearboxes and closed-loop magnetic sensing.',
        gpaLabel: 'CUMULATIVE GPA',
        gpaSub: 'OUT OF 4.00 SCALE',
        courseworkLabel: 'Relevant Engineering Coursework:',
        verifiedNote: 'Verified from Official Transcript & Certificate of Graduation',
        cta: 'View Certificate of Graduation (SKL)',
      },
      smk: {
        degree: 'Vocational High School in Mechatronics Engineering · SMKN 7 Semarang',
        period: 'Jul 2018 - Jul 2022 · Semarang, Indonesia',
        desc: '4-year technical mechatronics program focusing on industrial pneumatics, electro-pneumatic control systems, PLC automation, and mechanical fabrication. Built an electro-pneumatic training kit as final vocational project.',
        metricVal: '4-YEAR',
        metricLabel: 'VOCATIONAL DIPLOMA',
        metricSub: 'MECHATRONICS SPECIALIST',
        curriculumNote: '4-Year Vocational Curriculum including 6 months Industrial Internship (Prakerin)',
        cta: 'View Official Diploma (Ijazah)',
      },
    },
    orgsSection: {
      title: 'Student Leadership & Engineering Research Groups',
      subtitle: 'Collaborative experiences in national robotics competition and student mentorship.',
      org1: {
        label: 'ROBOTICS RESEARCH GROUP',
        name: 'Electronics and Intelligence Robotic Research Group (EIRRG)',
        date: '2024 - 2025',
        role: 'Mechanical Division · Team ROOBICS (Telkom University)',
        desc: 'Core mechanical team member designing and fabricating robotic systems for Kontes Robot ABU Indonesia (KRAI 2025), contributing directly to tournament staging and qualifying for the National Finals at ITB Jatinangor.',
      },
      org2: {
        label: 'STUDENT ORIENTATION COMMITTEE',
        name: 'Panitia PKKMB Universitas Telkom',
        date: '2024',
        role: 'Discipline and Motivation Team (DMT) · Telkom University',
        desc: 'Responsible for freshmen orientation protocol execution, participant discipline, crowd management, security enforcement, and smooth operational mobilization throughout campus orientation programs.',
      },
      org3: {
        label: 'DEPARTMENT STUDENT GUILD',
        name: 'Keluarga Mahasiswa Teknik Elektro (KMTE)',
        date: '2023 - 2024',
        role: 'Mentor Division · QUOTE 2023 (Telkom University)',
        desc: 'Served as academic and departmental mentor in the student cadre formation program, guiding incoming Electrical Engineering freshmen through curriculum orientation, soft-skills development, and university adaptation.',
      },
    },
    certsSection: {
      eyebrow: '04.1 / CERTIFICATIONS & CREDENTIALS',
      title: 'Verified Industry Qualifications',
      subtitle: 'Officially certified technical competencies and professional qualifications.',
      cert1: {
        label: 'INTERNATIONAL INDUSTRY CERTIFICATION',
        title: 'Pneumatic System Maintenance Technician',
        issuer: 'TÜV Rheinland Group & FESTO Didactic',
        period: 'Nov 2021 · Unlimited Validity',
        desc: 'Personnel Certification Body PersCert TÜV-certified qualification proving technical competency in pneumatic system maintenance, valve circuits, and electro-pneumatic automation.',
        cta: 'Click to view official certificate',
      },
      cert2: {
        label: 'NATIONAL ROBOTICS COMPETITION',
        title: 'Contestant - ABU Robocon Indonesia (KRAI 2025)',
        issuer: 'Belmawa Kemdiktisaintek & ITB · Team ROOBICS',
        period: 'Jul 2025',
        desc: 'Official contestant certificate representing Telkom University in the National Selection stage of Kontes Robot ABU Indonesia 2025.',
        cta: 'Click to view official certificate',
      },
      cert3: {
        label: 'LANGUAGE PROFICIENCY',
        title: 'English Proficiency Test (EPrT)',
        issuer: 'Total Score: 450 (Listening: 47, Grammar: 41, Reading: 47)',
        period: 'Jun 2026',
        desc: 'Official proficiency certificate issued by Telkom University Language Center validating working English comprehension for technical and professional environments.',
        cta: 'Click to view official certificate',
      },
    },
    skillsSection: {
      eyebrow: '03 / CAPABILITIES & TOOLS',
      title: 'Engineering stack & production ecosystem.',
      subtitle: 'Tools and disciplines applied across thesis research, Formulatrix internships, and personal robotics projects. Only software confirmed in source documents is listed.',
    },
    contactSection: {
      eyebrow: '05 / GET IN TOUCH',
      title: 'Eager to learn, ready to contribute.',
      desc: 'As a fresh electrical engineering graduate, I bring solid hands-on fundamentals in mechatronics and prototyping—along with an eager mindset to learn, adapt, and be mentored by experienced teams. Actively seeking entry-level engineering roles in robotics, manufacturing, or hardware development.',
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
      viewProjects: 'View Projects',
      cv: 'Curriculum Vitae',
    },
    projectsSection: {
      eyebrow: '01 / PROYEK PILIHAN',
      title: 'Prototipe fisik, sistem kompetisi & rekayasa riset.',
      subtitle: 'Koleksi 5 proyek meliputi tugas akhir sarjana, kompetisi robotika nasional, capstone design terintegrasi, dan proyek mandiri.',
      footnote: 'Dokumentasi rekayasa didukung data resmi Buku Tugas Akhir Universitas Telkom, proyek Capstone Design, dan catatan kompetisi robotika nasional.',
      exploreMore: 'Jelajahi lebih banyak proyek',
      viewCaseStudy: 'Lihat Studi Kasus',
    },
    projects: [
      {
        slug: 'manipulator',
        number: '01',
        label: 'TUGAS AKHIR SARJANA · ROBOT MANIPULATOR 5-DOF',
        title: 'Robot Manipulator 5-DOF dengan Kendali Closed-Loop',
        summary: 'Merancang dan merealisasikan robot manipulator 5-DOF untuk pelayanan pasien rumah sakit menggunakan cycloidal gearbox 3D-printed dan mikrokontroler STM32F411. Mengintegrasikan magnetic encoder AS5600 untuk kendali closed-loop guna mengeliminasi backlash pada pergerakan sendi.',
        tags: ['Onshape CAD', 'STM32F411', 'Cycloidal Gearbox', 'Closed-Loop Control', '3D Printing PLA', 'Inverse Kinematics'],
        metrics: [
          ['79.8%', 'Peningkatan Akurasi'],
          ['250–1.000 g', 'Kapasitas Payload'],
          ['5-DOF', 'Derajat Kebebasan (DOF)'],
        ],
        foot: 'Universitas Telkom · Jan - Agu 2026',
      },
      {
        slug: 'solar-cooling',
        number: '02',
        label: 'CAPSTONE DESIGN · OTOMASI & KONTROL TERMAL',
        title: 'Sistem Pendingin Otomatis Panel Surya',
        summary: 'Sistem pendingin otomatis untuk menjaga suhu permukaan panel fotovoltaik (PV) tetap di bawah 30°C. Mengembangkan instrumentasi sensor dan logika kontrol relay untuk mencegah degradasi efisiensi termal akibat panas berlebih.',
        tags: ['Embedded Control', 'Sensor Interfacing', 'Relay Switching', 'Thermal Automation', 'Data Acquisition', 'Electronics'],
        metrics: [
          ['>30°C / <25°C', 'Threshold Suhu Kerja'],
          ['±0.6°C', 'Akurasi Sensor'],
          ['4 Anggota', 'Tim Capstone IDP'],
        ],
        foot: 'Universitas Telkom · Proyek Capstone',
      },
      {
        slug: 'krai-2025',
        number: '03',
        label: 'KOMPETISI ROBOTIKA NASIONAL · KRAI 2025',
        title: 'Mekanisme Robot Basket KRAI 2025',
        summary: 'Merancang mekanisme shooter pneumatik dan dribble presisi untuk Tim ROOBICS Universitas Telkom, berhasil lolos dan bertanding di Babak Seleksi Nasional di ITB Jatinangor.',
        tags: ['Pneumatic Actuation', 'CAD Mechanism Design', 'Tournament Prototyping', 'EIRRG Telkom', 'Rapid Fabrication'],
        metrics: [
          ['100%', 'Aktuasi Pneumatik'],
          ['Babak Nasional', 'ITB Jatinangor'],
          ['EIRRG Lab', 'Riset Robotika'],
        ],
        foot: 'Tim Mekanikal · ROOBICS (KRAI 2025)',
      },
      {
        slug: 'line-follower',
        number: '04',
        label: 'ROBOTIKA OTONOM · EMBEDDED CONTROL',
        title: 'Robot Line Follower Otonom',
        summary: 'Membangun robot line follower otonom berbasis sensor array 8-channel photodiode dan sistem penggerak differential drive untuk pelacakan jalur berkecepatan tinggi yang presisi.',
        tags: ['Photodiode Array', 'Differential Drive', 'PID Control Logic', 'Hardware Tuning', 'Embedded Systems'],
        metrics: [
          ['8-Channel', 'Sensor Array'],
          ['PID Control', 'Kontrol Kemudi'],
          ['Dual High-Speed', 'Motor DC Penggerak'],
        ],
        foot: 'Proyek Mandiri · 2024',
      },
      {
        slug: 'sumo-robot',
        number: '05',
        label: 'ROBOTIKA KOMPETITIF · HIGH-TORQUE 4WD',
        title: 'Robot Sumo dengan Kendali Bluetooth',
        summary: 'Merancang robot sumo kompetisi kelas 1 kg dengan chassis wedge akrilik dan 4 motor DC planetary high-torque yang dikendalikan secara nirkabel via smartphone.',
        tags: ['Acrylic Wedge Chassis', '4WD Geared Motors', 'Bluetooth Serial', 'Power Delivery', 'Mobile Control'],
        metrics: [
          ['1 kg / 20cm', 'Batas Regulasi Kelas'],
          ['4WD', 'Planetary Geared Motor'],
          ['Bluetooth', 'Wireless Telemetry'],
        ],
        foot: 'Proyek Mandiri · 2023',
      },
    ],
    experienceSection: {
      eyebrow: '02 / PENGALAMAN INDUSTRI',
      title: 'Pengalaman langsung di lingkungan manufaktur industri.',
      subtitle: 'Pengalaman magang di PT Promanufacture Indonesia (Formulatrix), berkontribusi pada perangkat keras presisi, dokumentasi manufaktur, dan perakitan lini elektronika.',
      roles: [
        {
          id: 'process-engineering',
          label: 'MAGANG INDUSTRI · SALATIGA',
          title: 'Process Engineering Intern',
          company: 'PT Promanufacture Indonesia (Formulatrix)',
          date: 'Jul 2025 – Sep 2025 · 3 bln',
          location: 'Salatiga, Jawa Tengah, Indonesia',
          bullets: [
            'Mendukung operasional lini SMT (Surface Mount Technology): solder paste stencil printing, mesin pick-and-place, reflow soldering, dan Automated Optical Inspection (AOI).',
            'Menyusun dan memperbarui Work Instructions (WI) serta Standard Operating Procedure (SOP) untuk perakitan mekanikal dan wiring.',
            'Mendesain panel stensil PCB menggunakan Easy-PC dan mengekspor file Gerber untuk fabrikasi vendor.',
            'Mendesain fixture dan bracket produksi di Onshape serta memfabrikasi prototipe menggunakan 3D printing.',
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
            'Mendesain komponen 3D CAD mekanikal presisi di Onshape sesuai standar manufaktur industri.',
            'Membuat program CNC toolpath menggunakan OneCNC untuk persiapan proses pemesinan.',
            'Terlibat langsung dalam fabrikasi bengkel: 3D printing, sheet metal bending, deburring, dan perakitan mekanikal presisi.',
          ],
          cta: 'Lihat Surat Keterangan Kerja',
        },
      ],
    },
    educationSection: {
      eyebrow: '04 / PENDIDIKAN & KUALIFIKASI',
      title: 'Fondasi vokasi yang kokoh & gelar sarjana teknik.',
      subtitle: 'Memadukan keterampilan terapan mekatronika dengan landasan teori teknik elektro dan robotika yang komprehensif.',
      telkom: {
        degree: 'Sarjana Teknik Elektro (S.T.) · Universitas Telkom',
        period: 'Sep 2022 - Agu 2026 · Bandung, Indonesia',
        desc: 'Spesialisasi di bidang Robotika, Mekatronika & Sistem Kendali. Menyelesaikan Tugas Akhir Sarjana perancangan Robot Manipulator 5-DOF dengan cycloidal gearbox 3D-printed dan kendali closed-loop magnetic encoder AS5600.',
        gpaLabel: 'IPK KUMULATIF',
        gpaSub: 'DARI SKALA 4.00',
        courseworkLabel: 'Mata Kuliah Rekayasa Terkait:',
        verifiedNote: 'Terverifikasi dari Transkrip Nilai Resmi & Surat Keterangan Lulus (SKL)',
        cta: 'Lihat Surat Keterangan Lulus (SKL)',
      },
      smk: {
        degree: 'Pendidikan Vokasi Teknik Mekatronika (4 Tahun) · SMKN 7 Semarang',
        period: 'Jul 2018 - Jul 2022 · Semarang, Indonesia',
        desc: 'Program vokasi teknik 4 tahun berfokus pada sistem pneumatik industri, kontrol elektro-pneumatik, otomasi PLC, dan fabrikasi mekanikal presisi. Merancang trainer kit elektro-pneumatik sebagai proyek tugas akhir vokasi.',
        metricVal: '4 TAHUN',
        metricLabel: 'PROGRAM VOKASI',
        metricSub: 'SPESIALISASI MEKATRONIKA',
        curriculumNote: 'Kurikulum Vokasi 4 Tahun termasuk 6 Bulan Praktik Kerja Industri (Prakerin/PKL)',
        cta: 'Lihat Ijazah Resmi (SMK)',
      },
    },
    orgsSection: {
      title: 'Tim Rekayasa & Kepemimpinan Mahasiswa',
      subtitle: 'Pengalaman kolaboratif dalam kompetisi robotika nasional dan pembinaan mahasiswa.',
      org1: {
        label: 'ROBOTICS RESEARCH GROUP',
        name: 'Electronics and Intelligence Robotic Research Group (EIRRG)',
        date: '2024 - 2025',
        role: 'Divisi Mekanikal · Tim ROOBICS (Universitas Telkom)',
        desc: 'Anggota inti tim mekanik yang merancang dan memfabrikasi sistem mekanikal robot untuk Kontes Robot ABU Indonesia (KRAI 2025), berkontribusi langsung hingga lolos ke Babak Final Nasional di ITB Jatinangor.',
      },
      org2: {
        label: 'KEPANITIAAN KAMPUS',
        name: 'Panitia PKKMB Universitas Telkom',
        date: '2024',
        role: 'Discipline and Motivation Team (DMT) · Universitas Telkom',
        desc: 'Bertanggung jawab atas penegakan protokol orientasi mahasiswa baru, kedisiplinan peserta, crowd management, keamanan, serta kelancaran mobilisasi selama masa orientasi kampus.',
      },
      org3: {
        label: 'HIMPUNAN MAHASISWA',
        name: 'Keluarga Mahasiswa Teknik Elektro (KMTE)',
        date: '2023 - 2024',
        role: 'Divisi Mentor · QUOTE 2023 (Universitas Telkom)',
        desc: 'Berperan sebagai mentor akademik dan kaderisasi jurusan, membimbing mahasiswa baru Teknik Elektro dalam orientasi kurikulum, pengembangan soft skill, dan adaptasi perkuliahan.',
      },
    },
    certsSection: {
      eyebrow: '04.1 / SERTIFIKASI & KREDENSIAL RESMI',
      title: 'Kualifikasi Industri Terverifikasi',
      subtitle: 'Kompetensi teknis dan kualifikasi profesional bersertifikat resmi.',
      cert1: {
        label: 'SERTIFIKASI INDUSTRI INTERNASIONAL',
        title: 'Pneumatic System Maintenance Technician',
        issuer: 'TÜV Rheinland Group & FESTO Didactic',
        period: 'Nov 2021 · Masa Berlaku Seumur Hidup',
        desc: 'Sertifikasi kompetensi resmi PersCert TÜV dan FESTO Didactic membuktikan kualifikasi teknis dalam pemeliharaan sistem pneumatik industri, valve circuitry, dan otomasi elektro-pneumatik.',
        cta: 'Klik untuk melihat sertifikat resmi',
      },
      cert2: {
        label: 'KOMPETISI ROBOTIKA NASIONAL',
        title: 'Contestant - ABU Robocon Indonesia (KRAI 2025)',
        issuer: 'Belmawa Kemdiktisaintek & ITB · Tim ROOBICS',
        period: 'Jul 2025',
        desc: 'Sertifikat resmi peserta seleksi tingkat nasional Kontes Robot ABU Indonesia (KRAI 2025) mewakili Universitas Telkom (Tim ROOBICS).',
        cta: 'Klik untuk melihat sertifikat resmi',
      },
      cert3: {
        label: 'KEMAHIRAN BAHASA INGGRIS',
        title: 'English Proficiency Test (EPrT)',
        issuer: 'Skor Total: 450 (Listening: 47, Grammar: 41, Reading: 47)',
        period: 'Jun 2026',
        desc: 'Sertifikat kemahiran bahasa Inggris resmi dari Telkom University Language Center untuk lingkungan kerja teknis dan profesional internasional.',
        cta: 'Klik untuk melihat sertifikat resmi',
      },
    },
    skillsSection: {
      eyebrow: '03 / KEAHLIAN & TECH STACK',
      title: 'Engineering tech stack & ekosistem produksi.',
      subtitle: 'Alat dan disiplin yang diterapkan sepanjang riset tugas akhir, magang Formulatrix, dan proyek robotika. Hanya software yang terkonfirmasi dalam dokumen resmi yang dicantumkan.',
    },
    contactSection: {
      eyebrow: '05 / KONTAK',
      title: 'Antusias belajar, siap berkontribusi nyata.',
      desc: 'Sebagai lulusan baru Teknik Elektro dengan dasar kuat di bidang mekatronika dan prototyping, saya memiliki antusiasme tinggi untuk terus belajar, cepat beradaptasi, dan siap dibimbing oleh tim berpengalaman. Terbuka dan siap berkontribusi langsung pada posisi fresh graduate / junior engineer di bidang robotika, sistem otomasi, manufaktur, maupun hardware development.',
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
      label: 'PORTOFOLIO REKAYASA PRIBADI / 2026',
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
