import React from 'react';
import { FaLaptopCode, FaRobot, FaDatabase, FaCloud } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const skillsData = [
    {
      id: 1,
      category: 'Programming Languages',
      icon: <FaLaptopCode />,
      skills: [
        'C',
        'C++',
        'C#',
        'JavaScript',
        'Java',
        'Python',
        'PowerShell',
        'Bash',
        'MATLAB'
      ]
    },
    {
      id: 2,
      category: 'Machine Learning & AI Engineering',
      icon: <FaRobot />,
      skills: [
        'PyTorch',
        'TensorFlow',
        'Keras',
        'Scikit-learn',
        'Pandas',
        'NumPy',
        'ResNet',
        'CNN',
        'OpenCV',
        'Neural Networks',
        'Deep Learning'
      ]
    },
    {
      id: 3,
      category: 'Generative AI & NLP',
      icon: <FaRobot />,
      skills: [
        'Transformers',
        'LangChain',
        'RAG',
        'LLMs',
        'Fine-Tuning',
        'Prompt Engineering',
        'Language Modeling',
        'NLP',
        'AI Agents'
      ]
    },
    {
      id: 4,
      category: 'Databases, Tools, OS & Other Concepts',
      icon: <FaDatabase />,
      skills: [
        'PostgreSQL',
        'MongoDB',
        'Git / GitHub',
        'Linux',
        'Docker',
        'Kubernetes',
        'Terraform',
        'Jenkins',
        'Windows',
        'MacOS',
        'Linux / Unix',
        'RTOS',
        'Cloud computing (AWS)'
      ]
    },
    {
      id: 5,
      category: 'Web Development',
      icon: <FaCloud />,
      skills: [
        'HTML',
        'CSS',
        'XML',
        'ReactJS',
        'Node.js',
        'Express.js',
        'JSON',
        'Spring Boot',
        'Spring Framework',
        'REST APIs'
      ]
    }
  ];

  return (
    <section className="skills section" id="skills">
      <div className="section-header">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">Tools and technologies I work with</p>
      </div>

      <div className="skills-section">
        <div className="skills-categories">
          {skillsData.map((category) => (
            <div key={category.id} className="skill-category">
              <h3 className="skill-category-title">
                <span className="category-icon">{category.icon}</span>
                {category.category}:
              </h3>

              {/* Resume-style comma-separated list */}
              <p className="skill-list">{category.skills.join(', ')}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
