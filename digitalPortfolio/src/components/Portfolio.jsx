import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import "../styles/Portfolio.css";
// import photo from "../images/profileImg.jpg"
import logo from "../images/Logo-removebg.png"
import profilePic from "../images/profileImg.jpg"
import Pallavi_Patidar_Resume from "../resume/PallaviPatidar-FrontendDeveloper.pdf"
import html from "../images/techLogo/html.png"
import css from "../images/techLogo/css.png"
import js from "../images/techLogo/js.png"
import react from "../images/techLogo/react.png"
import git from "../images/techLogo/git.png"
import github from "../images/techLogo/github.png"
import netlify from "../images/techLogo/netlify.png"

export default function Portfolio() {
    const handleResumeDownload = () => {
        window.open("https://drive.google.com/file/d/1ohOtm0ZWARAntCW1To3Yppq3MIyCA_kM/view?usp=sharing")
        const link = document.createElement('a');
        link.href = Pallavi_Patidar_Resume;
        link.download = 'Pallavi_Patidar_Resume.pdf';
        link.click();
    };
    return (
        <div className="portfolio-container">
            <div className="background-overlay"></div>

            <div className="content">
                {/* Navigation Bar */}
                <nav className="navbar sticky-nav">
                    <h1 className="logo">Pallavi</h1>
                    <ul className="nav-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>

                {/* Hero Section */}
                <section id="home" className="hero">
                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        Hi, I'm Pallavi Patidar
                    </motion.h1>
                    <motion.p
                        className="hero-subtitle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                    >
                        Frontend Developer
                    </motion.p>
                    <motion.div
                        className="logopic"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
                    >
                        <img
                            src={logo}
                            alt="Logo"
                        />
                    </motion.div>
                </section>

                {/* About me section */}
                <section id="about" className="about">
                    <h2>About Me</h2>
                    <div className="about-flex">
                        <img
                            src={profilePic}
                            alt="Profile"
                        />
                        <p>
                            I'm a passionate Frontend Developer with experience in HTML, CSS, JavaScript, React, and more.
                            Currently, I'm pursuing a full-time Frontend development course at Masai School.
                        </p>
                    </div>
                    
                    <button className="resume-button" onClick={handleResumeDownload}>Download Resume</button>
                </section>

                {/* Skills Section */}
                <section id="skills" className="skills">
                    <h2 className="section-title">Technical Skills</h2>
                    <div className="skills-list">
                        <div className="skill-item"><img src={html} alt="HTML" /></div>
                        <div className="skill-item"><img src={css} alt="css" /></div>
                        <div className="skill-item"><img src={js} alt="js" /></div>
                        <div className="skill-item"><img src={react} alt="react" /></div>
                        <div className="skill-item"><img src={github} alt="github" /></div>
                        <div className="skill-item"><img src={git} alt="git" /></div>
                        <div className="skill-item"><img src={netlify} alt="netlify" /></div>                        
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="project-banner">
                    <h2>Projects</h2>
                    <div className="project-list">
                        <div className="project-item">Chai-iayah</div>
                    </div>
                    <div className="project-links">
                        <a href="https://frontend-link.com" target="_blank" rel="noopener noreferrer">Frontend</a>
                        <a href="https://backend-link.com" target="_blank" rel="noopener noreferrer">Backend</a>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="contact">
                    <h2 className="section-title">Connect with Me</h2>
                    <p>Phone: +91 8602241866</p>
                    <p>Email: patel.pallavi1819@gmail.com</p>
                    <p>Location: Pune, India</p>
                    <div className="contact-links">
                        <motion.a href="https://github.com/yourgithub" target="_blank" rel="noreferrer" whileHover={{ scale: 1.3 }}>
                            <FaGithub className="icon" />
                        </motion.a>
                        <motion.a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer" whileHover={{ scale: 1.3 }}>
                            <FaLinkedin className="icon" />
                        </motion.a>
                        <motion.a href="mailto:your.email@example.com" whileHover={{ scale: 1.3 }}>
                            <FaEnvelope className="icon" />
                        </motion.a>
                    </div>
                </section>

                {/* Footer */}
                <footer className="footer">
                    &copy; {new Date().getFullYear()} Pallavi Patidar. All rights reserved.
                </footer>
            </div>
        </div>
    );
}
