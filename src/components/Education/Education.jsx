import React from 'react';
import './Education.css';

import asuLogo from '../../assets/asu.png';
import nitLogo from '../../assets/jntu.png';


const Education = () => {
  const education = [
    {
      id: 1,
      school: 'Arizona State University',
      degree: 'Master of Science in Computer Science',
      duration: 'Aug 2024 - May 2026',
      logo: asuLogo,
      description:
        'Relevant coursework: Artificial Intelligence, Machine Learning, Cloud Computing, Software Engineering.'
    },
    {
      id: 2,
      school: 'National Institute of Technology Jamshedpur',
      degree: 'Bachelor of Technology in Electronics & Communications Engineering',
      duration: 'Aug 2019 - May 2023',
      logo: nitLogo,
      description:
        'Relevant coursework: Data Structures and Algorithms, Computer Networks, Object-Oriented Programming, RTOS.'
    }
  ];

  return (
    <section className="education section" id="education">
      <div className="section-header">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">My academic background and qualifications</p>
      </div>

      <div className="education-grid">
        {education.map((edu) => (
          <div key={edu.id} className="education-card">
            {/* School logo */}
            <div className="education-header">
            <div className="school-logo">
              <img src={edu.logo} alt={`${edu.school} logo`} />
            </div>
            <h3>{edu.school}</h3>
     </div>


            
            <div className="degree">{edu.degree}</div>
            <div className="duration">{edu.duration}</div>
            <p className="description">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
