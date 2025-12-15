import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Download, ChevronDown } from 'lucide-react';

// ===== EDIT YOUR CONTENT HERE =====
const PORTFOLIO_DATA = {
  personal: {
    name: "Rishika Anand",
    title: "Computer Science Student",
    intro: "Passionate about building innovative solutions through code",
    email: "rishikaanand005@gmail.com",
    phone: "+91 7676452184",
    location: "Bengaluru, India",
    linkedin: "https://www.linkedin.com/in/rishika-anand-b9646a2a4/",
    github: "https://github.com/rishika118",
    resumeUrl: "RESUME_Rishika.pdf" // Add your resume URL here
  },
  
  about: "I’m a third-year Computer Science student specializing in Data Science, currently building a strong foundation in data analytics, data modeling, and problem solving. I enjoy learning through hands-on projects, coursework, and real-world exposure, and I’m always looking to expand my skill set beyond the classroom.",
  
  education: [
    {
      degree: "Bachelor of Science in CSE - Data Science",
      institution: "New Horizon College of Engineering",
      duration: "2023 - 2027",
      cgpa: "9.2",
      highlights: "Art Club | HealthXcel Club - Review Committee Chair | ISTE Event Coordinator"
    },

    {
      degree: "Grade XII ",
      institution: "Air Force School, ASTE",
      duration: "2009 - 2023",
      highlights: "Member of Student Council"   
    }
  ],
  
  experience: [
    {
      role: "Data Management Intern",
      company: "LuxUnlock Private Villas",
      duration: "Aug 2025 - Sept 2025",
      points: [
        "Assisted in data entry, organization, and maintenance of company databases"
      ]
    },
    {
      role: "Web Development Intern",
      company: "CodSoft",
      duration: "Feb 2025 - Mar 2025",
      points: [
        "Developed responsive web projects including a personal portfolio website, a modern landing page, and a functional calculator using HTML, CSS, and JavaScript.",
        " Gained hands-on experience in front-end design, layout structuring, and user interaction."
      ]
    },
    {
      role: "Python Programming Intern",
      company: "MotionCut",
      duration: "Sept 2024 - Oct 2024",
      points: [
        "Built Python-based projects including a number guessing game, to-do list app, hangman game, and random password generator, enhancing problem-solving and coding skills."
      ]  
    },
    {
        role: "Python Development Intern",
        company: "OctaNet Services Pvt Ltd.",
        duration: "Aug 2024 - Sept 2024",
        points: [
            "Developed a Python-based ATM simulation with functionalities like balance inquiry, withdrawals, deposits, PIN change, and transaction history, strengthening logic building and backend programming skills."
        ]
    }
  ],
  
  projects: [
    {
      name: "UniLift - Smart Campus Carpool App",
      description: " Campus based ride-sharing app built for university students to make daily travel cheaper, safer, and more convenient. Designed and implemented a matching engine that ranks results intelligently, ensuring riders see the most relevant carpools first.",
      tech: ["React Native", "Expo Router", "Node.js", "Express.js", "MongoDB","Context API"],
      github: "https://github.com/rishika118/UniLift",
      
    },
    {
      name: "Hand2Hope : Donate and make a difference",
      description: "Developed a dynamic web platform that connects donors with verified charities. The site allows charities to post donation requests and enables donors to view, approve, or reject them. Implemented features such as user authentication, request tracking, and donation status updates.",
      tech: ["HTML", "CSS", "JavaScript", "PHP","MySQL", "XAMPP"],
      github: "https://github.com/rishika118/DonationMiniProject",
    },
    {
      name: "Social Media Engagement Analytics Dashboard",
      description: "Created interactive dashboards in Tableau to explore patterns in social media engagement metrics such as likes, comments, shares, and post frequency. Focused on identifying trends across different content types, timeframes, and platforms to support strategic decision-making in digital marketing.",
      tech: ["Tableau", "MS Excel", "Python"],
      
    },
    {
      name: "Zomato Restaurant Insights Dashboard",
      description: "Worked on a real-world Zomato dataset to perform data cleaning and preprocessing using Python (Pandas and NumPy). Handled missing values, removed duplicates, and standardized formats for effective analysis. Created meaningful visualizations using Matplotlib and Seaborn to explore trends in restaurant ratings, popular cuisines, cost distributions, and city-wise preferences.",
      tech: ["Tableau", "MS Excel", "Python"],
    },
    {
      name : "Sensor Enabled Traffic Check Post Model",
      description: "Developed an automatic, sensor-enabled traffic checkpost using C++ and GitHub for collaborative development and version control. Implemented ultrasonic sensors to measure vehicle distance, enabling simulation and optimization of traffic management algorithms. Focused on improving traffic flow, monitoring, and enforcement through a robust, automated system.",
      tech: ["Arduino IDE", "C++", "GitHub"],
    }
  ],
  
  certifications: [
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
      issuer: "Oracle",
      year: "Sept 2025",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=96720737F44300D73AF7F91F3F64F8CF08F1E28C24726C41B15D0194F7082D98"
    },
    {
      title: "Accenture North America - Data Analytics and Visualization Job Simulation",
      issuer: "Forage",
      year: "Jul 2024",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20North%20America/hzmoNKtzvAzXsEqx8_Accenture%20North%20America_TCf3Sg9dGKypKxhBk_1721017994774_completion_certificate.pdf"
    },
    {
      title: "BCG - Data Science Job Simulation",
      issuer: "Forage",
      year: "Jul 2025",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/SKZxezskWgmFjRvj9/Tcz8gTtprzAS4xSoK_SKZxezskWgmFjRvj9_TCf3Sg9dGKypKxhBk_1753186223242_completion_certificate.pdf"
    },
    {
      title: "Mastercard - Cybersecurity",
      issuer: "Forage",
      year: "Jul 2024",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/mastercard/vcKAB5yYAgvemepGQ_Mastercard_TCf3Sg9dGKypKxhBk_1721069297392_completion_certificate.pdf"

    }
  ],
  
  volunteering: [
    {
      role: "Event Management & Social Media Team",
      organization: "NASSCOM",
      description: "Actively volunteered at various NASSCOM conferences and summits, contributing to event management and social media operations. Played a role in coordinating sessions, managing logistics, and supporting live content creation to enhance event visibility and attendee engagement."
    },
    {
      role: "Student Coordinator - Placement Drives",
      organization: "New Horizon College of Engineering",
      description: "Assisted in the smooth execution of campus recruitment drives by coordinating students, managing schedules, and ensuring clear communication between recruiters and candidates. "
    }
  ],
  
  skills: {
    technical: ["JavaScript", "Python", "Java", "C++", "React", "Node.js", "PHP", "SQL"],
    tools: ["Git", "Jupyter Notebook", "Tableau", "Eclipse IDE", "VS Code", "VMware"],
    soft: ["Problem Solving", "Team Collaboration", "Agile Methodology", "Communication","Networking"]
  }
};

// 3D Background Component
const ThreeBackground = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);
    
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.z = Math.random() * 1000;
        this.vz = 0.5 + Math.random() * 0.5;
      }
      
      update() {
        this.z -= this.vz;
        if (this.z <= 0) {
          this.z = 1000;
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
        }
      }
      
      draw() {
        const scale = 1000 / (1000 + this.z);
        const x = (this.x - canvas.width / 2) * scale + canvas.width / 2;
        const y = (this.y - canvas.height / 2) * scale + canvas.height / 2;
        const size = (1 - this.z / 1000) * 2;
        const opacity = 1 - this.z / 1000;
        
        ctx.fillStyle = `rgba(100, 200, 255, ${opacity * 0.6})`;
        ctx.fillRect(x, y, size, size);
      }
    }
    
    for (let i = 0; i < 100; i++) {
      particles.push(new Particle());
    }
    
    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 20, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      
      animationId = requestAnimationFrame(animate);
    };
    animate();
    
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
};

// Main Portfolio Component
export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'experience', 'projects', 'certifications', 'volunteering', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-x-hidden">
      <ThreeBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button onClick={() => scrollToSection('home')} className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {PORTFOLIO_DATA.personal.name.split(' ')[0]}
            </button>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`hover:text-cyan-400 transition-colors ${activeSection === item.toLowerCase() ? 'text-cyan-400' : ''}`}
                >
                  {item}
                </button>
              ))}
            </div>
            
            {/* Mobile Menu Button */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-md border-b border-slate-700">
            <div className="px-4 py-4 space-y-3">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left hover:text-cyan-400 transition-colors py-2"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4">
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl sm:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              {PORTFOLIO_DATA.personal.name}
            </h1>
            <p className="text-2xl sm:text-3xl text-slate-300 mb-2">{PORTFOLIO_DATA.personal.title}</p>
            <p className="text-lg sm:text-xl text-slate-400">{PORTFOLIO_DATA.personal.intro}</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button onClick={() => scrollToSection('projects')} className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all transform hover:scale-105">
              View Projects
            </button>
            <a
  href={PORTFOLIO_DATA.personal.resumeUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="px-8 py-3 border-2 border-cyan-500 rounded-full hover:bg-cyan-500/10 transition-all transform hover:scale-105 flex items-center gap-2"
>
  <Download size={18} />
  Resume
</a>

            <button onClick={() => scrollToSection('contact')} className="px-8 py-3 border-2 border-purple-500 rounded-full hover:bg-purple-500/10 transition-all transform hover:scale-105">
              Contact Me
            </button>
          </div>
          
          <div className="animate-bounce">
            <ChevronDown size={32} className="mx-auto text-cyan-400" />
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">About Me</h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all">
            <p className="text-lg text-slate-300 leading-relaxed">{PORTFOLIO_DATA.about}</p>
          </div>
        </div>
      </section>
      
      {/* Education Section */}
      {/* Education Section */}
<section id="education" className="relative py-20 px-4">
  <div className="max-w-4xl mx-auto relative z-10">
    <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
      Education
    </h2>

    {/* Added space between cards */}
    <div className="space-y-8">
      {PORTFOLIO_DATA.education.map((edu, idx) => (
        <div
          key={idx}
          className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all"
        >
          <h3 className="text-2xl font-bold text-cyan-400 mb-2">
            {edu.degree}
          </h3>
          <p className="text-xl text-slate-300 mb-2">
            {edu.institution}
          </p>
          <p className="text-slate-400 mb-2">
            {edu.duration}
          </p>

          {edu.cgpa && (
            <p className="text-slate-300">
              CGPA: {edu.cgpa}
            </p>
          )}

          {edu.highlights && (
            <p className="text-slate-300 mt-2">
              {edu.highlights}
            </p>
          )}
        </div>
      ))}
    </div>
  </div>
</section>

      
      {/* Experience Section */}
      <section id="experience" className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Experience</h2>
          <div className="space-y-8">
            {PORTFOLIO_DATA.experience.map((exp, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all">
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">{exp.role}</h3>
                <p className="text-xl text-slate-300 mb-2">{exp.company}</p>
                <p className="text-slate-400 mb-4">{exp.duration}</p>
                <ul className="space-y-2">
                  {exp.points.map((point, i) => (
                    <li key={i} className="text-slate-300 flex items-start">
                      <span className="text-cyan-400 mr-2">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTFOLIO_DATA.projects.map((project, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all hover:transform hover:scale-105">
                <h3 className="text-xl font-bold text-cyan-400 mb-3">{project.name}</h3>
                <p className="text-slate-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-slate-300">{tech}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && (
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
  >
    <Github size={18} />
    Code
  </a>
)}

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Certifications Section */}
      <section id="certifications" className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Certifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {PORTFOLIO_DATA.certifications.map((cert, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all">
                <h3 className="text-xl font-bold text-cyan-400 mb-2">{cert.title}</h3>
                <p className="text-slate-300 mb-1">{cert.issuer}</p>
                <p className="text-slate-400 text-sm mb-3">{cert.year}</p>
                <a href={cert.link} className="text-cyan-400 hover:text-cyan-300 text-sm flex items-center gap-1">
                  View Certificate <ExternalLink size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Volunteering Section */}
      <section id="volunteering" className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Volunteering & Activities</h2>
          <div className="space-y-6">
            {PORTFOLIO_DATA.volunteering.map((vol, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all">
                <h3 className="text-xl font-bold text-cyan-400 mb-2">{vol.role}</h3>
                <p className="text-slate-300 mb-2">{vol.organization}</p>
                <p className="text-slate-400">{vol.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section id="skills" className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Skills</h2>
          <div className="space-y-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Technical Skills</h3>
              <div className="flex flex-wrap gap-3">
                {PORTFOLIO_DATA.skills.technical.map((skill, idx) => (
                  <span key={idx} className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 rounded-full text-slate-200 hover:scale-110 transition-transform">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-3">
                {PORTFOLIO_DATA.skills.tools.map((skill, idx) => (
                  <span key={idx} className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/50 rounded-full text-slate-200 hover:scale-110 transition-transform">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-green-400 mb-4">Soft Skills</h3>
              <div className="flex flex-wrap gap-3">
                {PORTFOLIO_DATA.skills.soft.map((skill, idx) => (
                  <span key={idx} className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-teal-500/20 border border-green-500/50 rounded-full text-slate-200 hover:scale-110 transition-transform">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Get In Touch</h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="flex items-center gap-4 p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-all">
                <Mail className="text-cyan-400" size={24} />
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="text-slate-200">{PORTFOLIO_DATA.personal.email}</p>
                </div>
              </a>
              
              <a href={`tel:${PORTFOLIO_DATA.personal.phone}`} className="flex items-center gap-4 p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-all">
                <Phone className="text-cyan-400" size={24} />
                <div>
                  <p className="text-sm text-slate-400">Phone</p>
                  <p className="text-slate-200">{PORTFOLIO_DATA.personal.phone}</p>
                </div>
              </a>
              
              <a href={PORTFOLIO_DATA.personal.linkedin} className="flex items-center gap-4 p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-all">
                <Linkedin className="text-cyan-400" size={24} />
                <div>
                  <p className="text-sm text-slate-400">LinkedIn</p>
                  <p className="text-slate-200">Connect with me</p>
                </div>
              </a>
              
              <a href={PORTFOLIO_DATA.personal.github} className="flex items-center gap-4 p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-all">
                <Github className="text-cyan-400" size={24} />
                <div>
                  <p className="text-sm text-slate-400">GitHub</p>
                  <p className="text-slate-200">View my code</p>
                </div>
              </a>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-slate-700/30 rounded-xl">
              <MapPin className="text-cyan-400" size={24} />
              <div>
                <p className="text-sm text-slate-400">Location</p>
                <p className="text-slate-200">{PORTFOLIO_DATA.personal.location}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="relative py-8 px-4 border-t border-slate-700/50">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400">© 2025 {PORTFOLIO_DATA.personal.name}. All rights reserved.</p>
            <div className="flex gap-6">
              <a href={PORTFOLIO_DATA.personal.github} className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Github size={24} />
              </a>
              <a href={PORTFOLIO_DATA.personal.linkedin} className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
      
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}