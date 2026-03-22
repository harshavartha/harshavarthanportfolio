import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Linkedin, FileText } from 'lucide-react';

export const Hero = () => {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-6 lg:px-12 w-full">
      <div className="absolute inset-0 z-0 select-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-zinc-900/40 via-background to-background" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col space-y-10"
        >
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="flex items-center gap-3"
            >
              <div className="h-[1px] w-8 bg-white/30" />
              <p className="text-zinc-400 font-medium tracking-[0.2em] text-xs uppercase">
                Portfolios 26'
              </p>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter text-white leading-[1.05]">
              <span className="block">Harshavarthan</span>
              <span className="block text-zinc-500">Venkatesan.</span>
            </h1>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-lg md:text-xl text-zinc-400 max-w-lg leading-relaxed font-light"
          >
            Embedded Systems Engineer & AI Specialist. Engineering intelligent systems at the intersection of hardware, AI, and real-world impact.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-wrap items-center gap-4"
          >
            <button 
              onClick={() => handleScroll('projects')}
              className="group flex items-center justify-center gap-3 px-6 md:px-8 py-4 bg-white text-black font-medium rounded-full transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Explore Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => handleScroll('recognition')}
              className="group px-6 md:px-8 py-4 bg-transparent border border-white/20 rounded-full text-white font-medium transition-colors hover:bg-white/5"
            >
              Recognitions
            </button>
            <a 
              href="https://www.linkedin.com/in/harshavarthan-venkatesan-76737b290"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 px-6 md:px-8 py-4 bg-transparent border border-white/20 rounded-full text-white font-medium transition-all hover:bg-white/5 hover:border-white/40"
            >
              <Linkedin size={18} className="text-zinc-400 group-hover:text-[#0A66C2] transition-colors" />
              <span>LinkedIn</span>
            </a>
            <a 
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 px-6 md:px-8 py-4 bg-transparent border border-white/20 rounded-full text-white font-medium transition-all hover:bg-white/5 hover:border-white/40"
            >
              <FileText size={18} className="text-zinc-400 group-hover:text-emerald-400 transition-colors" />
              <span>Resume</span>
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative lg:h-[700px] flex items-center justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[400px] lg:max-w-none lg:w-[450px] aspect-[3/4] rounded-2xl overflow-hidden glass-card group">
            <img 
              src="/images/image-5.jpg" 
              alt="Harshavarthan - Sea Sakthi" 
              className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] contrast-125 transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
              <div>
                <p className="text-white font-medium tracking-wide">Sea Sakthi</p>
                <p className="text-sm text-zinc-400">Monaco Energy Boat Challenge</p>
              </div>
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer text-zinc-500 hover:text-white transition-colors"
        onClick={() => handleScroll('about')}
      >
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </motion.div>
    </section>
  );
};
