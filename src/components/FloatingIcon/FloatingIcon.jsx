import React from 'react';
import './FloatingIcon.css';

/**
 * FloatingIcon
 *
 * Props:
 * - src: optional path to an image (string). If present, <img> will be used.
 * - alt: alt text for image
 * - emoji: optional string emoji (used when src not provided)
 * - onClick: optional click handler
 */
const FloatingIcon = ({ src, alt = 'Floating icon', emoji = '🦋', onClick }) => {
  return (
    <button
      className="floating-icon-btn"
      onClick={onClick}
      aria-label={alt}
      title={alt}
      type="button"
    >
      {src ? (
        <img src={src} alt={alt} className="floating-icon-img" />
      ) : (
        <span className="floating-icon-emoji" aria-hidden="true">{emoji}</span>
      )}
    </button>
  );
};

export default FloatingIcon;
