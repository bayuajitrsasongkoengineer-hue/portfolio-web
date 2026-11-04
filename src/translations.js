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
      available: 'OPEN TO WORK',
    },
    hero: {
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
        title: 'Robot Manipulator 5-DOF',
        summary: '5-DOF articulated robotic arm prototype powered by an STM32F411 microcontroller and 3D-printed cycloidal gearboxes. Integrates AS5600 magnetic encoders in a closed loop to reduce backlash, achieving 79.8% accuracy across 250–1,000 g loads.',
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
        title: 'Pendingin Panel Surya Otomatis',
        summary: 'Automated water spray cooling system to lower solar panel surface temperature driven by Arduino Uno. Uses temperature sensing and relay control to trigger a submersible pump above >30°C and shut down below <25°C to restore efficiency.',
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
        title: 'Kompetisi Robot Basket',
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
        label: 'PROYEK MANDIRI',
        title: 'Robot Line Follower',
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
        label: 'PROYEK MANDIRI',
        title: 'Robot Sumo',
        summary: '1 kg competition-class sumo robot (20 × 20 cm) built on an acrylic chassis with a front aluminum scoop. Delivers 4 kg push force via 4 PG24 planetary gear motors, steered wirelessly from a smartphone via Bluetooth connection.',
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
      title: 'Engineering Teams & Campus Activities',
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
      eyebrow: '03 / SKILLS',
      title: 'Technical skills & engineering tools.',
      subtitle: 'Software and tools with direct hands-on experience in academic research, industrial internships, and robotics engineering.',
      disciplines: [
        {
          id: 'mechanical',
          label: '01 / MECHANICAL',
          title: 'CAD Modeling & Fabrication',
          skills: [
            '3D parametric CAD modeling (parts, assemblies, GD&T tolerancing & technical drawings)',
            'Custom Cycloidal Gearbox design (reduction ratio 1:50 & 1:25) for high-torque joints',
            'Additive manufacturing (FDM 3D printing PLA, slicing optimization & post-processing)',
            'CNC toolpath generation & machining preparation (OneCNC CAM)',
            'Production-oriented component design for laboratory automation equipment (Formulatrix)',
          ],
        },
        {
          id: 'electronics',
          label: '02 / ELECTRONICS',
          title: 'PCB Design & Wiring',
          skills: [
            'Schematic capture & 2-layer PCB layout (EasyEDA & Autodesk EAGLE)',
            'Circuit simulation, SPICE analysis & virtual instrument testing (Proteus)',
            'PCB solder paste stencil panel design using Easy-PC (SMT line process)',
            'SMT production line workflows (pick-and-place, reflow soldering & inspection)',
            'Sensor wiring, harness diagrams & pinout documentation',
            'Assembly Work Instructions (AWI) & Standard Operating Procedures (SOP)',
          ],
        },
        {
          id: 'embedded',
          label: '03 / EMBEDDED SYSTEMS',
          title: 'Firmware & Control',
          skills: [
            'ARM Cortex-M microcontroller firmware (STM32F411, HAL library & register configuration)',
            'Real-time closed-loop control using AS5600 12-bit magnetic encoders (0.088° resolution)',
            'I2C bus multiplexing with TCA9548A 8-channel switch for multi-sensor integration',
            'Analytical Inverse Kinematics (IK) modeling & joint space trajectory execution',
            'S-curve motion profile implementation in C/C++ to minimize inertial jerk and smooth acceleration transitions',
            'Microcontroller flashing and on-chip debugging via ST-Link V2.1 (SWD protocol)',
          ],
        },
        {
          id: 'productivity',
          label: '04 / ENGINEERING PRODUCTIVITY',
          title: 'Collaboration & Documentation',
          skills: [
            'Technical documentation, test report authoring & academic thesis publishing',
            'Engineering data analysis, calculation sheets & sensor test data logging',
            'Collaborative engineering design sprints, system flowcharts & mind-mapping',
            'Standardized production line work instructions & process verification workflows',
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
      available: 'OPEN TO WORK',
    },
    hero: {
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
        title: 'Robot Manipulator 5-DOF',
        summary: 'Prototipe lengan robot manipulator 5-DOF berbasis mikrokontroler STM32F411 dan Cycloidal Gearbox 3D PLA. Menggunakan sensor magnetik AS5600 closed-loop untuk mereduksi backlash sendi, dengan akurasi posisi mencapai 79,8% pada rentang beban 250–1.000 gram.',
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
        title: 'Pendingin Panel Surya Otomatis',
        summary: 'Sistem penyemprot air otomatis untuk menurunkan suhu permukaan panel surya berbasis Arduino Uno. Menggunakan sensor suhu dan kontrol relay yang menyalakan pompa celup saat suhu panel mencapai >30°C dan mati saat kembali ke <25°C.',
        tags: ['Arduino Uno R3', 'Sensor Suhu RTD', 'Modul Relay 5V', 'Pompa Celup 12V', 'LCD 16x2 I2C', 'Baterai Aki 12V'],
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
      title: 'Tim Rekayasa & Kegiatan Kampus',
      subtitle: 'Pengalaman kerja tim dalam kompetisi robotika nasional dan kegiatan orientasi mahasiswa baru.',
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
      eyebrow: '03 / KEAHLIAN',
      title: 'Keahlian teknis & perangkat kerja.',
      subtitle: 'Software dan peralatan yang pernah saya gunakan langsung dalam riset akademik, magang industri, dan rancang bangun robotika.',
      disciplines: [
        {
          id: 'mechanical',
          label: '01 / MEKANIKAL',
          title: 'Pemodelan & Fabrikasi',
          skills: [
            'Pemodelan CAD parametrik 3D (part, perakitan/assembly, toleransi & gambar teknik)',
            'Perancangan kustom Cycloidal Gearbox (rasio reduksi 1:50 & 1:25) untuk sendi torsi tinggi',
            'Manufaktur aditif (3D printing FDM bahan PLA, optimasi slicing & finishing benda kerja)',
            'Pembuatan toolpath CNC & persiapan pemesinan (OneCNC CAM)',
            'Desain komponen mekanik berorientasi produksi untuk perangkat otomasi laboratorium',
          ],
        },
        {
          id: 'electronics',
          label: '02 / ELEKTRONIKA',
          title: 'Perancangan PCB & Wiring',
          skills: [
            'Pembuatan skematik & perancangan layout PCB 2-layer (EasyEDA & Autodesk EAGLE)',
            'Simulasi rangkaian elektronik & pengujian instrumen virtual (Proteus)',
            'Desain panel stensil pasta solder PCB menggunakan Easy-PC untuk proses SMT',
            'Alur kerja lini produksi SMT (mesin pick-and-place, reflow soldering & inspeksi solder)',
            'Pengkabelan sensor, diagram wiring harness & dokumentasi pinout kabel',
            'Penyusunan dokumen instruksi kerja perakitan (Work Instruction / WI) dan SOP',
          ],
        },
        {
          id: 'embedded',
          label: '03 / SISTEM TERTANAM',
          title: 'Firmware & Kontrol',
          skills: [
            'Pemrograman mikrokontroler ARM Cortex-M (STM32F411, HAL library & register)',
            'Sistem kendali closed-loop real-time menggunakan sensor magnetik AS5600 12-bit (resolusi 0,088°)',
            'Multipleksing bus komunikasi I2C dengan modul TCA9548A untuk integrasi multi-sensor',
            'Pemodelan kinematika analitik (Inverse Kinematics) & eksekusi pergerakan lintasan sendi',
            'Penerapan profil gerak S-curve dalam C/C++ untuk meredam sentakan inersia (jerk) saat akselerasi',
            'Flashing dan debugging mikrokontroler menggunakan ST-Link V2.1 (protokol SWD)',
          ],
        },
        {
          id: 'productivity',
          label: '04 / PRODUKTIVITAS TEKNIK',
          title: 'Kolaborasi & Dokumentasi',
          skills: [
            'Penyusunan dokumentasi teknis, laporan pengujian data, dan naskah buku Tugas Akhir',
            'Analisis data rekayasa, lembar kalkulasi perhitungan, dan pencatatan log data sensor',
            'Kolaborasi perancangan sistem teknik, diagram alir sistem (flowchart), dan pemetaan ide',
            'Standarisasi dokumen instruksi kerja lini produksi dan verifikasi alur proses manufaktur',
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
