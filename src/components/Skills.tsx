import { motion } from 'framer-motion';
import { Cpu, BrainCircuit, Cloud, BarChart3, TrendingUp, Globe, MessageSquare, Mic } from 'lucide-react';

const skills = [
  { 
    group: "Embedded Systems", 
    icon: <Cpu className="w-6 h-6 text-emerald-400" />,
    color: "text-emerald-400",
    gradient: "group-hover:from-emerald-500/10 group-hover:to-transparent",
    border: "group-hover:border-emerald-500/30",
    description: "Hardware-level programming and system architecture for reliable edge execution.",
    items: ["C/C++", "Microcontrollers", "RTOS", "CAN Bus", "IoT Protocols", "PCB Design"] 
  },
  { 
    group: "AI & Data Science", 
    icon: <BrainCircuit className="w-6 h-6 text-violet-400" />,
    color: "text-violet-400",
    gradient: "group-hover:from-violet-500/10 group-hover:to-transparent",
    border: "group-hover:border-violet-500/30",
    description: "Building intelligent models and deploying ML architectures for real-world automation.",
    items: ["Python", "TensorFlow", "Computer Vision", "Machine Learning", "Edge AI", "Data Architecture"] 
  },
  { 
    group: "Cloud & Interface", 
    icon: <Cloud className="w-6 h-6 text-sky-400" />,
    color: "text-sky-400",
    gradient: "group-hover:from-sky-500/10 group-hover:to-transparent",
    border: "group-hover:border-sky-500/30",
    description: "Connecting edge devices to scalable backends and creating immersive user interfaces.",
    items: ["AWS", "React", "Node.js", "ROS", "WebSockets", "Docker"] 
  },
  { 
    group: "Data Visualization", 
    icon: <BarChart3 className="w-6 h-6 text-amber-400" />,
    color: "text-amber-400",
    gradient: "group-hover:from-amber-500/10 group-hover:to-transparent",
    border: "group-hover:border-amber-500/30",
    description: "Transforming complex data into clear, interactive visual insights for better decision-making.",
    items: ["Dashboards", "Data Charts", "Visual Analytics", "Data Storytelling"] 
  },
  { 
    group: "Business Intelligence", 
    icon: <TrendingUp className="w-6 h-6 text-indigo-400" />,
    color: "text-indigo-400",
    gradient: "group-hover:from-indigo-500/10 group-hover:to-transparent",
    border: "group-hover:border-indigo-500/30",
    description: "Leveraging data-driven strategies and analytics tools to extract meaningful business insights.",
    items: ["BI Tools", "Data Analytics", "Reporting", "Decision Systems"] 
  }
];

const languageGroups = [
  {
    group: "Primary",
    icon: <Globe className="w-6 h-6 text-rose-400" />,
    color: "text-rose-400",
    gradient: "group-hover:from-rose-500/10 group-hover:to-transparent",
    border: "group-hover:border-rose-500/30",
    description: "Core proficiencies for daily and professional communication.",
    items: [
      "Tamil — Native",
      "English — Fluent"
    ]
  },
  {
    group: "Secondary",
    icon: <MessageSquare className="w-6 h-6 text-teal-400" />,
    color: "text-teal-400",
    gradient: "group-hover:from-teal-500/10 group-hover:to-transparent",
    border: "group-hover:border-teal-500/30",
    description: "Additional languages supporting broader operational execution.",
    items: [
      "Hindi — Professional Proficiency",
      "German — A2 Level"
    ]
  },
  {
    group: "Conversational",
    icon: <Mic className="w-6 h-6 text-fuchsia-400" />,
    color: "text-fuchsia-400",
    gradient: "group-hover:from-fuchsia-500/10 group-hover:to-transparent",
    border: "group-hover:border-fuchsia-500/30",
    description: "Limited working and casual communicative proficiencies.",
    items: [
      "Malayalam — Conversational",
      "Kannada — Limited Working"
    ]
  }
];

export const Skills = () => {
  return (
    <>
      <section className="py-32 px-6 bg-[#030508] relative overflow-hidden">
        {/* Background ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center md:text-left"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">Technical Capabilities</h2>
            <p className="text-zinc-400 text-lg font-light">The core stack driving my engineering and research.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {skills.map((category, idx) => (
              <motion.div 
                key={category.group}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className={`group relative overflow-hidden rounded-3xl border border-white/5 bg-[#0a0c10] p-8 transition-all duration-500 hover:-translate-y-2 ${category.border} shadow-lg hover:shadow-2xl hover:shadow-black/50`}
              >
                {/* Dynamic Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-b opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${category.gradient}`} />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 ring-1 ring-white/10 group-hover:ring-white/20 transition-all duration-500">
                      {category.icon}
                    </div>
                    <span className={`text-[11px] uppercase tracking-[0.2em] font-mono ${category.color} opacity-60 font-semibold`}>
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">
                    {category.group}
                  </h3>
                  
                  <p className="text-sm text-zinc-400 leading-relaxed mb-8 min-h-[48px]">
                    {category.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2.5">
                    {category.items.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3.5 py-1.5 border border-white/5 bg-white/[0.02] rounded-xl text-sm text-zinc-300 font-medium hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#030508] relative overflow-hidden">
        {/* Background ambient glow separator */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center md:text-left"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">Languages & Communication</h2>
            <p className="text-zinc-400 text-lg font-light">Communicating effectively across cultures and environments.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {languageGroups.map((category, idx) => (
              <motion.div 
                key={category.group}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className={`group relative overflow-hidden rounded-3xl border border-white/5 bg-[#0a0c10] p-8 transition-all duration-500 hover:-translate-y-2 ${category.border} shadow-lg hover:shadow-2xl hover:shadow-black/50`}
              >
                {/* Dynamic Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-b opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${category.gradient}`} />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 ring-1 ring-white/10 group-hover:ring-white/20 transition-all duration-500">
                        {category.icon}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3">
                      {category.group}
                    </h3>
                    
                    <p className="text-sm text-zinc-400 leading-relaxed mb-8">
                      {category.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-col gap-3 mt-auto">
                    {category.items.map((item) => (
                      <span 
                        key={item}
                        className="px-4 py-2.5 border border-white/5 bg-white/[0.02] rounded-xl text-sm text-zinc-300 font-medium hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300 cursor-default flex items-center justify-center text-center"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
