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
        ['experience', 'Internships'],
        ['skills', 'Skills'],
        ['certifications', 'Certifications'],
        ['education', 'Education'],
        ['organizations', 'Organizations'],
        ['contact', 'Contact'],
      ],
      location: 'SEMARANG, CENTRAL JAVA',
      available: 'OPEN TO WORK',
    },
    hero: {
      portfolioTitle: 'PORTFOLIO',
      viewProjects: 'View Projects',
      cv: 'Curriculum Vitae',
    },
    projectsSection: {
      eyebrow: '01 / PROJECTS',
      title: 'Engineering work, in practice.',
      subtitle: 'A collection of 5 projects across undergraduate research, national robotics competition, capstone design, and independent builds.',
      footnote: '',
      exploreMore: 'Explore more projects',
      viewCaseStudy: 'View Case Study',
    },
    projects: [
      {
        slug: 'manipulator',
        number: '01',
        label: 'FINAL PROJECT',
        title: '5-DOF Manipulator Arm',
        summary: 'Design of a Manipulator Arm for a Patient Service Robot in a Hospital powered by an STM32F411 microcontroller and 3D-printed cycloidal gearboxes. Integrates AS5600 magnetic encoders in a closed loop to reduce backlash, achieving 79.8% accuracy across 250–1,000 g loads.',
        tags: ['STM32F411 MCU', 'NEMA 17 Stepper', 'TB6600 Driver', 'AS5600 Sensor', 'TCA9548A Mux', 'Cycloidal Gearbox'],
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
        label: 'CAPSTONE DESIGN',
        title: 'Solar Panel Cooling Method',
        summary: 'Automated solar panel cooling method to restore high-temperature efficiency in photovoltaic modules. Operates fully off-grid with an Arduino Uno, calibrated temperature sensing, and automated relay pump control triggered at >30°C and deactivated at <25°C.',
        tags: ['Arduino Uno R3', 'RTD Temp Sensor', '5V Relay Module', '12V Water Pump', '16x2 I2C LCD', '12V Battery Pack'],
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
        label: 'KONTES ROBOT ABU INDONESIA (KRAI)',
        title: 'Basketball Competition Robot',
        summary: 'Mobile basketball robot for Kontes Robot ABU Indonesia (KRAI). Served as a core mechanical team member designing the shooter, dribbler, and drive wheel configuration, advancing to the National Stage at ITB Jatinangor.',
        tags: ['6-Bar Pneumatics', '24V Solenoid', 'RS775 DC Motor', 'Omniwheel Drive', 'Limit Switch & IR', 'Air Regulator'],
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
        label: 'INDEPENDENT BUILD',
        title: 'Autonomous Line Follower Robot',
        summary: 'Autonomous line-tracking robot featuring differential drive steering. Equipped with an 8-sensor bar built from LED and photodiode pairs, an Arduino Nano microcontroller, a TB6612FNG driver, and micro N20 metal gear motors.',
        tags: ['Photodiode Array', 'Arduino Nano', 'TB6612 Driver', 'N20 Gear Motor', '0.96" I2C OLED', '2S Li-ion Battery'],
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
        label: 'INDEPENDENT BUILD',
        title: '1 kg Combat Sumo Robot',
        summary: '1 kg competition-class sumo robot (20 × 20 cm) built on an acrylic chassis with a front aluminum scoop. Powered by 4 PG24 planetary gear motors, steered wirelessly from a smartphone via Bluetooth connection.',
        tags: ['Arduino Uno', '4× PG24 Motors', 'L298N Driver', 'HC-05 Bluetooth', '3S LiPo Battery', 'Acrylic Chassis'],
        metrics: [
          ['1 kg / 20×20 cm', 'Competition Class Limit'],
          ['4WD', 'Independent Geared Motors'],
          ['Bluetooth', 'Wireless Smartphone Control'],
        ],
        foot: 'Independent Project · 2023',
      },
    ],
    experienceSection: {
      eyebrow: '02 / INTERNSHIP EXPERIENCE',
      title: 'Hands-on practice in manufacturing environments.',
      subtitle: 'Two internship tenures at PT Promanufacture Indonesia (Formulatrix), completed during vocational school in 2021 in Mechanical Engineering and during university in 2025 in Process Engineering.',
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
      eyebrow: '05 / ACADEMIC BACKGROUND',
      title: 'Academic Education History',
      subtitle: 'Formal education journey spanning vocational mechatronics engineering to a bachelor degree in electrical engineering.',
      telkom: {
        degree: 'Bachelor of Science in Electrical Engineering',
        period: 'Sep 2022 - Aug 2026 · Bandung, West Java',
        desc: 'Completed the degree in 3 years and 11 months with 154 credits. Authored an undergraduate final project titled "Design of a Manipulator Arm for a Patient Service Robot in a Hospital", focusing on 3D-printed cycloidal gearbox transmissions and closed-loop AS5600 magnetic sensing.',
        gpaLabel: 'CUMULATIVE GPA',
        gpaSub: 'OUT OF 4.00 SCALE',
        courseworkLabel: 'Relevant Engineering Coursework:',
        verifiedNote: 'Verified from Official Certificate of Graduation (SKL)',
        cta: 'View Certificate of Graduation (SKL)',
      },
      smk: {
        school: 'SMK Negeri 7 Semarang',
        degree: 'Mechatronics Engineering',
        period: 'Jul 2018 - Jun 2022 · Semarang, Central Java',
        desc: '4-year technical mechatronics program with a 6-month industrial internship (PKL) in manufacturing and a 6-month capstone project in the 4th year assembling an industrial electro-pneumatic training kit.',
        metricVal: '4-YEAR',
        metricLabel: 'TECHNICAL DIPLOMA',
        metricSub: 'MECHATRONICS SPECIALIST (STM PEMBANGUNAN)',
        curriculumNote: '4-Year Technical Curriculum including 6 months Industrial Internship (Prakerin/PKL)',
        cta: 'View Technical High School Diploma (SMK Negeri 7 Semarang)',
      },
    },
    orgsSection: {
      eyebrow: '06 / ORGANIZATIONS',
      title: 'Organizational & Committee Experience',
      subtitle: 'Active involvement in KRAI robotics research, PKKMB discipline management, and mentorship of cadreization participants at KMTE.',
      org1: {
        label: 'ROBOTICS RESEARCH GROUP',
        name: 'Electronics and Intelligence Robotic Research Group (EIRRG)',
        date: '2024 - 2025',
        role: 'Mechanical Division · Team ROOBICS',
        desc: 'Collaborated on CAD modeling, precision fabrication, and robot mechanism integration for Kontes Robot ABU Indonesia (KRAI 2025), qualifying for the National Finals at ITB Jatinangor.',
      },
      org2: {
        label: 'STUDENT ORIENTATION COMMITTEE',
        name: 'Panitia PKKMB Universitas Telkom',
        date: '2024',
        role: 'Discipline and Motivation Team (DMT)',
        desc: 'Coordinated orientation protocols, crowd discipline, and field security for thousands of freshmen across faculties to ensure structured and orderly university induction events.',
      },
      org3: {
        label: 'DEPARTMENT STUDENT GUILD',
        name: 'Keluarga Mahasiswa Teknik Elektro (KMTE)',
        date: '2023 - 2024',
        role: 'Mentor Division · QUOTE 2023',
        desc: 'Served as a mentor during the QUOTE 2023 cadreization program, guiding prospective members through organizational values, teamwork ethics, and departmental culture to join KMTE.',
      },
    },
    certsSection: {
      eyebrow: '04 / CERTIFICATIONS & CREDENTIALS',
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
        title: 'National Finalist - ABU Robocon Indonesia (KRAI 2025)',
        issuer: 'Belmawa Kemdiktisaintek & ITB · Team ROOBICS',
        period: '7–8 Jul 2025',
        desc: 'Official certificate of National Finalist representing Telkom University (Team ROOBICS) in the Kontes Robot ABU Indonesia (KRAI) National Stage at ITB Jatinangor. Certificate No: 5468HK/IT1.B04.4/KM/2025.',
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
      cert4: {
        label: 'PROFESSIONAL DEVELOPMENT',
        title: 'Tel-U Career Coach (STAR) - Intrapreneurship',
        issuer: 'Directorate of Student Affairs, Career & Alumni · Telkom University',
        period: '2025 · Certificate No: 35/KMH01/KMH/2025',
        desc: 'Official certificate awarded upon completing the Career Coach STAR development program in workplace adaptability, team dynamics, and intrapreneurship.',
        cta: 'Click to view certificate',
      },
    },
    skillsSection: {
      eyebrow: '03 / SKILLS',
      title: 'Technical skills & engineering tools.',
      subtitle: 'Software and tools with direct hands-on experience in academic research, industrial internships, and robotics engineering.',
      disciplines: [
        {
          id: 'mechanical',
          label: '01 / MECHANICAL',
          title: 'CAD Modeling & Fabrication',
          skills: [
            '3D parametric CAD modeling, assemblies & engineering drawings',
            'Mechanical transmission & custom Cycloidal Gearbox design',
            'Rapid mechanical prototyping & FDM 3D printing workflows',
            'Workshop bench fabrication, manual hand tools & power tools',
          ],
        },
        {
          id: 'electronics',
          label: '02 / ELECTRONICS',
          title: 'PCB Design & Wiring',
          skills: [
            'Schematic capture design & multilayer PCB routing layout',
            'Electronic circuit simulation & virtual instrument testing',
            'Wiring harness layout, sensor cabling & pinout integration',
            'SMT line workflows (solder stencil, pick-and-place & reflow)',
          ],
        },
        {
          id: 'embedded',
          label: '03 / EMBEDDED SYSTEMS',
          title: 'Firmware & Control',
          skills: [
            'Microcontroller firmware programming (STM32, ESP32, Arduino)',
            'Real-time closed-loop control systems & sensor feedback',
            'Serial communication protocols & I2C bus multiplexing',
            'Analytical kinematics modeling & motion trajectory planning',
          ],
        },
        {
          id: 'productivity',
          label: '04 / ENGINEERING PRODUCTIVITY',
          title: 'Collaboration & Documentation',
          skills: [
            'Technical documentation authoring, test reports & thesis book',
            'Engineering data analysis, calculation sheets & sensor test logs',
            'System workflow modeling (flowcharts & engineering blocks)',
            'Standardized production documents (SOP & Work Instructions)',
          ],
        },
      ],
    },
    contactSection: {
      eyebrow: '07 / GET IN TOUCH',
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
        ['certifications', 'Sertifikasi'],
        ['education', 'Pendidikan'],
        ['organizations', 'Organisasi'],
        ['contact', 'Kontak'],
      ],
      location: 'SEMARANG, JAWA TENGAH',
      available: 'OPEN TO WORK',
    },
    hero: {
      portfolioTitle: 'PORTOFOLIO',
      viewProjects: 'Lihat Proyek',
      cv: 'Curriculum Vitae',
    },
    projectsSection: {
      eyebrow: '01 / PROYEK',
      title: 'Engineering work, in practice.',
      subtitle: 'Koleksi 5 proyek yang saya rancang dan rakit langsung selama masa kuliah dan belajar mandiri.',
      footnote: '',
      exploreMore: 'Lihat proyek lainnya',
      viewCaseStudy: 'Lihat Studi Kasus',
    },
    projects: [
      {
        slug: 'manipulator',
        number: '01',
        label: 'TUGAS AKHIR',
        title: 'Robot Manipulator Arm 5-DOF',
        summary: 'Perancangan Manipulator Arm untuk Robot Pelayanan Pasien di Rumah Sakit berbasis mikrokontroler STM32F411 dan Cycloidal Gearbox 3D PLA. Menerapkan kendali Closed Loop dengan sensor magnetic encoder AS5600 untuk menekan error sendi hingga 79,8% pada rentang beban 250–1.000 gram.',
        tags: ['STM32F411', 'NEMA 17 Stepper', 'Driver TB6600', 'Sensor AS5600', 'Mux TCA9548A', 'Gearbox 3D PLA'],
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
        label: 'CAPSTONE DESIGN',
        title: 'Metode Pendinginan Panel Surya',
        summary: 'Metode Pendinginan Panel Surya untuk Meningkatkan Efisiensi di Suhu Tinggi berbasis Arduino Uno. Menggunakan sistem semprot air otomatis off-grid yang menyalakan pompa air DC saat suhu permukaan >30°C dan mati saat kembali ke <25°C.',
        tags: ['Arduino Uno R3', 'Sensor RTD PT1000', 'Modul Relay 5V', 'Pompa Air DC 12V', 'LCD 16x2 I2C', 'Baterai 12V'],
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
        label: 'KONTES ROBOT ABU INDONESIA (KRAI)',
        title: 'Kompetisi Robot Basket',
        summary: 'Robot basket beroda untuk Kontes Robot ABU Indonesia (KRAI). Berperan sebagai anggota tim inti mekanik dalam merancang mekanisme shooter, dribbler, dan konfigurasi roda penggerak hingga lolos ke tingkat nasional di ITB Jatinangor.',
        tags: ['Pneumatik 6-Bar', 'Solenoid 24V', 'Motor DC RS775', 'Roda Omniwheel', 'Limit Switch & IR', 'Regulator Udara'],
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
        label: 'PROYEK MANDIRI',
        title: 'Robot Line Follower',
        summary: 'Robot pelacak garis otomatis dengan sistem kemudi differential drive. Menggunakan bar 8 sensor dari pasangan LED dan fotodioda, mikrokontroler Arduino Nano, motor driver TB6612FNG, serta motor DC mikro N20 metal gear.',
        tags: ['Array Fotodioda', 'Arduino Nano', 'Driver TB6612', 'Motor DC N20', 'OLED 0.96" I2C', 'Baterai 2S Li-ion'],
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
        label: 'PROYEK MANDIRI',
        title: 'Robot Sumo',
        summary: 'Robot sumo kelas 1 kg (dimensi 20×20 cm) dengan chassis akrilik dan pelat aluminium depan. Mampu menghasilkan daya dorong 4 kg menggunakan 4 motor DC planetary PG24, serta dikendalikan nirkabel dari HP melalui koneksi Bluetooth.',
        tags: ['Arduino Uno', '4× Motor PG24', 'Driver L298N', 'Bluetooth HC-05', 'Baterai 3S LiPo', 'Chassis Akrilik'],
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
      title: 'Hands-on practice in manufacturing environments.',
      subtitle: 'Dua periode magang di PT Promanufacture Indonesia (Formulatrix), yaitu saat SMK pada tahun 2021 di divisi Mechanical Engineering dan saat kuliah tahun 2025 di divisi Process Engineering.',
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
      eyebrow: '05 / PENDIDIKAN',
      title: 'Riwayat Pendidikan Akademik',
      subtitle: 'Rekam jejak studi formal dari jenjang kejuruan teknik mekatronika hingga sarjana teknik elektro.',
      telkom: {
        degree: 'S1 Teknik Elektro',
        period: 'Sep 2022 - Agu 2026 · Bandung, Jawa Barat',
        desc: 'Lulus dalam waktu 3 tahun 11 bulan dengan beban studi 154 SKS. Menyelesaikan Tugas Akhir berjudul "Perancangan Manipulator Arm untuk Robot Pelayanan Pasien di Rumah Sakit" yang berfokus pada transmisi cycloidal gearbox cetak 3D dan kendali closed-loop sensor magnetik AS5600.',
        gpaLabel: 'IPK KUMULATIF',
        gpaSub: 'DARI SKALA 4.00',
        courseworkLabel: 'Mata Kuliah Rekayasa Terkait:',
        verifiedNote: 'Terverifikasi dari Surat Keterangan Lulus (SKL) Resmi',
        cta: 'Lihat Surat Keterangan Lulus (SKL)',
      },
      smk: {
        school: 'SMK Negeri 7 Semarang',
        degree: 'Teknik Mekatronika',
        period: 'Jul 2018 - Jun 2022 · Semarang, Jawa Tengah',
        desc: 'Pendidikan SMK teknik 4 tahun dengan PKL 6 bulan di industri manufaktur dan tugas akhir 6 bulan di tahun ke-4 dengan merakit trainer kit elektro-pneumatik industri untuk praktikum kendali dan otomasi.',
        metricVal: '4 TAHUN',
        metricLabel: 'PROGRAM SMK 4 TAHUN',
        metricSub: 'SPESIALISASI MEKATRONIKA (STM PEMBANGUNAN)',
        curriculumNote: 'Kurikulum SMK 4 Tahun termasuk 6 Bulan Praktik Kerja Industri (Prakerin/PKL)',
        cta: 'Lihat Ijazah Resmi (SMK Negeri 7 Semarang)',
      },
    },
    orgsSection: {
      eyebrow: '06 / ORGANISASI',
      title: 'Pengalaman Organisasi & Kepanitiaan',
      subtitle: 'Keterlibatan aktif dalam riset robotika kompetisi KRAI, manajemen kedisiplinan PKKMB, serta mentoring peserta kaderisasi di KMTE.',
      org1: {
        label: 'ROBOTICS RESEARCH GROUP',
        name: 'Electronics and Intelligence Robotic Research Group (EIRRG)',
        date: '2024 - 2025',
        role: 'Divisi Mekanikal · Tim ROOBICS',
        desc: 'Berkolaborasi dalam perancangan CAD, fabrikasi komponen presisi, dan integrasi mekanisme robot untuk Kontes Robot ABU Indonesia (KRAI 2025) hingga lolos ke tahap Nasional di ITB Jatinangor.',
      },
      org2: {
        label: 'KEPANITIAAN KAMPUS',
        name: 'Panitia PKKMB Universitas Telkom',
        date: '2024',
        role: 'Discipline and Motivation Team (DMT)',
        desc: 'Mengkoordinasikan ketertiban, keamanan barisan, dan penegakan tata tertib ribuan mahasiswa baru lintas fakultas guna memastikan alur pengenalan kampus berjalan kondusif dan terstruktur.',
      },
      org3: {
        label: 'HIMPUNAN MAHASISWA',
        name: 'Keluarga Mahasiswa Teknik Elektro (KMTE)',
        date: '2023 - 2024',
        role: 'Divisi Mentor · QUOTE 2023',
        desc: 'Berperan sebagai mentor pendamping dalam program kaderisasi QUOTE 2023, membimbing calon anggota mengenai nilai keorganisasian, etika kerja tim, dan kultur himpunan sebelum resmi bergabung ke KMTE.',
      },
    },
    certsSection: {
      eyebrow: '04 / SERTIFIKASI & KREDENSIAL',
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
        title: 'Finalis Tingkat Nasional - KRAI 2025',
        issuer: 'Belmawa Kemdiktisaintek & ITB · Tim ROOBICS',
        period: '7–8 Jul 2025',
        desc: 'Sertifikat resmi sebagai Finalis Kontes Robot Indonesia 2025 divisi Kontes Robot ABU Indonesia (KRAI) Tingkat Nasional di ITB Jatinangor. Nomor: 5468HK/IT1.B04.4/KM/2025.',
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
      cert4: {
        label: 'PENGEMBANGAN PROFESIONAL',
        title: 'Tel-U Career Coach (STAR) - Intrapreneurship',
        issuer: 'Direktorat Kemahasiswaan, Karier, dan Alumni · Universitas Telkom',
        period: '2025 · No: 35/KMH01/KMH/2025',
        desc: 'Sertifikat kelulusan program pembinaan kesiapan karir, adaptasi dunia kerja, dan intrapreneurship yang diselenggarakan oleh Bagian Pengembangan Karier & Alumni.',
        cta: 'Klik untuk melihat sertifikat resmi',
      },
    },
    skillsSection: {
      eyebrow: '03 / KEAHLIAN',
      title: 'Keahlian teknis & perangkat kerja.',
      subtitle: 'Software dan peralatan yang pernah saya gunakan langsung dalam riset akademik, magang industri, dan rancang bangun robotika.',
      disciplines: [
        {
          id: 'mechanical',
          label: '01 / MEKANIKAL',
          title: 'Pemodelan & Fabrikasi',
          skills: [
            'Pemodelan 3D CAD parametrik, assembly & gambar teknik',
            'Perancangan transmisi mekanik & kustom Cycloidal Gearbox',
            'Rapid prototyping komponen mekanik & 3D printing FDM',
            'Fabrikasi bengkel mekanik, perkakas hand & power tools',
          ],
        },
        {
          id: 'electronics',
          label: '02 / ELEKTRONIKA',
          title: 'Perancangan PCB & Wiring',
          skills: [
            'Perancangan skematik rangkaian & perutean layout PCB',
            'Simulasi elektronik terpadu & pengujian sinyal virtual',
            'Wiring harness, perkabelan rapi & integrasi multi-sensor',
            'Workflow lini SMT (stensil pasta, pick-and-place & reflow)',
          ],
        },
        {
          id: 'embedded',
          label: '03 / SISTEM TERTANAM',
          title: 'Firmware & Kontrol',
          skills: [
            'Pemrograman mikrokontroler (STM32, ESP32, dan Arduino)',
            'Sistem kendali closed-loop real-time & sensor feedback',
            'Protokol komunikasi serial UART & bus multiplexing I2C',
            'Algoritma kinematika analitik & perencanaan lintasan gerak',
          ],
        },
        {
          id: 'productivity',
          label: '04 / PRODUKTIVITAS TEKNIK',
          title: 'Kolaborasi & Dokumentasi',
          skills: [
            'Penyusunan dokumentasi teknis, laporan uji & naskah TA',
            'Analisis data rekayasa, kalkulasi teknis & log data sensor',
            'Pemodelan alur sistem (flowchart diagram & blok perancangan)',
            'Standarisasi dokumen produksi (SOP & Work Instruction)',
          ],
        },
      ],
    },
    contactSection: {
      eyebrow: '07 / KONTAK',
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
      if (typeof window !== 'undefined') {
        const urlParams = new URLSearchParams(window.location.search);
        const urlLang = urlParams.get('lang');
        if (urlLang === 'id' || urlLang === 'en') return urlLang;
      }
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
