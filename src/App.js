import React, { useState } from "react";
import './App.css';
import profileImg from './myphoto.jpg';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FaBars, FaTimes } from "react-icons/fa";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <> 
      <header>
        <div className="logo">Portfolio</div>

        {/* Hamburger Icon */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </header>

      {/* Home Section */}
      <section id="home" className="hero">
        <div className="hero-text">
          <h2>Hi, I'm <span>Nandhana Subhekshanan</span></h2>
          <p>Aspiring Web Developer | Designer | Tech Enthusiast</p>
          <div className="hero-buttons">
            <a href="#about" className="btn">About Me</a>
            <a href="/cv.pdf" className="btn" download>Download CV</a>
          </div>
        </div>
        <div className="hero-image">
          <img src={profileImg} alt="Profile" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
          I'm a first year M.Tech Computer Science student passionate about web development, 
          designing, and building clean, user-friendly interfaces. I'm learning full stack 
          development and love turning ideas into real-life web apps.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project-list">
          <div className="project-card">
            <h3>🛠️ CityCareConnect</h3>
            <p>A complaint portal for road infrastructure reporting and management.</p>
          </div>
          <div className="project-card">
            <h3>🔐 Blockchain Empowered IPFS</h3>
            <p>Secure decentralized system for managing files using blockchain and IPFS.</p>
          </div>
          <div className="project-card">
            <h3>📋 To Do</h3>
            <p>Diet Planner, Women Safety Web App, Calm Corner for autistic kids.</p>
          </div>
        </div>
      </section>

      {/* Academics Section */}
      <section id="academics" className="academics">
        <h2>Academics</h2>
        <div className="card-list">
          <div className="card">
            <h3>M.Tech Computer Science</h3>
            <p>Amrita Vishwa Vidyapeetham — 2025–2027</p>
          </div>
          <div className="card">
            <h3>B.Tech Computer Science</h3>
            <p>M Dasan Institute of Technology (KTU) — 2021–2025</p>
          </div>
          <div className="card">
            <h3>Schooling</h3>
            <p>Kendriya Vidyalaya No:1 — 2009–2021</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <h2>Tech Stack</h2>
        <div className="card-list">
          <div className="card">Python</div>  
          <div className="card">C</div>
          <div className="card">HTML</div>
          <div className="card">CSS</div>
          <div className="card">JavaScript</div>
          <div className="card">SQL</div>
          <div className="card">React</div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Connect With Me</h2>
        <div className="contact-icons">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nandhanasubhekshanan@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope />
          </a>
          <a href="https://linkedin.com/in/nandhanasubhekshanan" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/NandhanaSubhekshanan" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Nandhana Subhekshanan. All rights reserved.</p>
      </footer>
    </> 
  );
}

export default App;
