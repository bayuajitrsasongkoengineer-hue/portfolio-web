with open('D:/downloads/BRT/portfolio-web/src/main.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Target location: right after closing of fh-roles stagger
pos = text.find('</article>\n              </div>\n            </div>\n          </div>\n        </section>')
if pos == -1:
    pos = text.find('</article>')
    pos = text.find('</article>', pos+10) # second article
    print('Second article pos:', pos)

org_markup = '''
            {/* ORGANIZATIONAL & LEADERSHIP EXPERIENCE */}
            <div style={{ marginTop: '56px', borderTop: '1px solid #E5E7EB', paddingTop: '40px' }}>
              <div className="fh-section-heading reveal" style={{ marginBottom: '28px' }}>
                <div>
                  <div className="fh-eyebrow"><span>02.1 /</span> LEADERSHIP &amp; ORGANIZATIONS</div>
                  <h3 style={{ fontSize: '22px', fontWeight: 700, margin: '4px 0 0', color: '#111827' }}>Engineering Teams &amp; Student Leadership</h3>
                </div>
                <p>Collaborative leadership, technical team preparation, and academic mentorship across university organizations.</p>
              </div>

              <div className="fh-org-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
                {/* ORG 1: ROOBICS KRAI */}
                <div className="fh-stack-card" style={{ padding: '22px 20px', borderRadius: '6px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                    <div>
                      <span className="fh-stack-label" style={{ color: '#F05A22' }}>ROBOTICS RESEARCH GROUP</span>
                      <h4 style={{ margin: '2px 0 0', fontSize: '16px', fontWeight: 700, color: '#111827' }}>Electronics and Intelligence Robotic Research Group (EIRRG)</h4>
                    </div>
                    <span className="fh-role-date">2024 - 2025</span>
                  </div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: '#4B5563', marginBottom: '8px' }}>Mechanical Division \u00b7 Team ROOBICS (Telkom University)</div>
                  <p style={{ margin: 0, fontSize: '13.5px', color: '#4B5563', lineHeight: 1.6 }}>
                    Core mechanical team member designing and fabricating robotic systems for Kontes Robot ABU Indonesia (KRAI 2025), contributing directly to tournament staging and qualifying for the National Finals at ITB Jatinangor.
                  </p>
                </div>

                {/* ORG 2: PKKMB DMT */}
                <div className="fh-stack-card" style={{ padding: '22px 20px', borderRadius: '6px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                    <div>
                      <span className="fh-stack-label" style={{ color: '#F05A22' }}>STUDENT ORIENTATION COMMITTEE</span>
                      <h4 style={{ margin: '2px 0 0', fontSize: '16px', fontWeight: 700, color: '#111827' }}>Panitia PKKMB Universitas Telkom</h4>
                    </div>
                    <span className="fh-role-date">2024</span>
                  </div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: '#4B5563', marginBottom: '8px' }}>Discipline and Motivation Team (DMT) \u00b7 Telkom University</div>
                  <p style={{ margin: 0, fontSize: '13.5px', color: '#4B5563', lineHeight: 1.6 }}>
                    Responsible for freshmen orientation protocol execution, participant discipline, crowd management, security enforcement, and smooth operational mobilization throughout campus orientation programs.
                  </p>
                </div>

                {/* ORG 3: KMTE Mentor */}
                <div className="fh-stack-card" style={{ padding: '22px 20px', borderRadius: '6px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                    <div>
                      <span className="fh-stack-label" style={{ color: '#F05A22' }}>DEPARTMENT STUDENT GUILD</span>
                      <h4 style={{ margin: '2px 0 0', fontSize: '16px', fontWeight: 700, color: '#111827' }}>Keluarga Mahasiswa Teknik Elektro (KMTE)</h4>
                    </div>
                    <span className="fh-role-date">2023 - 2026</span>
                  </div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: '#4B5563', marginBottom: '8px' }}>Mentor Division \u00b7 QUOTE 2023 (Telkom University)</div>
                  <p style={{ margin: 0, fontSize: '13.5px', color: '#4B5563', lineHeight: 1.6 }}>
                    Served as academic and departmental mentor in the student cadre formation program, guiding incoming Electrical Engineering freshmen through curriculum orientation, soft-skills development, and university adaptation.
                  </p>
                </div>
              </div>
            </div>'''

target_str = '</article>\n              </div>\n            </div>'
replacement_str = '</article>\n              </div>\n            </div>' + org_markup

if target_str in text:
    text = text.replace(target_str, replacement_str, 1)
    print('Inserted Organizational section successfully!')
else:
    print('target_str not found!')

with open('D:/downloads/BRT/portfolio-web/src/main.jsx', 'w', encoding='utf-8') as f:
    f.write(text)
