import React, { useState, useEffect, useRef } from "react";
import {
  FaJava,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaCloud,
  FaRegEnvelope,
  FaPhoneAlt,
  FaRegCommentDots,
} from "react-icons/fa";
import {
  SiExpress,
  SiTailwindcss,
  SiRedux,
  SiPostman,
  SiFirebase,
  SiCloudinary,
  SiGooglecloud,
  SiMongodb,
} from "react-icons/si";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

const projects = [
  {
    title: "Smart Strokes-AI Assisted Typing Platform",
    tech: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Tailwind CSS",
      "Zustand",
      "firebase",
      "cloudinary",
    ],
    desc: [
      "Developed a full-stack typing test application with AI-driven personalized practice sessions.",
      "Implemented secure user authentication with OTP system, and password reset functionality.",
      "Implemented dark/light theme support with smooth transition.",
      "Added live Keyboard UI showing mistyped keys.",
    ],
    img: "p1.png",
    alt: "Smart Strokes Project Image",
    live: "https://smart-strokes.vercel.app",
    github: "https://github.com/guptasujal07/SmartStrokes-main.git",
  },
  {
    title: "College Anonymous- Anonymous College Community",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Firebase",
      "Cloudinary",
      "Google Cloud APIs",
      "WebSockets",
    ],
    desc: [
      "Built an anonymous platform for college students to share text and images securely.",
      "Implemented Content Moderation using Google cloud APIs.",
      "Added a password reset feature and optimized Firebase Storage for media handling.",
      "Added real-time public chat with WebSockets.",
      "Designed an intuitive UI using Tailwind CSS.",
    ],
    img: "p2.png",
    alt: "College Anonymous Project Image",
    live: "https://college-anonymous.vercel.app",
    github: "https://github.com/guptasujal07/college-anonymous-main",
  },
  {
    title: "Blog App",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Firebase",
      "Cloudinary",
    ],
    desc: [
      "Developed a web application for blogging with a polished UI.",
      "Integrated OTP & Google authentication for secure login.",
      "Implemented a comment system to enhance user interaction.",
      "Optimized post fetching and ensured full responsiveness.",
    ],
    img: "p3.png",
    alt: "Blog App Project Image",
    live: "https://next-blogs-u170.onrender.com",
    github: "https://github.com/guptasujal07/your-blogs-main",
  },
];

const skillIcons = {
  Java: <FaJava className="text-orange-600" title="Java" />,
  JavaScript: <FaJs className="text-yellow-400" title="JavaScript" />,
  "React.js": <FaReact className="text-blue-500" title="React.js" />,
  "Node.js": <FaNodeJs className="text-green-600" title="Node.js" />,
  "Express.js": (
    <SiExpress
      className="text-gray-700 dark:text-gray-200"
      title="Express.js"
    />
  ),
  "Tailwind CSS": (
    <SiTailwindcss className="text-cyan-400" title="Tailwind CSS" />
  ),
  Zustand: <FaReact className="text-orange-400" title="Zustand" />,
  Redux: <SiRedux className="text-purple-500" title="Redux" />,
  Git: <FaGitAlt className="text-orange-500" title="Git" />,
  GitHub: (
    <FaGithub className="text-gray-800 dark:text-gray-200" title="GitHub" />
  ),
  MongoDB: <SiMongodb className="text-green-700" title="MongoDB" />,
  Postman: <SiPostman className="text-orange-500" title="Postman" />,
  "REST APIs": <FaRegCommentDots className="text-blue-400" title="REST APIs" />,
  "Authentication (JWT)": (
    <FaRegEnvelope className="text-pink-500" title="Authentication (JWT)" />
  ),
  Firebase: <SiFirebase className="text-yellow-500" title="Firebase" />,
  Cloudinary: <SiCloudinary className="text-blue-400" title="Cloudinary" />,
  WebSockets: <FaCloud className="text-green-500" title="WebSockets" />,
  "Google Cloud APIs": (
    <SiGooglecloud className="text-blue-500" title="Google Cloud APIs" />
  ),
};

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());

  // Refs for sections
  const sectionRefs = useRef({});

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set(prev).add(entry.target.id));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all sections
    Object.values(sectionRefs.current).forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Helper function to set section ref
  const setSectionRef = (id) => (el) => {
    sectionRefs.current[id] = el;
  };

  // Helper function to check if section is visible
  const isSectionVisible = (id) => visibleSections.has(id);

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-500 ${darkMode ? "dark bg-gray-950 text-gray-100" : "bg-gray-50 text-gray-900"
        }`}
    >
      {/* Header / Navigation */}
      <header className="fixed w-full z-20 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg transition-all duration-500 border-b border-gray-200/20 dark:border-gray-700/20">
        <nav className="container mx-auto flex items-center justify-between py-4 px-6">
          <span className="text-3xl font-display font-bold tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
            Sujal Gupta
          </span>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8 text-lg font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="nav-link relative px-3 py-2 rounded-lg hover:text-blue-600 dark:hover:text-blue-300 transition-all duration-300 focus:outline-none focus:text-blue-700 dark:focus:text-blue-300 hover:bg-blue-50 dark:hover:bg-gray-800"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
              onClick={() => setDarkMode((d) => !d)}
              className="p-2 rounded-full bg-blue-100 dark:bg-gray-800 hover:bg-blue-200 dark:hover:bg-gray-700 transition-colors duration-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {darkMode ? (
                <SunIcon className="w-6 h-6 text-yellow-400 animate-spin-slow" />
              ) : (
                <MoonIcon className="w-6 h-6 text-blue-700" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle menu"
            >
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className={`transition-transform duration-300 ${isMenuOpen ? "rotate-90" : ""
                  }`}
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? "max-h-52 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <ul className="container mx-auto px-6 py-2 space-y-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 text-lg font-medium hover:text-blue-600 dark:hover:text-blue-300 transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* Hero / About Section */}
      <section
        id="home"
        ref={setSectionRef('home')}
        className={`relative pt-24 pb-12 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-gray-950 transition-all duration-700 overflow-hidden ${isSectionVisible('home') ? 'animate-fade-in' : 'opacity-0'}`}
      >
        {/* Animated background particles */}
        <div className="particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${20 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-6 relative z-10">
          <div className="flex-shrink-0">
            <div className="profile-image pulse-ring">
              <img
                src="profile.jpg"
                alt="Profile"
                className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-blue-200 dark:border-blue-700 shadow-2xl transition-all duration-500 animate-float"
              />
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-display font-black mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x drop-shadow-2xl text-reveal">
              Sujal Gupta
            </h1>
            <p
              className="text-2xl md:text-3xl font-medium mb-6 text-gray-700 dark:text-gray-200 text-reveal font-sans"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="typing-effect">Full Stack Developer</span>
              <br />
              <span className="text-lg text-gray-600 dark:text-gray-300" style={{ animationDelay: "0.4s" }}>
                Building seamless web experiences with modern technologies
              </span>
            </p>
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 justify-center md:justify-start mb-4">
              <a
                href="tel:+918859883971"
                className="text-blue-600 dark:text-blue-300 hover:underline flex items-center gap-1 transition-colors"
              >
                <FaPhoneAlt className="inline-block" />
                +91 8859883971
              </a>
              <a
                href="mailto:gsujal217@gmail.com"
                className="text-blue-600 dark:text-blue-300 hover:underline flex items-center gap-1 transition-colors"
              >
                <FaRegEnvelope className="inline-block" />
                gsujal217@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/sujal-gupta-343543252/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-300 hover:underline flex items-center gap-1 transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.844-1.563 3.043 0 3.604 2.004 3.604 4.609v5.587zm0 0" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/guptasujal07"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-300 hover:underline flex items-center gap-1 transition-colors"
              >
                <FaGithub className="inline-block" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section 
        id="about" 
        ref={setSectionRef('about')}
        className={`container mx-auto px-6 py-20 ${isSectionVisible('about') ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x text-reveal">
          Education & Background
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto text-reveal" style={{ animationDelay: "0.2s" }}>
          Building a strong foundation for innovative development
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="glass rounded-3xl shadow-xl p-8 border border-blue-200/20 dark:border-blue-700/20 hover:scale-[1.03] transition-all duration-500 hover:shadow-glow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-2xl">
                🎓
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-blue-800 dark:text-blue-200">
                  G.L.A. University
                </h3>
                <p className="text-blue-600 dark:text-blue-300 font-medium">
                  Bachelor of Technology in Computer Science
                </p>
              </div>
            </div>
            <div className="space-y-2 text-gray-700 dark:text-gray-200">
              <p><span className="font-semibold">CGPA:</span> 6.9</p>
              <p><span className="font-semibold">Duration:</span> June 2025 - Present</p>
              <p><span className="font-semibold">Location:</span> Mathura, UP</p>
            </div>
          </div>
          
          <div className="glass rounded-3xl shadow-xl p-8 border border-green-200/20 dark:border-green-700/20 hover:scale-[1.03] transition-all duration-500 hover:shadow-glow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-2xl">
                🏫
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-green-800 dark:text-green-200">
                  N.D Jain School
                </h3>
                <p className="text-green-600 dark:text-green-300 font-medium">
                  Secondary & Higher Secondary Education
                </p>
              </div>
            </div>
            <div className="space-y-2 text-gray-700 dark:text-gray-200">
              <p><span className="font-semibold">Xth:</span> 60%</p>
              <p><span className="font-semibold">XIIth:</span> 68%</p>
              <p><span className="font-semibold">Duration:</span> Aug 2020 - May 2022</p>
              <p><span className="font-semibold">Location:</span> Agra, UP</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        ref={setSectionRef('skills')}
        className={`py-20 bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-blue-900 dark:to-gray-950 transition-all duration-700 relative overflow-hidden ${isSectionVisible('skills') ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x text-reveal">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto text-reveal" style={{ animationDelay: "0.2s" }}>
            Mastering modern technologies to build exceptional digital experiences
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-8">
            {Object.entries(skillIcons).map(([skill, icon], index) => (
              <div
                key={skill}
                className="skill-card flex flex-col items-center p-6 rounded-2xl shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 hover:scale-110 hover:shadow-2xl transition-all duration-500 animate-fade-in-up gradient-shine"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="skill-icon text-5xl mb-4 transform transition-all duration-300 hover:scale-125 hover:rotate-12">{icon}</span>
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-200 text-center leading-tight">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        ref={setSectionRef('projects')}
        className={`py-20 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 dark:from-gray-900 dark:via-purple-900 dark:to-gray-950 transition-all duration-700 relative overflow-hidden ${isSectionVisible('projects') ? 'animate-fade-in' : 'opacity-0'}`}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/20 via-pink-100/20 to-rose-100/20 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-rose-900/20"></div>
        
        <div className="container mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-center bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent animate-gradient-x text-reveal">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto text-reveal" style={{ animationDelay: "0.2s" }}>
            Showcasing innovative solutions and cutting-edge development
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {projects.map((project, idx) => (
              <div
                key={project.title}
                className="project-card rounded-3xl shadow-xl bg-white/90 dark:bg-gray-800/90 overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-transform duration-500 animate-fade-in-up border border-gray-200/20 dark:border-gray-700/20 gradient-shine"
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                <img
                  src={project.img}
                  alt={project.alt}
                  className="w-full h-48 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-display font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 rounded-full text-xs font-semibold text-purple-800 dark:text-purple-200 border border-purple-200/50 dark:border-purple-700/50 hover:scale-105 transition-transform duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 mb-6 space-y-2 text-sm leading-relaxed">
                    {project.desc.map((d, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-300">{d}</li>
                    ))}
                  </ul>
                  <div className="flex gap-4">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary px-6 py-3 rounded-full text-white font-semibold hover:scale-105 transition-all duration-300 flex items-center gap-2"
                    >
                      <span>🌐 Live Demo</span>
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-full border-2 border-purple-500 text-purple-600 dark:text-purple-400 font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center gap-2"
                    >
                      <span>📁 GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section
        id="achievements"
        ref={setSectionRef('achievements')}
        className={`py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-emerald-900 dark:to-gray-950 transition-all duration-700 relative overflow-hidden ${isSectionVisible('achievements') ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/20 via-teal-100/20 to-cyan-100/20 dark:from-emerald-900/20 dark:via-teal-900/20 dark:to-cyan-900/20"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-center bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent animate-gradient-x text-reveal">
            Achievements & Recognition
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto text-reveal" style={{ animationDelay: "0.2s" }}>
            Celebrating milestones and continuous growth in the tech journey
          </p>
          
          <div className="max-w-4xl mx-auto">
            <div className="glass rounded-3xl shadow-2xl p-8 border border-emerald-200/20 dark:border-emerald-700/20 hover:scale-[1.02] transition-all duration-500 hover:shadow-glow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-2xl">
                  🏆
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-emerald-800 dark:text-emerald-200">
                    LeetCode Master
                  </h3>
                  <p className="text-emerald-600 dark:text-emerald-300 font-medium">
                    Competitive Programming Excellence
                  </p>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 text-lg space-y-2 leading-relaxed">
                <li>
                  <span className="font-semibold text-emerald-700 dark:text-emerald-300">300+ Problems Solved:</span> 
                  Mastered algorithms and data structures across various difficulty levels
                </li>
                <li>
                  <span className="font-semibold text-emerald-700 dark:text-emerald-300">1400+ Rating:</span> 
                  Consistently ranked among top performers in competitive programming
                </li>
                <li>
                  <span className="font-semibold text-emerald-700 dark:text-emerald-300">Daily Practice:</span> 
                  Maintained streak of continuous learning and skill refinement
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section 
        id="certifications" 
        ref={setSectionRef('certifications')}
        className={`py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-900 dark:to-gray-950 transition-all duration-700 relative overflow-hidden ${isSectionVisible('certifications') ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-indigo-100/20 to-purple-100/20 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-center bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-gradient-x text-reveal">
            Professional Certifications
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto text-reveal" style={{ animationDelay: "0.2s" }}>
            Validating expertise through industry-recognized certifications
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="glass rounded-3xl shadow-2xl p-8 border border-blue-200/20 dark:border-blue-700/20 hover:scale-[1.03] transition-all duration-500 hover:shadow-glow-lg animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-2xl">
                  🚀
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-blue-800 dark:text-blue-200">
                    Postman API Fundamentals Student Expert
                  </h3>
                  <p className="text-blue-600 dark:text-blue-300 font-medium">
                    Postman • April 2025
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-200 text-lg leading-relaxed">
                Certified in API fundamentals, including request handling,
                authentication, and automation using Postman. Demonstrates
                proficiency in modern API development practices.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 text-sm rounded-full border border-blue-200/50">
                  API Development
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 text-sm rounded-full border border-blue-200/50">
                  Authentication
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 text-sm rounded-full border border-blue-200/50">
                  Automation
                </span>
              </div>
            </div>
            
            <div className="glass rounded-3xl shadow-2xl p-8 border border-indigo-200/20 dark:border-indigo-700/20 hover:scale-[1.03] transition-all duration-500 hover:shadow-glow-lg animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center text-2xl">
                  ☁️
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-indigo-800 dark:text-indigo-200">
                    Microsoft Azure Fundamentals (AZ-900)
                  </h3>
                  <p className="text-indigo-600 dark:text-indigo-300 font-medium">
                    Microsoft • June 2025
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-200 text-lg leading-relaxed">
                Certified in foundational Azure cloud concepts including core
                services, pricing, SLA, governance, compliance, and security.
                Validates cloud expertise for modern development.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200 text-sm rounded-full border border-indigo-200/50">
                  Cloud Services
                </span>
                <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200 text-sm rounded-full border border-indigo-200/50">
                  Security
                </span>
                <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200 text-sm rounded-full border border-indigo-200/50">
                  Governance
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        ref={setSectionRef('contact')}
        className={`py-20 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 dark:from-gray-900 dark:via-rose-900 dark:to-gray-950 transition-all duration-700 relative overflow-hidden ${isSectionVisible('contact') ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-100/20 via-pink-100/20 to-purple-100/20 dark:from-rose-900/20 dark:via-pink-900/20 dark:to-purple-900/20"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-center bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent animate-gradient-x text-reveal">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto text-reveal" style={{ animationDelay: "0.2s" }}>
            Ready to collaborate on exciting projects? Let's build something amazing together!
          </p>
          
          <div className="max-w-4xl mx-auto">
            <div className="glass rounded-3xl shadow-2xl p-8 border border-rose-200/20 dark:border-rose-700/20 hover:scale-[1.02] transition-all duration-500 hover:shadow-glow-lg">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                  💬
                </div>
                <p className="text-xl text-gray-700 dark:text-gray-200 leading-relaxed">
                  Feel free to reach out for collaboration, opportunities, or just a friendly hello!
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <a
                    href="tel:+918859883971"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/50 dark:bg-gray-800/50 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300 hover:scale-105 border border-rose-200/30 dark:border-rose-700/30"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white">
                      <FaPhoneAlt />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-gray-200">Phone</p>
                      <p className="text-blue-600 dark:text-blue-400">+91 8859883971</p>
                    </div>
                  </a>
                  
                  <a
                    href="mailto:gsujal217@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/50 dark:bg-gray-800/50 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300 hover:scale-105 border border-rose-200/30 dark:border-rose-700/30"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white">
                      <FaRegEnvelope />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-gray-200">Email</p>
                      <p className="text-green-600 dark:text-green-400">gsujal217@gmail.com</p>
                    </div>
                  </a>
                </div>
                
                <div className="space-y-4">
                  <a
                    href="https://www.linkedin.com/in/sujal-gupta-343543252/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/50 dark:bg-gray-800/50 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300 hover:scale-105 border border-rose-200/30 dark:border-rose-700/30"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white">
                      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="text-white">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.844-1.563 3.043 0 3.604 2.004 3.604 4.609v5.587zm0 0" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-gray-200">LinkedIn</p>
                      <p className="text-blue-600 dark:text-blue-400">Connect with me</p>
                    </div>
                  </a>
                  
                  <a
                    href="https://github.com/guptasujal07"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/50 dark:bg-gray-800/50 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300 hover:scale-105 border border-rose-200/30 dark:border-rose-700/30"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center text-white">
                      <FaGithub />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-gray-200">GitHub</p>
                      <p className="text-gray-600 dark:text-gray-400">View my work</p>
                    </div>
                  </a>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Available for freelance opportunities and full-time positions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 dark:from-black dark:via-blue-950 dark:to-black text-gray-200 dark:text-gray-400 py-8 text-center transition-all duration-500 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
        
        <div className="relative z-10">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-display font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  Sujal Gupta
                </h3>
                <p className="text-gray-300 dark:text-gray-400">
                  Full Stack Developer & Problem Solver
                </p>
              </div>
              
              <div className="flex gap-6">
                <a
                  href="https://github.com/guptasujal07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-glow"
                >
                  <FaGithub className="text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sujal-gupta-343543252/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-glow"
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="text-white">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.844-1.563 3.043 0 3.604 2.004 3.604 4.609v5.587zm0 0" />
                  </svg>
                </a>
                <a
                  href="mailto:gsujal217@gmail.com"
                  className="w-10 h-10 bg-gray-700 hover:bg-green-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-glow"
                >
                  <FaRegEnvelope className="text-white" />
                </a>
              </div>
            </div>
            
            <div className="border-t border-gray-700/50 pt-6">
              <p className="text-sm text-gray-400 dark:text-gray-500">
                &copy; {new Date().getFullYear()} Sujal Gupta. All rights reserved. 
                <span className="block mt-1">Crafted with ❤️ and modern web technologies</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
