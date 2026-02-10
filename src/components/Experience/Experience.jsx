import React from 'react';
import './Experience.css';


import asuLogo from '../../assets/asu.png';
import broadridgeLogo from '../../assets/brlogo.png';


const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'Arizona State University',
      role: 'Graduate Teaching Assistant',
      duration: 'Aug 2025 - Present',
      logo: asuLogo,
      responsibilities: [
        'Lead instruction for Information Assurance and Security under Prof. Stephen S. Yau. Deliver interactive sessions to 80+ students per semester.',
        'Create customized learning materials improving student performance on security assessments. Conduct graduate research on cybersecurity frameworks for thesis work.',
        'Provide personalized mentorship in information assurance principles.'
      ]
    },
    {
      id: 2,
      company: 'Broadridge Financial Solutions',
      role: 'Software Developer Engineer',
      duration: 'Jul 2023 - Jul 2024',
      logo: broadridgeLogo,
      responsibilities: [
        'Engineered JavaScript and PowerShell automation scripts that reduced client report navigation time by 75% for 50,000+ financial reports, saving analysts 20+ hours per week across 10+ client accounts.',
        'Automated error detection and data validation workflows using Python and PowerShell, eliminating 65% of manual data processing tasks and reducing data accuracy errors from 12% to 2% across 500K+ transaction records.',
        'Optimized report mining pipeline using Monarch Pro achieving 90% success rate, reducing processing time from 6 hours to 45 minutes per batch and enabling 50% faster report delivery to enterprise clients.',
        'Led knowledge transfer sessions for 5+ developers and collaborated with distributed US-based teams to deliver customized reporting solutions that improved system reliability by 40%.'
      ]
    },
    {
      id: 3,
      company: 'Broadridge Financial Solutions',
      role: 'Software Development Engineer Intern',
      duration: 'Jan 2023 - Jun 2023',
      logo: broadridgeLogo,
      responsibilities: [
        'Developed Java-based AWS Lambda functions to automate billing workflows processing 100K+ monthly transactions, reducing manual billing errors by 80% and decreasing processing time from 2 days to 4 hours.',
        'Architected serverless billing system using S3, DynamoDB, SNS, and SQS that scaled to handle 3x transaction volume during peak periods while maintaining 99.9% uptime.',
        'Created comprehensive technical documentation and system design diagrams reducing onboarding time for new developers by 15% and decreasing support tickets by 25%.'
      ]
    }
  ];

  return (
    <section className="experience section" id="experience">
      <div className="section-header">
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">My professional journey and achievements</p>
      </div>

      <div className="timeline">
        {experiences.map((exp) => (
          <div key={exp.id} className="timeline-item">
            <div className="company-header">
              {/* Company logo */}
              <div className="company-logo">
                <img src={exp.logo} alt={`${exp.company} logo`} />
              </div>

              <div className="company-info">
                <h3>{exp.company}</h3>
                <div className="role">{exp.role}</div>
                <div className="duration">{exp.duration}</div>
              </div>
            </div>

            {/* Bullet list */}
            <ul className="responsibilities">
              {exp.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
