import React from "react";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import "../styles/Portfolio.css";
import "../styles/mediaQuery.css"
import logo from "../images/girlLogo.gif"
import profilePic from "../images/profileImg.jpg"
import Pallavi_Patidar_Resume from "../resume/PallaviPatidar-FrontendDeveloper.pdf"
import html from "../images/techLogo/html.png"
import css from "../images/techLogo/css.png"
import js from "../images/techLogo/js.png"
import react from "../images/techLogo/react.png"
import chakraUi from "../images/techLogo/chakraUi.png"
import git from "../images/techLogo/git.png"
import github from "../images/techLogo/github.png"
import netlify from "../images/techLogo/netlify.png"
import projectBanner from "../images/projectBanner.png"


export default function Portfolio() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleResumeDownload = () => {
        window.open("https://drive.google.com/file/d/1SKg1l_ifAVk22k4edipNbIXcCVbMDY3N/view?usp=sharing")
        const link = document.createElement('a');
        link.href = Pallavi_Patidar_Resume;
        link.download = 'Pallavi_Patidar_Resume.pdf';
        link.click();
    };
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="portfolio-container">
            <div className="background-overlay"></div>

            <div className="content">
                {/* Navigation Bar */}
                <nav className="navbar sticky-nav">
                    <h1 className="logo">Pallavi</h1>
                    <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <ul className={`nav-links ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(false)}>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#" onClick={handleResumeDownload}>Download Resume</a></li>
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
                        <div className="skill-item" data-skill="HTML"><img src={html} alt="HTML" /></div>

                        <div className="skill-item" data-skill="CSS"  ><img src={css} alt="css" /></div>

                        <div className="skill-item" data-skill="JS" ><img src={js} alt="js" /></div>

                        <div className="skill-item" data-skill="React"><img src={react} alt="react" /></div>

                        <div className="skill-item" data-skill="Chakra UI"><img src={chakraUi} alt="chakraUi"/></div>

                        <div className="skill-item" data-skill="Github"><img src={github} alt="github"/></div>

                        <div className="skill-item" data-skill="Git" ><img src={git} alt="git" /></div>

                        <div className="skill-item" data-skill="Netlify"><img src={netlify} alt="netlify"  /></div>                        
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="project-banner">
                    <h2>Projects</h2>
                    <div className="project-detail">
                        <h3>Chai-iayah</h3>
                        <p>A celebration of chai culture, inspired by the warm and inviting call of local chaiwalas that resonates in every corner of India. This platform is dedicated to the love of chai, coffee, and delightful snacks that bring people together. Explore a world where every sip tells a story steeped in tradition, healing, and comfort. From the rich aroma of freshly brewed chai to a variety of accompaniments like biscuits, snacks, and more, we aim to create an experience that feels like home. Find your love for food and discover the essence of India’s chai heritage, brewed to perfection just for you.</p>
                        
                        <div className="project-tech-cont">
                            <div className="project-tech"><img src={html} alt="HTML" /></div>
                            <div className="project-tech" ><img src={css} alt="css" /></div>
                            <div className="project-tech" ><img src={js} alt="js" /></div>
                        </div>
                        <br />
                    </div>
                    <div className="project-list">
                        <div className="project-item">
                            <img src={projectBanner} alt="projectBanner" />
                    
                    <div className="project-links">
                                <a href="https://pallavi-2410.github.io/Chai-iayah/" target="_blank" rel="noopener noreferrer" >Live <FaExternalLinkAlt className="icon" /></a>
                                <a href="https://github.com/Pallavi-2410/Chai-iayah" target="_blank" rel="noopener noreferrer" >Github <FaGithub className="icon" /></a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="contact">
                    <h2 className="section-title">Connect with Me</h2>
                    <div className="contact-details">
                        <p>Phone: +91 8602241866</p>
                        {/* <p>Email: patel.pallavi1819@gmail.com</p> */}

                        <a href="mailto:patel.pallavi1819@gmail.com?subject=Hello%20Pallavi" target="_blank" rel="noopener noreferrer" className="email-link">
                            <p>Email: patel.pallavi1819@gmail.com</p>
                        </a>

                        <p>Location: Pune, India</p>
                    </div>
                    
                    <div className="contact-links">
                        <motion.a href="https://github.com/Pallavi-2410" target="_blank" rel="noreferrer" whileHover={{ scale: 1.3 }}>
                            <FaGithub className="icon" />
                        </motion.a>
                        <motion.a href="https://www.linkedin.com/in/pallavi-patidar-8466a7273/" target="_blank" rel="noreferrer" whileHover={{ scale: 1.3 }}>
                            <FaLinkedin className="icon" />
                        </motion.a>
                        <motion.a href="mailto:patel.pallavi1819@gmail.com" whileHover={{ scale: 1.3 }}>
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
