import React from 'react';
import { FaGithub, FaRocket } from 'react-icons/fa';
import './Projects.css';


import astralMindsImg from '../../assets/viberr.png';
import Paas from '../../assets/Paas.png';
import Iaas from '../../assets/Iaas.png';
import ld from '../../assets/fresh-burger.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Astral Minds',
      date: 'Feb 2022',
      description:
        'A full-stack community platform for sharing knowledge and insights about space and celestial objects. Built with React, Node.js, Express, and MongoDB, featuring secure CRUD operations and RESTful APIs.',
      technologies: ['ReactJS', 'Node.js', 'Express.js', 'MongoDB'],
      image: astralMindsImg,
      github: 'https://github.com/Preethi0602/astral-minds' 
    },
    {
        id: 2,
        title: 'Literary Delights',
        date: 'Feb 2022',
        description:
          'A full-stack community platform for sharing knowledge and insights about space and celestial objects. Built with React, Node.js, Express, and MongoDB, featuring secure CRUD operations and RESTful APIs.',
        technologies: ['ReactJS', 'Node.js', 'Express.js', 'MongoDB'],
        image: ld,
        github: 'https://github.com/Preethi0602/literary-delights' 
      },
    {
      id: 3,
      title: 'Serverless Video Processing Pipeline (PaaS)',
      date: 'Apr 2025',
      description:
        'Designed a serverless, event-driven AWS pipeline using Lambda, S3, and ECS Fargate to process 100+ video datasets asynchronously, achieving ~300ms per frame analysis with ResNet-34 CNN.',
      technologies: ['AWS Lambda', 'S3', 'ECS Fargate', 'Python', 'CNN'],
      image: Paas,
      github: null
    },
    {
      id: 4,
      title: 'Elastic Image Recognition (IaaS)',
      date: 'Feb 2025',
      description:
        'Built a multi-tier elastic image classification system on AWS using EC2, S3, SQS, and DynamoDB with custom autoscaling, supporting 1000+ concurrent requests with sub-200ms latency.',
      technologies: ['Python', 'PostgreSQL', 'EC2', 'S3', 'SQS', 'DynamoDB'],
      image: Iaas,
      github: null
    }
  ];

  return (
    <section className="projects section" id="projects">
      <div className="section-header">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Selected academic and engineering projects</p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            {/* Image only for Astral Minds */}
            {project.image ? (
              <div className="project-image project-image-real">
                <img src={project.image} alt={project.title} />
              </div>
            ) : (
              <div className="project-image">
                <div className="project-icon">
                  <FaRocket />
                </div>
              </div>
            )}

            <div className="project-content">
              <h3>{project.title}</h3>
              <div className="project-date">{project.date}</div>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>

              {/* GitHub ONLY for Astral Minds */}
              {project.github && (
                <div className="project-links">
                  <a
                    href={project.github}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> GitHub
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
