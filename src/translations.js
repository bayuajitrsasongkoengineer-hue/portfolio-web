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
      available: 'TERSEDIA UNTUK BEKERJA',
    },
    hero: {
      viewProjects: 'Lihat Proyek',
      cv: 'Curriculum Vitae',
    },
    projectsSection: {
      eyebrow: '01 / PROYEK PILIHAN',
      title: 'Purwarupa fisik, sistem kompetisi & rekayasa riset.',
      subtitle: 'Koleksi 5 proyek meliputi tugas akhir sarjana, kompetisi nasional, perancangan terintegrasi, dan proyek mandiri.',
      footnote: 'Dokumentasi rekayasa didukung data resmi Buku Tugas Akhir Universitas Telkom, proyek Capstone, dan catatan kompetisi robotika nasional.',
      exploreMore: 'Jelajahi lebih banyak proyek',
      viewCaseStudy: 'Lihat Studi Kasus',
    },
    projects: [
      {
        slug: 'manipulator',
        number: '01',
        label: 'TUGAS AKHIR SARJANA · ROBOT MANIPULATOR 5-DOF',
        title: 'Lengan Robot Manipulator 5-DOF dengan Kendali Loop Tertutup',
        summary: 'Merancang dan merealisasikan lengan robot manipulator untuk pelayanan pasien rumah sakit menggunakan girboks sikloidal 3D-print dan mikrokontroler STM32F411. Mengintegrasikan encoder magnetik AS5600 untuk kendali loop tertutup guna mengeliminasi celah gerak (backlash).',
        tags: ['Onshape CAD', 'STM32F411', 'Cycloidal Gearbox', 'Closed-Loop Control', '3D Printing PLA', 'Inverse Kinematics'],
        metrics: [
          ['79.8%', 'Peningkatan Akurasi'],
          ['250-1000g', 'Kapasitas Beban'],
          ['5-DOF', 'Sumbu Gerak Sendi'],
        ],
        foot: 'Universitas Telkom · Jan - Agu 2026',
      },
      {
        slug: 'solar-cooling',
        number: '02',
        label: 'PROYEK CAPSTONE · OTOMASI & KENDALI TERMAL',
        title: 'Sistem Pendingin Otomatis Panel Surya',
        summary: 'Sistem pendingin otomatis untuk menjaga suhu panel fotovoltaik di bawah 30°C. Mengembangkan instrumentasi sensor dan logika kontrol relai untuk mencegah penurunan efisiensi termal akibat panas berlebih.',
        tags: ['Embedded Control', 'Sensor Interfacing', 'Relay Switching', 'Thermal Automation', 'Data Acquisition', 'Electronics'],
        metrics: [
          ['>30°C / <25°C', 'Batas Suhu Kerja'],
          ['±0.6°C', 'Akurasi Sensor'],
          ['4 Anggota', 'Tim Capstone IDP'],
        ],
        foot: 'Universitas Telkom · Proyek Capstone',
      },
      {
        slug: 'krai-2025',
        number: '03',
        label: 'KOMPETISI ROBOTIKA NASIONAL · KRAI 2025',
        title: 'Mekanisme Robot Kompetisi Basket (KRAI 2025)',
        summary: 'Merancang mekanisme penembak pneumatik dan penggiring bola presisi untuk Tim ROOBICS Universitas Telkom, berhasil lolos ke Babak Seleksi Nasional di ITB Jatinangor.',
        tags: ['Pneumatic Actuation', 'CAD Mechanism Design', 'Tournament Prototyping', 'EIRRG Telkom', 'Rapid Fabrication'],
        metrics: [
          ['100%', 'Aktuasi Pneumatik'],
          ['Tahap Nasional', 'ITB Jatinangor'],
          ['Lab EIRRG', 'Riset Robotika'],
        ],
        foot: 'Tim Mekanikal · ROOBICS (KRAI 2025)',
      },
      {
        slug: 'line-follower',
        number: '04',
        label: 'ROBOTIKA OTONOM · KENDALI TERTANAM',
        title: 'Robot Line Follower Otonom',
        summary: 'Membangun robot pelacak lintasan otonom dengan barisan 8 sensor fotodioda dan penggerak diferensial untuk pelacakan garis yang cepat dan presisi.',
        tags: ['Photodiode Array', 'Differential Drive', 'PID Control Logic', 'Hardware Tuning', 'Embedded Systems'],
        metrics: [
          ['8 Sensor', 'Array Fotodioda'],
          ['Kendali PID', 'Pelacak Jalur'],
          ['Dual DC', 'Motor Berkecepatan Tinggi'],
        ],
        foot: 'Proyek Mandiri · 2024',
      },
      {
        slug: 'sumo-robot',
        number: '05',
        label: 'ROBOTIKA KOMPETITIF · PENGGERAK 4WD TORSI TINGGI',
        title: 'Robot Sumo dengan Kendali Bluetooth',
        summary: 'Merancang robot sumo kompetisi kelas 1 kg dengan sasis baji akrilik dan 4 motor DC torsi tinggi yang dikendalikan secara nirkabel melalui smartphone.',
        tags: ['Acrylic Wedge Chassis', '4WD Geared Motors', 'Bluetooth Serial', 'Power Delivery', 'Mobile Control'],
        metrics: [
          ['1 kg / 20cm', 'Batas Kelas RC'],
          ['4WD', 'Gearbox Planetary'],
          ['Bluetooth', 'Kendali Nirkabel'],
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
            'Mendukung operasional lini Surface Mount Technology (SMT): pencetakan stensil pasta solder, mesin pick-and-place, penyolderan reflow, dan inspeksi optik otomatis (AOI).',
            'Menyusun dan memperbarui Work Instructions (WI) standar prosedur perakitan mekanikal dan pengkabelan.',
            'Mendesain panel stensil PCB menggunakan Easy-PC dan mengekspor file Gerber untuk fabrikasi vendor.',
            'Mendesain bracket alat bantu produksi di Onshape dan memfabrikasi komponen menggunakan 3D printing.',
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
            'Mendesain pemodelan 3D komponen mekanikal presisi di Onshape sesuai standar manufaktur industri.',
            'Membuat program lintasan pahat CNC (toolpath) menggunakan OneCNC untuk proses pemesinan.',
            'Fabrikasi langsung di bengkel: 3D printing, pengerjaan sheet metal bending, deburring, dan perakitan mekanikal presisi.',
          ],
          cta: 'Lihat Surat Keterangan Kerja',
        },
      ],
    },
    educationSection: {
      eyebrow: '04 / KREDENSIAL AKADEMIK & PENDIDIKAN',
      title: 'Fondasi vokasi yang kokoh & gelar sarjana teknik.',
      subtitle: 'Memadukan keterampilan terapan mekatronika dengan landasan teori teknik elektro dan robotika yang komprehensif.',
      telkom: {
        degree: 'Sarjana Teknik Elektro (S.T.) · Universitas Telkom',
        period: 'Sep 2022 - Agu 2026 · Bandung, Indonesia',
        desc: 'Spesialisasi di bidang Robotika, Mekatronika & Sistem Kendali. Menyelesaikan Tugas Akhir Sarjana berupa Lengan Robot Manipulator 5-DOF dengan girboks sikloidal 3D-printed dan kendali loop tertutup sensor magnetik AS5600.',
        gpaLabel: 'IPK KUMULATIF',
        gpaSub: 'DARI SKALA 4.00',
        courseworkLabel: 'Mata Kuliah Rekayasa Terkait:',
        verifiedNote: 'Terverifikasi dari Transkrip Nilai Resmi & Surat Keterangan Lulus (SKL)',
        cta: 'Lihat Surat Keterangan Lulus (SKL)',
      },
      smk: {
        degree: 'Pendidikan Vokasi Teknik Mekatronika (4 Tahun) · SMKN 7 Semarang',
        period: 'Jul 2018 - Jul 2022 · Semarang, Indonesia',
        desc: 'Program kejuruan teknik 4 tahun dengan fokus pada sistem pneumatik industri, kontrol elektro-pneumatik, otomasi PLC, dan fabrikasi mekanik. Merancang trainer kit elektro-pneumatik edukatif sebagai proyek akhir vokasi.',
        metricVal: '4 TAHUN',
        metricLabel: 'PROGRAM VOKASI',
        metricSub: 'SPESIALISASI MEKATRONIKA',
        curriculumNote: 'Kurikulum Vokasi 4 Tahun termasuk 6 Bulan Praktik Kerja Lapangan (PKL/Prakerin)',
        cta: 'Lihat Ijazah Resmi (SMK)',
      },
    },
    orgsSection: {
      title: 'Kepemimpinan Mahasiswa & Grup Riset Rekayasa',
      subtitle: 'Pengalaman kolaboratif dalam kompetisi robotika nasional dan pembinaan mahasiswa.',
      org1: {
        label: 'GRUP RISET ROBOTIKA',
        name: 'Electronics and Intelligence Robotic Research Group (EIRRG)',
        date: '2024 - 2025',
        role: 'Divisi Mekanikal · Tim ROOBICS (Universitas Telkom)',
        desc: 'Anggota inti tim mekanik yang merancang dan memfabrikasi sistem mekanikal robot untuk Kontes Robot ABU Indonesia (KRAI 2025), berkontribusi langsung hingga lolos ke Babak Final Nasional di ITB Jatinangor.',
      },
      org2: {
        label: 'KEPANITIAAN MAHASISWA',
        name: 'Panitia PKKMB Universitas Telkom',
        date: '2024',
        role: 'Tim Kedisiplinan & Motivasi (DMT) · Universitas Telkom',
        desc: 'Bertanggung jawab atas penegakan protokol orientasi mahasiswa baru, kedisiplinan peserta, manajemen massa, keamanan, serta kelancaran mobilisasi selama masa orientasi kampus.',
      },
      org3: {
        label: 'HIMPUNAN MAHASISWA JURUSAN',
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
        period: 'Nov 2021 · Masa Berlaku Tidak Terbatas',
        desc: 'Sertifikasi kompetensi resmi PersCert TÜV yang membuktikan keahlian teknis pemeliharaan sistem pneumatik industri, perancangan rangkaian katup, dan otomasi elektro-pneumatik.',
        cta: 'Klik untuk melihat sertifikat resmi',
      },
      cert2: {
        label: 'KOMPETISI ROBOTIKA NASIONAL',
        title: 'Contestant - ABU Robocon Indonesia (KRAI 2025)',
        issuer: 'Belmawa Kemdiktisaintek & ITB · Tim ROOBICS',
        period: 'Jul 2025',
        desc: 'Sertifikat resmi peserta seleksi tingkat nasional Kontes Robot ABU Indonesia 2025 mewakili Universitas Telkom (Tim ROOBICS).',
        cta: 'Klik untuk melihat sertifikat resmi',
      },
      cert3: {
        label: 'KEMAHIRAN BAHASA',
        title: 'English Proficiency Test (EPrT)',
        issuer: 'Skor Total: 450 (Listening: 47, Grammar: 41, Reading: 47)',
        period: 'Jun 2026',
        desc: 'Sertifikat kemahiran bahasa Inggris resmi dari Telkom University Language Center untuk lingkungan kerja teknis dan profesional.',
        cta: 'Klik untuk melihat sertifikat resmi',
      },
    },
    skillsSection: {
      eyebrow: '03 / KAPABILITAS & TOOLS',
      title: 'Stack rekayasa & ekosistem produksi.',
      subtitle: 'Alat dan disiplin yang diterapkan sepanjang riset tugas akhir, magang Formulatrix, dan proyek robotika. Hanya software yang terkonfirmasi dalam dokumen resmi yang dicantumkan.',
    },
    contactSection: {
      eyebrow: '05 / HUBUNGI SAYA',
      title: 'Antusias belajar, siap berkontribusi nyata.',
      desc: 'Sebagai lulusan baru Teknik Elektro dengan dasar kuat di bidang mekatronika dan prototyping, saya memiliki antusiasme tinggi untuk terus belajar, beradaptasi, dan dibimbing oleh tim berpengalaman. Siap berkontribusi langsung dalam peran rekayasa tingkat pemula di bidang robotika, manufaktur, maupun pengembangan perangkat keras.',
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
