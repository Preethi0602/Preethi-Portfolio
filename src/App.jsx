import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Certificates from './components/Certificates/Certificates';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Animated Background */}
      <div className="bg-animation"></div>
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content Sections */}
      <main>
        <Hero />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>

     


      
      {/* Footer */}
      <footer className="footer">
        <p>© 2026 @ Preethi Kotturu 🎀</p>
      </footer>
    </div>
  );
}

export default App;