import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaDownload } from 'react-icons/fa';
import './Hero.css';
import profilepic from '../../assets/pic.jpeg';
import CV from '../../assets/Preethi_Kotturu_SDE.pdf';
import leetcodeIcon from '../../assets/leetcode-dark.png';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const roles = [
    'Software Developer',
    'Full Stack Developer',
    'AI Engineer',
    'Problem Solver'

  ];

  useEffect(() => {
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseDuration = 2000;

    const handleTyping = () => {
      const currentRole = roles[roleIndex];

      if (isDeleting) {
        setText(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      } else {
        setText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex === currentRole.length) {
          setTimeout(() => setIsDeleting(true), pauseDuration);
          return;
        }
      }
    };

    const timeout = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section className="hero section" id="home">
      <div className="hero-content">
        <h2 className="hero-greeting">Hello, I'm</h2>
        <h1 className="hero-name">Preethi Kotturu</h1>
        
        <div className="typing-container">
          <span className="typing-text">{text}</span>
          <span className="cursor"></span>
        </div>

        <p className="hero-description">
          Passionate software developer crafting innovative solutions with modern technologies.
          Specialized in full-stack development and artificial intelligence, turning ideas into reality.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">
            <FaEnvelope /> Get In Touch
          </a>
          <a href= {CV} className="btn btn-secondary" download>
            <FaDownload /> Download Resume
          </a>
        </div>

        <div className="social-links">
          <a href="https://github.com/Preethi0602" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/preethik02/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a
             href="https://leetcode.com/u/MysticMuggle934/"
             target="_blank"
             rel="noopener noreferrer"
             aria-label="LeetCode"
             className="leetcode-link"
          >
           <img src={leetcodeIcon} alt="LeetCode" />
         </a>

         
          <a href="mailto:kotturupreethi@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="profile-container">
        <div className="profile-wrapper">
          <img
            src={profilepic}
            alt="Profile"
            className="profile-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;