import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Code,
  Database,
  Server,
  Cpu,
  Terminal,
  ExternalLink,
  ChevronDown,
  Brain,
  Zap,
  Layout,
  ArrowRight,
  Sparkles,
  Layers,
  Globe,
  Send,
  Loader2,
  Instagram
} from 'lucide-react';
import { personalInfo, skills, projects } from './data';

// --- Particle Background System ---

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, radius: 150 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const handleMouseMove = (e) => {
      mouseRef.current.x = e.x;
      mouseRef.current.y = e.y;
    };

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 2 + 1;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 30) + 1;
        // Random movement vectors
        this.vx = (Math.random() - 0.5) * 1;
        this.vy = (Math.random() - 0.5) * 1;
      }

      draw() {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      update() {
        // Mouse Interaction Physics
        let dx = mouseRef.current.x - this.x;
        let dy = mouseRef.current.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let maxDistance = mouseRef.current.radius;
        let force = (maxDistance - distance) / maxDistance;
        let directionX = forceDirectionX * force * this.density;
        let directionY = forceDirectionY * force * this.density;

        if (distance < mouseRef.current.radius) {
          // Repel from mouse
          this.x -= directionX * 3;
          this.y -= directionY * 3;
        } else {
          // Natural movement
          this.x += this.vx;
          this.y += this.vy;

          // Screen wrapping
          if (this.x < 0) this.x = canvas.width;
          if (this.x > canvas.width) this.x = 0;
          if (this.y < 0) this.y = canvas.height;
          if (this.y > canvas.height) this.y = 0;
        }
      }
    }

    const initParticles = () => {
      particles = [];
      const numberOfParticles = (canvas.width * canvas.height) / 15000; // Adjust density
      for (let i = 0; i < numberOfParticles; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        particles.push(new Particle(x, y));
      }
    };

    const connect = () => {
      let opacityValue = 1;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          let dx = particles[a].x - particles[b].x;
          let dy = particles[a].y - particles[b].y;
          let distance = dx * dx + dy * dy;

          if (distance < (canvas.width / 7) * (canvas.height / 7)) {
            opacityValue = 1 - (distance / 10000);
            ctx.strokeStyle = 'rgba(100, 255, 255,' + opacityValue * 0.15 + ')'; // Cyan tint connections
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].draw();
        particles[i].update();
      }
      connect();
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    handleResize();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'radial-gradient(circle at center, #0f172a 0%, #020617 100%)' }}
    />
  );
};

// --- UI Components ---

const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`py-24 px-6 md:px-12 lg:px-24 relative z-10 ${className}`}>
    {children}
  </section>
);

const SectionTitle = ({ children }) => (
  <div className="relative mb-16 inline-block group">
    <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 z-10 relative">
      {children}
    </h2>
    <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-cyan-500/50 group-hover:w-full transition-all duration-500 rounded-full"></div>
  </div>
);

const Card = ({ children, className = "" }) => (
  <div className={`bg-gray-900/40 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(6,182,212,0.1)] hover:-translate-y-1 group ${className}`}>
    {children}
  </div>
);

const ProjectCard = ({ project }) => (
  <div className="group relative rounded-2xl overflow-hidden bg-gray-900/50 border border-white/5 hover:border-cyan-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-900/20">
    {/* Decorative Gradient Orb */}
    <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-colors duration-700"></div>

    <div className="p-8 relative z-10 h-full flex flex-col">
      <div className="flex justify-between items-start mb-6">
        <div className="p-3 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-white/10 group-hover:border-cyan-500/30 transition-colors shadow-lg">
          <project.icon size={28} className="text-cyan-400 group-hover:text-purple-400 transition-colors duration-300" />
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-all transform hover:rotate-45"
          aria-label={`View ${project.title}`}
        >
          <ExternalLink size={20} />
        </a>
      </div>

      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">{project.title}</h3>

      <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
        {project.desc}
      </p>

      <div className="pt-6 border-t border-white/5">
        <div className="flex flex-wrap gap-2">
          {project.tech.split(', ').map((t, i) => (
            <span key={i} className="text-xs font-medium px-3 py-1 rounded-full bg-cyan-900/20 text-cyan-200 border border-cyan-500/20">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const SkillPill = ({ icon: Icon, name }) => (
  <div className="flex items-center gap-2 bg-white/5 px-5 py-3 rounded-xl border border-white/5 hover:border-cyan-500/50 hover:bg-cyan-900/10 hover:text-cyan-300 transition-all duration-300 cursor-default">
    <Icon size={18} className="text-gray-400 group-hover:text-cyan-400" />
    <span className="text-sm font-medium text-gray-300">{name}</span>
  </div>
);

const SocialButton = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-4 bg-white/5 rounded-full hover:bg-cyan-600 hover:text-white text-gray-400 border border-white/5 hover:border-cyan-400 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(8,145,178,0.4)]"
    aria-label={label}
  >
    <Icon size={24} />
  </a>
);

// --- Main Component ---

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Contact Form State
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  // Hero Tilt Logic
  const heroRef = useRef(null);
  const [heroTilt, setHeroTilt] = useState({ x: 0, y: 0 });

  const handleHeroMove = (e) => {
    if (!heroRef.current) return;

    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate percentage (-1 to 1)
    const xPct = (x / rect.width - 0.5) * 2;
    const yPct = (y / rect.height - 0.5) * 2;

    // Max tilt angle of 20 degrees
    setHeroTilt({ x: -yPct * 20, y: xPct * 20 });
  };

  const handleHeroLeave = () => {
    setHeroTilt({ x: 0, y: 0 });
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      alert("Please configure EmailJS keys in .env to send emails.");
      setIsSubmitting(false);
      return;
    }

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        setSubmitStatus('success');
        setIsSubmitting(false);
        e.target.reset();
      }, (error) => {
        console.error(error.text);
        setSubmitStatus('error');
        setIsSubmitting(false);
      });
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-100 overflow-x-hidden relative">

      {/* Animation Styles */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse-slow {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes orbital {
          0% { transform: rotate(0deg) translateX(140px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(140px) rotate(-360deg); }
        }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-spin-reverse-slow { animation: spin-reverse-slow 25s linear infinite; }
        .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-orbital { animation: orbital 15s linear infinite; }
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
      `}</style>

      {/* Interactive Physics Background */}
      <ParticleBackground />

      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#020617]/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-4xl font-extrabold tracking-tight cursor-pointer group" onClick={() => scrollToSection('home')}>
            <span className="text-cyan-400 group-hover:text-white transition-colors">Vikas</span>
            <span className="text-white group-hover:text-cyan-400 transition-colors ml-2">HL</span>
          </div>

          <div className="hidden md:flex gap-1 p-1 bg-white/5 rounded-full border border-white/5 backdrop-blur-md">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeSection === item.toLowerCase() ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-900/50' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Section id="home" className="min-h-screen flex flex-col justify-center pt-20 overflow-hidden">
        <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Column: Text Content */}
          <div className="order-2 lg:order-1 space-y-8 relative z-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Open to Work
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
              Turning Logic into <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">Digital Reality.</span>
            </h1>

            <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
              {personalInfo.tagline} A problem solver dedicated to building efficient, scalable, and intelligent software systems.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 rounded-full bg-cyan-600 text-white font-semibold hover:bg-cyan-500 transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] flex items-center gap-2"
              >
                Explore Work <ArrowRight size={18} />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 hover:border-cyan-500/50 transition-all"
              >
                Contact Me
              </button>
            </div>

            <div className="flex items-center gap-6 pt-8 border-t border-white/5">
              <SocialButton href={personalInfo.github} icon={Github} label="GitHub" />
              <SocialButton href={personalInfo.linkedin} icon={Linkedin} label="LinkedIn" />
              <button
                onClick={() => scrollToSection('contact')}
                className="p-4 bg-white/5 rounded-full hover:bg-cyan-600 hover:text-white text-gray-400 border border-white/5 hover:border-cyan-400 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(8,145,178,0.4)]"
                aria-label="Contact Section"
              >
                <Mail size={24} />
              </button>
              <SocialButton href={personalInfo.instagram} icon={Instagram} label="Instagram" />
            </div>
          </div>

          {/* Right Column: 3D Interactive Gyroscope */}
          <div
            className="order-1 lg:order-2 flex justify-center items-center relative h-[500px] perspective-1000"
            onMouseMove={handleHeroMove}
            onMouseLeave={handleHeroLeave}
            ref={heroRef}
          >
            {/* 3D Container with Tilt */}
            <div
              className="relative w-96 h-96 preserve-3d transition-transform duration-200 ease-out"
              style={{
                transform: `rotateX(${heroTilt.x}deg) rotateY(${heroTilt.y}deg)`
              }}
            >
              {/* Core Glow Background */}
              <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse-glow"></div>

              {/* Ring 1: Large Dashed Outer - Reverse Spin */}
              <div className="absolute inset-0 rounded-full border-[1px] border-cyan-500/30 border-dashed animate-spin-reverse-slow shadow-[0_0_30px_rgba(6,182,212,0.1)]"></div>

              {/* Ring 2: Solid Middle - Forward Spin */}
              <div className="absolute inset-8 rounded-full border-[2px] border-blue-500/20 border-t-cyan-400 border-b-purple-500 animate-spin-slow"></div>

              {/* Ring 3: Inner Dashed - Fast Reverse */}
              <div className="absolute inset-16 rounded-full border-[1px] border-purple-500/30 border-dashed animate-spin-reverse-slow" style={{ animationDuration: '15s' }}></div>

              {/* Orbital Satellite: Brain Icon */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4">
                  <div className="bg-gray-900/90 p-3 rounded-xl border border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.4)] backdrop-blur-sm transform hover:scale-110 transition-transform">
                    <Brain className="text-cyan-400" size={24} />
                  </div>
                </div>
              </div>

              {/* Orbital Satellite: Code Icon - Offset Orbit */}
              <div className="absolute inset-0 animate-spin-reverse-slow" style={{ animationDuration: '18s' }}>
                <div className="absolute bottom-10 -right-2">
                  <div className="bg-gray-900/90 p-3 rounded-xl border border-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.4)] backdrop-blur-sm transform hover:scale-110 transition-transform">
                    <Code className="text-purple-400" size={24} />
                  </div>
                </div>
              </div>

              {/* Orbital Satellite: Database Icon */}
              <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: '25s' }}>
                <div className="absolute bottom-10 -left-2">
                  <div className="bg-gray-900/90 p-3 rounded-xl border border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.4)] backdrop-blur-sm transform hover:scale-110 transition-transform">
                    <Database className="text-blue-400" size={24} />
                  </div>
                </div>
              </div>

              {/* Central Core Container */}
              <div className="absolute inset-0 flex items-center justify-center transform-style-3d translate-z-20">
                <div className="relative w-40 h-40 rounded-full bg-gray-900 flex items-center justify-center shadow-[0_0_60px_rgba(6,182,212,0.3)] border border-cyan-500/30 z-20 animate-float">
                  {/* Inner Gradient Circle */}
                  <div className="absolute inset-2 rounded-full bg-gradient-to-br from-cyan-900/50 to-purple-900/50 animate-pulse-glow"></div>

                  {/* Logo Text */}
                  <div className="relative z-30 text-center">
                    <span className="block text-4xl font-black text-white tracking-wider drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">VHL</span>
                    <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-1 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-cyan-500/50">
          <ChevronDown size={32} />
        </div>
      </Section>

      {/* About Me */}
      <Section id="about" className="bg-black/20 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto">
          <SectionTitle>About Me</SectionTitle>
          <div className="bg-gray-900/40 border border-white/5 rounded-3xl p-8 md:p-12 backdrop-blur-md hover:border-cyan-500/20 transition-all">
            <div className="space-y-6 text-lg text-gray-300 leading-loose">
              <p>
                Hello! I'm <span className="text-cyan-400 font-semibold">{personalInfo.name}</span>, a curious and driven student at Dayananda Sagar College of Engineering (Class of 2027). With a consistent academic record (CGPA: 9.13), I bridge the gap between theoretical concepts and functional software.
              </p>
              <p>
                My journey revolves around <span className="text-white font-medium">Artificial Intelligence</span> and <span className="text-white font-medium">Data Structures</span>. I don't just write code; I solve puzzles—evidenced by solving over <span className="text-cyan-400 font-bold">200+ problems on LeetCode</span>.
              </p>
              <p>
                Currently, I'm exploring the frontiers of Vision Language Models and Deep Learning, aiming to create applications that can "see" and "understand" the world. When I'm not debugging neural networks, I'm optimizing backend APIs for speed and reliability.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills">
        <div className="max-w-6xl mx-auto">
          <SectionTitle>Tech Stack</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <Card key={index} className="h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400 border border-cyan-500/20">
                    <skillGroup.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((item, i) => (
                    <SkillPill key={i} icon={item.icon} name={item.name} />
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" className="bg-black/20">
        <div className="max-w-6xl mx-auto">
          <SectionTitle>Innovations</SectionTitle>
          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" className="pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block p-4 rounded-full bg-cyan-900/20 mb-6 animate-pulse">
              <Mail className="text-cyan-400 w-8 h-8" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Build Together</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              I am currently open to internships and collaboration opportunities. Feel free to reach out!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gray-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl h-full flex flex-col justify-center">
                <div className="space-y-8">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Phone</label>
                    <div className="flex items-center gap-4 text-xl text-white font-medium hover:text-cyan-400 transition-colors cursor-pointer group">
                      <div className="p-3 bg-white/5 rounded-full group-hover:bg-cyan-500/20 transition-colors">
                        <Phone size={24} className="text-cyan-500" />
                      </div>
                      {personalInfo.phone}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Email</label>
                    <div className="flex items-center gap-4 text-xl text-white font-medium hover:text-cyan-400 transition-colors cursor-pointer break-all group">
                      <div className="p-3 bg-white/5 rounded-full group-hover:bg-cyan-500/20 transition-colors">
                        <Mail size={24} className="text-cyan-500" />
                      </div>
                      {personalInfo.email}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Socials</label>
                    <div className="flex gap-4 pt-2">
                      <SocialButton href={personalInfo.github} icon={Github} label="GitHub" />
                      <SocialButton href={personalInfo.linkedin} icon={Linkedin} label="LinkedIn" />
                      <SocialButton href={personalInfo.instagram} icon={Instagram} label="Instagram" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    name="reply_to"
                    required
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                    placeholder="Your Mail ID"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
                    placeholder="Feel free to drop your message…"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold py-4 rounded-xl hover:from-cyan-500 hover:to-blue-500 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-cyan-900/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 text-center text-sm">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-center text-sm">
                    Failed to send message. Please try again later or email me directly.
                  </div>
                )}
              </form>
            </div>
          </div>

          <footer className="mt-20 text-gray-600 text-sm font-medium text-center">
            <p>© {new Date().getFullYear()} Vikas HL. Engineered with React & Tailwind.</p>
          </footer>
        </div>
      </Section>

    </div>
  );
}