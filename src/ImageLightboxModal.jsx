import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ArrowLeft, ZoomIn, ZoomOut, RotateCcw, X, ExternalLink, Download } from 'lucide-react';

export default function ImageLightboxModal({ image, title, subtitle, onClose }) {
  if (!image) return null;
  const [zoom, setZoom] = useState(1);

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.25, 3.0));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.25, 0.5));
  const handleResetZoom = () => setZoom(1);

  // Lock scroll
  useEffect(() => {
    const html = document.documentElement;
    html.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    return () => {
      html.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return createPortal(
    <div className="fh-modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="fh-modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: '1150px' }}>
        <div className="fh-modal-header">
          <button className="fh-button fh-modal-back" onClick={onClose}>
            <ArrowLeft size={16} /> Close
          </button>
          <div className="fh-modal-title">
            <strong>{title || 'Technical Diagram / Image'}</strong>
            <small>{subtitle || 'Click and zoom to inspect details'}</small>
          </div>

          <div className="fh-modal-header-actions">
            <div className="fh-zoom-controls">
              <button 
                className="fh-zoom-btn" 
                onClick={handleZoomOut} 
                title="Zoom Out"
                disabled={zoom <= 0.5}
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
                disabled={zoom >= 3.0}
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
            <button className="fh-modal-close" onClick={onClose} aria-label="Close image view">
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="fh-modal-body" style={{ height: '78vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF' }}>
          <div className="fh-modal-img-container" style={{ margin: 'auto' }}>
            <img 
              src={image} 
              alt={title || 'Technical Diagram'} 
              className="fh-modal-image"
              style={{ 
                transform: `scale(${zoom})`,
                transformOrigin: 'center center',
                transition: 'transform 0.2s ease-out',
                maxHeight: '72vh',
                objectFit: 'contain'
              }} 
            />
          </div>
        </div>

        <div className="fh-modal-footer">
          <span className="fh-mono">TECHNICAL SPECIFICATION &amp; VALIDATION EVIDENCE</span>
          <div className="fh-modal-actions">
            <a 
              className="fh-button" 
              href={image} 
              target="_blank" 
              rel="noreferrer"
            >
              Open Original in New Tab <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
