import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, ChevronRight, Activity, CheckCircle2, Award, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

const allProjects = [
  {
    title: 'Monaco Energy Boat Challenge (YALI 4.0)',
    category: 'Featured Project',
    subtitle: 'International Engineering Representation | Team Sea Sakthi',
    cardDescription: 'Represented India at the 12th Monaco Energy Boat Challenge, leading critical embedded systems and telemetry under race conditions.',
    highlights: ['Top 8 Globally', 'Embedded Systems', 'Telemetry'],
    image: '/images/image-8.jpg',
    details: {
      description: [
        "Represented India as part of Team Sea Sakthi at the 12th Monaco Energy Boat Challenge, competing against top global universities in sustainable marine engineering.",
        "Led critical embedded systems development and system-level integration, ensuring reliable real-time performance under demanding race conditions. Contributed to sensor integration, telemetry systems, and data-driven decision-making.",
        "This project reflects the ability to engineer solutions at an international standard while working in a high-pressure, competitive environment."
      ],
      techStack: ["Embedded Systems", "Microcontrollers", "Sensors", "Telemetry", "Data Acquisition"],
      features: [
        "Real-time sensor data acquisition and processing",
        "Robust embedded system architecture for marine conditions",
        "System integration across hardware and control units",
        "Performance monitoring and telemetry communication"
      ],
      achievements: [
        "Secured Top 8 position globally",
        "Winner of Communication & Spirit Prize",
        "Represented India on an international engineering platform"
      ]
    }
  },
  {
    title: 'Autonomous River Cleaning Bot',
    category: 'Autonomous Robotics',
    subtitle: 'Sustainable Robotics Solution for Environmental Impact',
    cardDescription: 'Developed an autonomous robotic system using ArduPilot to detect and collect floating waste in water bodies.',
    highlights: ['ArduPilot', 'Computer Vision', 'Embedded C'],
    image: '/images/image-11.jpg',
    details: {
      description: [
        "Developed an autonomous robotic system designed to detect and collect floating waste in water bodies, aiming to address environmental pollution through automation.",
        "Focused on embedded system design and control mechanisms, integrating hardware and software components to enable efficient navigation and operation in real-world conditions."
      ],
      techStack: ["Arduino", "Pixhawk", "Embedded C", "Sensors", "Control Systems"],
      features: [
        "Autonomous navigation using ArduPilot",
        "Real-time obstacle handling and path control",
        "Efficient waste collection mechanism",
        "Integrated control system with sensor feedback"
      ],
      impact: [
        "Promotes sustainable environmental solutions",
        "Demonstrates real-world application of robotics"
      ]
    }
  },
  {
    title: 'AI-Powered Agri Market Dashboard',
    category: 'AI Product',
    subtitle: 'Predictive Analytics for Smart Agricultural Decision-Making',
    cardDescription: 'Full-stack AI dashboard using Neural Prophet to analyze crop price trends and forecast future market prices.',
    highlights: ['Neural Prophet', 'Flask', 'React'],
    link: 'https://agri-market-visualisation.vercel.app/',
    image: '/images/image-10.jpg',
    details: {
      description: [
        "Developed a full-stack AI-powered dashboard to analyze crop price trends and forecast future market prices, enabling data-driven agricultural planning.",
        "Implemented Neural Prophet model to generate accurate time-series forecasts and evaluated performance using RMSE, MAE, and loss metrics.",
        "Designed an interactive dashboard interface for visualizing trends, predictions, and analytics in a user-friendly manner."
      ],
      techStack: ["Python", "Neural Prophet", "Flask", "HTML", "CSS", "JavaScript", "SQLite"],
      features: [
        "Time-series forecasting using AI models",
        "Interactive data visualization dashboards",
        "Performance metrics evaluation (RMSE, MAE)",
        "Full-stack architecture with backend integration"
      ],
      impact: [
        "Helps farmers and stakeholders make informed decisions",
        "Demonstrates practical application of AI in real-world problems"
      ]
    }
  },
  {
    title: 'Team Sea Sakthi Official Website',
    category: 'Web Platform',
    subtitle: 'Modern Web Platform for Team Representation',
    cardDescription: 'Designed and developed the official website for Team Sea Sakthi, with modern UI/UX and smooth GSAP animations.',
    highlights: ['GSAP', 'UI/UX Design', 'Frontend'],
    image: '/images/image-13.jpg',
    details: {
      description: [
        "Designed and developed the official website for Team Sea Sakthi, showcasing projects, achievements, and team activities.",
        "Implemented modern UI/UX principles and integrated smooth animations to create an engaging digital presence.",
        "Handled end-to-end development including design, frontend implementation, and deployment."
      ],
      techStack: ["HTML", "CSS", "JavaScript", "GSAP"],
      features: [
        "Responsive and modern UI design",
        "Smooth animations and transitions",
        "Structured project and team showcase",
        "Deployed and publicly accessible"
      ],
      role: [
        "Independently handled design and development"
      ]
    }
  },
  {
    title: 'FPV + AR Visualization System',
    category: 'Immersive Interface',
    subtitle: 'Real-time Telemetry & Drone Control',
    cardDescription: 'Developed an augmented reality overlay integrated with First-Person View video streams for immersive spatial awareness.',
    highlights: ['AR', 'C++', 'WebSockets'],
    image: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=80&w=1400',
    details: {
      description: [
        "Developed an augmented reality (AR) overlay integrated with First-Person View (FPV) video streams to display digital telemetry directly on the pilot's HUD.",
        "Remote vehicle operators often lack spatial awareness and critical real-time telemetry, resulting in poor maneuvering in complex environments.",
        "Built to enhance remote vehicle operators' spatial awareness and provide critical real-time data in complex environments without obstructing the view."
      ],
      techStack: ["C++", "WebSockets", "AR Overlay", "Low-latency Video Streaming"],
      features: [
        "Ultra-low latency video decoding",
        "Dynamic HUD elements that react to vehicle state",
        "Modular architecture adaptable to multiple vehicle types"
      ],
      impact: [
        "Enhanced operator situational awareness",
        "Visual blending of hardware data (battery, speed, altitude) into live video"
      ],
      role: [
        "Software Interface Engineer — Wrote the video streaming backend and overlay logic"
      ]
    }
  }
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof allProjects[0] | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-32 px-6 bg-[#030508] relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white">Selected Works</h2>
          <p className="text-zinc-400 text-lg md:text-xl font-light max-w-2xl">
            A showcase of my recent high-impact engineering projects. Click any project for a detailed case study.
          </p>
        </motion.div>

        <div className="relative flex flex-col pt-10" style={{ paddingBottom: '20vh' }}>
          {allProjects.map((project, idx) => {
            return (
              <div
                key={project.title}
                className="sticky w-full cursor-pointer group"
                style={{ 
                  top: `calc(12vh + ${idx * 25}px)`, 
                  marginBottom: '10vh',
                  zIndex: idx
                }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="will-change-transform origin-top">
                  <motion.article
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0a0c10] shadow-[0_-12px_40px_rgba(0,0,0,0.6)] transition-all group-hover:border-white/20 group-hover:shadow-[0_0_50px_rgba(255,255,255,0.05)]"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[480px]">
                      <div className="p-8 md:p-12 lg:col-span-6 flex flex-col justify-center relative z-10">
                        <div className="flex items-center justify-between mb-4">
                          <p className="text-xs font-semibold tracking-[0.2em] text-sky-300/90 uppercase">{project.category}</p>
                          <motion.div 
                            className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:bg-white/20 group-hover:border-white/40 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] scale-100 group-hover:scale-110 shadow-[0_0_10px_rgba(255,255,255,0.05)]"
                          >
                            <ChevronRight className="text-white w-6 h-6 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                          </motion.div>
                        </div>
                        <h3 className="text-3xl md:text-[2.5rem] font-bold tracking-tight text-white leading-[1.1]">{project.title}</h3>
                        <p className="mt-4 text-zinc-300 text-sm md:text-base font-medium">{project.subtitle}</p>
                        <p className="mt-6 text-zinc-400 leading-relaxed text-sm md:text-base">{project.cardDescription}</p>

                        <div className="mt-8 flex flex-wrap gap-2">
                          {project.highlights.map((item) => (
                            <span key={item} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs text-zinc-300">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="relative lg:col-span-6 overflow-hidden bg-black w-full min-h-[300px] lg:min-h-full">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="absolute inset-0 h-full w-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-1000 ease-out"
                          onError={(event) => {
                            event.currentTarget.src = '/images/image-6.jpg';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-[#0a0c10] via-black/20 to-transparent" />
                      </div>
                    </div>
                  </motion.article>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Deep-Dive Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(12px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            className="fixed inset-0 z-[100000] flex items-center justify-center p-4 md:p-8 bg-black/80 overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-5xl bg-[#0a0c10] border border-white/10 rounded-3xl overflow-hidden shadow-2xl my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-6 right-6 z-[1000] p-2.5 rounded-full bg-black/40 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 backdrop-blur-md transition-all cursor-pointer"
                onClick={() => setSelectedProject(null)}
              >
                <X size={24} />
              </button>

              <div className="flex flex-col lg:flex-row max-h-[85vh] overflow-y-auto custom-scrollbar relative">
                
                {/* Left Side: Hero Image Area */}
                <div className="lg:w-2/5 relative min-h-[300px] lg:min-h-full">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(event) => {
                      event.currentTarget.src = '/images/image-6.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0a0c10] lg:from-[#0a0c10] via-[#0a0c10]/80 to-transparent" />
                </div>

                {/* Right Side: Deep Dive Content */}
                <div className="lg:w-3/5 p-8 md:p-12 flex flex-col gap-10 z-10 -mt-20 lg:mt-0 relative">
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <p className="text-xs font-semibold tracking-[0.2em] text-sky-400/90 uppercase">{selectedProject.category}</p>
                    <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">{selectedProject.title}</h2>
                    <p className="mt-4 text-lg font-light text-zinc-400">{selectedProject.subtitle}</p>
                  </motion.div>

                  {/* Project Summary */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-4 text-zinc-300 text-sm md:text-base leading-relaxed"
                  >
                    {selectedProject.details.description.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </motion.div>

                  {/* Features & Role/Impact Grid */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                  >
                    {/* Key Features */}
                    <div>
                      <h4 className="text-white font-medium mb-4 text-sm uppercase tracking-widest text-zinc-500 border-b border-white/10 pb-2 flex items-center gap-2">
                        <Zap size={14} className="text-emerald-400" /> Key Features
                      </h4>
                      <ul className="space-y-3">
                        {selectedProject.details.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-zinc-400">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400/50 shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Conditional rendering for Achievements / Role / Impact */}
                    <div className="space-y-8">
                      {selectedProject.details.achievements && (
                        <div>
                          <h4 className="text-white font-medium mb-4 text-sm uppercase tracking-widest text-zinc-500 border-b border-white/10 pb-2 flex items-center gap-2">
                            <Award size={14} className="text-amber-400" /> Achievements
                          </h4>
                          <ul className="space-y-3">
                            {selectedProject.details.achievements.map((ach, i) => (
                              <li key={i} className="flex items-start gap-3 text-sm text-amber-200/80">
                                <CheckCircle2 size={14} className="mt-0.5 text-amber-400 shrink-0" />
                                {ach}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {selectedProject.details.impact && (
                        <div>
                          <h4 className="text-white font-medium mb-4 text-sm uppercase tracking-widest text-zinc-500 border-b border-white/10 pb-2 flex items-center gap-2">
                            <Activity size={14} className="text-sky-400" /> Impact
                          </h4>
                          <ul className="space-y-3">
                            {selectedProject.details.impact.map((imp, i) => (
                              <li key={i} className="flex items-start gap-3 text-sm text-sky-200/80">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sky-400/50 shrink-0" />
                                {imp}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {selectedProject.details.role && (
                        <div>
                          <h4 className="text-white font-medium mb-4 text-sm uppercase tracking-widest text-zinc-500 border-b border-white/10 pb-2 flex items-center gap-2">
                            <CheckCircle2 size={14} className="text-rose-400" /> Role
                          </h4>
                          <ul className="space-y-3">
                            {selectedProject.details.role.map((role, i) => (
                              <li key={i} className="flex items-start gap-3 text-sm text-rose-200/80">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-rose-400/50 shrink-0" />
                                {role}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </motion.div>

                  {/* Tech Stack */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h4 className="text-white font-medium mb-4 text-sm uppercase tracking-widest text-zinc-500 border-b border-white/10 pb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.details.techStack.map((tech) => (
                        <span key={tech} className="px-3 md:px-4 py-1.5 md:py-2 border border-white/10 bg-white/[0.02] rounded-xl text-xs md:text-sm text-zinc-300 font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Action Button */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 }}
                    className="pt-4"
                  >
                    {selectedProject.link ? (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-white hover:bg-zinc-200 px-6 py-3 text-sm font-medium text-black transition-all"
                      >
                        Visit Live Project <ArrowUpRight size={16} />
                      </a>
                    ) : (
                      <button 
                        onClick={() => setSelectedProject(null)}
                        className="inline-flex items-center gap-2 rounded-full border border-white/20 hover:bg-white/10 px-6 py-3 text-sm font-medium text-white transition-all cursor-pointer"
                      >
                        Close Case Study
                      </button>
                    )}
                  </motion.div>

                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
