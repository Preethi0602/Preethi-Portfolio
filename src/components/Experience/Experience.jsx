import React from 'react';
import './Experience.css';


import asuLogo from '../../assets/asu.png';
import broadridgeLogo from '../../assets/brlogo.png';


const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'Arizona State University',
      role: 'GEN AI Engineer',
      duration: 'Sep 2024 - May 2026',
      logo: asuLogo,
      responsibilities: [
        'Built 2 end-to-end AI applications spanning Generative AI and deep learning, taking solutions from data ingestion and preprocessing through
model/RAG development, evaluation, REST API integration, experiment tracking, and user-facing delivery.','Designed and implemented a 4-stage enterprise RAG pipeline using Python, LangChain, ChromaDB, Claude API, and PyMuPDF for
document ingestion, chunking, embedding generation, semantic retrieval, context assembly, and grounded answer generation with source
attribution.','Developed reusable Python components for ingestion, chunking, vector-store operations, retriever configuration, prompt templates, model
invocation, response parsing, and evaluation, reducing duplicated implementation effort across GenAI experiments and making the architecture
easier to extend.','Implemented configurable top-k semantic retrieval and evaluated retrieval relevance, grounding, unsupported answers, response quality,
latency, prompt behavior, and failure cases; maintained prompts, configurations, architecture decisions, and experiment history in Git for
reproducibility.','Structured the GenAI application into independent ingestion, retrieval, prompt/orchestration, and generation layers so components could be
tested separately and later exposed through APIs or extended toward tool-using/agent-style workflows.','Built and evaluated a deep-learning pipeline on the NIH ChestX-ray14 dataset with 112K+ images and 14 pathology classes using PyTorch
and ResNet-50, applying repeatable training/evaluation workflows and MLflow experiment tracking model traceability.','Developed a FastAPI inference service and React/TypeScript interface for model prediction and confidence visualization, separating training,
inference, API, and frontend components to support maintainability and containerized/cloud deployment patterns.'
  
      ]
    },
    {
      id: 2,
      company: 'Broadridge Financial Solutions',
      role: 'Software Developer Engineer',
      duration: 'Jul 2022 - Jul 2024',
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
      duration: 'Jan 2022 - Jun 2022',
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
