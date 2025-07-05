import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-500 ${darkMode ? "dark bg-gray-950 text-gray-100" : "bg-gray-50 text-gray-900"
        }`}
    >
      {/* Header / Navigation */}
      <header className="fixed w-full z-20 bg-white/80 dark:bg-gray-900/80 backdrop-blur shadow-sm transition-colors duration-500">
        <nav className="container mx-auto flex items-center justify-between py-4 px-6">
          <span className="text-2xl font-bold tracking-tight text-blue-700 dark:text-blue-400">
            Sujal Gupta
          </span>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8 text-lg font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-blue-600 dark:hover:text-blue-300 transition-colors duration-200 focus:outline-none focus:text-blue-700 dark:focus:text-blue-300"
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
        className="pt-24 pb-12 bg-gradient-to-br from-blue-400 via-purple-300 to-pink-200 dark:from-gray-900 dark:via-blue-900 dark:to-gray-950 transition-colors duration-500 animate-fade-in parallax-bg"
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
          <div className="flex-shrink-0">
            <img
              src="profile.jpg"
              alt="Profile"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-blue-200 dark:border-blue-700 shadow-lg transition-all duration-500 animate-float"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-2 bg-gradient-to-r from-blue-700 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x drop-shadow-lg text-reveal">
              Sujal Gupta
            </h1>
            <p
              className="text-xl md:text-2xl font-medium mb-4 text-gray-700 dark:text-gray-200 text-reveal"
              style={{ animationDelay: "0.2s" }}
            >
              Full Stack Developer | Building seamless web experiences
            </p>
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 justify-center md:justify-start mb-4">
              <a
                href="tel:+919520090880"
                className="text-blue-600 dark:text-blue-300 hover:underline flex items-center gap-1 transition-colors"
              >
                <FaPhoneAlt className="inline-block" />
                +91 8859883971
              </a>
              <a
                href="mailto:mradulverma89@gmail.com"
                className="text-blue-600 dark:text-blue-300 hover:underline flex items-center gap-1 transition-colors"
              >
                <FaRegEnvelope className="inline-block" />
                gsujal217@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/mradulverma2/"
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
      <section id="about" className="container mx-auto px-6 py-12 ">
        <h2 className="text-3xl font-bold mb-6 text-blue-700 dark:text-blue-400 text-reveal">
          Education
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:scale-[1.03] transition-all duration-300 hover:shadow-xl">
            <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300">
              G.L.A. University
            </h3>
            <p className="text-gray-700 dark:text-gray-200">
              Bachelor of Technology in Computer Science
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              6.9 CGPA, June. 2025-Present
            </p>
            <p className="text-gray-500 dark:text-gray-400">Mathura, UP</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:scale-[1.03] transition-all duration-300 hover:shadow-xl ">
            <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300">
              N.D Jain School
            </h3>
            <p className="text-gray-700 dark:text-gray-200">
              Xth 60% and XIIth 68%
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Aug. 2020-May 2022
            </p>
            <p className="text-gray-500 dark:text-gray-400">Agra, UP</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-16 bg-gradient-to-br from-pink-200 via-blue-100 to-purple-200 dark:from-gray-900 dark:via-blue-900 dark:to-gray-950 transition-colors duration-5000  px-6 animate-fade-in-up parallax-bg"
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-blue-700 dark:text-blue-400 text-reveal">
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-8">
            {Object.entries(skillIcons).map(([skill, icon], index) => (
              <div
                key={skill}
                className="flex flex-col items-center p-4 rounded-xl shadow bg-white/70 dark:bg-gray-800/70 hover:scale-110 hover:shadow-xl transition-transform duration-300 animate-fade-in-up hover:animate-glow gradient-shine"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-4xl mb-2">{icon}</span>
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
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
        className="py-16 px-6 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-blue-900 dark:to-gray-950 transition-colors duration-500 animate-fade-in parallax-bg"
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-blue-700 dark:text-blue-400 text-reveal">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {projects.map((project, idx) => (
              <div
                key={project.title}
                className="rounded-2xl shadow-lg bg-white/80 dark:bg-gray-800/80 overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-transform duration-300 animate-fade-in-up hover:animate-tilt border-2 border-transparent hover:border-gradient-animated gradient-shine"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <img
                  src={project.img}
                  alt={project.alt}
                  className="w-full h-48 "
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-blue-700 dark:text-blue-300">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gradient-to-r from-blue-200 to-purple-200 dark:from-blue-900 dark:to-purple-900 rounded text-xs font-semibold text-gray-800 dark:text-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 mb-4">
                    {project.desc.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                  <div className="flex gap-4">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-300 hover:underline"
                    >
                      Live
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-300 hover:underline"
                    >
                      GitHub
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
        className="bg-blue-50 dark:bg-gray-900 py-12 px-6 "
      >
        <div className="container mx-auto ">
          <h2 className="text-3xl font-bold mb-6 text-blue-700 dark:text-blue-400 text-reveal">
            Achievements
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 text-lg bg-white dark:bg-gray-800 rounded-xl shadow p-6 max-w-2xl mx-auto animate-fade-in-up border-2 border-transparent hover:scale-[1.03] transition-all duration-300 hover:shadow-xl">
            <li>
              Completed 300+ problems on Leetcode achieving a rating of 1400+
              while consistently refining coding skills.
            </li>
          </ul>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="container mx-auto px-6 py-12 ">
        <h2 className="text-3xl font-bold mb-6 text-blue-700 dark:text-blue-400 text-reveal">
          Certifications
        </h2>
        <div className="flex flex-col md:flex-row gap-6 md:gap-1">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 max-w-xl mx-auto animate-fade-in-up border-2 border-transparent hover:scale-[1.03] transition-all duration-300 hover:shadow-xl">
            <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Postman API Fundamentals Student Expert
            </h3>
            <p className="text-gray-700 dark:text-gray-200 mb-1">
              Postman | April 2025
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Certified in API fundamentals, including request handling,
              authentication, and automation using Postman.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 max-w-xl mx-auto animate-fade-in-up border-2 border-transparent hover:scale-[1.03] transition-all duration-300 hover:shadow-xl">
            <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Microsoft Certified: Azure Fundamentals (AZ-900)
            </h3>
            <p className="text-gray-700 dark:text-gray-200 mb-1">
              Microsoft | june 2025
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Certified in foundational Azure cloud concepts including core
              services, pricing, SLA, governance, compliance, and security.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-blue-100 dark:bg-gray-900 py-12 px-6 transition-colors duration-500 animate-fade-in-up parallax-bg"
      >
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold mb-6 text-blue-700 dark:text-blue-400 text-reveal">
            Contact
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 animate-fade-in-up border-2 border-transparent hover:border-gradient-animated gradient-shine hover:scale-[1.03] transition-all duration-300 hover:shadow-xl">
            <p className="mb-4 text-gray-700 dark:text-gray-200">
              Feel free to reach out for collaboration or just a friendly hello!
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="tel:+919520090880"
                className="text-blue-600 dark:text-blue-300 hover:underline flex items-center gap-2 text-lg"
              >
                <FaPhoneAlt /> +91 8859883971
              </a>
              <a
                href="mailto:mradulverma89@gmail.com"
                className="text-blue-600 dark:text-blue-300 hover:underline flex items-center gap-2 text-lg"
              >
                <FaRegEnvelope /> gsujal217@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/sujal-gupta-343543252/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-300 hover:underline flex items-center gap-2 text-lg"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.844-1.563 3.043 0 3.604 2.004 3.604 4.609v5.587zm0 0" />
                </svg>{" "}
                LinkedIn
              </a>
              <a
                href="https://github.com/guptasujal07"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-300 hover:underline flex items-center gap-2 text-lg"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-gray-200 dark:text-gray-400 py-4 text-center text-sm mt-8 transition-colors duration-500">
        &copy; {new Date().getFullYear()} Sujal Gupta. Designed by Sujal
        Gupta.
      </footer>
    </div>
  );
}

export default App;
