with open('D:/downloads/BRT/portfolio-web/src/main.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Replace DocumentModal
modal_start = text.find('function DocumentModal({ doc, onClose }) {')
modal_end = text.find('function Eyebrow({ index, children }) {', modal_start)

new_modal_code = '''function DocumentModal({ doc, onClose }) {
  if (!doc) return null;
  const isCv = doc.isCv === true;
  const isPdf = isCv ? true : doc.type === 'pdf';
  
  // CV Language & Format Switcher state
  const [cvLang, setCvLang] = useState('en'); // 'en' | 'id'
  const [cvFormat, setCvFormat] = useState('pdf'); // 'pdf' | 'docx'

  const cvFiles = {
    en: {
      pdf: '/CV_Bayu_Aji_Trisasongko_EN.pdf',
      docx: '/CV_Bayu_Aji_Trisasongko_EN.docx',
      downloadPdf: 'CV_Bayu_Aji_Trisasongko_EN.pdf',
      downloadDocx: 'CV_Bayu_Aji_Trisasongko_EN.docx',
    },
    id: {
      pdf: '/CV_Bayu_Aji_Trisasongko_ID.pdf',
      docx: '/CV_Bayu_Aji_Trisasongko_ID.docx',
      downloadPdf: 'CV_Bayu_Aji_Trisasongko_ID.pdf',
      downloadDocx: 'CV_Bayu_Aji_Trisasongko_ID.docx',
    }
  };

  const activePdfUrl = isCv ? cvFiles[cvLang].pdf : doc.file;
  const activeDownloadUrl = isCv 
    ? (cvFormat === 'docx' ? cvFiles[cvLang].docx : cvFiles[cvLang].pdf) 
    : doc.downloadUrl;
  const activeDownloadName = isCv 
    ? (cvFormat === 'docx' ? cvFiles[cvLang].downloadDocx : cvFiles[cvLang].downloadPdf) 
    : (doc.downloadName || true);

  const [zoom, setZoom] = useState(1);

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.25, 0.75));
  const handleResetZoom = () => setZoom(1);

  // Lock scroll: overflow hidden on html+body
  useEffect(() => {
    const html = document.documentElement;
    html.style.overflow  = 'hidden';
    document.body.style.overflow = 'hidden';
    return () => {
      html.style.overflow  = '';
      document.body.style.overflow = '';
    };
  }, []);

  // Close modal on Escape key
  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return createPortal(
    <div className="fh-modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="fh-modal-content" onClick={e => e.stopPropagation()}>
        <div className="fh-modal-header">
          <button className="fh-button fh-modal-back" onClick={onClose}>
            <ArrowLeft size={16} /> Close
          </button>
          
          <div className="fh-modal-title">
            <strong>{doc.title}</strong>
            <small>{doc.subtitle}</small>
          </div>

          {/* CV Language Switcher in Header */}
          {isCv && (
            <div style={{ display: 'inline-flex', background: '#F1F5F9', padding: '3px', borderRadius: '6px', border: '1px solid #E2E8F0', gap: '3px' }}>
              <button 
                type="button"
                onClick={() => setCvLang('en')} 
                style={{ 
                  padding: '5px 12px', 
                  fontSize: '11px', 
                  fontFamily: 'DM Mono, monospace', 
                  fontWeight: 600, 
                  border: 'none', 
                  borderRadius: '4px', 
                  cursor: 'pointer',
                  background: cvLang === 'en' ? '#F05A22' : 'transparent',
                  color: cvLang === 'en' ? '#FFFFFF' : '#475569',
                  transition: 'all 0.15s ease'
                }}
              >
                EN (English ATS)
              </button>
              <button 
                type="button"
                onClick={() => setCvLang('id')} 
                style={{ 
                  padding: '5px 12px', 
                  fontSize: '11px', 
                  fontFamily: 'DM Mono, monospace', 
                  fontWeight: 600, 
                  border: 'none', 
                  borderRadius: '4px', 
                  cursor: 'pointer',
                  background: cvLang === 'id' ? '#F05A22' : 'transparent',
                  color: cvLang === 'id' ? '#FFFFFF' : '#475569',
                  transition: 'all 0.15s ease'
                }}
              >
                ID (Bahasa Indonesia)
              </button>
            </div>
          )}
          
          <div className="fh-modal-header-actions">
            {!isPdf && (
              <div className="fh-zoom-controls">
                <button 
                  className="fh-zoom-btn" 
                  onClick={handleZoomOut} 
                  title="Zoom Out"
                  disabled={zoom <= 0.75}
                >
                  <ZoomOut size={16} />
                </button>
                <span className="fh-zoom-level" onClick={handleResetZoom} title="Reset Zoom (100%)">
                  {Math.round(zoom * 100)}%
                </span>
                <button 
                  className="fh-zoom-btn" 
                  onClick={handleZoomIn} 
                  title="Zoom In"
                  disabled={zoom >= 2.5}
                >
                  <ZoomIn size={16} />
                </button>
                {zoom !== 1 && (
                  <button 
                    className="fh-zoom-btn" 
                    onClick={handleResetZoom} 
                    title="Reset Zoom"
                  >
                    <RotateCcw size={14} />
                  </button>
                )}
              </div>
            )}
            <button className="fh-modal-close" onClick={onClose} aria-label="Close document view">
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="fh-modal-body">
          {isPdf ? (
            <iframe 
              key={activePdfUrl}
              src={`${activePdfUrl}#view=FitH`} 
              title={doc.title} 
              className="fh-modal-iframe" 
            />
          ) : (
            <div className="fh-modal-img-container">
              <img 
                src={doc.image} 
                alt={doc.title} 
                className="fh-modal-image"
                style={{ 
                  transform: `scale(${zoom})`,
                  transformOrigin: 'top center',
                  transition: 'transform 0.2s ease-out'
                }} 
              />
            </div>
          )}
        </div>

        <div className="fh-modal-footer">
          <span className="fh-mono">{doc.institution} \u00b7 {doc.period}</span>
          <div className="fh-modal-actions" style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            {isCv ? (
              <>
                <div style={{ display: 'inline-flex', background: '#F1F5F9', padding: '2px', borderRadius: '4px', border: '1px solid #E2E8F0', gap: '2px', marginRight: '6px' }}>
                  <button 
                    type="button"
                    onClick={() => setCvFormat('pdf')} 
                    style={{ 
                      padding: '4px 8px', 
                      fontSize: '10.5px', 
                      fontFamily: 'DM Mono, monospace', 
                      fontWeight: 600, 
                      border: 'none', 
                      borderRadius: '3px', 
                      cursor: 'pointer',
                      background: cvFormat === 'pdf' ? '#0F172A' : 'transparent',
                      color: cvFormat === 'pdf' ? '#FFFFFF' : '#475569'
                    }}
                  >
                    PDF
                  </button>
                  <button 
                    type="button"
                    onClick={() => setCvFormat('docx')} 
                    style={{ 
                      padding: '4px 8px', 
                      fontSize: '10.5px', 
                      fontFamily: 'DM Mono, monospace', 
                      fontWeight: 600, 
                      border: 'none', 
                      borderRadius: '3px', 
                      cursor: 'pointer',
                      background: cvFormat === 'docx' ? '#0F172A' : 'transparent',
                      color: cvFormat === 'docx' ? '#FFFFFF' : '#475569'
                    }}
                  >
                    DOCX (Word)
                  </button>
                </div>
                <a 
                  className="fh-button fh-primary" 
                  href={activeDownloadUrl} 
                  download={activeDownloadName}
                >
                  <Download size={14} /> Download CV ({cvLang.toUpperCase()} \u00b7 {cvFormat.toUpperCase()})
                </a>
                <a 
                  className="fh-button" 
                  href={activePdfUrl} 
                  target="_blank" 
                  rel="noreferrer"
                >
                  Open in New Tab <ExternalLink size={14} />
                </a>
              </>
            ) : (
              <>
                {doc.downloadUrl && (
                  <a 
                    className="fh-button fh-primary" 
                    href={doc.downloadUrl} 
                    download={doc.downloadName || true}
                  >
                    <Download size={14} /> Download Document
                  </a>
                )}
                <a 
                  className="fh-button" 
                  href={isPdf ? doc.file : doc.image} 
                  target="_blank" 
                  rel="noreferrer"
                >
                  Open in New Tab <ExternalLink size={14} />
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

'''

text = text[:modal_start] + new_modal_code + text[modal_end:]

# Update CV button triggers in main.jsx
old_trigger = """                  onClick={() => setActiveDoc({
                    type: 'pdf',
                    file: '/CV_BAYU%20AJI%20TRISASONGKO.pdf',
                    title: 'Curriculum Vitae \u00b7 Bayu Aji Trisasongko',
                    subtitle: 'Electrical Engineering & Robotics / Mechatronics',
                    institution: 'Telkom University & Formulatrix Alum',
                    period: 'Portfolio 2026',
                    downloadUrl: '/CV_BAYU%20AJI%20TRISASONGKO.pdf',
                    downloadName: 'CV_BAYU_AJI_TRISASONGKO.pdf'
                  })}"""

new_trigger = """                  onClick={() => setActiveDoc({
                    isCv: true,
                    type: 'pdf',
                    title: 'Curriculum Vitae \u00b7 Bayu Aji Trisasongko',
                    subtitle: 'Electrical Engineering Graduate \u00b7 Telkom University 2026',
                    institution: 'Telkom University & Formulatrix Alum',
                    period: 'Updated October 2026'
                  })}"""

text = text.replace(old_trigger, new_trigger)

# Also check second trigger
old_trigger_2 = """                onClick={() => setActiveDoc({
                  type: 'pdf',
                  file: '/CV_BAYU%20AJI%20TRISASONGKO.pdf',
                  title: 'Curriculum Vitae \u00b7 Bayu Aji Trisasongko',
                  subtitle: 'Electrical Engineering & Robotics / Mechatronics',
                  institution: 'Telkom University & Formulatrix Alum',
                  period: 'Portfolio 2026',
                  downloadUrl: '/CV_BAYU%20AJI%20TRISASONGKO.pdf',
                  downloadName: 'CV_BAYU_AJI_TRISASONGKO.pdf'
                })}"""

new_trigger_2 = """                onClick={() => setActiveDoc({
                  isCv: true,
                  type: 'pdf',
                  title: 'Curriculum Vitae \u00b7 Bayu Aji Trisasongko',
                  subtitle: 'Electrical Engineering Graduate \u00b7 Telkom University 2026',
                  institution: 'Telkom University & Formulatrix Alum',
                  period: 'Updated October 2026'
                })}"""

text = text.replace(old_trigger_2, new_trigger_2)

with open('D:/downloads/BRT/portfolio-web/src/main.jsx', 'w', encoding='utf-8') as f:
    f.write(text)

print('Updated DocumentModal and CV button triggers successfully!')
