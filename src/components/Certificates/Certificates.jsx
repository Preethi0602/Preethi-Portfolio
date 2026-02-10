import React from 'react';
import './Certificates.css';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: 'Machine Learning using Python',
      issuer: 'IBM',
      date: 'Issued: Jan 2026'
    },
   
    {
      id: 2,
      title: 'Career Essentials for Generative AI',
      issuer: 'Microsoft',
      date: 'Issued: Dec 2025'
    },
   
    {
      id: 3,
      title: 'Docker Foundations Professional Certificate',
      issuer: 'Docker',
      date: 'Issued: Dec 2025'
    }
    
  ];

  return (
    <section className="certificates section" id="certificates">
      <div className="section-header">
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle">Professional certifications and achievements</p>
      </div>

      <div className="certificates-grid">
        {certificates.map((cert) => (
          <div key={cert.id} className="certificate-card">
            <h3>{cert.title}</h3>
            <div className="certificate-issuer">{cert.issuer}</div>
            <div className="certificate-date">{cert.date}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;