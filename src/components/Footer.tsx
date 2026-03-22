import { motion } from 'framer-motion';
import { Github, Linkedin, FileText } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <p className="text-zinc-400 text-sm">Open to new engineering challenges.</p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/harshavartha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors hover:scale-110 duration-300"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/harshavarthan-venkatesan-76737b290"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-[#0A66C2] transition-colors hover:scale-110 duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-zinc-400 hover:text-emerald-400 transition-colors group"
          >
            <FileText size={20} className="group-hover:scale-110 duration-300" />
            <span className="text-sm font-medium">Resume</span>
          </a>
        </div>

        <motion.div 
          className="flex flex-col md:items-end items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Portfolio</span>
          <p className="text-zinc-300 font-light text-sm">
            &copy; {new Date().getFullYear()} Harshavarthan Venkatesan
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
