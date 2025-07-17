import React, { useEffect } from 'react';

function Modal({ isOpen, element, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  if (!isOpen || !element) return null;

  const renderCostcodes = () => {
    if (!element.costcodes) return 'No costcodes available';
    
    if (Array.isArray(element.costcodes)) {
      return element.costcodes.map((code, index) => (
        <span key={index} className="costcode">{code}</span>
      ));
    }
    
    if (typeof element.costcodes === 'string') {
      return <div dangerouslySetInnerHTML={{ __html: element.costcodes }} />;
    }
    
    return 'No costcodes available';
  };

  return (
    <div className={`modal ${isOpen ? 'show' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="modal-close" onClick={onClose}>&times;</span>
        <h2 id="modal-title">{element.symbol || 'N/A'}</h2>
        <h3 id="modal-subtitle">{element.subtitle || 'No subtitle available'}</h3>
        <p id="modal-desc">{element.desc || 'No description available.'}</p>
        <div className="costcodes-section">
          <h3>Costcodes</h3>
          <div id="modal-costcodes">
            {renderCostcodes()}
          </div>
        </div>
        <a 
          id="modal-link" 
          href={element.link || '#'} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}

export default Modal;